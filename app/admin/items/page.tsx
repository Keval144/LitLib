import UnAuthorised from "@/components/auth/unauthorised";
import { getUserRole } from "@/lib/authtype";
import { LayoutAdmin } from "@/modules/admin/adminlayout";
import ItemTableWrapper from "./ItemTableWrapper"; // client wrapper
import PageHeader from "@/components/common/PageHeader";

export default async function Page() {
  const { role } = await getUserRole();

  if (role !== "ADMINISTRATOR") {
    return <UnAuthorised />;
  }

  return (
    <LayoutAdmin>
      <div className="w-full p-4">
        <PageHeader title="Items" items={[{ label: "Admin", href: "/" }, { label: "Items" }]} />
        <ItemTableWrapper />
      </div>
    </LayoutAdmin>
  );
}
