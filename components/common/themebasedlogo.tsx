'use client';

import Image, { StaticImageData } from 'next/image';
import { useMountedTheme } from '@/hooks/useMountedTheme';

type ThemeBasedLogoProps = {
  lightLogo: StaticImageData;
  darkLogo: StaticImageData;
  alt: string;
};

export default function themebasedlogo({ lightLogo, darkLogo , alt }: ThemeBasedLogoProps) {
  const { theme, mounted } = useMountedTheme();

  if (!mounted) return null;

  const imageSrc = theme === 'dark' ? darkLogo : lightLogo;

  return (
      <Image
        src={imageSrc}
        alt={alt}
        height={45}
        quality={100}
        priority
      />
  );
}
