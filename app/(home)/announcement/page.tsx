import clsx from "clsx";

export default function Announcement() {
  return (
    <section
      className={clsx(
        "min-h-[100dvh] px-5 pb-16 pt-32 sm:px-10",
        "bg-gradient-to-br from-[var(--color-bg)] to-[var(--color-card)]",
      )}
      id="Announcement"
    >
      Announcement Here
    </section>
  );
}
