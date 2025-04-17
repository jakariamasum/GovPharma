import type React from "react";
import type { Metadata } from "next";
import { UserSidebar } from "@/components/user-sidebar";
import { UserHeader } from "@/components/user-header";

export const metadata: Metadata = {
  title: "E-GovPhar - User Dashboard",
  description: "E-Government Pharmacy Management System",
};

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50 dark:bg-gray-900">
      <UserSidebar />
      <div className="flex-1 flex flex-col">
        <UserHeader />
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
