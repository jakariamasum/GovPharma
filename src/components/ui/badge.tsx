import { cn } from "@/utils/CN";
import type React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "destructive";
  children: React.ReactNode;
}

const Badge = ({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) => {
  const variantStyles = {
    default: "bg-emerald-100 text-emerald-800 hover:bg-emerald-200",
    secondary: "bg-slate-100 text-slate-800 hover:bg-slate-200",
    outline: "text-slate-800 border border-slate-200 hover:bg-slate-100",
    destructive: "bg-red-100 text-red-800 hover:bg-red-200",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
export default Badge;
