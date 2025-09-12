import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";

// DELETE /api/reservations/[id] - cancel own reservation if pending and not expired
export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const userId = Number(session.user?.id);
    const id = Number(params.id);
    if (Number.isNaN(id)) return NextResponse.json({ error: "Invalid id" }, { status: 400 });

    const now = new Date();
    const reservation = await prisma.reservation.findUnique({ where: { id } });
    if (!reservation || reservation.userId !== userId) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    if (reservation.status !== "PENDING" || reservation.expiryDate < now) {
      return NextResponse.json({ error: "Cannot cancel" }, { status: 400 });
    }

    await prisma.$transaction(async (tx) => {
      await tx.reservation.update({ where: { id }, data: { status: "CANCELLED" } });
      // If no other active reservation, release item to AVAILABLE
      const count = await tx.reservation.count({
        where: {
          itemId: reservation.itemId,
          status: "PENDING",
          expiryDate: { gte: new Date() },
        },
      });
      if (count === 0) {
        await tx.libraryItem.update({ where: { id: reservation.itemId }, data: { status: "AVAILABLE" } });
      }
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("DELETE /api/reservations/[id] error", e);
    return NextResponse.json({ error: "Failed" }, { status: 400 });
  }
}

