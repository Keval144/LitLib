import Link from "next/link";
import { format } from "date-fns";

import BlackLogo from "@/public/assets/logos/black/blacklogo.png";
import WhiteLogo from "@/public/assets/logos/white/whitelogo.png";

import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

import ThemeBasedLogo from "@/components/common/themebasedlogo";

// ✅ Keep ISR working
export const revalidate = (() => {
  const now = new Date();
  const nextYear = now.getFullYear() + 1;
  const janFirst = new Date(`${nextYear}-01-01T00:00:00Z`);
  const secondsUntilJanFirst = Math.floor(
    (janFirst.getTime() - now.getTime()) / 1000
  );
  return secondsUntilJanFirst;
})();



export function Footer() {
  const todayDate = new Date();

  return (
    <footer className="bg-[var(--color-card)] border-t border-[var(--color-border)] pt-20 pb-10 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        <div>
          <div className="mb-3">
            <ThemeBasedLogo
              lightLogo={WhiteLogo}
              darkLogo={BlackLogo}
              alt="LitLib Logo"
            />
          </div>

          <h3 className="text-4xl font-logo tracking-tight text-gray-700 dark:text-white">
            <span className="font-extrabold">LIT</span>
            <span className="font-medium">LIB</span>
          </h3>
          <p className="text-[var(--color-text-secondary)]">
            Making library management simple, efficient, and beautiful for
            institutions worldwide.
          </p>

          <div className="flex gap-4 mt-4">
            {[FaXTwitter, IoMdMail, FaGithub].map((Icon, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center hover:bg-[var(--color-accent-hover)] md:cursor-pointer"
                title={["Twitter", "Email", "GitHub"][i]}
              >
                <Icon />
              </div>
            ))}
          </div>
        </div>

        {[
          {
            title: "Product",
            items: ["Features", "Pricing", "Documentation", "API"],
          },
          { title: "Company", items: ["About", "Contact", "Careers", "Blog"] },
          {
            title: "Support",
            items: [
              "Help Center",
              "Terms of Service",
              "Privacy Policy",
              "Status"],
          },
        ].map((section, i) => (
          <div key={i}>
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-4">
              {section.title}
            </h3>
            <ul className="text-[var(--color-text-secondary)] space-y-2">
              {section.items.map((item, idx) => (
                <li key={idx}>
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
        ))}
      </div>

      <div className="text-center border-t border-[var(--color-border)] pt-6 text-[var(--color-text-secondary)]">
        &copy; {format(todayDate, "yyyy")} LitLib. All rights reserved.
      </div>
    </footer>
  );
}
