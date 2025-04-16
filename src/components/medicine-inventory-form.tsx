"use client";
import Button from "./ui/button";
import PharmaForm from "./form/PharmaForm";
import PharmaInput from "./form/PharmaInput";
import { Pill, Plus } from "lucide-react";

interface MedicineFormData {
  name: string;
  quantity: number;
  category: string;
}

const InventoryForm = ({
  onSubmit,
}: {
  onSubmit: (data: MedicineFormData) => void;
}) => {
  return (
    <PharmaForm onSubmit={onSubmit}>
      <PharmaInput
        label="Medicine Name"
        name="name"
        placeholder="Gastrol"
        type="text"
        icon={<Pill />}
      />
      <PharmaInput
        label="Quantity"
        name="quantity"
        placeholder="10"
        type="number"
        icon={<Plus />}
      />
      <PharmaInput
        label="Category"
        name="category"
        placeholder="square"
        type="text"
        icon={<Plus />}
      />

      <Button type="submit" className="w-full">
        Add Medicine
      </Button>
    </PharmaForm>
  );
};

export default InventoryForm;
