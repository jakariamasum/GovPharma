"use client";

import { ReactNode } from "react";

import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "../ui/dialoge";

interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  children: ReactNode;
  footer?: ReactNode;
  width?: string;
}

const PharmaModal = ({
  open,
  onOpenChange,
  title,
  description,
  children,
  footer,
  width = "sm:max-w-lg", // More space for general forms
}: ModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={`w-full ${width} max-h-[90vh] overflow-auto p-5 rounded-xl bg-white dark:bg-slate-800 shadow-lg`}
      >
        <div className="flex justify-between items-start mb-2">
          <div className="flex-1 pr-4">
            <DialogHeader className="text-left">
              <DialogTitle className="text-xl font-bold text-slate-900 dark:text-white">
                {title}
              </DialogTitle>
              {description && (
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  {description}
                </p>
              )}
            </DialogHeader>
          </div>

          <DialogClose asChild>
            <button
              className="text-gray-500 hover:text-gray-800 dark:hover:text-white transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </DialogClose>
        </div>

        <div className="py-3">{children}</div>

        {footer && <div className="flex justify-end gap-2 mt-4">{footer}</div>}
      </DialogContent>
    </Dialog>
  );
};

export default PharmaModal;
