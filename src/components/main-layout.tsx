"use client";
import { ThemeProvider } from "@/app/context/theme-context";
import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider> {children}</ThemeProvider>;
};

export default MainLayout;
