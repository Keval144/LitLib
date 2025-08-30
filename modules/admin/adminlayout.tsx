"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/admin/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { ThemeSwitch } from "@/components/common/theme-switch";
import Image from "next/image";
import litliblogo from "@/public/icon1.png";
import Link from "next/link";
import { FaFile, FaFolder, FaFolderOpen } from "react-icons/fa";
import { SidebarAccordion } from "@/components/common/SidebarAccordion";
import { useSession } from "next-auth/react";
import { useLogout } from "@/hooks/uselogout";

export function LayoutAdmin({ children }: { children: React.ReactNode }) {
  const links = [
    {
      label: "Dashboard",
      href: "/",
      icon: (
        <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Profile",
      href: "#",
      icon: (
        <IconUserBolt className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Settings",
      href: "#",
      icon: (
        <IconSettings className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];

  const accordions = [
    {
      title: "Items",
      items: [
        { label: "Item List", href: "/ItemList", icon: <FaFile /> },
        { label: "Item Add", href: "/ItemAdd", icon: <FaFile /> },
      ],
      openIcon: <FaFolderOpen />,
      closedIcon: <FaFolder />,
    },
    {
      title: "Blog",
      items: [
        { label: "Blog List", href: "/blogs", icon: <FaFile /> },
        { label: "Blog Add", href: "/blogadd", icon: <FaFile /> },
      ],
      openIcon: <FaFolderOpen />,
      closedIcon: <FaFolder />,
    },
  ];
  const [open, setOpen] = useState(false);
  const { data: session, status } = useSession();
  const logout = useLogout();

  return (
    <div
      className={cn(
        "mx-auto flex w-full flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800 md:flex-row",
        "h-screen",
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden scrollbar-hide">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {/* Render everything except last */}
              {links.slice(0, -1).map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
              {accordions.map((acc, idx) => (
                <SidebarAccordion
                  key={idx}
                  title={acc.title}
                  items={acc.items}
                  openIcon={acc.openIcon}
                  closedIcon={acc.closedIcon}
                  sidebarOpen={open}
                />
              ))}
              <button
                key="logout"
                onClick={logout}
                className="flex items-center gap-2 rounded px-2 py-1 text-red-600 hover:bg-red-100"
              >
                {links[links.length - 1].icon}
                <span>{links[links.length - 1].label}</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <SidebarLink
              link={{
                label: "Manu Arora",
                href: "#",
                icon: (
                  <img
                    src="https://assets.aceternity.com/manu.png"
                    className="h-7 w-7 shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
            {/* Add ThemeSwitch component here */}
            <div className="px-3 py-1">
              <ThemeSwitch />
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      {children}
    </div>
  );
}

export const Logo = () => {
  return (
    <Link
      href="/"
      className="relative z-20 flex items-center py-2 text-sm font-normal text-black dark:text-white"
    >
      <Image
        src={litliblogo}
        alt="litlib"
        height={30}
        width={30}
        className="shrink-0 rounded-md"
      />
      <div className="h-5 w-2 shrink-0 rounded-bl-sm rounded-br-lg rounded-tl-lg rounded-tr-sm" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="whitespace-pre font-medium"
      >
        LitLib
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      href="/"
      className="relative z-20 flex items-center justify-center py-1 text-sm font-normal"
    >
      <Image
        src={litliblogo}
        alt="litlib"
        height={25}
        className="ml-1 rounded-md"
      ></Image>
    </Link>
  );
};
