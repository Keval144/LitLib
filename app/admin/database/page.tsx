import { getUserRole } from "@/lib/authtype";
import { LayoutAdmin } from "@/modules/admin/adminlayout";
import UnAuthorised from "@/components/auth/unauthorised";
import PageHeader from "@/components/common/PageHeader";
import AdminDatabaseClient from "@/components/admin/database/AdminDatabaseClient";

export default async function Page() {
  const { role } = await getUserRole();
  if (role !== "ADMINISTRATOR") {
    return <UnAuthorised />;
  }

  return (
    <LayoutAdmin>
      <div className="w-full p-4">
        <PageHeader
          title="Database Backup"
          items={[{ label: "Admin", href: "/" }, { label: "Database" }]}
        />
        <AdminDatabaseClient />
      </div>
    </LayoutAdmin>
  );
}
