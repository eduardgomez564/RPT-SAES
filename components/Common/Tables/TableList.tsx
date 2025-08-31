"use client";
import TertiaryHeader from "@/components/Common/Texts/TertiaryHeader";
import UtilityButton from "@/components/Common/Buttons/UtilityButton";
import DangerButton from "@/components/Common/Buttons/DangerButton";
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
  const [isFullScreen, setIsFullScreen] = useState(false);
  const totalPages = Math.ceil(data.length / pageSize);
  const paginatedData = data.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className={`w-full rounded-lg flex flex-col ${isFullScreen ? 'fixed inset-0 z-50 bg-white p-6' : 'relative'}`}>
      <div className="flex justify-end mb-2">
        <button
          onClick={() => setIsFullScreen(!isFullScreen)}
          className="p-1 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded transition-colors"
        >
          {isFullScreen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m14 10 7-7"/><path d="M20 10h-6V4"/><path d="m3 21 7-7"/><path d="M4 14h6v6"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="m21 3-7 7"/><path d="m3 21 7-7"/><path d="M9 21H3v-6"/></svg>
          )}
        </button>
      </div>
      <div className={`overflow-x-auto rounded-lg ${isFullScreen ? 'flex-1 overflow-y-auto' : 'md:max-h-96 md:overflow-y-auto'}`}>
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead className="text-[#013300] bg-green-50 border-b border-gray-200 sticky top-0">
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
      </div>
      {/* Pagination Section */}
      {data.length > 0 && (
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
      )}
    </div>
  );
}

