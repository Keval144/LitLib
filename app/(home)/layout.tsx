import { HomeNavbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import ScrollToTop from "@/components/common/scrolltotop";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to LitLib — your premier platform for exploring, sharing, and discovering quality literature. Dive into our curated collections, insightful articles, and community features designed for book lovers and literary enthusiasts.",
};
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HomeNavbar />
      {children}
      <Footer />
      <ScrollToTop />
    </>
  );
}
