"use client";

import StatCard from "@/components/stat-card";
import Button from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialoge";
import { Separator } from "@/components/ui/separator";
import {
  PharmaTable,
  PharmaTableBody,
  PharmaTableCell,
  PharmaTableHead,
  PharmaTableHeader,
  PharmaTableRow,
} from "@/components/ui/table";
import { FileDown, Plus, Search } from "lucide-react";
import { useState } from "react";

const inventory = [
  { id: 1, name: "Paracetamol", quantity: 120, category: "Pain Relief" },
  { id: 2, name: "Ibuprofen", quantity: 80, category: "Anti-inflammatory" },
  { id: 3, name: "Amoxicillin", quantity: 40, category: "Antibiotic" },
];

const Inventory = () => {
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [exportCategory, setExportCategory] = useState("all");
  const [isGenerating, setIsGenerating] = useState(false);

  const generateExport = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setModalOpen(false);
    }, 1000);
  };

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Medicine Inventory
        </h2>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-teal-800 dark:text-slate-500" />
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              placeholder="Search medicine..."
              className="border border-teal-800 pl-10 pr-4 py-2 text-sm  rounded-lg bg-white dark:bg-slate-800 dark:text-white dark:border-slate-700 focus:ring-2 focus:ring-teal-800 outline-none"
            />
          </div>
          <Button variant="outline" onClick={() => setModalOpen(true)}>
            <FileDown className="w-4 h-4 mr-2" /> Export
          </Button>
          <Button>
            <Plus className="w-4 h-4 mr-2" /> Add Medicine
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard title="Total Medicines" value={inventory.length} />
        <StatCard
          title="Low Stock"
          value={inventory.filter((m) => m.quantity < 50).length}
        />
        <StatCard
          title="Categories"
          value={new Set(inventory.map((m) => m.category)).size}
        />
      </div>

      <div className="overflow-auto rounded-lg shadow-md">
        <PharmaTable>
          <PharmaTableHeader>
            <PharmaTableRow>
              <PharmaTableHead>ID</PharmaTableHead>
              <PharmaTableHead>Name</PharmaTableHead>
              <PharmaTableHead>Quantity</PharmaTableHead>
              <PharmaTableHead>Category</PharmaTableHead>
            </PharmaTableRow>
          </PharmaTableHeader>
          <PharmaTableBody>
            {inventory
              .filter((item) =>
                item.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((item) => (
                <PharmaTableRow key={item.id}>
                  <PharmaTableCell>{item.id}</PharmaTableCell>
                  <PharmaTableCell>{item.name}</PharmaTableCell>
                  <PharmaTableCell>{item.quantity}</PharmaTableCell>
                  <PharmaTableCell>{item.category}</PharmaTableCell>
                </PharmaTableRow>
              ))}
          </PharmaTableBody>
        </PharmaTable>
      </div>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Export Inventory Data</DialogTitle>
          </DialogHeader>

          <div className="space-y-4 py-2">
            <div>
              <h4 className="mb-2 text-sm font-medium">Filter by Category</h4>
              <select
                value={exportCategory}
                onChange={(e) => setExportCategory(e.target.value)}
                className="w-full border rounded px-3 py-2 dark:bg-gray-800 dark:border-gray-700"
              >
                <option value="all">All</option>
                <option value="Pain Relief">Pain Relief</option>
                <option value="Anti-inflammatory">Anti-inflammatory</option>
                <option value="Antibiotic">Antibiotic</option>
              </select>
            </div>

            <Separator />
          </div>

          <DialogFooter className="sm:justify-between">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="button"
              onClick={generateExport}
              disabled={isGenerating}
            >
              {isGenerating ? "Generating..." : "Export PDF"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};
export default Inventory;
