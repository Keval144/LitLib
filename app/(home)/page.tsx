import HeroSection from "@/components/home/herosection";
import FeaturesSection from "@/components/home/featuresection";
import { getUserRole } from "@/lib/authtype";
import { LayoutAdmin } from "@/modules/admin/adminlayout";
import AdminDashboard from "@/components/admin/admindashboard";

export default async function HomePage() {
  const { role } = await getUserRole();

  if (role === "ADMINISTRATOR") {
    return <LayoutAdmin children={<AdminDashboard />} />;
  }

  if (role === "PATREON") {
    return <h1>PATREON</h1>;
  }

  return (
    <>
      <HeroSection />
      <FeaturesSection />
    </>
  );
}
