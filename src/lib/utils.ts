import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

//a função cn combina classes com `clsx` e resolve conflitos do Tailwind com `twMerge`
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
