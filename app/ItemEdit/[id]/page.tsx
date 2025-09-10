// @ts-nocheck
import { redirect } from "next/navigation";

export default function Page({ params }: any) {
  redirect(`/admin/items/${params.id}/edit`);
}
