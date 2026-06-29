import { twMerge } from "tailwind-merge";

type ClassValue = string | number | false | null | undefined;

export function cn(...inputs: ClassValue[]) {
  return twMerge(inputs.filter(Boolean).join(" "));
}
