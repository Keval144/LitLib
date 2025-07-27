// app/providers.tsx
"use client";

import { SessionProvider } from "next-auth/react";
import { HeroUIProvider, ToastProvider } from "@heroui/react";

export default function ProvidersToast({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <HeroUIProvider>
        <ToastProvider
          toastProps={{
            color: "primary",
            variant: "flat",
            timeout: 2000,
            hideIcon: true,
          }}
        />
        {children}
      </HeroUIProvider>
    </SessionProvider>
  );
}
