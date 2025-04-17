/* eslint-disable @typescript-eslint/no-empty-object-type */
"use client";

import React, { forwardRef } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/utils/CN";
import { useCollapsible } from "@/app/context/collapse-context";

// Collapsible component
interface CollapsibleProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Collapsible = forwardRef<HTMLDivElement, CollapsibleProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("group", className)} {...props}>
        {children}
      </div>
    );
  }
);

Collapsible.displayName = "Collapsible";

// CollapsibleTrigger component
interface CollapsibleTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export const CollapsibleTrigger = forwardRef<
  HTMLButtonElement,
  CollapsibleTriggerProps
>(({ className, children, asChild = false, ...props }, ref) => {
  const { open, setOpen } = useCollapsible();

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
      className={cn(
        "flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-left rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-800 focus-visible:ring-offset-2",
        "text-teal-800 hover:bg-teal-50 dark:text-teal-200 dark:hover:bg-teal-900/20",
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
      <ChevronDown
        className={cn(
          "h-4 w-4 transition-transform duration-200",
          open ? "transform rotate-180" : ""
        )}
      />
    </button>
  );
});

CollapsibleTrigger.displayName = "CollapsibleTrigger";

// CollapsibleContent component
interface CollapsibleContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const CollapsibleContent = forwardRef<
  HTMLDivElement,
  CollapsibleContentProps
>(({ className, children, ...props }, ref) => {
  const { open } = useCollapsible();

  return (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden transition-all duration-300 ease-in-out",
        open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        className
      )}
      aria-hidden={!open}
      {...props}
    >
      <div className={cn("py-2", open ? "visible" : "invisible")}>
        {children}
      </div>
    </div>
  );
});

CollapsibleContent.displayName = "CollapsibleContent";
