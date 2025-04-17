"use client";

interface ToggleSwitchProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

const ToggleSwitch = ({ checked, onCheckedChange }: ToggleSwitchProps) => {
  return (
    <button
      onClick={() => onCheckedChange(!checked)}
      className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
        checked ? "bg-teal-600" : "bg-gray-300"
      }`}
    >
      <div
        className={`w-4 h-4 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      ></div>
    </button>
  );
};
export default ToggleSwitch;
