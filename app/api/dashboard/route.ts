// app/api/dashboard/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

function monthKey(date: Date) {
  // key like "2025-08"
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

export async function GET() {
  try {
    // 1) Basic stats
    const totalBooks = await prisma.libraryItem.count();
    const totalUsers = await prisma.user.count();
    const activeBorrowings = await prisma.borrowing.count({
      where: { returnDate: null },
    });
    const pendingReservations = await prisma.reservation.count({
      where: { status: "PENDING" },
    });
    const overdueItems = await prisma.borrowing.count({
      where: { returnDate: null, dueDate: { lt: new Date() } },
    });
    const totalFinesResult = await prisma.fine.aggregate({
      _sum: { amount: true },
      where: {
        paidDate: { not: null },
        status: "PAID",
      },
    });

    // 2) Popular items (top 5 by borrowing count using relation count)
    const popularItemsRaw = await prisma.libraryItem.findMany({
      take: 5,
      orderBy: { borrowings: { _count: "desc" } },
      select: { id: true, title: true, borrowings: true },
    });
    const popularItems = popularItemsRaw.map((it) => ({
      id: it.id,
      title: it.title,
      borrowCount: it.borrowings.length,
    }));

    // 3) Recent activity from Borrowing table (last 10)
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
    const start = new Date(now.getFullYear(), now.getMonth() - 5, 1); // inclusive
    const borrowingsSince = await prisma.borrowing.findMany({
      where: { borrowDate: { gte: start } },
      select: { borrowDate: true },
    });

    // Build last-6-months labels and counts
    const months: string[] = [];
    const monthKeys: string[] = [];
    for (let i = 5; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const label = d.toLocaleString("default", { month: "short" }); // "Jan", "Feb"
      months.push(label);
      monthKeys.push(monthKey(d));
    }
    const countsByKey: Record<string, number> = {};
    borrowingsSince.forEach((b) => {
      const k = monthKey(new Date(b.borrowDate));
      countsByKey[k] = (countsByKey[k] ?? 0) + 1;
    });
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
    const usersByRole = await prisma.user.groupBy({
      by: ["role"],
      _count: { _all: true },
    });
    const userDistribution = {
      labels: usersByRole.map((r) => r.role),
      data: usersByRole.map((r) => r._count._all),
    };

    return NextResponse.json({
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
      monthlyBorrowings: {
        labels: months,
        data: monthlyData,
      },
      itemsByCategory,
      userDistribution,
    });
  } catch (error) {
    console.error("Dashboard route error:", error);
    return NextResponse.json(
      { error: "Failed to fetch dashboard" },
      { status: 500 },
    );
  }
}
