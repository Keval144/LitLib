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

import { useSession } from "next-auth/react";
import { ThemeSwitch } from "@/components/common/theme-switch";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import Themebasedlogo from "@/components/common/themebasedlogo";
import ExpandButton from "@/components/button/signupbutton";

import BlackLogo from "@/public/assets/logos/black/blackfulllogo.png";
import WhiteLogo from "@/public/assets/logos/white/whitefulllogo.png";
import { FaArrowUp } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { useLogout } from "@/lib/logout";
import { IsUserLoggedIn } from "@/lib/isloggedin";
import { SessionProvider } from "next-auth/react";

const NAV_LINKS = [
  { name: "Search", href: "/search" },
  { name: "Announcement", href: "/announcement" },
  { name: "Events", href: "/events" },
];

const DesktopNavLinks = () => {
  const pathname = usePathname();
  return (
    <NavbarContent className="hidden sm:flex space-x-5 px-20">
      {NAV_LINKS.map((link) => {
        const isActive = pathname === link.href;

        return (
          <NavbarItem key={link.name}>
            <Link
              href={link.href}
              className={`
                ${isActive ? "text-[hsl(var(--theme-accent))] font-semibold" : "black:text-white"}
                hover:text-[hsl(var(--theme-accent-hover))]
              `}
            >
              {link.name}
            </Link>
          </NavbarItem>
        );
      })}
    </NavbarContent>
  );
};

const AuthLinks = () => {
  const isLoginned = IsUserLoggedIn();
  const logout = useLogout();
  const { data: session } = useSession();
  if (!isLoginned) {
    return (
      <>
        <NavbarItem className="hidden lg:flex hover:text-[hsl(var(--theme-accent-hover))]">
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex items-center gap-1">
          <ExpandButton
            label="Sign Up"
            icon={<FaArrowUp size={15} className="rotate-45 text-white" />}
          />
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
            <p className="font-semibold">{session?.user?.name}</p>
            <p className="font-extralight">{session?.user.email}</p>
          </DropdownItem>
          <DropdownItem key="settings">My Settings</DropdownItem>

          <DropdownItem key="logout" color="danger">
            <button onClick={logout}>Log Out</button>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </NavbarContent>
  );
};

const MENU_ITEMS = ["Profile", "Dashboard", "Help & Feedback", "Log Out"];
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
    <SessionProvider>
      <HeroUINavbar
        className={clsx(
          "glass-navbar",
          "z-50 fixed left-1/2 -translate-x-1/2 top-5 w-[90%] rounded-full dark:border-2",
          "border border-[var(--navbar-border)] bg-[var(--navbar-bg)] backdrop-blur-2xl",
          "shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300"
        )}
        isBordered
        isBlurred
        maxWidth="full"
        position="sticky"
      >
        <NavbarContent justify="start">
          <NavbarBrand className=" ">
            <Link href={"/"}>
              <Themebasedlogo
                lightLogo={WhiteLogo}
                darkLogo={BlackLogo}
                alt="Lit Lab Full Logo"
                height={40}
              />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <DesktopNavLinks />

        <NavbarContent justify="end">
          <AuthLinks />
          <ThemeSwitch />
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </NavbarContent>

        <MobileMenuItems />
      </HeroUINavbar>
    </SessionProvider>
  );
};
