// app/api/dashboard/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

function monthKey(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

// Simple in-memory cache (per server instance)
const DASHBOARD_TTL_MS = 30_000; // 30s
const globalForCache = globalThis as unknown as {
  __dashboardCache__?: { data: any; ts: number };
};

export async function GET() {
  try {
    const nowTs = Date.now();
    const cached = globalForCache.__dashboardCache__;
    if (cached && nowTs - cached.ts < DASHBOARD_TTL_MS) {
      return new NextResponse(JSON.stringify(cached.data), {
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=30, s-maxage=30, stale-while-revalidate=60",
        },
      });
    }

    // 1) Basic stats in parallel
    const [
      totalBooks,
      totalUsers,
      activeBorrowings,
      pendingReservations,
      overdueItems,
      totalFinesResult,
    ] = await Promise.all([
      prisma.libraryItem.count(),
      prisma.user.count(),
      prisma.borrowing.count({ where: { returnDate: null } }),
      prisma.reservation.count({ where: { status: "PENDING" } }),
      prisma.borrowing.count({ where: { returnDate: null, dueDate: { lt: new Date() } } }),
      prisma.fine.aggregate({ _sum: { amount: true } }),
    ]);

    // 2) Popular items (top 5)
    const popularItemsRaw = await prisma.libraryItem.findMany({
      take: 5,
      orderBy: { borrowings: { _count: "desc" } },
      select: { id: true, title: true, _count: { select: { borrowings: true } } },
    });
    const popularItems = popularItemsRaw.map((it) => ({
      id: it.id,
      title: it.title,
      borrowCount: it._count.borrowings,
    }));

    // 3) Recent activity (last 10)
    const recentBorrowings = await prisma.borrowing.findMany({
      take: 10,
      orderBy: { borrowDate: "desc" },
      include: {
        user: { select: { firstName: true, lastName: true } },
        item: { select: { title: true } },
      },
    });
    const recentActivity = recentBorrowings.map((b) => ({
      id: b.id,
      user: `${b.user.firstName} ${b.user.lastName}`,
      action: b.returnDate ? "Returned" : "Borrowed",
      item: b.item?.title ?? "",
      time: b.borrowDate.toISOString(),
    }));

    // 4) Monthly Borrowings (last 6 months)
    const now = new Date();
    const start = new Date(now.getFullYear(), now.getMonth() - 5, 1);
    const borrowingsSince = await prisma.borrowing.findMany({
      where: { borrowDate: { gte: start } },
      select: { borrowDate: true },
    });

    const months: string[] = [];
    const monthKeys: string[] = [];
    for (let i = 5; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const label = d.toLocaleString("default", { month: "short" });
      months.push(label);
      monthKeys.push(monthKey(d));
    }
    const countsByKey: Record<string, number> = {};
    for (const b of borrowingsSince) {
      const k = monthKey(new Date(b.borrowDate));
      countsByKey[k] = (countsByKey[k] ?? 0) + 1;
    }
    const monthlyData = monthKeys.map((k) => countsByKey[k] ?? 0);

    // 5) Items by category (itemType)
    const itemsByType = await prisma.libraryItem.groupBy({
      by: ["itemType"],
      _count: { _all: true },
    });
    const itemsByCategory = {
      labels: itemsByType.map((r) => r.itemType),
      data: itemsByType.map((r) => r._count._all),
    };

    // 6) User distribution by role
    const usersByRole = await prisma.user.groupBy({ by: ["role"], _count: { _all: true } });
    const userDistribution = {
      labels: usersByRole.map((r) => r.role),
      data: usersByRole.map((r) => r._count._all),
    };

    const payload = {
      stats: {
        totalBooks,
        totalUsers,
        activeBorrowings,
        pendingReservations,
        overdueItems,
        totalFines: totalFinesResult._sum.amount ?? 0,
      },
      popularItems,
      recentActivity,
      monthlyBorrowings: { labels: months, data: monthlyData },
      itemsByCategory,
      userDistribution,
    };

    // Update in-memory cache
    globalForCache.__dashboardCache__ = { data: payload, ts: nowTs };

    return new NextResponse(JSON.stringify(payload), {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=30, s-maxage=30, stale-while-revalidate=60",
      },
    });
  } catch (error) {
    console.error("Dashboard route error:", error);
    return NextResponse.json({ error: "Failed to fetch dashboard" }, { status: 500 });
  }
}
