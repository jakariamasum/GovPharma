"use client";

import { FieldValues } from "react-hook-form";
import PharmaForm from "./form/PharmaForm";
import PharmaInput from "./form/PharmaInput";
import Button from "./ui/button";
const PharmacyForm = ({
  handleSubmit,
}: {
  handleSubmit: (data: FieldValues) => void;
}) => {
  return (
    <PharmaForm onSubmit={handleSubmit}>
      <PharmaInput
        label="Pharmacy Name"
        name="name"
        placeholder="Pharmacy name here.."
        type="text"
      />
      <PharmaInput
        label="Location"
        name="location"
        placeholder="Location here.."
        type="text"
      />
      <PharmaInput
        label="Contact"
        name="contact"
        placeholder="01xxxxxxx"
        type="number"
      />

      <Button type="submit" className="w-full">
        Submit
      </Button>
    </PharmaForm>
  );
};
export default PharmacyForm;
