"use client";

import { cn } from "@/utils/CN";
import type React from "react";
import { forwardRef } from "react";

interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "vertical" | "horizontal" | "both";
  scrollBarClassName?: string;
}

export const ScrollArea = forwardRef<HTMLDivElement, ScrollAreaProps>(
  (
    {
      className,
      orientation = "vertical",
      scrollBarClassName,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden",
          orientation === "vertical" && "overflow-y-auto",
          orientation === "horizontal" && "overflow-x-auto",
          orientation === "both" && "overflow-auto",
          className
        )}
        {...props}
      >
        <div className="h-full w-full">{children}</div>
        {/* Custom scrollbar styling */}
        <style jsx global>{`
          .${cn("custom-scrollbar", scrollBarClassName)} {
            scrollbar-width: thin;
            scrollbar-color: #115e59 transparent;
          }

          .${cn("custom-scrollbar", scrollBarClassName)}::-webkit-scrollbar {
            width: 8px;
            height: 8px;
          }

          .${cn(
              "custom-scrollbar",
              scrollBarClassName
            )}::-webkit-scrollbar-track {
            background: transparent;
          }

          .${cn(
              "custom-scrollbar",
              scrollBarClassName
            )}::-webkit-scrollbar-thumb {
            background-color: #115e59;
            border-radius: 20px;
            border: 2px solid transparent;
          }

          .${cn(
              "custom-scrollbar",
              scrollBarClassName
            )}::-webkit-scrollbar-thumb:hover {
            background-color: #134e4a;
          }
        `}</style>
      </div>
    );
  }
);

ScrollArea.displayName = "ScrollArea";
