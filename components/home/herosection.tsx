// components/HeroSection.tsx

import clsx from "clsx";
import HeroButton from "@/components/button/herobutton";

export default function HeroSection() {
  return (
    <section
      className={clsx(
        "flex min-h-[100dvh] items-center justify-center px-5 pb-16 pt-32 text-center sm:px-10",
        "bg-gradient-to-br from-[var(--color-bg)] to-[var(--color-card)]",
      )}
      id="home"
    >
      <div className="animate-fadeInUp w-full max-w-3xl">
        <h1
          className={clsx(
            "text-[clamp(3rem,10vw,5rem)] font-extrabold leading-tight",
            "bg-gradient-to-br from-[var(--color-text)] to-[var(--color-accent)] text-4xl",
            "bg-clip-text text-transparent  ",
          )}
        >
          Organize Knowledge Instantly.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-xs text-[var(--color-text-secondary)] sm:text-xl">
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
            className="rounded-full border-2 border-[var(--color-border)] px-6 py-3 text-base font-semibold text-[var(--color-text)]"
          />
        </div>
      </div>
    </section>
  );
}
