"use client";

import Image, { StaticImageData } from "next/image";
import { useMountedTheme } from "@/hooks/useMountedTheme";

type ThemeBasedLogoProps = {
  lightLogo: StaticImageData;
  darkLogo: StaticImageData;
  alt: string;
  height?: number;
};

export default function ThemeBasedLogo({
  lightLogo,
  darkLogo,
  alt,
  height,
}: ThemeBasedLogoProps) {
  const { theme, mounted } = useMountedTheme();

  if (!mounted) return null;

  const imageSrc = theme === "dark" ? darkLogo : lightLogo;

  return (
    <Image
      src={imageSrc}
      alt={alt}
      height={height}
      quality={100}
      priority
    />
  );
}
