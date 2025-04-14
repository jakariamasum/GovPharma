import { NetworkBar } from "./icon/network-bar";

interface CardProps {
  title: string;
  color?: string;
  value: number | string;
}

const StatCard = ({ title, value }: CardProps) => {
  return (
    <article className="relative rounded-xl border border-teal-500 bg-white dark:bg-slate-900 p-5 shadow-sm transition-colors hover:bg-teal-50 dark:hover:bg-slate-800">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <h3 className="text-sm font-medium text-slate-600 dark:text-slate-300 uppercase tracking-wide">
            {title}
          </h3>
        </div>
        <div className="p-2 bg-teal-100 dark:bg-teal-700/20 rounded-md">
          <NetworkBar className="w-5 h-5 fill-teal-700 dark:fill-teal-400" />
        </div>
      </div>

      <div className="mt-4 text-3xl font-bold text-slate-900 dark:text-white text-right">
        {value ?? 0}
      </div>
    </article>
  );
};

export default StatCard;
