import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";

// POST /api/admin/borrowings/[id]/return - mark as returned and compute overdue fine
export async function POST(
  _req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || (session.user as any)?.role !== "ADMINISTRATOR") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const id = Number(params.id);
    if (Number.isNaN(id)) {
      return NextResponse.json({ error: "Invalid id" }, { status: 400 });
    }

    const now = new Date();

    const result = await prisma.$transaction(async (tx) => {
      const borrowing = await tx.borrowing.findUnique({
        where: { id },
        include: { item: true },
      });
      if (!borrowing) throw new Error("Borrowing not found");
      if (borrowing.returnDate) throw new Error("Already returned");

      // Compute overdue fine if any
      let fineAmount = 0;
      let fineId: number | null = null;
      if (borrowing.dueDate < now) {
        const msPerDay = 24 * 60 * 60 * 1000;
        const daysLate = Math.ceil((now.getTime() - borrowing.dueDate.getTime()) / msPerDay);
        const rule = await tx.borrowingRule.findFirst({ where: { itemType: borrowing.item.itemType } });
        const finePerDay = rule?.finePerDay ?? 1; // default $1/day if no rule
        fineAmount = daysLate * finePerDay;

        if (fineAmount > 0) {
          const existing = await tx.fine.findUnique({ where: { borrowingId: borrowing.id } });
          const reason = `Overdue ${daysLate} day(s)`;
          if (existing) {
            const updated = await tx.fine.update({
              where: { id: existing.id },
              data: {
                amount: fineAmount,
                reason,
                status: "UNPAID",
                paidDate: null,
              },
            });
            fineId = updated.id;
          } else {
            const created = await tx.fine.create({
              data: {
                amount: fineAmount,
                reason,
                status: "UNPAID",
                userId: borrowing.userId,
                borrowingId: borrowing.id,
              },
            });
            fineId = created.id;
          }
        }
      }

      // Mark returned and release item
      await tx.libraryItem.update({ where: { id: borrowing.itemId }, data: { status: "AVAILABLE" } });
      const updated = await tx.borrowing.update({ where: { id }, data: { returnDate: now } });

      return { borrowingId: updated.id, returnDate: updated.returnDate, fineId, fineAmount };
    });

    return NextResponse.json(result);
  } catch (e: any) {
    console.error("POST /api/admin/borrowings/[id]/return error", e);
    const msg = e?.message || "Failed";
    return NextResponse.json({ error: msg }, { status: 400 });
  }
}
