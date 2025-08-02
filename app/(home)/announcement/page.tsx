import clsx from "clsx";

export default function Announcement() {
  return (
    <section
      className={clsx(
        "min-h-[100dvh] px-5 sm:px-10 pt-32 pb-16",
        "bg-gradient-to-br from-[var(--color-bg)] to-[var(--color-card)]"
      )}
      id="Announcement"
    >
      Announcement Here
    </section>
  );
}
