import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";

// Define an interface for the params object structure
// This defines the shape of what will be in `req.params` (or the destructured `params` from the second argument)
interface RequestContext {
  params: {
    id: string;
  };
}

// GET /api/items/[id]
export async function GET(
  // Here, we type the NextRequest to include our params.
  // The second argument `context` then automatically infers its type,
  // or we can explicitly type it more generally if needed, but it's often not required
  // if `NextRequest` is correctly typed.
  // We'll still destructure it for clarity.
  _req: NextRequest,
  { params }: RequestContext // Revert to this common pattern for Next.js App Router
) {
  try {
    const id = Number(params.id);
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
  req: NextRequest, // The 'req' parameter already includes the params. Let's make it explicit.
  { params }: RequestContext // Keep this for destructuring convenience
) {
  try {
    // Admin only
    const session = await getServerSession(authOptions);
    if (!session || session.user?.role !== "ADMINISTRATOR") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const id = Number(params.id);
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
  { params }: RequestContext // Keep this for destructuring convenience
) {
  try {
    // Admin only
    const session = await getServerSession(authOptions);
    if (!session || session.user?.role !== "ADMINISTRATOR") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const id = Number(params.id);
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