"use client";

import { useState } from "react";
import { Button } from "@heroui/react";

export default function AdminDatabaseClient() {
  const [loading, setLoading] = useState(false);

  const handleBackup = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/backup");
      if (!res.ok) throw new Error("Backup failed");

      const blob = await res.blob();

      // Extract filename safely
      const disposition = res.headers.get("Content-Disposition");
      let filename = `backup_${Date.now()}.xlsx`;
      if (disposition) {
        const match = disposition.match(/filename="?([^"]+)"?/);
        if (match?.[1]) {
          filename = match[1];
        }
      }

      // Trigger download
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
      alert("Failed to download backup");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-4">
      <Button
        onPress={handleBackup}
        isLoading={loading}
        isDisabled={loading}
        className="bg-[var(--color-accent)] px-4 text-white"
      >
        {loading ? "Preparing…" : "Download Backup"}
      </Button>
    </div>
  );
}
