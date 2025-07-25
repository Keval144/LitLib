export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "LitLib",
  description:
    "empowers libraries with digital tools for seamless book tracking, user management, and real-time lending operations—all in one intuitive platform.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/",
    twitter: "https://twitter.com/",
    docs: "https://chatgpt.com/",
    discord: "https://discord.gg/",
    sponsor: "https://patreon.com/",
  },
};

export const AuthConfig = {
  name: "LitLib - Authentication",
  description:
    "Authentication form of LitLib ",
};
