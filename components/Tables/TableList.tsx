"use client";
import TertiaryHeader from "@/components/Texts/TertiaryHeader";
import UtilityButton from "@/components/Buttons/UtilityButton";
import DangerButton from "@/components/Buttons/DangerButton";
import Link from "next/link";
import { useState } from "react";

interface TableColumn {
  key: string;
  title: string;
  render?: (row: any) => React.ReactNode;
}

interface TableListProps {
  columns: TableColumn[];
  data: any[];
  actions?: (row: any) => React.ReactNode;
  pageSize?: number;
}

export default function TableList({ columns, data, actions, pageSize = 10 }: TableListProps) {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(data.length / pageSize);
  const paginatedData = data.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="w-full overflow-x-auto rounded-lg">
      <table className="min-w-full bg-white rounded-lg shadow-md">
        <thead className="text-[#013300] bg-green-50 border-b border-gray-200">
          <tr>
            {columns.map((col) => (
              <th key={col.key} className="px-4 py-2 text-left">
                <TertiaryHeader title={col.title} />
              </th>
            ))}
            {actions && (
              <th className="px-4 py-2 text-left">
                <TertiaryHeader title="Actions" />
              </th>
            )}
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {paginatedData.length === 0 ? (
            <tr>
              <td colSpan={columns.length + (actions ? 1 : 0)} className="px-4 py-2 text-center text-gray-400">
                No data available
              </td>
            </tr>
          ) : (
            paginatedData.map((row, idx) => (
              <tr key={row.id || idx} className="border-b border-gray-200 hover:bg-green-50 transition-colors duration-150">
                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-2">
                    {col.render ? col.render(row) : row[col.key]}
                  </td>
                ))}
                {actions && <td className="px-4 py-2 flex gap-2">{actions(row)}</td>}
              </tr>
            ))
          )}
        </tbody>
      </table>
      {/* Pagination Section */}
      <div className="flex flex-row flex-wrap pt-2 items-center gap-2 text-sm sm:text-base justify-center">
        <UtilityButton small disabled={page === 1} onClick={() => setPage(page - 1)}>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Prev
          </span>
        </UtilityButton>
        <span className="text-gray-500 font-semibold px-3 py-1.5 rounded bg-gray-100 cursor-default">{page}</span>
        <UtilityButton small disabled={page === totalPages || totalPages === 0} onClick={() => setPage(page + 1)}>
          <span className="flex items-center gap-1">
            Next
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </UtilityButton>
      </div>
    </div>
  );
}
