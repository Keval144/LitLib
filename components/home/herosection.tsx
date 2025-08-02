// components/HeroSection.tsx

import clsx from "clsx";
import HeroButton from "@/components/button/herobutton";

export default function HeroSection() {
  return (
    <section
      className={clsx(
        "min-h-[100dvh] flex items-center justify-center text-center px-5 sm:px-10 pt-32 pb-16",
        "bg-gradient-to-br from-[var(--color-bg)] to-[var(--color-card)]"
      )}
      id="home"
    >
      <div className="max-w-3xl w-full animate-fadeInUp">
        <h1
          className={clsx(
            "text-[clamp(3rem,10vw,5rem)] font-extrabold leading-tight",
            "bg-gradient-to-br from-[var(--color-text)] to-[var(--color-accent)] text-4xl",
            "bg-clip-text text-transparent"
          )}
        >
          Organize Knowledge Instantly.
        </h1>
        <p className="mt-6 text-xs sm:text-xl  text-[var(--color-text-secondary)] max-w-xl mx-auto ">
          LitLib helps libraries manage books, members, and borrowing — fast and
          beautifully.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <HeroButton
            href="/signup"
            label="Get Started"
            style={{ backgroundColor: "var(--color-accent)" }}
          />
          <HeroButton
            href="https://github.com/keval144/litlib"
            label="Get Documentation"
            variant="bordered"
            className="rounded-full px-6 py-3 text-base font-semibold border-[var(--color-border)] text-[var(--color-text)] border-2"
          />
        </div>
      </div>
    </section>
  );
}
