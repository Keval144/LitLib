import clsx from "clsx";

export default function Search() {
  return (
    <section
      className={clsx(
        "min-h-screen px-5 sm:px-10 pt-32 pb-16",
        "bg-gradient-to-br from-[var(--color-bg)] to-[var(--color-card)]"
      )}
      id="Search"
    >
      Search Here
    </section>
  );
}
