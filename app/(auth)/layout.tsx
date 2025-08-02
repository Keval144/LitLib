import Carousel, { Slide } from "@/components/auth/imageslider";
import { Metadata } from "next";
import Link from "next/link";
import clsx from "clsx";
import { ThemeSwitch } from "@/components/common/theme-switch";

export const metadata: Metadata = {
  description: "Authentication Pages of LitLib",
};

import LibraryPhoto from "@/public/assets/images/slides/1.jpg";
import GirlGettingBook from "@/public/assets/images/slides/2.jpg";
import StudySpace from "@/public/assets/images/slides/3.jpg";

import BlackLogo from "@/public/assets/logos/black/blackfulllogo.png";
import WhiteLogo from "@/public/assets/logos/white/whitefulllogo.png";
import Themebasedlogo from "@/components/common/themebasedlogo";
import Authfooter from "@/components/auth/authfooter";
import ProvidersToast from "@/components/common/toast-provider";

const slides: Slide[] = [
  { src: LibraryPhoto, alt: "A Guy in library holding IPad" },
  { src: GirlGettingBook, alt: "Girl getting book from library" },
  { src: StudySpace, alt: "Study Space with Macbook and Books" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProvidersToast>
      <section className="flex min-h-[100dvh] flex-col md:flex-row">
        {/* Column 1: Carousel */}
        <div className="hidden w-1/2 md:block md:w-2/3">
          <Carousel slides={slides} autoSlide />
        </div>
        {/* Column 2: Content + Theme Switch + Logo */}
        <div className="relative flex w-full flex-col p-6 md:w-1/3">
          {/* Main Content */}
          <div
            className={clsx(
              "mx-auto w-full max-w-md rounded-xl border-2 border-[var(--navbar-border)] bg-[var(--navbar-bg)] p-6 opacity-80 shadow-lg backdrop-blur-md",
              "mb-8 flex flex-col justify-center sm:min-h-0",
            )}
          >
            <div className="relative flex items-center justify-center">
              <Link href={"/"}>
                <Themebasedlogo
                  lightLogo={WhiteLogo}
                  darkLogo={BlackLogo}
                  alt="Lit Lab Full Logo"
                  height={45}
                />
              </Link>

              {/* Theme switch overlaps logo */}
              <div className="absolute right-[-10px] top-[-10px] z-30 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--navbar-border)] bg-[var(--navbar-bg)] shadow-lg backdrop-blur-md">
                <ThemeSwitch />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center space-y-2 p-4 text-center">
              <div
                className={clsx(
                  "text-[clamp(1.5rem,4vw,2rem)] font-extrabold",
                  "bg-gradient-to-br from-[var(--color-text)] to-[var(--color-accent)]",
                  "bg-clip-text text-transparent",
                )}
              >
                Join our Library
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Low-key the best place to level up
              </div>
            </div>

            {children}
          </div>

          <Authfooter />
        </div>
      </section>
    </ProvidersToast>
  );
}
