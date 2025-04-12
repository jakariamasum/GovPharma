import z from "zod";
export const personalInfoSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters." }),
  nationalId: z
    .string()
    .min(10, { message: "National ID must be at least 10 characters." }),
  dateOfBirth: z.string().min(1, { message: "Date of birth is required." }),
  gender: z.string().min(1, { message: "Gender is required." }),
  mobileNumber: z
    .string()
    .min(11, { message: "Mobile number must be at least 11 characters." }),
});

export const addressSchema = z.object({
  division: z.string().min(1, { message: "Division is required." }),
  district: z.string().min(1, { message: "District is required." }),
  upazila: z.string().min(1, { message: "Upazila is required." }),
  address: z
    .string()
    .min(5, { message: "Address must be at least 5 characters." }),
  postalCode: z
    .string()
    .min(4, { message: "Postal code must be at least 4 characters." }),
});

export const incomeInfoSchema = z.object({
  monthlyIncome: z.string().min(1, { message: "Monthly income is required." }),
  occupation: z.string().min(1, { message: "Occupation is required." }),
  familyMembers: z
    .string()
    .min(1, { message: "Number of family members is required." }),
});
