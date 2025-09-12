import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";

// POST /api/admin/fines/[id]/pay - mark fine paid
export async function POST(req, { params }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user?.role !== "ADMINISTRATOR") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const id = Number(params.id);
    if (Number.isNaN(id)) {
      return NextResponse.json({ error: "Invalid id" }, { status: 400 });
    }

    await prisma.fine.update({
      where: { id },
      data: { status: "PAID", paidDate: new Date() },
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("POST /api/admin/fines/[id]/pay error", e);
    return NextResponse.json({ error: "Failed" }, { status: 400 });
  }
}
