"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import ExpandButton from "@/components/button/signupbutton";

import { SessionProvider, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useLogout } from "@/hooks/uselogout";

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

import Themebasedlogo from "@/components/common/themebasedlogo";
import BlackLogo from "@/public/assets/logos/black/blackfulllogo.png";
import WhiteLogo from "@/public/assets/logos/white/whitefulllogo.png";
import { FaArrowUp } from "react-icons/fa6";

const NAV_LINKS = [
  { name: "Search", href: "/search" },
  { name: "Announcement", href: "/announcement" },
  { name: "Events", href: "/events" },
];

const DesktopNavLinks = () => {
  //To Activate Highlight
  const pathname = usePathname();

  return (
    <NavbarContent className="hidden space-x-5 px-20 sm:flex">
      {NAV_LINKS.map((link) => {
        const isActive = pathname === link.href;

        return (
          <NavbarItem key={link.name}>
            <Link
              href={link.href}
              className={` ${isActive ? "font-semibold text-[hsl(var(--theme-accent))]" : "black:text-white"} hover:text-[hsl(var(--theme-accent-hover))]`}
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
  const { data: session, status } = useSession();
  const logout = useLogout();

  if (status === "loading") return null;
  if (!session) {
    return (
      <>
        <NavbarItem className="hidden hover:text-[hsl(var(--theme-accent-hover))] lg:flex">
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem className="hidden items-center gap-1 lg:flex">
          <ExpandButton
            label="Sign Up"
            icon={<FaArrowUp size={15} className="rotate-45 text-white" />}
          />
        </NavbarItem>
      </>
    );
  }

  const isAdmin = (session.user as any)?.role === "ADMINISTRATOR";

  return (
    <NavbarContent as="div" justify="end" className="hidden lg:flex">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            name={session.user?.name || "User"}
            size="sm"
            color="secondary"
            src={
              session.user?.image ?? "https://i.pravatar.cc/150?u=placeholder"
            }
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Menu" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">{session.user?.name}</p>
          </DropdownItem>
          <DropdownItem key="email">
            <p className="font-extralight">{session.user?.email}</p>
          </DropdownItem>
          {isAdmin ? (
            <>
              <DropdownItem key="admin-items">
                <Link href="/admin/items">Admin Items</Link>
              </DropdownItem>
              <DropdownItem key="admin-reservations">
                <Link href="/admin/reservations">Reservations</Link>
              </DropdownItem>
              <DropdownItem key="admin-fines">
                <Link href="/admin/fines">Fines</Link>
              </DropdownItem>
            </>
          ) : (
            <>
              <DropdownItem key="dashboard">
                <Link href="/">Dashboard</Link>
              </DropdownItem>
            </>
          )}
          <DropdownItem key="settings">My Settings</DropdownItem>
          <DropdownItem key="logout" color="danger" onClick={logout}>
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </NavbarContent>
  );
};

const MENU_ITEMS = ["Profile", "Dashboard", "Help & Feedback", "Log Out"];
const MobileMenuItems = () => {
  const { data: session, status } = useSession();
  const logout = useLogout();
  const isLoggedIn = status === "authenticated" && !!session;
  const isAdmin = (session?.user as any)?.role === "ADMINISTRATOR";

  return (
    <NavbarMenu className="bg-[var(--color-bg)]/80 fixed inset-0 z-20 !h-screen !w-screen backdrop-blur-lg">
      <NavbarMenuItem>
        <Link
          href="/search"
          className="block w-full ps-10 pt-20 text-base text-foreground"
        >
          Search
        </Link>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Link
          href="/announcement"
          className="block w-full ps-10 text-base text-foreground"
        >
          Announcement
        </Link>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Link
          href="/events"
          className="block w-full ps-10 text-base text-foreground"
        >
          Events
        </Link>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Link href="/" className="block w-full ps-10 text-base text-primary">
          Dashboard
        </Link>
      </NavbarMenuItem>

      {!isLoggedIn ? (
        <>
          <NavbarMenuItem>
            <Link
              href="/login"
              className="block w-full ps-10 text-base text-foreground"
            >
              Login
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              href="/signup"
              className="block w-full ps-10 text-base font-semibold text-foreground"
            >
              Sign Up
            </Link>
          </NavbarMenuItem>
        </>
      ) : (
        <NavbarMenuItem>
          <button
            onClick={logout}
            className="block w-full ps-10 text-base font-semibold text-red-600"
          >
            Log Out
          </button>
        </NavbarMenuItem>
      )}
    </NavbarMenu>
  );
};

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
          "fixed left-1/2 top-5 z-50 w-[90%] -translate-x-1/2 rounded-full dark:border-2",
          "border border-[var(--navbar-border)] bg-[var(--navbar-bg)] backdrop-blur-2xl",
          "shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all duration-300 dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]",
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
