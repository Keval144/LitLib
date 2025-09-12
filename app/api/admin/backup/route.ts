import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";
import prisma from "@/lib/prisma";
import ExcelJS from "exceljs";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session || (session.user as any)?.role !== "ADMINISTRATOR") {
      return new Response(JSON.stringify({ error: "Forbidden" }), {
        status: 403,
        headers: { "Content-Type": "application/json" },
      });
    }

    const tables = [
      "User",
      "LibraryItem",
      "Borrowing",
      "BorrowingRule",
      "Reservation",
      "Fine",
      "Notification",
      "Blog",
      "Announcement",
    ];

    const workbook = new ExcelJS.Workbook();

    for (const table of tables) {
      const data = await (prisma as any)[table].findMany();
      const sheet = workbook.addWorksheet(table);

      if (data.length > 0) {
        sheet.addRow(Object.keys(data[0]));
        for (const row of data) {
          sheet.addRow(Object.values(row));
        }
      }
    }

    const buffer = await workbook.xlsx.writeBuffer();

    return new Response(buffer as ArrayBuffer, {
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": `attachment; filename=backup_${Date.now()}.xlsx`,
      },
    });
  } catch (err) {
    console.error(err);
    return new Response("Backup failed", { status: 500 });
  }
}
