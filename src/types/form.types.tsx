import { ReactNode } from "react";

export interface IForm {
  name: string;
  label: string;
  type: string;
  required?: boolean;
  placeholder: string;
  icon?: ReactNode;
}
