// components/admin/AdminLayout.tsx
"use client";

import { ReactNode, useContext } from "react";
import { Bell, Moon, Search, Sun, UserCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/utils/CN";
import { ThemeContext } from "@/app/context/theme-context";
import AdminNav from "../admin-navbar";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={cn(
        "flex min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300"
      )}
    >
      {/* Sidebar */}
      <AdminNav />

      {/* Main Content */}
      <div className="flex-1 flex flex-col ">
        {/* Topbar */}
        <header className="w-full px-4 md:px-8 py-4 border-b dark:border-gray-700 flex items-center justify-between bg-white dark:bg-gray-800">
          <div className="md:flex items-center gap-4 hidden ">
            <nav className="text-sm text-gray-600 dark:text-gray-300">
              <ol className="list-none p-0 inline-flex space-x-2">
                <li>
                  <Link href="/admin">Dashboard</Link>
                </li>
                <li>/</li>
                <li className="text-teal-500">Current Page</li>
              </ol>
            </nav>
          </div>

          {/* Right: actions */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="px-3 py-1.5 rounded-md text-sm bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 border border-gray-300 dark:border-gray-600 focus:outline-none"
              />
              <Search className="w-4 h-4 absolute top-2.5 right-2 text-gray-500" />
            </div>
            <button className="relative">
              <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
            </button>
            <UserCircle className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            <div className="">
              <button
                onClick={toggleTheme}
                className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-teal-100 dark:bg-gray-800 text-teal-600 dark:text-teal-400 hover:bg-teal-200 dark:hover:bg-gray-700 transition-all"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-8 bg-gray-50 dark:bg-gray-900 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
