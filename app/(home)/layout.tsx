"use client";
import { HomeNavbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import ScrollToTop from "@/components/common/scrolltotop";
import { SessionProvider } from "next-auth/react";


export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <HomeNavbar />
      {children}
      <Footer />
      <ScrollToTop />
    </SessionProvider>
  );
}
