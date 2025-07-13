"use client";
import Link from "next/link";
import { format } from "date-fns";
import { Tooltip } from "@heroui/react"; // use HeroUI's Tooltip correctly
import Image from "next/image";
import { useTheme } from "next-themes";

import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

import BlackLogo from "../public/assets/logos/black/blacklogo.png";
import WhiteLogo from "../public/assets/logos/white/whitelogo.png";
import { useEffect, useState } from "react";

const Logo = ({ theme }: { theme: string | undefined }) => {
  const imageSrc = theme === "dark" ? BlackLogo : WhiteLogo;
  return (
    <Link href="/">
      <Image
        src={imageSrc}
        alt="LitLib Logo"
        height={45}
        className="transition-opacity duration-300"
        quality={100}
        priority
      />
    </Link>
  );
};

// Revalidate once, right at the next 1st January
export const revalidate = (() => {
  const now = new Date();
  const nextYear = now.getFullYear() + 1;
  const janFirst = new Date(`${nextYear}-01-01T00:00:00Z`);
  const secondsUntilJanFirst = Math.floor(
    (janFirst.getTime() - now.getTime()) / 1000
  );
  return secondsUntilJanFirst;
})();

export default function Footer() {
  const todayDate = new Date();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="bg-[var(--color-card)] border-t border-[var(--color-border)] pt-20 pb-10 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        <div>
          {mounted && (
            <div className="mb-3">
              <Logo theme={theme} />
            </div>
          )}
          <h3 className="text-4xl font-logo tracking-tight text-gray-700 dark:text-white">
            <span className="font-extrabold">LIT</span>
            <span className="font-medium">LIB</span>
          </h3>
          <p className="text-[var(--color-text-secondary)]">
            Making library management simple, efficient, and beautiful for
            institutions worldwide.
          </p>
          <div className="flex gap-4 mt-4">
            {[
              { icon: <FaXTwitter />, label: "Twitter" },
              { icon: <IoMdMail />, label: "Email" },
              { icon: <FaGithub />, label: "Github" },
            ].map((item, i) => (
              <Tooltip key={i} content={item.label}>
                <div
                  className="w-10 h-10 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center 
                    hover:bg-[var(--color-accent-hover)]  md:cursor-pointer"
                >
                  {item.icon}
                </div>
              </Tooltip>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[var(--color-text)] mb-4">
            Product
          </h3>
          <ul className="text-[var(--color-text-secondary)] space-y-2">
            {["Features", "Pricing", "Documentation", "API"].map((item, i) => (
              <li key={i}>
                <Link
                  href="#"
                  className="hover:text-[var(--color-accent)] transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[var(--color-text)] mb-4">
            Company
          </h3>
          <ul className="text-[var(--color-text-secondary)] space-y-2">
            {["About", "Contact", "Careers", "Blog"].map((item, i) => (
              <li key={i}>
                <Link
                  href="#"
                  className="hover:text-[var(--color-accent)] transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[var(--color-text)] mb-4">
            Support
          </h3>
          <ul className="text-[var(--color-text-secondary)] space-y-2">
            {[
              "Help Center",
              "Terms of Service",
              "Privacy Policy",
              "Status",
            ].map((item, i) => (
              <li key={i}>
                <Link
                  href="#"
                  className="hover:text-[var(--color-accent)] transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center border-t border-[var(--color-border)] pt-6 text-[var(--color-text-secondary)]">
        &copy; {format(todayDate, "yyyy")} LitLib. All rights reserved.
      </div>
    </footer>
  );
}
