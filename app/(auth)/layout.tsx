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
    <>
      <section className="min-h-screen flex flex-col md:flex-row ">
        {/* Column 1: Carousel */}
        <div className="hidden md:block w-1/2 md:w-2/3 ">
          <Carousel slides={slides} autoSlide />
        </div>
        {/* Column 2: Content + Theme Switch + Logo */}
        <div className="w-full md:w-1/3 p-6 relative flex flex-col">
          {/* Main Content */}
          <div
            className={clsx(
              "w-full max-w-md mx-auto rounded-xl border-2 bg-[var(--navbar-bg)] backdrop-blur-md border-[var(--navbar-border)] opacity-80 shadow-lg p-6",
              "sm:min-h-0 flex flex-col justify-center mb-8"
            )}
          >
            <div className="relative flex justify-center items-center ">
              <Link href={"/"}>
                <Themebasedlogo
                  lightLogo={WhiteLogo}
                  darkLogo={BlackLogo}
                  alt="Lit Lab Full Logo"
                  height={45}
                />
              </Link>

              {/* Theme switch overlaps logo */}
              <div className="absolute top-[-10px] right-[-10px] z-30 w-10 h-10 border-2 rounded-full flex items-center justify-center bg-[var(--navbar-bg)] backdrop-blur-md border-[var(--navbar-border)] shadow-lg">
                <ThemeSwitch />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center p-4 text-center space-y-2">
              <div
                className={clsx(
                  "text-[clamp(1.5rem,4vw,2rem)] font-extrabold",
                  "bg-gradient-to-br from-[var(--color-text)] to-[var(--color-accent)]",
                  "bg-clip-text text-transparent"
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
    </>
  );
}
