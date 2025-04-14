"use client";

import React, { useRef, useEffect } from "react";

export function DropdownMenu({ children }: { children: React.ReactNode }) {
  return <div className="relative inline-block text-left">{children}</div>;
}

export function DropdownMenuTrigger({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

interface DropdownMenuContentProps {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export function DropdownMenuContent({
  children,
  isOpen,
  setIsOpen,
}: DropdownMenuContentProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setIsOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={ref}
      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md border border-gray-200 bg-white shadow-md dark:border-slate-700 dark:bg-slate-800"
    >
      <div className="py-1 text-sm text-gray-700 dark:text-slate-100">
        {children}
      </div>
    </div>
  );
}

export function DropdownMenuItem({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-700"
    >
      {children}
    </button>
  );
}

export function DropdownMenuLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-4 py-2 text-xs font-semibold uppercase text-gray-500 dark:text-slate-400">
      {children}
    </div>
  );
}

export function DropdownMenuSeparator() {
  return <div className="my-1 h-px bg-gray-200 dark:bg-slate-700" />;
}
