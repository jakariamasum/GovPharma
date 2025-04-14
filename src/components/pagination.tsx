import Button from "./ui/button";

const Pagination = ({
  page,
  totalPages,
  onPageChange,
}: {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) => {
  return (
    <div className="flex justify-center mt-6 gap-3 ">
      <Button
        onClick={() => onPageChange(page - 1)}
        variant="outline"
        disabled={page === 1}
      >
        Previous
      </Button>
      <span className="px-4 py-2 text-sm font-medium text-teal-800 border border-teal-800 rounded-lg">
        Page {page} of {totalPages}
      </span>
      <Button
        onClick={() => onPageChange(page + 1)}
        variant="outline"
        disabled={page === totalPages}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
