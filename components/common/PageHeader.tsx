"use client";

import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";

export type Crumb = { label: string; href?: string };

export default function PageHeader({
  title,
  items,
}: {
  title: string;
  items: Crumb[];
}) {
  return (
    <div className="mb-6 w-full max-w-full">
      <Breadcrumbs>
        {items.map((c, idx) => (
          <BreadcrumbItem key={`${c.label}-${idx}`} href={c.href}>
            {c.label}
          </BreadcrumbItem>
        ))}
      </Breadcrumbs>
      <h1 className="mt-2 text-3xl font-bold leading-tight text-[var(--color-text)]">
        {title}
      </h1>
    </div>
  );
}

