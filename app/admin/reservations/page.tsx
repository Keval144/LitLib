import { getUserRole } from "@/lib/authtype";
import { LayoutAdmin } from "@/modules/admin/adminlayout";
import dynamic from "next/dynamic";
import UnAuthorised from "@/components/auth/unauthorised";

import AdminReservationTable from "@/components/admin/reservations/AdminReservationTable";
import PageHeader from "@/components/common/PageHeader";


export default async function Page() {
  const { role } = await getUserRole();
  if (role !== "ADMINISTRATOR") {
    return <UnAuthorised />;
  }
  return (
    <LayoutAdmin>
      <div className="p-4">
        <PageHeader title="Reservations" items={[{ label: "Admin", href: "/" }, { label: "Reservations" }]} />
        <AdminReservationTable />
      </div>
    </LayoutAdmin>
  );
}

