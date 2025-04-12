"use client";

import { useFormContext } from "react-hook-form";
import { cn } from "@/utils/CN";

interface PharmaSelectProps {
  name: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  options: { value: string; label: string }[];
}

const PharmaSelect = ({
  name,
  label,
  required = true,
  options,
  placeholder = "Select an option",
  ...props
}: PharmaSelectProps) => {
  const { register } = useFormContext();

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1 relative">
        <select
          id={name}
          {...register(name, { required })}
          className={cn(
            "block w-full h-10 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50"
          )}
          {...props}
        >
          <option value="">{placeholder}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default PharmaSelect;
