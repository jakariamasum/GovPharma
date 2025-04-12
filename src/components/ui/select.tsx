"use client";

import { cn } from "@/utils/CN";
import type React from "react";

interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "onChange"> {
  children: React.ReactNode;
  onValueChange?: (value: string) => void;
}

export const Select = ({
  className,
  children,
  onValueChange,
  ...props
}: SelectProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onValueChange) {
      onValueChange(e.target.value);
    }
  };

  return (
    <select
      className={cn(
        "flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      onChange={handleChange}
      {...props}
    >
      {children}
    </select>
  );
};

interface SelectTriggerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const SelectTrigger = ({
  className,
  children,
  ...props
}: SelectTriggerProps) => {
  return (
    <div
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

interface SelectValueProps extends React.HTMLAttributes<HTMLSpanElement> {
  placeholder?: string;
}

export const SelectValue = ({
  className,
  placeholder,
  children,
  ...props
}: SelectValueProps) => {
  return (
    <span className={cn("text-sm", className)} {...props}>
      {children || placeholder}
    </span>
  );
};

interface SelectContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const SelectContent = ({
  className,
  children,
  ...props
}: SelectContentProps) => {
  return (
    <div
      className={cn(
        "absolute z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white text-slate-900 shadow-md animate-in fade-in-80",
        className
      )}
      {...props}
    >
      <div className="p-1">{children}</div>
    </div>
  );
};

interface SelectItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  children: React.ReactNode;
}

export const SelectItem = ({
  className,
  children,
  ...props
}: SelectItemProps) => {
  return (
    <div
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm outline-none hover:bg-slate-100 focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

interface SelectGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const SelectGroup = ({
  className,
  children,
  ...props
}: SelectGroupProps) => {
  return (
    <div className={cn("p-1", className)} {...props}>
      {children}
    </div>
  );
};

interface SelectLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const SelectLabel = ({
  className,
  children,
  ...props
}: SelectLabelProps) => {
  return (
    <div
      className={cn("px-2 py-1.5 text-sm font-semibold", className)}
      {...props}
    >
      {children}
    </div>
  );
};

interface SelectSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const SelectSeparator = ({
  className,
  ...props
}: SelectSeparatorProps) => {
  return (
    <div className={cn("-mx-1 my-1 h-px bg-slate-100", className)} {...props} />
  );
};

interface SelectScrollUpButtonProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const SelectScrollUpButton = ({
  className,
  ...props
}: SelectScrollUpButtonProps) => {
  return (
    <div
      className={cn(
        "flex cursor-default items-center justify-center py-1 text-sm text-slate-500",
        className
      )}
      {...props}
    />
  );
};

interface SelectScrollDownButtonProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const SelectScrollDownButton = ({
  className,
  ...props
}: SelectScrollDownButtonProps) => {
  return (
    <div
      className={cn(
        "flex cursor-default items-center justify-center py-1 text-sm text-slate-500",
        className
      )}
      {...props}
    />
  );
};
