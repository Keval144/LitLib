"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";

import {
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@heroui/react";

import { ThemeSwitch } from "@/components/common/theme-switch";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import Themebasedlogo from "@/components/common/themebasedlogo";

import BlackLogo from "@/public/assets/logos/black/blackfulllogo.png";
import WhiteLogo from "@/public/assets/logos/white/whitefulllogo.png";
import { FaArrowUp } from "react-icons/fa";

const NAV_LINKS = [
  { name: "Features", href: "#features" },
  { name: "Customers", href: "#customers", active: true },
  { name: "Integrations", href: "#integrations" },
];

const MENU_ITEMS = [
  "Profile",
  "Dashboard",
  "Activity",
  "Analytics",
  "System",
  "Deployments",
  "My Settings",
  "Team Settings",
  "Help & Feedback",
  "Log Out",
];

const DesktopNavLinks = () => (
  <NavbarContent className="hidden sm:flex space-x-5 px-20">
    {NAV_LINKS.map((link) => (
      <NavbarItem key={link.name} isActive={link.active}>
        <Link href={link.href}>{link.name}</Link>
      </NavbarItem>
    ))}
  </NavbarContent>
);

const AuthLinks = ({ isLoginned }: { isLoginned: boolean }) => {
  if (!isLoginned) {
    return (
      <>
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex items-center gap-1">
          <Link href="#">Sign Up</Link>
          <FaArrowUp className="text-sm rotate-45" />
        </NavbarItem>
      </>
    );
  }

  return (
    <NavbarContent as="div" justify="end" className="hidden lg:flex">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            color="secondary"
            name="Keval Kansagra"
            size="sm"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Menu" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">zoey@example.com</p>
          </DropdownItem>
          <DropdownItem key="settings">My Settings</DropdownItem>
          <DropdownItem key="team_settings">Team Settings</DropdownItem>
          <DropdownItem key="analytics">Analytics</DropdownItem>
          <DropdownItem key="logout" color="danger">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </NavbarContent>
  );
};

const MobileMenuItems = () => (
  <NavbarMenu className="fixed inset-0 z-20 bg-[var(--color-bg)]/80 backdrop-blur-lg !w-screen !h-screen">
    {MENU_ITEMS.map((item, index) => (
      <NavbarMenuItem key={`${item}-${index}`}>
        <div className={index === 0 ? "pt-20" : ""}>
          <Link
            href="#"
            className={clsx(
              "w-full ps-10 text-base",
              index === 2 && "text-primary",
              index === MENU_ITEMS.length - 1 && "text-red-600 font-semibold",
              index !== 2 &&
                index !== MENU_ITEMS.length - 1 &&
                "text-foreground"
            )}
          >
            {item}
          </Link>
        </div>
      </NavbarMenuItem>
    ))}
  </NavbarMenu>
);

export const HomeNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".glass-navbar") as HTMLElement;
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.style.transform = "translateX(-50%) scale(0.95)";
          navbar.style.opacity = "0.95";
        } else {
          navbar.style.transform = "translateX(-50%) scale(1)";
          navbar.style.opacity = "1";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HeroUINavbar
      className={clsx(
        "glass-navbar",
        "z-50 fixed left-1/2 -translate-x-1/2 top-5 w-[90%] rounded-full",
        "border border-[var(--navbar-border)] bg-[var(--navbar-bg)] backdrop-blur-2xl",
        "shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300"
      )}
      isBordered
      isBlurred
      maxWidth="full"
      position="sticky"
    >
      <NavbarContent justify="start">
        <NavbarBrand>
          <Themebasedlogo
            lightLogo={WhiteLogo}
            darkLogo={BlackLogo}
            alt="Lit Lab Full Logo"
          />
        </NavbarBrand>
      </NavbarContent>

      <DesktopNavLinks />

      <NavbarContent justify="end">
        <AuthLinks isLoginned={false} />
        <ThemeSwitch />
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </NavbarContent>

      <MobileMenuItems />
    </HeroUINavbar>
  );
};
