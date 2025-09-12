import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";

async function cleanupExpiredReservations() {
  const now = new Date();
  // Cancel all expired PENDING reservations
  const expired = await prisma.reservation.findMany({
    where: { status: "PENDING", expiryDate: { lt: now } },
    select: { id: true, itemId: true },
  });
  if (expired.length === 0) return;

  const ids = expired.map((r) => r.id);
  await prisma.reservation.updateMany({
    where: { id: { in: ids } },
    data: { status: "CANCELLED" },
  });

  // For affected items, if no other active reservation remains, set item AVAILABLE
  const itemIds = Array.from(new Set(expired.map((r) => r.itemId)));
  for (const itemId of itemIds) {
    const activeCount = await prisma.reservation.count({
      where: {
        itemId,
        status: "PENDING",
        expiryDate: { gte: now },
      },
    });
    if (activeCount === 0) {
      // Only release if currently RESERVED
      await prisma.libraryItem.update({
        where: { id: itemId },
        data: { status: "AVAILABLE" },
      });
    }
  }
}

// GET /api/reservations - list current user's reservations
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    await cleanupExpiredReservations();

    const userId = Number(session.user?.id);
    const reservations = await prisma.reservation.findMany({
      where: { userId },
      orderBy: { reservationDate: "desc" },
      include: { item: { select: { id: true, title: true, author: true, itemType: true, status: true } } },
    });

    return NextResponse.json({ reservations });
  } catch (e) {
    console.error("GET /api/reservations error", e);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}

// POST /api/reservations { itemId }
export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const role = (session.user as any)?.role;
    if (role !== "PATRON") return NextResponse.json({ error: "Forbidden" }, { status: 403 });

    const body = await req.json();
    const itemId = Number(body?.itemId);
    if (!itemId || Number.isNaN(itemId)) {
      return NextResponse.json({ error: "Invalid itemId" }, { status: 400 });
    }

    await cleanupExpiredReservations();

    const userId = Number(session.user?.id);
    const activeReservations = await prisma.reservation.count({
      where: { userId, status: "PENDING", expiryDate: { gte: new Date() } },
    });
    if (activeReservations >= 5) {
      return NextResponse.json({ error: "Reservation limit reached (5)" }, { status: 400 });
    }

    // Transaction: ensure item is AVAILABLE and no other active reservation exists
    const result = await prisma.$transaction(async (tx) => {
      const item = await tx.libraryItem.findUnique({ where: { id: itemId } });
      if (!item) throw new Error("Item not found");
      if (item.status !== "AVAILABLE") throw new Error("Item not available for reservation");

      const existing = await tx.reservation.count({
        where: { itemId, status: "PENDING", expiryDate: { gte: new Date() } },
      });
      if (existing > 0) throw new Error("Item already reserved");

      const expiryDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000);

      const reservation = await tx.reservation.create({
        data: {
          itemId,
          userId,
          status: "PENDING",
          expiryDate,
        },
        select: { id: true },
      });

      await tx.libraryItem.update({
        where: { id: itemId },
        data: { status: "RESERVED" },
      });

      return reservation;
    });

    return NextResponse.json({ id: result.id }, { status: 201 });
  } catch (e: any) {
    console.error("POST /api/reservations error", e);
    const message = typeof e?.message === "string" ? e.message : "Failed";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

