import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";

// GET /api/items?q=&type=&status=&category=&language=&page=&perPage=&sortBy=&sortOrder=
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const q = searchParams.get("q") || undefined;
    const type = searchParams.get("type") || undefined; // BOOK | JOURNAL | MULTIMEDIA | OTHER
    const status = searchParams.get("status") || undefined; // AVAILABLE | CHECKED_OUT | RESERVED | LOST | DAMAGED
    const category = searchParams.get("category") || undefined;
    const language = searchParams.get("language") || undefined;
    const page = Math.max(parseInt(searchParams.get("page") || "1", 10), 1);
    const perPage = Math.min(
      Math.max(parseInt(searchParams.get("perPage") || "12", 10), 1),
      100,
    );
    const sortBy = (searchParams.get("sortBy") || "createdAt") as
      | "title"
      | "createdAt"
      | "borrowCount";
    const sortOrder = (searchParams.get("sortOrder") || "desc") as
      | "asc"
      | "desc";

    const where: any = {
      isDeleted: false,
    };

    if (q) {
      where.OR = [
        { title: { contains: q, mode: "insensitive" as const } },
        { author: { contains: q, mode: "insensitive" as const } },
        { description: { contains: q, mode: "insensitive" as const } },
        { publisher: { contains: q, mode: "insensitive" as const } },
        { isbn: { contains: q, mode: "insensitive" as const } },
      ];
    }
    if (type) where.itemType = type;
    if (status) where.status = status;
    if (category) where.categories = { has: category };
    if (language) where.languages = { has: language };

    const total = await prisma.libraryItem.count({ where });

    const items = await prisma.libraryItem.findMany({
      where,
      orderBy: { [sortBy]: sortOrder },
      skip: (page - 1) * perPage,
      take: perPage,
      select: {
        id: true,
        title: true,
        author: true,
        publisher: true,
        isbn: true,
        itemType: true,
        status: true,
        categories: true,
        languages: true,
        yearPublished: true,
        edition: true,
        shelfLocation: true,
        borrowCount: true,
        coverImage: true,
        description: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return NextResponse.json({
      items,
      meta: {
        total,
        page,
        perPage,
        totalPages: Math.ceil(total / perPage),
      },
    });
  } catch (error) {
    console.error("GET /api/items error", error);
    return NextResponse.json(
      { error: "Failed to fetch items" },
      { status: 500 },
    );
  }
}

// POST /api/items
export async function POST(req: NextRequest) {
  try {
    // Admin only
    const session = await getServerSession(authOptions);
    if (!session || session.user?.role !== "ADMINISTRATOR") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const body = await req.json();
    const {
      title,
      author,
      publisher,
      isbn,
      itemType,
      status = "AVAILABLE",
      categories = [],
      languages = [],
      yearPublished,
      edition,
      shelfLocation,
      isReference = false,
      coverImage,
      description,
    } = body || {};

    if (!title || !author || !itemType) {
      return NextResponse.json(
        { error: "title, author and itemType are required" },
        { status: 400 },
      );
    }

    const created = await prisma.libraryItem.create({
      data: {
        title,
        author,
        publisher,
        isbn,
        itemType,
        status,
        categories,
        languages,
        yearPublished: yearPublished ? Number(yearPublished) : null,
        edition,
        shelfLocation,
        isReference,
        coverImage,
        description,
      },
      select: { id: true },
    });

    return NextResponse.json({ id: created.id }, { status: 201 });
  } catch (error) {
    console.error("POST /api/items error", error);
    return NextResponse.json(
      { error: "Failed to create item" },
      { status: 500 },
    );
  }
}

