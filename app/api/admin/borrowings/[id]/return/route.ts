import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";

// POST /api/admin/borrowings/[id]/return
export async function POST(
  _req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user?.role !== "ADMINISTRATOR") {
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
        include: { item: true, user: true },
      });
      if (!borrowing) throw new Error("Borrowing not found");
      if (borrowing.returnDate) throw new Error("Already returned");

      // Mark as returned
      await tx.borrowing.update({
        where: { id },
        data: { returnDate: now },
      });

      let fineAmount = 0;

      // Compute overdue fine
      if (borrowing.dueDate < now) {
        const msPerDay = 24 * 60 * 60 * 1000;
        const daysLate = Math.ceil(
          (now.getTime() - borrowing.dueDate.getTime()) / msPerDay,
        );

        const rule = await tx.borrowingRule.findFirst({
          where: { itemType: borrowing.item.itemType },
        });

        const finePerDay = rule?.finePerDay ?? 0;
        fineAmount = daysLate * finePerDay;

        if (fineAmount > 0) {
          await tx.fine.create({
            data: {
              amount: fineAmount,
              waivedAmount: fineAmount, // fully waived
              reason: `Overdue ${daysLate} day(s) (waived)`,
              status: "WAIVED", // mark as waived immediately
              userId: borrowing.userId,
              borrowingId: borrowing.id,
            },
          });
        }
      }

      // Release item back into pool
      await tx.libraryItem.update({
        where: { id: borrowing.itemId },
        data: { status: "AVAILABLE" },
      });

      return { fineAmount, waived: fineAmount > 0 };
    });

    return NextResponse.json(result, { status: 200 });
  } catch (e: any) {
    console.error("POST /api/admin/borrowings/[id]/return error", e);
    return NextResponse.json(
      { error: e?.message || "Failed" },
      { status: 400 },
    );
  }
}
