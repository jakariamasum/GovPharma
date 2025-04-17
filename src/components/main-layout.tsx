"use client";
import { CollapsibleProvider } from "@/app/context/collapse-context";
import { SheetProvider } from "@/app/context/sheet-context";
import { ThemeProvider } from "@/app/context/theme-context";
import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider>
      <SheetProvider>
        <CollapsibleProvider>{children}</CollapsibleProvider>
      </SheetProvider>
    </ThemeProvider>
  );
};

export default MainLayout;
