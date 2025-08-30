"use client";
import { useState, useEffect } from "react";
import { SidebarLink } from "@/components/admin/sidebar";
import { Links } from "@/types/types";
import { cn } from "@/lib/utils";

type SidebarAccordionProps = {
  title: string;
  items: Links[];
  openIcon: React.ReactNode;
  closedIcon: React.ReactNode;
  sidebarOpen: boolean; // <- new prop
};

export function SidebarAccordion({
  title,
  items,
  openIcon,
  closedIcon,
  sidebarOpen,
}: SidebarAccordionProps) {
  const [open, setOpen] = useState(false);

  // Close accordion automatically when sidebar closes
  useEffect(() => {
    if (!sidebarOpen) {
      setOpen(false);
    }
  }, [sidebarOpen]);

  return (
    <div className="w-full">
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "flex w-full items-center justify-between rounded-lg px-2 py-2 text-left text-sm font-medium",
          "transition-all",
          "text-[var(--color-text)]",
          "hover:bg-[var(--theme-accent-hover)]",
          "dark:hover:bg-[var(--theme-accent-hover)]",
        )}
      >
        <span className="flex items-center gap-2 ps-1">
          {open ? openIcon : closedIcon} {title}
        </span>
        <span
          className={cn(
            "transition-transform",
            open ? "rotate-180" : "rotate-0",
          )}
        >
          ▾
        </span>
      </button>

      {/* Accordion Content */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          open ? "max-h-40" : "max-h-0",
        )}
      >
        <div className="mt-2 flex flex-col gap-1 pl-7">
          {items.map((item, idx) => (
            <SidebarLink key={idx} link={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
