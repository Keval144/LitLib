import { getUserRole } from "@/lib/authtype";
import { LayoutAdmin } from "@/modules/admin/adminlayout";
import dynamic from "next/dynamic";
import UnAuthorised from "@/components/auth/unauthorised";

import ItemForm from "@/components/admin/items/ItemForm";
import PageHeader from "@/components/common/PageHeader";

export default async function Page() {
  const { role } = await getUserRole();
  if (role !== "ADMINISTRATOR") {
    return <UnAuthorised />;
  }
  return (
    <LayoutAdmin>
      <div className="w-full p-4">
        <PageHeader title="New Item" items={[{ label: "Admin", href: "/" }, { label: "Items", href: "/admin/items" }, { label: "New" }]} />
        <ItemForm mode="create" />
      </div>
    </LayoutAdmin>
  );
}

