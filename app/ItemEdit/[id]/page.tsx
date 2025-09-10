import { redirect } from "next/navigation";

export default function Page({ params }: { params: { id: any } }) {
  redirect(`/admin/items/${params.id}/edit`);
}
