import clsx from "clsx";
import PageHeader from "@/components/common/PageHeader";

export default function Announcement() {
  return (
    <section
      className={clsx(
        "min-h-[100dvh] px-5 pb-16 pt-32 sm:px-10",
        "bg-gradient-to-br from-[var(--color-bg)] to-[var(--color-card)]",
      )}
      id="Announcement"
    >
      <div className="mx-auto w-full max-w-6xl">
        <PageHeader title="Announcement" items={[{ label: "Home", href: "/" }, { label: "Announcement" }]} />
        Announcement Here
      </div>
    </section>
  );
}
