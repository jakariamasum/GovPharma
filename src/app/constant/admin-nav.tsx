import {
  BarChart3,
  Building,
  FileText,
  Home,
  Pill,
  Settings,
  ShieldCheck,
  Users,
} from "lucide-react";

export const navItems = [
  { name: "dashboard", href: "/admin", icon: Home, label: "Dashboard" },
  {
    name: "inventory",
    href: "/admin/inventory",
    icon: Pill,
    label: "Inventory",
  },
  { name: "users", href: "/admin/users", icon: Users, label: "Users" },
  {
    name: "pharmacies",
    href: "/admin/pharmacies",
    icon: Building,
    label: "Pharmacies",
  },
  {
    name: "reports",
    icon: FileText,
    label: "Reports",
    children: [
      { name: "sales", href: "/admin/reports/sales", label: "Sales Report" },
      { name: "stock", href: "/admin/reports/stock", label: "Stock Report" },
      {
        name: "activity",
        href: "/admin/reports/activity",
        label: "Activity Log",
      },
    ],
  },
  {
    name: "analytics",
    href: "/admin/analytics",
    icon: BarChart3,
    label: "Analytics",
  },
  {
    name: "security",
    href: "/admin/security",
    icon: ShieldCheck,
    label: "Security",
  },
  {
    name: "settings",
    href: "/admin/settings",
    icon: Settings,
    label: "Settings",
  },
];
