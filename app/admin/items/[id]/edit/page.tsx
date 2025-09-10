import { getUserRole } from "@/lib/authtype";
import { LayoutAdmin } from "@/modules/admin/adminlayout";
import UnAuthorised from "@/components/auth/unauthorised";
import prisma from "@/lib/prisma";
import ItemForm from "@/components/admin/items/ItemForm";

// ❌ Skip strict typing, make it all any
type PageProps = {
  params: any;
};

const Page = async ({ params }: PageProps) => {
  const { id } = (await params) as any; // treat as any

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

  const initial: any = {
    id: item.id,
    title: item.title,
    author: item.author,
    publisher: item.publisher ?? undefined,
    isbn: item.isbn ?? undefined,
    itemType: item.itemType,
    status: item.status,
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

export async function generateStaticParams(): Promise<any> {
  const items = await prisma.libraryItem.findMany({ select: { id: true } });

  return items.map((item: any) => ({
    id: String(item.id),
  }));
}
