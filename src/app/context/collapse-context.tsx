"use client";

import React, { createContext, useContext, useState } from "react";

type CollapsibleContextType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CollapsibleContext = createContext<CollapsibleContextType | undefined>(
  undefined
);

export const useCollapsible = () => {
  const context = useContext(CollapsibleContext);
  if (!context) {
    throw new Error("useCollapsible must be used within a CollapsibleProvider");
  }
  return context;
};

export const CollapsibleProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <CollapsibleContext.Provider value={{ open, setOpen }}>
      {children}
    </CollapsibleContext.Provider>
  );
};
