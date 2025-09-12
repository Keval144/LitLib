import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";

// POST /api/admin/fines/[id]/waive { amount?: number }
// If amount omitted => waive full remaining (set status to WAIVED)
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

    const body = await req.json().catch(() => ({}));
    const amount = typeof body.amount === "number" && body.amount > 0 ? body.amount : null;

    const fine = await prisma.fine.findUnique({ where: { id } });
    if (!fine) return NextResponse.json({ error: "Not found" }, { status: 404 });

    let newWaived = fine.waivedAmount;
    let status = fine.status;

    if (amount) {
      newWaived = Math.min(fine.amount, fine.waivedAmount + amount);
      if (newWaived >= fine.amount) {
        status = "WAIVED";
      }
    } else {
      // waive full remaining
      newWaived = fine.amount;
      status = "WAIVED";
    }

    await prisma.fine.update({
      where: { id },
      data: { waivedAmount: newWaived, status },
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("POST /api/admin/fines/[id]/waive error", e);
    return NextResponse.json({ error: "Failed" }, { status: 400 });
  }
}
