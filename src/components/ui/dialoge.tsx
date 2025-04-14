// components/ui/dialog.tsx
"use client";

import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/utils/CN";

interface DialogProps {
  open: boolean;
  onClose?: () => void;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

export function Dialog({ open, onClose, onOpenChange, children }: DialogProps) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose?.();
        onOpenChange?.(false);
      }
    }
    if (open) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose, onOpenChange]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={() => {
        onClose?.();
        onOpenChange?.(false);
      }}
    >
      <div
        className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-lg shadow-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}

export function DialogContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("p-6 space-y-4", className)}>{children}</div>;
}

export function DialogHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-b border-gray-200 dark:border-slate-700 p-4 pb-2">
      {children}
    </div>
  );
}

export function DialogTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-lg font-semibold text-gray-900 dark:text-slate-100">
      {children}
    </h2>
  );
}

export function DialogFooter({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex justify-end gap-2 border-t border-gray-200 dark:border-slate-700 p-4 pt-2",
        className
      )}
    >
      {children}
    </div>
  );
}

export function DialogClose({
  onClick,
  asChild = false,
  children,
}: {
  onClick?: () => void;
  asChild?: boolean;
  children: React.ReactNode;
}) {
  if (asChild) {
    return React.cloneElement(children as React.ReactElement, {
      onClick: (e: React.MouseEvent) => {
        console.log(e);
        onClick?.();
      },
    });
  }
  return (
    <button
      onClick={onClick}
      className="text-sm text-gray-500 hover:text-gray-800 dark:text-slate-400 dark:hover:text-white"
    >
      Close
    </button>
  );
}
