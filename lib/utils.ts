import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const langBgColor = (displayName: string) => {
  return (
    (displayName === "HTML" && "bg-orange-400 text-black p-1") ||
    (displayName === "CSS" && "bg-blue-400 text-black p-1") ||
    (displayName === "JS" && "bg-yellow-400 text-black p-1")
  );
};

export const PORT = process.env.PORT_URL || "http://localhost:3007";
