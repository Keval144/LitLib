import { getUserRole } from "@/lib/authtype";
import { LayoutAdmin } from "@/modules/admin/adminlayout";
import UnAuthorised from "@/components/auth/unauthorised";
import prisma from "@/lib/prisma";
import ItemForm from "@/components/admin/items/ItemForm";

// ✅ Explicit props type for Next.js 15 (params is now a Promise)
type PageProps = {
  params: Promise<{ id: string }>;
};

// ✅ Async arrow function works fine
const Page = async ({ params }: PageProps) => {
  const { id } = await params; // ⬅️ Must await

  const { role } = await getUserRole();
  if (role !== "ADMINISTRATOR") {
    return <UnAuthorised />;
  }

  const numericId = Number(id);
  if (Number.isNaN(numericId)) {
    return <UnAuthorised />;
  }

  const item = await prisma.libraryItem.findUnique({
    where: { id: numericId },
  });
  if (!item || item.isDeleted) {
    return <UnAuthorised />;
  }

  const initial = {
    id: item.id,
    title: item.title,
    author: item.author,
    publisher: item.publisher ?? undefined,
    isbn: item.isbn ?? undefined,
    itemType: item.itemType as any,
    status: item.status as any,
    categories: item.categories ?? [],
    languages: item.languages ?? [],
    yearPublished: item.yearPublished ?? undefined,
    edition: item.edition ?? undefined,
    shelfLocation: item.shelfLocation ?? undefined,
    borrowCount: item.borrowCount,
    coverImage: item.coverImage ?? undefined,
    description: item.description ?? undefined,
    createdAt: item.createdAt.toISOString(),
    updatedAt: item.updatedAt.toISOString(),
  };

  return (
    <LayoutAdmin>
      <ItemForm mode="edit" initial={initial} />
    </LayoutAdmin>
  );
};

export default Page;

// ✅ Dynamic route params for build
export async function generateStaticParams() {
  const items = await prisma.libraryItem.findMany({ select: { id: true } });

  return items.map((item) => ({
    id: String(item.id), // must be string
  }));
}
