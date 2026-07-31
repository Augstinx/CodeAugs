import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS classes with clsx logic and tailwind-merge conflict resolution.
 * Essential for creating reusable and extensible UI components in the CodeAugs design system.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}