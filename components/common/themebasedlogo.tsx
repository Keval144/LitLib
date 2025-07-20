"use client";

import Image, { StaticImageData } from "next/image";
import { useMountedTheme } from "@/hooks/useMountedTheme";

type ThemeBasedLogoProps = {
  lightLogo: string | StaticImageData;
  darkLogo: string | StaticImageData;
  alt: string;
  height?: number;
  width?: number;
};

export default function ThemeBasedLogo({
  lightLogo,
  darkLogo,
  alt,
  height = 50,
  width = 0,
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
      width={width}
      priority
    />
  );
}
