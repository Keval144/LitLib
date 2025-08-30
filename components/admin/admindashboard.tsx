"use client";
import React, { useState, useEffect } from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { useSession } from "next-auth/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
);

interface Stats {
  totalBooks: number;
  totalUsers: number;
  activeBorrowings: number;
  pendingReservations: number;
  overdueItems: number;
  totalFines: number;
}

interface Activity {
  id: number;
  user: string;
  action: string;
  item: string;
  time: string;
}

interface PopularItem {
  id: number;
  title: string;
  borrowCount: number;
}

const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState<Stats | null>(null);
  const [recentActivity, setRecentActivity] = useState<Activity[]>([]);
  const [popularItems, setPopularItems] = useState<PopularItem[]>([]);
  const [monthlyBorrowings, setMonthlyBorrowings] = useState<{
    labels: string[];
    data: number[];
  }>({ labels: [], data: [] });
  const [itemsByCategory, setItemsByCategory] = useState<{
    labels: string[];
    data: number[];
  }>({ labels: [], data: [] });
  const [userDistribution, setUserDistribution] = useState<{
    labels: string[];
    data: number[];
  }>({ labels: [], data: [] });
  const { data: session } = useSession();

  useEffect(() => {
    let mounted = true;
    fetch("/api/dashboard")
      .then((res) => res.json())
      .then((payload) => {
        if (!mounted) return;
        if (payload.error) return console.error("API error:", payload.error);
        setStats(payload.stats ?? null);
        setPopularItems(payload.popularItems ?? []);
        setRecentActivity(payload.recentActivity ?? []);
        setMonthlyBorrowings(
          payload.monthlyBorrowings ?? { labels: [], data: [] },
        );
        setItemsByCategory(payload.itemsByCategory ?? { labels: [], data: [] });
        setUserDistribution(
          payload.userDistribution ?? { labels: [], data: [] },
        );
      })
      .catch((err) => console.error("fetch error:", err));
    return () => {
      mounted = false;
    };
  }, []);

  if (!stats)
    return (
      <div className="flex min-h-[60vh] items-center justify-center text-lg">
        Loading dashboard...
      </div>
    );

  const chartOpts = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: "bottom" as const } },
  };

  const monthlyData = {
    labels: monthlyBorrowings.labels,
    datasets: [
      {
        label: "Borrowings",
        data: monthlyBorrowings.data,
        borderColor: "#4f46e5",
        backgroundColor: "rgba(79,70,229,0.15)",
        tension: 0.2,
        fill: true,
      },
    ],
  };

  const categoryData = {
    labels: itemsByCategory.labels,
    datasets: [
      {
        label: "Items",
        data: itemsByCategory.data,
        backgroundColor: itemsByCategory.labels.map(
          (_, i) =>
            ["#4f46e5", "#6366f1", "#10b981", "#f59e0b", "#ef4444"][i % 5],
        ),
      },
    ],
  };

  const distributionData = {
    labels: userDistribution.labels,
    datasets: [
      {
        label: "Users",
        data: userDistribution.data,
        backgroundColor: userDistribution.labels.map(
          (_, i) => ["#4f46e5", "#6366f1", "#818cf8", "#a5b4fc"][i % 4],
        ),
      },
    ],
  };

  const statsCards = [
    { label: "Total Books", value: stats.totalBooks },
    { label: "Total Users", value: stats.totalUsers },
    { label: "Active Borrowings", value: stats.activeBorrowings },
    { label: "Pending Reservations", value: stats.pendingReservations },
    { label: "Overdue Items", value: stats.overdueItems },
    { label: "Total Fines", value: `$${stats.totalFines.toFixed(2)}` },
  ];

  return (
    <div className="h-full w-full bg-[var(--color-bg)] p-4 md:p-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold md:text-3xl">
          Library Management Dashboard
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          Welcome back{" "}
          <span className="font-semibold">{session?.user?.name ?? "User"}</span>
        </p>
      </header>

      {/* Stats */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {statsCards.map((s) => (
          <div
            key={s.label}
            className="flex min-h-[100px] flex-col justify-between rounded-lg bg-[var(--color-card)] p-4 shadow transition hover:shadow-lg"
          >
            <div className="text-sm text-[var(--color-text-secondary)]">
              {s.label}
            </div>
            <div className="mt-2 text-2xl font-bold">{s.value.toString()}</div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="flex min-h-[280px] flex-col rounded-lg bg-[var(--color-card)] p-4 shadow">
          <h3 className="mb-3 font-semibold">Monthly Borrowings</h3>
          <div className="flex-1">
            <Line data={monthlyData} options={chartOpts} />
          </div>
        </div>
        <div className="flex min-h-[280px] flex-col rounded-lg bg-[var(--color-card)] p-4 shadow">
          <h3 className="mb-3 font-semibold">Items by Category</h3>
          <div className="flex-1">
            <Bar data={categoryData} options={chartOpts} />
          </div>
        </div>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="flex min-h-[280px] flex-col rounded-lg bg-[var(--color-card)] p-4 shadow">
          <h3 className="mb-3 font-semibold">User Distribution</h3>
          <div className="flex-1">
            <Doughnut data={distributionData} options={chartOpts} />
          </div>
        </div>

        {/* Popular Items */}
        <div className="flex min-h-[280px] flex-col rounded-lg bg-[var(--color-card)] p-4 shadow lg:col-span-2">
          <h3 className="mb-3 font-semibold">Popular Items</h3>
          <div className="flex-1 overflow-y-auto">
            <table className="min-w-full table-auto border-separate border-spacing-0">
              <thead className="sticky top-0 bg-[var(--color-card)]">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium uppercase text-[var(--color-text-secondary)]">
                    Title
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium uppercase text-[var(--color-text-secondary)]">
                    Borrow Count
                  </th>
                </tr>
              </thead>
              <tbody>
                {popularItems.map((it) => (
                  <tr key={it.id} className="hover:bg-[var(--color-bg-hover)]">
                    <td className="px-4 py-2">{it.title}</td>
                    <td className="px-4 py-2">{it.borrowCount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
