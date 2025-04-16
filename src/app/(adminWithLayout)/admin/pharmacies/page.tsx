"use client";

import { useState } from "react";
import { FileDown, Plus, Search } from "lucide-react";
import Button from "@/components/ui/button";
import {
  PharmaTable,
  PharmaTableBody,
  PharmaTableCell,
  PharmaTableHead,
  PharmaTableHeader,
  PharmaTableRow,
} from "@/components/ui/table";
import PharmacyForm from "@/components/add-pharmacy-form";
import PharmaModal from "@/components/modal/PharmaModal";
import { FieldValues } from "react-hook-form";

const pharmacies = [
  {
    id: 1,
    name: "HealthFirst Pharmacy",
    location: "Downtown",
    contact: "0123456789",
  },
  { id: 2, name: "MediCare Plus", location: "Uptown", contact: "0987654321" },
  { id: 3, name: "CityMed", location: "Suburb", contact: "0912345678" },
];

const Pharmacies = () => {
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = (data: FieldValues) => {
    console.log("Form Data Submitted:", data);
    setModalOpen(false);
  };

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Pharmacies
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
              placeholder="Search pharmacy..."
              className="border border-teal-800 pl-10 pr-4 py-2 text-sm  rounded-lg bg-white dark:bg-slate-800 dark:text-white dark:border-slate-700 focus:ring-2 focus:ring-teal-800 outline-none"
            />
          </div>
          <Button variant="outline">
            <FileDown className="w-4 h-4 mr-2" /> Export
          </Button>
          <Button onClick={() => setModalOpen(true)}>
            <Plus className="w-4 h-4 mr-2" /> Add Pharmacy
          </Button>
        </div>
      </div>

      <div className="overflow-auto rounded-lg shadow-md">
        <PharmaTable>
          <PharmaTableHeader>
            <PharmaTableRow>
              <PharmaTableHead>ID</PharmaTableHead>
              <PharmaTableHead>Name</PharmaTableHead>
              <PharmaTableHead>Location</PharmaTableHead>
              <PharmaTableHead>Contact</PharmaTableHead>
            </PharmaTableRow>
          </PharmaTableHeader>
          <PharmaTableBody>
            {pharmacies
              .filter((ph) =>
                ph.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((ph) => (
                <PharmaTableRow key={ph.id}>
                  <PharmaTableCell>{ph.id}</PharmaTableCell>
                  <PharmaTableCell>{ph.name}</PharmaTableCell>
                  <PharmaTableCell>{ph.location}</PharmaTableCell>
                  <PharmaTableCell>{ph.contact}</PharmaTableCell>
                </PharmaTableRow>
              ))}
          </PharmaTableBody>
        </PharmaTable>
      </div>

      <PharmaModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        title="Add New Pharmacy"
        description="Please fill out the form to register a new pharmacy."
      >
        <PharmacyForm handleSubmit={handleSubmit} />
      </PharmaModal>
    </section>
  );
};

export default Pharmacies;
