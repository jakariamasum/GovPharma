/* eslint-disable @typescript-eslint/no-empty-object-type */
"use client";

import React, { forwardRef, useEffect } from "react";
import { cn } from "@/utils/CN";
import { useSheet } from "@/app/context/sheet-context";
import { X } from "lucide-react";

interface SheetProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Sheet = forwardRef<HTMLDivElement, SheetProps>(
  ({ className, children, ...props }, ref) => {
    const { open, setOpen } = useSheet();

    // ESC key to close
    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape" && open) {
          setOpen(false);
        }
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }, [open, setOpen]);

    // Disable body scroll
    useEffect(() => {
      document.body.style.overflow = open ? "hidden" : "";
      return () => {
        document.body.style.overflow = "";
      };
    }, [open]);

    return (
      <div
        ref={ref}
        className={cn("relative", className)}
        data-state={open ? "open" : "closed"}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Sheet.displayName = "Sheet";

interface SheetTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export const SheetTrigger = forwardRef<HTMLButtonElement, SheetTriggerProps>(
  ({ className, children, asChild = false, ...props }, ref) => {
    const { open, setOpen, id } = useSheet();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      props.onClick?.(e);
      setOpen(!open);
    };

    if (asChild) {
      return React.cloneElement(
        React.Children.only(children as React.ReactElement),
        {
          ref,
          "aria-expanded": open,
          "aria-controls": `${id}-content`,
          onClick: handleClick,
          ...props,
        }
      );
    }

    return (
      <button
        ref={ref}
        type="button"
        aria-expanded={open}
        aria-controls={`${id}-content`}
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-800 focus-visible:ring-offset-2",
          "disabled:opacity-50 disabled:pointer-events-none",
          "bg-teal-800 text-white hover:bg-teal-900",
          className
        )}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
    );
  }
);

SheetTrigger.displayName = "SheetTrigger";

interface SheetContentProps extends React.HTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
  closeButton?: boolean;
}

export const SheetContent = forwardRef<HTMLDivElement, SheetContentProps>(
  ({ className, children, onClose, closeButton = true, ...props }, ref) => {
    const { open, setOpen, id, side } = useSheet();

    const handleClose = () => {
      setOpen(false);
      onClose?.();
    };

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        handleClose();
      }
    };

    const sideStyles = {
      top: "inset-x-0 top-0 border-b",
      right: "inset-y-0 right-0 h-full border-l",
      bottom: "inset-x-0 bottom-0 border-t",
      left: "inset-y-0 left-0 h-full border-r",
    };

    const transformStyles = {
      top: "translate-y-[-100%]",
      right: "translate-x-[100%]",
      bottom: "translate-y-[100%]",
      left: "translate-x-[-100%]",
    };

    const widthHeightStyles = {
      top: "w-full max-h-[80vh]",
      right: "max-w-sm w-full",
      bottom: "w-full max-h-[80vh]",
      left: "max-w-sm w-full",
    };

    return (
      <>
        <div
          className={cn(
            "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity",
            open ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
          aria-hidden="true"
          onClick={handleBackdropClick}
        />
        <div
          ref={ref}
          id={`${id}-content`}
          className={cn(
            "fixed z-50 bg-white dark:bg-gray-800 shadow-lg transition-transform duration-300 ease-in-out",
            sideStyles[side],
            widthHeightStyles[side],
            open ? "translate-x-0 translate-y-0" : transformStyles[side],
            className
          )}
          {...props}
        >
          <div className="h-full flex flex-col overflow-hidden">
            {closeButton && (
              <div className="absolute right-4 top-4">
                <button
                  type="button"
                  className="rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-teal-800 focus:ring-offset-2"
                  onClick={handleClose}
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </button>
              </div>
            )}
            <div className="flex-1 overflow-auto p-6">{children}</div>
          </div>
        </div>
      </>
    );
  }
);

SheetContent.displayName = "SheetContent";
