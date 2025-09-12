import HeroSection from "@/components/home/herosection";
import FeaturesSection from "@/components/home/featuresection";
import { getUserRole } from "@/lib/authtype";
import { LayoutAdmin } from "@/modules/admin/adminlayout";
import AdminDashboard from "@/components/admin/admindashboard";
import MyReservationsTable from "@/components/my/MyReservationsTable";
import MyBorrowingsTable from "@/components/my/MyBorrowingsTable";
import MyFinesTable from "@/components/my/MyFinesTable";
import PageHeader from "@/components/common/PageHeader";

export default async function HomePage() {
  const { role, authorised } = await getUserRole();

  if (role === "ADMINISTRATOR") {
    return <LayoutAdmin children={<AdminDashboard />} />;
  }

  // For logged-in patrons, show the user dashboard at "/"
  if (authorised && role === "PATRON") {
    return (
      <section className="min-h-[100dvh] bg-gradient-to-br from-[var(--color-bg)] to-[var(--color-card)] px-5 pb-16 pt-32 sm:px-10">
        <div className="mx-auto w-full max-w-6xl space-y-8">
          <PageHeader title="Dashboard" items={[{ label: "Home", href: "/" }, { label: "Dashboard" }]} />
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

  // Public landing for anonymous users
  return (
    <>
      <HeroSection />
      <FeaturesSection />
    </>
  );
}
