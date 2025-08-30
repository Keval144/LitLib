"use client";

import { HomeNavbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import ScrollToTop from "@/components/common/scrolltotop";
import { SessionProvider } from "next-auth/react";

export default function HomeLayoutClient({
  children,
  role,
}: {
  children: React.ReactNode;
  role: string | null;
}) {
  return (
    <SessionProvider>
      {role !== "ADMINISTRATOR" && <HomeNavbar />}
      {children}
      {role !== "ADMINISTRATOR" && <Footer />}
      <ScrollToTop />
    </SessionProvider>
  );
}
