import { getUserRole } from "@/lib/authtype";
import { LayoutAdmin } from "@/modules/admin/adminlayout";
import UnAuthorised from "@/components/auth/unauthorised";
import prisma from "@/lib/prisma";
import ItemForm from "@/components/admin/items/ItemForm";

// ✅ Explicit props type for this page
type PageProps = {
  params: { id: string };
};

// ✅ Define as const/arrow function instead of `function Page`
//    This avoids Next.js trying to apply its own generic PageProps
const Page = async ({ params }: PageProps) => {
  const { role } = await getUserRole();

  if (role !== "ADMINISTRATOR") {
    return <UnAuthorised />;
  }

  const id = Number(params.id);
  if (Number.isNaN(id)) {
    return <UnAuthorised />;
  }

  const item = await prisma.libraryItem.findUnique({ where: { id } });
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

// ✅ Needed for Next.js app router dynamic routes
export async function generateStaticParams() {
  const items = await prisma.libraryItem.findMany({
    select: { id: true },
  });

  return items.map((item) => ({
    id: String(item.id), // must be string
  }));
}
