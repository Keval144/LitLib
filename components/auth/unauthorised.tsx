"use client";
import AstroImage from "@/public/assets/images/astro.png";
import Image from "next/image";
import HeroButton from "@/components/button/herobutton";

export default function UnAuthorised() {
  return (
    <div className="relative min-h-[100dvh] overflow-hidden">
      {/* Twinkling Stars */}
      <div className="absolute inset-0 z-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full hidden opacity-70 dark:bg-white dark:block"
            style={{
              width: `${Math.random() + 1}px`,
              height: `${Math.random() + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${Math.random() * 3 + 2}s infinite ease-in-out`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[100dvh] flex-col items-center justify-center space-y-4 px-4 text-center">
        <h1 className="text-6xl font-bold drop-shadow">401</h1>
        <h2 className="text-2xl font-semibold dark:text-white/80">
          Unauthorized Access
        </h2>
        <Image src={AstroImage} alt="Astronaut Sitting" height={200} />
        <p className="text-lg dark:text-white/70">Access Denied</p>
        <p className="max-w-md text-sm dark:text-white/60">
          Houston, we have a problem. You don&apos;t have permission to access
          this cosmic destination.
        </p>
        <HeroButton
          href="/"
          label="Home"
          style={{ backgroundColor: "var(--color-accent)" }}
        />
      </div>
    </div>
  );
}
