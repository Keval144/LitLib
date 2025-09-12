import { getUserRole } from "@/lib/authtype";
import { LayoutAdmin } from "@/modules/admin/adminlayout";
import UnAuthorised from "@/components/auth/unauthorised";

import AdminBorrowingsTable from "@/components/admin/borrowings/AdminBorrowingsTable";
import PageHeader from "@/components/common/PageHeader";

export default async function Page() {
  const { role } = await getUserRole();
  if (role !== "ADMINISTRATOR") {
    return <UnAuthorised />;
  }
  return (
    <LayoutAdmin>
      <div className="p-4">
        <PageHeader title="Borrowings" items={[{ label: "Admin", href: "/" }, { label: "Borrowings" }]} />
        <AdminBorrowingsTable />
      </div>
    </LayoutAdmin>
  );
}

