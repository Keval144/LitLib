import { format } from "date-fns";

export default function Authfooter() {
  const now = new Date();
  return (
    <>
      <div className="text-center border-t border-[var(--navbar-border)]   p-2   text-[var(--color-text-secondary)]">
        &copy; {format(now, "yyyy")} LitLib. All rights reserved.
      </div>
    </>
  );
}
