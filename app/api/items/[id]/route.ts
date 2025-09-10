import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";

// GET /api/items/[id]
export async function GET(
  _req: NextRequest,
  // Let Next.js infer the type for 'context' or type it generally as 'any' if necessary for other reasons,
  // but for route params, Next.js handles it internally.
  // The correct type for the second argument of route handlers is typically an object containing 'params'.
  // We'll implicitly rely on Next.js's handling here.
  { params }: { params: { id: string } } // This is the correct way to type it for Next.js 13+ App Router
) {
  try {
    const id = Number(params.id); // Use 'params.id' directly
    if (Number.isNaN(id)) {
      return NextResponse.json({ error: "Invalid id" }, { status: 400 });
    }

    const item = await prisma.libraryItem.findUnique({ where: { id } });
    if (!item || item.isDeleted) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json({ item });
  } catch (error) {
    console.error("GET /api/items/[id] error", error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}

// PATCH /api/items/[id]
export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } } // Apply the same correction
) {
  try {
    // Admin only
    const session = await getServerSession(authOptions);
    if (!session || session.user?.role !== "ADMINISTRATOR") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const id = Number(params.id); // Use 'params.id' directly
    if (Number.isNaN(id)) {
      return NextResponse.json({ error: "Invalid id" }, { status: 400 });
    }

    const body = await req.json();
    const data: any = { ...body };

    if (data.yearPublished !== undefined) {
      data.yearPublished = data.yearPublished
        ? Number(data.yearPublished)
        : null;
    }

    const updated = await prisma.libraryItem.update({
      where: { id },
      data,
    });

    return NextResponse.json({ id: updated.id });
  } catch (error) {
    console.error("PATCH /api/items/[id] error", error);
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }
}

// DELETE /api/items/[id]
export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } } // Apply the same correction
) {
  try {
    // Admin only
    const session = await getServerSession(authOptions);
    if (!session || session.user?.role !== "ADMINISTRATOR") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const id = Number(params.id); // Use 'params.id' directly
    if (Number.isNaN(id)) {
      return NextResponse.json({ error: "Invalid id" }, { status: 400 });
    }

    await prisma.libraryItem.update({
      where: { id },
      data: { isDeleted: true, deletedAt: new Date() },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("DELETE /api/items/[id] error", error);
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}