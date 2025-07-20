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
    <footer className="bg-[var(--color-card)] border-t border-[var(--color-border)] pt-20 pb-10 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        <div>
          <div className="mb-3">
            <ThemeBasedLogo
              lightLogo={WhiteLogo}
              darkLogo={BlackLogo}
              alt="LitLib Logo"
              height={45}
            />
          </div>

          <h6 className="text-4xl font-logo tracking-tight text-[#373536] dark:text-white">
            <span className="font-extrabold">LIT</span>
            <span className="font-medium">LIB</span>
          </h6>
          <p className="text-[var(--color-text-secondary)]">
            Making library management simple, efficient, and beautiful for
            institutions worldwide.
          </p>

          <div className="flex gap-4 mt-4">
            {Object.entries(socialLinks).map(
              ([name, { icon: Icon, url }], i) => (
                <Link
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center hover:bg-[var(--color-accent-hover)] md:cursor-pointer"
                  title={name}
                >
                  <Icon />
                </Link>
              )
            )}
          </div>
        </div>

        {sections.map((section, i) => (
          <div key={i}>
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-4">
              {section.title}
            </h3>
            <ul className="text-[var(--color-text-secondary)] space-y-2">
              {section.items.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="hover:text-[var(--color-accent)] transition-colors"
                  >
                    {item.name}
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
