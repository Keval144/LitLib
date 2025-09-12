import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";

// POST /api/admin/borrowings/[id]/damage - mark item as DAMAGED and add 60 fine for the borrowing's user
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
    if (Number.isNaN(id)) return NextResponse.json({ error: "Invalid id" }, { status: 400 });

    const result = await prisma.$transaction(async (tx) => {
      const borrowing = await tx.borrowing.findUnique({
        where: { id },
        include: { item: true },
      });
      if (!borrowing) throw new Error("Borrowing not found");

      // Mark item DAMAGED
      await tx.libraryItem.update({ where: { id: borrowing.itemId }, data: { status: "DAMAGED" } });

      // Ensure borrowing has a returnDate (considered closed)
      let returnDate = borrowing.returnDate;
      if (!returnDate) {
        returnDate = new Date();
        await tx.borrowing.update({ where: { id }, data: { returnDate } });
      }

      // Either create a fine or add 60 to existing fine for this borrowing
      const existing = await tx.fine.findUnique({ where: { borrowingId: borrowing.id } });
      if (existing) {
        const newAmount = existing.amount + 60;
        // If previously PAID/WAIVED, reopen as UNPAID and clear paidDate
        await tx.fine.update({
          where: { id: existing.id },
          data: {
            amount: newAmount,
            reason: existing.reason.includes("Damaged item") ? existing.reason : `${existing.reason}; Damaged item`,
            status: "UNPAID",
            paidDate: null,
          },
        });
        return { fineId: existing.id, amount: newAmount };
      } else {
        const fine = await tx.fine.create({
          data: {
            amount: 60,
            reason: "Damaged item",
            status: "UNPAID",
            userId: borrowing.userId,
            borrowingId: borrowing.id,
          },
          select: { id: true, amount: true },
        });
        return { fineId: fine.id, amount: fine.amount };
      }
    });

    return NextResponse.json(result);
  } catch (e: any) {
    console.error("POST /api/admin/borrowings/[id]/damage error", e);
    const msg = e?.message || "Failed";
    return NextResponse.json({ error: msg }, { status: 400 });
  }
}

