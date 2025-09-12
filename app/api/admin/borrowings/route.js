import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";

// GET /api/admin/borrowings - list borrowings with user and item
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user?.role !== "ADMINISTRATOR") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const borrowings = await prisma.borrowing.findMany({
      orderBy: { borrowDate: "desc" },
      include: {
        user: {
          select: { id: true, firstName: true, lastName: true, email: true },
        },
        item: {
          select: { id: true, title: true, author: true, itemType: true },
        },
      },
      take: 200,
    });

    return NextResponse.json({ borrowings });
  } catch (e) {
    console.error("GET /api/admin/borrowings error", e);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
