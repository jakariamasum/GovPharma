"use client";

import { useState, useMemo } from "react";
import { Search, Trash2, Pencil } from "lucide-react";
import Pagination from "@/components/pagination";
import {
  PharmaTable,
  PharmaTableBody,
  PharmaTableCell,
  PharmaTableHead,
  PharmaTableHeader,
  PharmaTableRow,
} from "@/components/ui/table";

const users = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    role: "User",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Clara Lee",
    email: "clara@example.com",
    role: "Moderator",
    status: "Active",
  },
  {
    id: 4,
    name: "David Kim",
    email: "david@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: 5,
    name: "Eva Green",
    email: "eva@example.com",
    role: "Admin",
    status: "Inactive",
  },
  {
    id: 6,
    name: "Frank White",
    email: "frank@example.com",
    role: "Moderator",
    status: "Active",
  },
  {
    id: 7,
    name: "Grace Lee",
    email: "grace@example.com",
    role: "User",
    status: "Inactive",
  },
  {
    id: 8,
    name: "Henry Ford",
    email: "henry@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 9,
    name: "Isla Moore",
    email: "isla@example.com",
    role: "User",
    status: "Inactive",
  },
  {
    id: 10,
    name: "Jack Brown",
    email: "jack@example.com",
    role: "User",
    status: "Active",
  },
];

const AllUsers = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 5;

  const filteredUsers = useMemo(() => {
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase()) ||
        user.role.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const paginatedUsers = useMemo(() => {
    const startIndex = (page - 1) * pageSize;
    return filteredUsers.slice(startIndex, startIndex + pageSize);
  }, [filteredUsers, page]);

  const totalPages = Math.ceil(filteredUsers.length / pageSize);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
          Manage Users
        </h2>
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400 dark:text-slate-500" />
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            placeholder="Search users..."
            className="pl-10 pr-4 py-2 text-sm border rounded-lg bg-white dark:bg-slate-800 dark:text-white dark:border-slate-700 focus:ring-2 focus:ring-teal-800 outline-none"
          />
        </div>
      </div>

      <div className="overflow-auto rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
        <PharmaTable>
          <PharmaTableHeader>
            <PharmaTableRow>
              <PharmaTableHead>Serial</PharmaTableHead>
              <PharmaTableHead>Name</PharmaTableHead>
              <PharmaTableHead>Email</PharmaTableHead>
              <PharmaTableHead>Role</PharmaTableHead>
              <PharmaTableHead>Status</PharmaTableHead>
              <PharmaTableHead>Action</PharmaTableHead>
            </PharmaTableRow>
          </PharmaTableHeader>
          <PharmaTableBody>
            {paginatedUsers.length > 0 ? (
              paginatedUsers.map((user, index) => (
                <PharmaTableRow key={user.id}>
                  <PharmaTableCell>
                    <div className="bg-teal-600 text-white p-1 px-2 w-fit rounded-md">
                      {(page - 1) * pageSize + index + 1}
                    </div>
                  </PharmaTableCell>
                  <PharmaTableCell>{user.name}</PharmaTableCell>
                  <PharmaTableCell>{user.email}</PharmaTableCell>
                  <PharmaTableCell>{user.role}</PharmaTableCell>
                  <PharmaTableCell>
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        user.status === "Active"
                          ? "bg-teal-100 text-teal-800"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {user.status}
                    </span>
                  </PharmaTableCell>
                  <PharmaTableCell className="flex gap-2">
                    <button className="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700">
                      <Pencil className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                    </button>
                    <button className="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700">
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </button>
                  </PharmaTableCell>
                </PharmaTableRow>
              ))
            ) : (
              <PharmaTableRow>
                <PharmaTableCell
                  colSpan={6}
                  className="text-center py-6 text-slate-500 dark:text-slate-400"
                >
                  No users found.
                </PharmaTableCell>
              </PharmaTableRow>
            )}
          </PharmaTableBody>
        </PharmaTable>
      </div>

      {totalPages > 1 && (
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      )}
    </div>
  );
};

export default AllUsers;
