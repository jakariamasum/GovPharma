"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Home, FileText, Pill, Settings, HelpCircle, X } from "lucide-react";

import { cn } from "@/utils/CN";
import Button from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";

const mainNavItems = [
  { name: "Dashboard", href: "/user/dashboard", icon: Home },
  { name: "E-Prescriptions", href: "/user/e-prescriptions", icon: FileText },
  { name: "My Medicines", href: "/user/medicines", icon: Pill },
];

export function UserSidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "bg-white dark:bg-gray-800 w-72 border-r border-gray-200 dark:border-gray-700 fixed md:sticky top-0 h-screen z-50 transition-transform duration-300 ease-in-out",
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Sidebar header with logo */}
          <div className="flex h-16 items-center justify-between border-b px-4">
            <Link
              href="/user/dashboard"
              className="flex items-center gap-2 font-bold text-xl text-emerald-600 dark:text-emerald-400"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-100 dark:bg-emerald-900">
                <Pill className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <span>E-GovPhar</span>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close sidebar</span>
            </Button>
          </div>

          {/* Scrollable sidebar content */}
          <ScrollArea className="flex-1 px-3 py-4">
            <div className="space-y-6">
              {/* Main navigation */}
              <div>
                <h3 className="mb-2 px-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
                  MAIN MENU
                </h3>
                <nav className="space-y-1">
                  {mainNavItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                        pathname === item.href
                          ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400"
                          : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                      )}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </ScrollArea>

          {/* Sidebar footer */}
          <div className="border-t border-gray-200 dark:border-gray-700 p-4">
            <div className="space-y-1">
              <Link
                href="/user/settings"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </Link>
              <Link
                href="/user/help"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                <HelpCircle className="h-4 w-4" />
                <span>Help & Support</span>
              </Link>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile sidebar toggle */}
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 z-40 rounded-full shadow-lg md:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <Home className="h-5 w-5" />
        <span className="sr-only">Open sidebar</span>
      </Button>
    </>
  );
}
