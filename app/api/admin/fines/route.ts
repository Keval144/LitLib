import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";

// GET /api/admin/fines - list all fines
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user?.role !== "ADMINISTRATOR") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const fines = await prisma.fine.findMany({
      orderBy: { issueDate: "desc" },
      include: {
        user: { select: { id: true, firstName: true, lastName: true, email: true } },
        borrowing: { select: { id: true, itemId: true } },
      },
    });

    return NextResponse.json({ fines });
  } catch (e) {
    console.error("GET /api/admin/fines error", e);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}

