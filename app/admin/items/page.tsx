import UnAuthorised from "@/components/auth/unauthorised";
import { getUserRole } from "@/lib/authtype";
import { LayoutAdmin } from "@/modules/admin/adminlayout";
import ItemTableWrapper from "./ItemTableWrapper"; // client wrapper

export default async function Page() {
  const { role } = await getUserRole();

  if (role !== "ADMINISTRATOR") {
    return <UnAuthorised />;
  }

  return (
    <LayoutAdmin>
      <ItemTableWrapper />
    </LayoutAdmin>
  );
}
