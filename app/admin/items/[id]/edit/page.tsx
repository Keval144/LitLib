import { getUserRole } from "@/lib/authtype";
import { LayoutAdmin } from "@/modules/admin/adminlayout";
import UnAuthorised from "@/components/auth/unauthorised";
import prisma from "@/lib/prisma";
import dynamic from "next/dynamic";
import ItemForm from "@/components/admin/items/ItemForm";

export default async function Page({ params }: { params: { id: string } }) {
  const { role } = await getUserRole();
  if (role !== "ADMINISTRATOR") {
    return <UnAuthorised />;
  }

  const id = Number(params.id);
  if (Number.isNaN(id)) return <UnAuthorised />;

  const item = await prisma.libraryItem.findUnique({ where: { id } });
  if (!item || item.isDeleted) return <UnAuthorised />;

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
}

