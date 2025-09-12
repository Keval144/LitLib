import clsx from "clsx";
import PageHeader from "@/components/common/PageHeader";

export default function Events() {
  return (
    <section
      className={clsx(
        "min-h-[100dvh] px-5 pb-16 pt-32 sm:px-10",
        "bg-gradient-to-br from-[var(--color-bg)] to-[var(--color-card)]",
      )}
      id="Events"
    >
      <div className="mx-auto w-full max-w-6xl">
        <PageHeader title="Events" items={[{ label: "Home", href: "/" }, { label: "Events" }]} />
        Event Here
      </div>
    </section>
  );
}
