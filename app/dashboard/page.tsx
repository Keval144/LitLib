import authOptions from "@/lib/auth";
import clsx from "clsx";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  console.log(session)
  if (!session) {
    redirect("/unauthorised");
  }

  return (
    <section
      className={clsx(
        "min-h-[100dvh] px-5 pb-16 pt-32 sm:px-10",
        "bg-gradient-to-br from-[var(--color-bg)] to-[var(--color-card)]",
      )}
      id="Dashboard"
    >
      Dashboard
    </section>
  );
}
