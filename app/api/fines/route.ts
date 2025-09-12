import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";

// GET /api/fines - list fines for current user
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const userId = Number(session.user?.id);

    const fines = await prisma.fine.findMany({
      where: { userId },
      orderBy: { issueDate: "desc" },
    });

    return NextResponse.json({ fines });
  } catch (e) {
    console.error("GET /api/fines error", e);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}

