import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";

// POST /api/admin/reservations/[id]/checkout - mark as checked out: create borrowing, fulfill reservation, set item CHECKED_OUT
export async function POST(
  _req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user?.role !== "ADMINISTRATOR") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
    const reservationId = Number(params.id);
    if (Number.isNaN(reservationId)) {
      return NextResponse.json({ error: "Invalid id" }, { status: 400 });
    }

    const now = new Date();

    const result = await prisma.$transaction(async (tx) => {
      const reservation = await tx.reservation.findUnique({
        where: { id: reservationId },
        include: { item: true },
      });
      if (!reservation) throw new Error("Reservation not found");
      if (reservation.status !== "PENDING" || reservation.expiryDate < now) {
        throw new Error("Reservation not valid for checkout");
      }

      // Create borrowing based on rule for item type
      const rule = await tx.borrowingRule.findFirst({
        where: { itemType: reservation.item.itemType },
      });
      const maxLoanDays = rule?.maxLoanDays ?? 14;
      const dueDate = new Date(now.getTime() + maxLoanDays * 24 * 60 * 60 * 1000);

      const borrowing = await tx.borrowing.create({
        data: {
          itemId: reservation.itemId,
          userId: reservation.userId,
          borrowDate: now,
          dueDate,
        },
        select: { id: true },
      });

      await tx.reservation.update({
        where: { id: reservationId },
        data: { status: "FULFILLED" },
      });

      await tx.libraryItem.update({
        where: { id: reservation.itemId },
        data: { status: "CHECKED_OUT", borrowCount: { increment: 1 } },
      });

      return borrowing;
    });

    return NextResponse.json({ borrowingId: result.id }, { status: 201 });
  } catch (e: any) {
    console.error("POST /api/admin/reservations/[id]/checkout error", e);
    const msg = e?.message || "Failed";
    return NextResponse.json({ error: msg }, { status: 400 });
  }
}

