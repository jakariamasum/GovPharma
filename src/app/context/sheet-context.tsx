// SheetProvider.tsx
"use client";

import React, { createContext, useContext, useState } from "react";

type Side = "top" | "right" | "bottom" | "left";

type SheetContextType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
  side: Side;
  setSide: React.Dispatch<React.SetStateAction<Side>>;
};

const SheetContext = createContext<SheetContextType | undefined>(undefined);

export const useSheet = () => {
  const context = useContext(SheetContext);
  if (!context) {
    throw new Error("useSheet must be used within a SheetProvider");
  }
  return context;
};

export const SheetProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [side, setSide] = useState<Side>("right");
  const id = React.useId();

  return (
    <SheetContext.Provider value={{ open, setOpen, id, side, setSide }}>
      {children}
    </SheetContext.Provider>
  );
};
