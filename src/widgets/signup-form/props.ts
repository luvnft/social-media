import { UseFormReturn } from "react-hook-form";

export interface IProps {
  form: UseFormReturn<{ email: string; password: string }, any, undefined>;
}