import z from "zod";
export const loginSchema = z.object({
  nationalId: z
    .string()
    .min(10, { message: "National ID must be at least 10 characters." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});
