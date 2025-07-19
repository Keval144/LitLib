import { ReactNode, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

interface ExpandButtonProps {
  href?: string;
  label?: string;
  icon?: ReactNode;  // Icon as a prop
}

export default function ExpandButton({
  href = "/signup",
  label = "Sign Up",
  icon,
}: ExpandButtonProps) {
  const controls = useAnimation();
  const [hovered, setHovered] = useState(false);

  const onHoverStart = () => {
    setHovered(true);
    controls.start({
      scaleX: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    });
  };

  const onHoverEnd = () => {
    setHovered(false);
    controls.start({
      scaleX: 0,
      transition: { duration: 0.3, ease: "easeIn" },
    });
  };

  return (
    <Link href={href}>
      <div
        className="relative inline-block group"
        onMouseEnter={onHoverStart}
        onMouseLeave={onHoverEnd}
      >
        {/* Expanding background */}
        <motion.span
          className="
            absolute inset-0 rounded-full
            origin-[85%_10%]
            h-9 w-22 top-1
            bg-[color:var(--color-accent-hover)]
            z-0
          "
          animate={controls}
          initial={{ scaleX: 0 }}
          style={{ transformOrigin: "85% 50%" }}
        />

        <button
          className="
            relative flex items-center gap-3
            px-3 py-2 rounded-full
            text-sm font-medium
            text-[color:var(--color-text)]
            dark:text-white
            hover:text-white
            z-10
          "
        >
          <span className="whitespace-nowrap">{label}</span>

          {icon && (
            <motion.span
              className="
                flex items-center justify-center
                h-7 w-7 rounded-full
                transition-colors duration-200
                z-10
              "
              animate={{
                backgroundColor: hovered
                  ? "hsl(var(--theme-accent-hover))"
                  : "hsl(var(--theme-accent))",
              }}
            >
              {icon}
            </motion.span>
          )}
        </button>
      </div>
    </Link>
  );
}
