"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Chip,
} from "@heroui/react";

interface AdminFineRow {
  id: number;
  amount: number;
  reason: string;
  status: "UNPAID" | "PAID" | "WAIVED";
  issueDate: string;
  paidDate?: string | null;
  user: { id: number; firstName: string; lastName: string; email: string };
}

export default function AdminFinesTable() {
  const [rows, setRows] = useState<AdminFineRow[]>([]);
  const [loading, setLoading] = useState(false);

  const load = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/fines");
      const data = await res.json();
      setRows(data.fines ?? []);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const pay = async (id: number) => {
    const res = await fetch(`/api/admin/fines/${id}/pay`, { method: "POST" });
    if (!res.ok) {
      const j = await res.json().catch(() => ({}));
      alert(j.error || "Failed to mark as paid");
    } else {
      load();
    }
  };

  const waive = async (id: number) => {
    const res = await fetch(`/api/admin/fines/${id}/waive`, { method: "POST" });
    if (!res.ok) {
      const j = await res.json().catch(() => ({}));
      alert(j.error || "Failed to waive fine");
    } else {
      load();
    }
  };

  return (
    <div className="p-4">
      <Table aria-label="Fines" removeWrapper isStriped>
        <TableHeader>
          <TableColumn>Patron</TableColumn>
          <TableColumn>Amount</TableColumn>
          <TableColumn>Reason</TableColumn>
          <TableColumn>Status</TableColumn>
          <TableColumn>Issued</TableColumn>
          <TableColumn>Paid</TableColumn>
          <TableColumn>Actions</TableColumn>
          <TableColumn>Waive</TableColumn>
        </TableHeader>
        <TableBody isLoading={loading} emptyContent="No fines">
          {rows.map((r) => (
            <TableRow key={r.id}>
              <TableCell>
                {r.user.firstName} {r.user.lastName} ({r.user.email})
              </TableCell>
              <TableCell>${r.amount.toFixed(2)}</TableCell>
              <TableCell>{r.reason}</TableCell>
              <TableCell>
                <Chip
                  color={
                    r.status === "PAID"
                      ? "success"
                      : r.status === "WAIVED"
                        ? "secondary"
                        : "danger"
                  }
                  size="sm"
                  variant="flat"
                >
                  {r.status}
                </Chip>
              </TableCell>
              <TableCell>{new Date(r.issueDate).toLocaleString()}</TableCell>
              <TableCell>
                {r.paidDate ? new Date(r.paidDate).toLocaleString() : "-"}
              </TableCell>
              <TableCell>
                {r.status === "UNPAID" && (
                  <Button size="sm" color="primary" onPress={() => pay(r.id)}>
                    Mark Paid
                  </Button>
                )}
              </TableCell>
              <TableCell>
                {r.status === "UNPAID" && (
                  <Button size="sm" variant="flat" onPress={() => waive(r.id)}>
                    Waive Full
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
