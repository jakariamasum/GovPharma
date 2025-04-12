"use client";

import { cn } from "@/utils/CN";
import { createContext, useContext, useState } from "react";

interface RadioGroupContextType {
  value?: string;
  onValueChange?: (value: string) => void;
}

const RadioGroupContext = createContext<RadioGroupContextType>({});

interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
}

export const RadioGroup = ({
  className,
  defaultValue,
  value,
  onValueChange,
  children,
  ...props
}: RadioGroupProps) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue || value);

  const handleValueChange = (newValue: string) => {
    setSelectedValue(newValue);
    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  return (
    <RadioGroupContext.Provider
      value={{
        value: value || selectedValue,
        onValueChange: handleValueChange,
      }}
    >
      <div className={cn("space-y-2", className)} {...props}>
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
};

interface RadioGroupItemProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  id: string;
}

export const RadioGroupItem = ({
  className,
  value,
  id,
  ...props
}: RadioGroupItemProps) => {
  const { value: groupValue, onValueChange } = useContext(RadioGroupContext);

  return (
    <input
      type="radio"
      id={id}
      className={cn(
        "h-4 w-4 rounded-full border border-slate-300 text-emerald-600 focus:ring-emerald-500",
        className
      )}
      checked={value === groupValue}
      onChange={() => onValueChange?.(value)}
      value={value}
      {...props}
    />
  );
};
