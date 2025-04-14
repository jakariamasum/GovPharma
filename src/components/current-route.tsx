import Link from "next/link";
const CurrentRoute = ({ label, link }: { label: string; link: string }) => {
  return (
    <div className="md:flex items-center gap-4 hidden ">
      <nav className="text-sm text-gray-600 dark:text-gray-300">
        <ol className="list-none p-0 inline-flex space-x-2">
          <li>
            <Link href={link}>{label}</Link>
          </li>
          <li>/</li>
          <li className="text-teal-500">Current Page</li>
        </ol>
      </nav>
    </div>
  );
};

export default CurrentRoute;
