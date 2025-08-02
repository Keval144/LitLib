import { ReactNode, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

interface ExpandButtonProps {
  href?: string;
  label?: string;
  icon?: ReactNode;
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
        className="group relative inline-block"
        onMouseEnter={onHoverStart}
        onMouseLeave={onHoverEnd}
      >
        {/* Expanding background */}
        <motion.span
          className="w-22 absolute inset-0 top-1 z-0 h-9 origin-[85%_10%] rounded-full bg-[color:var(--color-accent-hover)]"
          animate={controls}
          initial={{ scaleX: 0 }}
          style={{ transformOrigin: "85% 50%" }}
        />

        <button className="relative z-10 flex items-center gap-3 rounded-full px-3 py-2 text-sm font-medium text-[color:var(--color-text)] hover:text-white dark:text-white">
          <span className="whitespace-nowrap">{label}</span>

          {icon && (
            <motion.span
              className="z-10 flex h-7 w-7 items-center justify-center rounded-full transition-colors duration-200"
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
