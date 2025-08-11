"use client";
import React, { useCallback } from "react";
import RPTLogoTitle from "../RPTLogoTitle";
import { useRouter, usePathname } from "next/navigation";

// Memoized SVG icons to prevent unnecessary re-renders
const DashboardIcon = React.memo(() => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
    <rect width="7" height="9" x="3" y="3" rx="1" stroke="#013300" strokeWidth="2" />
    <rect width="7" height="5" x="14" y="3" rx="1" stroke="#013300" strokeWidth="2" />
    <rect width="7" height="9" x="14" y="12" rx="1" stroke="#013300" strokeWidth="2" />
    <rect width="7" height="5" x="3" y="16" rx="1" stroke="#013300" strokeWidth="2" />
  </svg>
));

const CalendarIcon = React.memo(() => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
    <rect x="3" y="5" width="18" height="16" rx="2" stroke="#013300" strokeWidth="2" />
    <rect x="3" y="8" width="18" height="2" stroke="#013300" strokeWidth="2" />
    <rect x="7" y="12" width="2" height="2" stroke="#013300" strokeWidth="2" />
    <rect x="11" y="12" width="2" height="2" stroke="#013300" strokeWidth="2" />
    <rect x="15" y="12" width="2" height="2" stroke="#013300" strokeWidth="2" />
  </svg>
));

const StudentsIcon = React.memo(() => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
    <ellipse cx="12" cy="8" rx="4" ry="4" stroke="#013300" strokeWidth="2" />
    <path d="M4 18v-2c0-2.66 5.33-4 8-4s8 1.34 8 4v2" stroke="#013300" strokeWidth="2" strokeLinecap="round" />
  </svg>
));

const TeachersIcon = React.memo(() => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
    <circle cx="8" cy="8" r="4" stroke="#013300" strokeWidth="2" />
    <circle cx="16" cy="8" r="4" stroke="#013300" strokeWidth="2" />
    <rect x="2" y="16" width="20" height="4" rx="2" stroke="#013300" strokeWidth="2" />
  </svg>
));

const MaterialsIcon = React.memo(() => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
    <rect x="3" y="7" width="18" height="14" rx="2" stroke="#013300" strokeWidth="2" />
    <rect x="7" y="3" width="10" height="4" rx="1" stroke="#013300" strokeWidth="2" />
  </svg>
));

const RemedialIcon = React.memo(() => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
    <rect width="16" height="20" x="4" y="2" rx="2" stroke="#013300" strokeWidth="2" />
    <path d="M2 6h4" stroke="#013300" strokeWidth="2" />
    <path d="M2 10h4" stroke="#013300" strokeWidth="2" />
    <path d="M2 14h4" stroke="#013300" strokeWidth="2" />
    <path d="M2 18h4" stroke="#013300" strokeWidth="2" />
    <path d="M9.5 8h5" stroke="#013300" strokeWidth="2" />
    <path d="M9.5 12H16" stroke="#013300" strokeWidth="2" />
    <path d="M9.5 16H14" stroke="#013300" strokeWidth="2" />
  </svg>
));

const ArchiveIcon = React.memo(() => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="5" rx="2" stroke="#013300" strokeWidth="2" />
    <rect x="5" y="9" width="14" height="11" rx="2" stroke="#013300" strokeWidth="2" />
    <path d="M12 12v4m0 0l2-2m-2 2l-2-2" stroke="#013300" strokeWidth="2" strokeLinecap="round" />
  </svg>
));

export default function Sidebar() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Menu items with navigation paths
  const menuItems = React.useMemo(
    () => [
      { label: "Dashboard", icon: <DashboardIcon />, path: "/Proponent/dashboard" },
      { label: "Calendar", icon: <CalendarIcon />, path: "/Proponent/calendar" },
      { label: "Students", icon: <StudentsIcon />, path: "/Proponent/students" },
      { label: "Teachers", icon: <TeachersIcon />, path: "/Proponent/teachers" },
      { label: "Materials", icon: <MaterialsIcon />, path: "/Proponent/materials" },
      { label: "Remedial", icon: <RemedialIcon />, path: "/Proponent/remedial" },
      { label: "Archive", icon: <ArchiveIcon />, path: "/Proponent/archive" },
    ],
    []
  );

  // Memoized toggle function
  const toggleSidebar = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  // Memoized close function
  const closeSidebar = useCallback(() => {
    setOpen(false);
  }, []);

  // Handle navigation with sidebar close
  const handleNavigation = useCallback(
    (path: string) => {
      router.push(path);
      closeSidebar();
    },
    [router, closeSidebar]
  );

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden fixed top-5 left-4 z-50 bg-green-50 p-2 rounded-lg shadow-md"
        onClick={toggleSidebar}
        aria-label="Open sidebar"
      >
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="#013300"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed z-50 top-0 left-0 h-full w-64 bg-green-50 flex flex-col px-6 py-8 font-sans 
          transition-transform duration-300 shadow-xl border-r border-green-100
          ${open ? "translate-x-0" : "-translate-x-full"} rounded-xl
          md:static md:translate-x-0 md:min-h-screen
        `}
        style={{ maxWidth: "100vw" }}
      >
        {/* Mobile Close Button */}
        <div className="flex md:hidden justify-end mb-4">
          <button className="p-2 rounded hover:bg-green-100" onClick={closeSidebar} aria-label="Close sidebar">
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="#013300"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Logo and Title */}
        <RPTLogoTitle small />

        {/* Divider */}
        <div className="my-6 border-b border-[#013300]" />

        {/* Menu Items */}
        <nav className="flex flex-col gap-3">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <button
                key={item.label}
                className={`
                  flex items-center gap-4 font-medium text-base px-3 py-2 rounded-lg transition-all
                  ${isActive ? "bg-[#013300] text-white shadow" : "text-[#013300]"}
                  hover:ring-2 hover:ring-[#013300] hover:scale-[1.03] hover:shadow
                  focus:outline-none focus:ring-2 focus:bg-[#013300] focus:text-white
                  active:bg-[#013300] active:text-white
                `}
                onClick={() => handleNavigation(item.path)}
                aria-current={isActive ? "page" : undefined}
              >
                <span
                  className={`rounded-lg p-1 flex items-center justify-center shadow-md ${isActive ? "bg-white text-[#013300]" : "bg-green-50"}`}
                >
                  {item.icon}
                </span>
                <span className="tracking-wide">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 backdrop-blur-xs bg-opacity-30 z-40 md:hidden"
          onClick={closeSidebar}
          aria-label="Close sidebar overlay"
        />
      )}
    </>
  );
}
