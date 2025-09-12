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
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `backup_${Date.now()}.xlsx`;
      a.click();
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
        className="px-4  bg-[var(--color-accent)]"
      >
        {loading ? "Preparing…" : "Download Backup"}
      </Button>
    </div>
  );
}
