import { cn } from "@/utils/CN";

interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  children: React.ReactNode;
}

export const PharmaTable = ({ className, children, ...props }: TableProps) => {
  return (
    <div className="relative w-full overflow-auto rounded-xl border border-slate-200">
      <table
        className={cn(
          "w-full caption-bottom text-sm text-slate-700",
          className
        )}
        {...props}
      >
        {children}
      </table>
    </div>
  );
};

interface TableHeaderProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
}

export const PharmaTableHeader = ({
  className,
  children,
  ...props
}: TableHeaderProps) => {
  return (
    <thead className={cn("[&_tr]:border-b bg-slate-50", className)} {...props}>
      {children}
    </thead>
  );
};

interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
}

export const PharmaTableBody = ({
  className,
  children,
  ...props
}: TableBodyProps) => {
  return (
    <tbody className={cn("[&_tr:last-child]:border-0", className)} {...props}>
      {children}
    </tbody>
  );
};

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children: React.ReactNode;
}

export const PharmaTableRow = ({
  className,
  children,
  ...props
}: TableRowProps) => {
  return (
    <tr
      className={cn(
        "border-b transition-colors hover:bg-teal-50 data-[state=selected]:bg-teal-100",
        className
      )}
      {...props}
    >
      {children}
    </tr>
  );
};

interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
}

export const PharmaTableHead = ({
  className,
  children,
  ...props
}: TableHeadProps) => {
  return (
    <th
      className={cn(
        "h-12 px-6 text-left align-middle font-semibold text-teal-800",
        className
      )}
      {...props}
    >
      {children}
    </th>
  );
};

interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
}

export const PharmaTableCell = ({
  className,
  children,
  ...props
}: TableCellProps) => {
  return (
    <td
      className={cn("px-6 py-4 align-middle text-sm text-slate-700", className)}
      {...props}
    >
      {children}
    </td>
  );
};
