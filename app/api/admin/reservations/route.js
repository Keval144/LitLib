import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";

// GET /api/admin/reservations - list pending reservations with user and item
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user?.role !== "ADMINISTRATOR") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const reservations = await prisma.reservation.findMany({
      where: { status: "PENDING", expiryDate: { gte: new Date() } },
      orderBy: { reservationDate: "desc" },
      include: {
        user: { select: { id: true, firstName: true, lastName: true, email: true } },
        item: { select: { id: true, title: true, author: true, itemType: true, status: true } },
      },
    });

    return NextResponse.json({ reservations });
  } catch (e) {
    console.error("GET /api/admin/reservations error", e);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
