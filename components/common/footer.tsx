import Link from "next/link";
import { format } from "date-fns";

import BlackLogo from "@/public/assets/logos/black/blacklogo.png";
import WhiteLogo from "@/public/assets/logos/white/whitelogo.png";

import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

import ThemeBasedLogo from "@/components/common/themebasedlogo";

export function Footer() {
  const todayDate = new Date();
  const socialLinks = {
    Twitter: {
      icon: FaXTwitter,
      url: "https://x.com/kansagra_keval",
    },
    Email: {
      icon: IoMdMail,
      url: "mailto:kevalm144@gmail.com",
    },
    GitHub: {
      icon: FaGithub,
      url: "https://github.com/keval144/litlib",
    },
  };

  const sections = [
    {
      title: "Product",
      items: [
        { name: "Features", href: "/features" },
        { name: "Documentation", href: "https://github.com/keval144/litlib" },
        { name: "Pricing", href: "https://github.com/keval144/litlib" },
        { name: "API", href: "/api" },
      ],
    },
    {
      title: "Company",
      items: [
        { name: "About", href: "#" },
        { name: "Contact", href: "mailto:kevalm144@gmail.com" },
        { name: "Blog", href: "/blog" },
        { name: "Careers", href: "/careers" },
      ],
    },
    {
      title: "Support",
      items: [
        { name: "Help Center", href: "/help" },
        { name: "Status", href: "/status" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
      ],
    },
  ];

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-card)] px-5 pb-10 pt-20">
      <div className="mx-auto mb-10 grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-3">
            <ThemeBasedLogo
              lightLogo={WhiteLogo}
              darkLogo={BlackLogo}
              alt="LitLib Logo"
              height={45}
            />
          </div>

          <h6 className="font-logo text-4xl tracking-tight text-[#373536] dark:text-white">
            <span className="font-extrabold">LIT</span>
            <span className="font-medium">LIB</span>
          </h6>
          <p className="text-[var(--color-text-secondary)]">
            Making library management simple, efficient, and beautiful for
            institutions worldwide.
          </p>

          <div className="mt-4 flex gap-4">
            {Object.entries(socialLinks).map(
              ([name, { icon: Icon, url }], i) => (
                <Link
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] md:cursor-pointer"
                  title={name}
                >
                  <Icon />
                </Link>
              ),
            )}
          </div>
        </div>

        {sections.map((section, i) => (
          <div key={i}>
            <h3 className="mb-4 text-lg font-semibold text-[var(--color-text)]">
              {section.title}
            </h3>
            <ul className="space-y-2 text-[var(--color-text-secondary)]">
              {section.items.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-[var(--color-accent)]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-[var(--color-border)] pt-6 text-center text-[var(--color-text-secondary)]">
        &copy; {format(todayDate, "yyyy")} LitLib. All rights reserved.
      </div>
    </footer>
  );
}
