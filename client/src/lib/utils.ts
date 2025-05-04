import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function copyTextToClipboard(text: string): Promise<void> {
  return navigator.clipboard.writeText(text)
}
