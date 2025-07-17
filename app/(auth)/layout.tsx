import { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Authentication Pages of LitLib",
};
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
