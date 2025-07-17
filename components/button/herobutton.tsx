"use client";

import Link from "next/link";
import { Button } from "@heroui/button";

type ButtonVariant =
  | "solid"
  | "flat"
  | "bordered"
  | "light"
  | "faded"
  | "shadow"
  | "ghost";

type HeroButtonProps = {
  href: string;
  label: string;
  className?: string;
  style?: React.CSSProperties; // Add style prop support
  variant?: ButtonVariant;
};

export default function HeroButton({
  href,
  label,
  className,
  style,
  variant = "solid",
}: HeroButtonProps) {
  return (
    <Button
      as={Link}
      href={href}
      className={`${ // apply default styles only if variant is solid, else allow full control via className
        variant === "solid"
          ? "rounded-full px-6 py-3 text-base font-semibold text-white shadow-md"
          : className ?? ""
      } ${variant !== "solid" ? className ?? "" : ""}`.trim()}
      style={style}
      variant={variant}
    >
      {label}
    </Button>
  );
}
