"use client";

import { useEffect, useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip } from "@heroui/react";

interface FineRow {
  id: number;
  amount: number;
  reason: string;
  status: "UNPAID" | "PAID" | "WAIVED";
  issueDate: string;
  paidDate?: string | null;
}

export default function MyFinesTable() {
  const [rows, setRows] = useState<FineRow[]>([]);
  const [loading, setLoading] = useState(false);

  const load = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/fines");
      const data = await res.json();
      setRows(data.fines ?? []);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="p-4">
      <Table aria-label="My fines" removeWrapper isStriped>
        <TableHeader>
          <TableColumn>Amount</TableColumn>
          <TableColumn>Reason</TableColumn>
          <TableColumn>Status</TableColumn>
          <TableColumn>Issued</TableColumn>
          <TableColumn>Paid</TableColumn>
        </TableHeader>
        <TableBody isLoading={loading} emptyContent="No fines">
          {rows.map((r) => (
            <TableRow key={r.id}>
              <TableCell>${r.amount.toFixed(2)}</TableCell>
              <TableCell>{r.reason}</TableCell>
              <TableCell>
                <Chip color={r.status === "PAID" ? "success" : r.status === "WAIVED" ? "secondary" : "danger"} size="sm" variant="flat">
                  {r.status}
                </Chip>
              </TableCell>
              <TableCell>{new Date(r.issueDate).toLocaleString()}</TableCell>
              <TableCell>{r.paidDate ? new Date(r.paidDate).toLocaleString() : "-"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

