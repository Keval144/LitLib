import authOptions from "@/lib/auth";
import clsx from "clsx";
import { getServerSession } from "next-auth";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

import MyReservationsTable from "@/components/my/MyReservationsTable";
import MyBorrowingsTable from "@/components/my/MyBorrowingsTable";
import MyFinesTable from "@/components/my/MyFinesTable"

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
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
      <div className="mx-auto w-full max-w-6xl space-y-8">
        <div>
          <h2 className="mb-2 text-2xl font-semibold">My Reservations</h2>
          <MyReservationsTable />
        </div>

        <div>
          <h2 className="mb-2 text-2xl font-semibold">My Borrowed Books</h2>
          <MyBorrowingsTable />
        </div>

        <div>
          <h2 className="mb-2 text-2xl font-semibold">My Fines</h2>
          <MyFinesTable />
        </div>
      </div>
    </section>
  );
}
