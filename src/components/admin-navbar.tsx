"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight, LayoutDashboard, Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "@/utils/CN";
import { navItems } from "@/app/constant/admin-nav";

const AdminNav = () => {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-teal-500 p-2 rounded text-white"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <Menu className="w-5 h-5" />
      </button>

      <nav
        className={cn(
          "bg-white dark:bg-gray-900 border-r dark:border-gray-700 min-h-screen p-4 z-30 transition-all duration-300",
          "fixed md:relative top-0 left-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
          collapsed ? "w-20" : "w-64"
        )}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <LayoutDashboard className="text-teal-600 dark:text-teal-400 w-6 h-6" />
            {!collapsed && (
              <span className="text-xl font-bold text-teal-600 dark:text-teal-400">
                YourLogo
              </span>
            )}
          </div>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden md:block p-1 rounded hover:bg-teal-100 dark:hover:bg-gray-800 transition"
          >
            {collapsed ? (
              <ChevronRight className="text-teal-600 w-5 h-5" />
            ) : (
              <ChevronLeft className="text-teal-600 w-5 h-5" />
            )}
          </button>
        </div>

        <div className="space-y-2">
          {navItems?.map((item) => {
            const active = isActive(item.href || "");

            if (item.children) {
              return (
                <div key={item.name} className="relative group">
                  <div
                    className={cn(
                      "flex items-center gap-3 rounded-md px-4 py-2 text-sm font-medium transition-all group-hover:bg-teal-50 group-hover:text-teal-600 dark:group-hover:bg-gray-800 dark:group-hover:text-teal-400",
                      "text-slate-600 dark:text-slate-300",
                      collapsed && "justify-center"
                    )}
                  >
                    <item.icon className="w-5 h-5" />
                    {!collapsed && <span>{item.label}</span>}
                    {collapsed && (
                      <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 w-max bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                        {item.label}
                      </span>
                    )}
                  </div>

                  {!collapsed && (
                    <div className="ml-6 mt-1 hidden group-hover:block">
                      {item.children.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block py-1 px-2 text-sm text-slate-500 hover:text-teal-600 dark:hover:text-teal-400"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.href || "#"}
                className={cn(
                  "flex items-center gap-3 rounded-md px-4 py-2 text-sm font-medium transition-all group relative",
                  active
                    ? "bg-teal-100 text-teal-600 dark:bg-gray-800 dark:text-teal-400"
                    : "text-slate-600 dark:text-slate-300 hover:bg-teal-50 hover:text-teal-600 dark:hover:bg-gray-800 dark:hover:text-teal-400",
                  collapsed && "justify-center"
                )}
              >
                <item.icon className="w-5 h-5" />
                {!collapsed && <span>{item.label}</span>}
                {collapsed && (
                  <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 w-max bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                    {item.label}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </nav>

      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-20 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
};

export default AdminNav;
