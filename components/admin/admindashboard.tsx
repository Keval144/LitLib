export default function AdminDashboard() {
  return (
    <div className="flex flex-1 overflow-hidden">
      <div className="flex h-full w-full flex-1 flex-col gap-4 rounded-tl-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-4 dark:bg-[var(--color-bg)] md:p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-[var(--color-text)]">
            Dashboard Overview
          </h1>
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-200">
            Updated today
          </span>
        </div>
      </div>
    </div>
  );
}
