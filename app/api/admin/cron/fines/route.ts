import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// POST /api/admin/cron/fines - daily job to set/refresh overdue fines and reasons
export async function POST() {
  try {
    const now = new Date();
    const msPerDay = 24 * 60 * 60 * 1000;

    // Find all borrowings that are overdue and not yet returned
    const overdue = await prisma.borrowing.findMany({
      where: { returnDate: null, dueDate: { lt: now } },
      include: { item: true },
    });

    for (const b of overdue) {
      const daysLate = Math.ceil((now.getTime() - b.dueDate.getTime()) / msPerDay);
      const rule = await prisma.borrowingRule.findFirst({ where: { itemType: b.item.itemType } });
      const finePerDay = rule?.finePerDay ?? 1; // default $1/day if no rule
      const amount = daysLate * finePerDay;
      const reason = `Overdue ${daysLate} day(s)`;

      const existing = await prisma.fine.findUnique({ where: { borrowingId: b.id } });
      if (existing) {
        // Update to the exact current overdue amount & reason daily (idempotent for that day)
        await prisma.fine.update({
          where: { id: existing.id },
          data: { amount, reason, status: "UNPAID", paidDate: null },
        });
      } else {
        await prisma.fine.create({
          data: {
            amount,
            reason,
            status: "UNPAID",
            userId: b.userId,
            borrowingId: b.id,
          },
        });
      }
    }

    return NextResponse.json({ ok: true, processed: overdue.length });
  } catch (e) {
    console.error("POST /api/admin/cron/fines error", e);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
