import { getUserRole } from "@/lib/authtype";
import { LayoutAdmin } from "@/modules/admin/adminlayout";
import dynamic from "next/dynamic";
import UnAuthorised from "@/components/auth/unauthorised";

import ItemForm from "@/components/admin/items/ItemForm";

export default async function Page() {
  const { role } = await getUserRole();
  if (role !== "ADMINISTRATOR") {
    return <UnAuthorised />;
  }
  return (
    <LayoutAdmin>
      <ItemForm mode="create" />
    </LayoutAdmin>
  );
}

