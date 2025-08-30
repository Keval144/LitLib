// types.ts
import React from "react";

export type Links = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

export type SidebarAccordionProps = {
  title: string;
  items: Links[]; // sub-links inside accordion
  openIcon?: React.ReactNode; // icon when expanded
  closedIcon?: React.ReactNode; // icon when collapsed
};
