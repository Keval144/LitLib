import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";

// GET /api/borrowings - current user's borrowings with due dates
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const userId = Number(session.user?.id);

    const borrowings = await prisma.borrowing.findMany({
      where: { userId },
      orderBy: { borrowDate: "desc" },
      include: { item: { select: { id: true, title: true, author: true, itemType: true } } },
    });

    return NextResponse.json({ borrowings });
  } catch (e) {
    console.error("GET /api/borrowings error", e);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}

