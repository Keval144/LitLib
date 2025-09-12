// lib/reservation.ts
import prisma from "@/lib/prisma";

export async function cleanupExpiredReservationsGlobal() {
  const now = new Date();
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

  const itemIds = Array.from(new Set(expired.map((r) => r.itemId)));
  for (const itemId of itemIds) {
    const activeCount = await prisma.reservation.count({
      where: { itemId, status: "PENDING", expiryDate: { gte: now } },
    });
    if (activeCount === 0) {
      await prisma.libraryItem.update({
        where: { id: itemId },
        data: { status: "AVAILABLE" },
      });
    }
  }
}

