/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Bell,
  User,
  LogOut,
  Settings,
  HelpCircle,
  Search,
  Menu,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserSidebar } from "./user-sidebar";
import Button from "./ui/button";

export function UserHeader() {
  const [notifications, setNotifications] = useState(3);
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-white px-4 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex-1">
        <h1 className="text-lg font-semibold text-gray-800 dark:text-white">
          E-GovPhar Portal
        </h1>
      </div>

      {/* Search (hidden on mobile) */}
      <div className="hidden md:flex relative max-w-md">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
        <Input
          type="search"
          placeholder="Search..."
          className="w-full pl-9 bg-gray-50 border-gray-200 dark:bg-gray-700 dark:border-gray-600"
        />
      </div>

      {/* Notification button */}
      <Button variant="ghost" size="icon" className="relative">
        <Bell className="h-5 w-5" />
        {notifications > 0 && (
          <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
            {notifications}
          </span>
        )}
        <span className="sr-only">Notifications</span>
      </Button>

      {/* User dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full h-8 w-8 bg-emerald-100 dark:bg-emerald-900"
          >
            <User className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            <span className="sr-only">User menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent isOpen={open} setIsOpen={setOpen}>
          <DropdownMenuLabel>
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                john.doe@example.com
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="/user/profile">
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/user/settings">
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/user/help">
              <HelpCircle className="mr-2 h-4 w-4" />
              <span>Help & Support</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
