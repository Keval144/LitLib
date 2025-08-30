import { getUserRole } from "@/lib/authtype";
import HomeLayoutClient from "./HomeLayoutClient";

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { role } = await getUserRole();

  return <HomeLayoutClient role={role}>{children}</HomeLayoutClient>;
}
