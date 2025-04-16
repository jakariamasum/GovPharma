import { IForm } from "@/types/form.types";
import { useFormContext } from "react-hook-form";

const PharmaInput = ({
  name,
  label,
  type,
  required = true,
  placeholder,
  icon,
  ...props
}: IForm) => {
  const { register } = useFormContext();

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        <input
          {...register(name)}
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          className="block w-full pl-10 pr-3 py-3 bg-gray-50 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
          {...props}
        />
      </div>
    </div>
  );
};

export default PharmaInput;
