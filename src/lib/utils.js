import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const getCurrency = (currency, price) => {
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: currency ?? "USD",
  })
    .format(price)
    .replace(/(\D)(\d)/, " $1$2");
};

export function sortBy(arr, keySelector, order = "asc") {
  return [...arr].sort((a, b) => {
    const valA = keySelector(a);
    const valB = keySelector(b);

    // Strings → localeCompare
    if (typeof valA === "string" && typeof valB === "string") {
      return order === "asc"
        ? valA.localeCompare(valB)
        : valB.localeCompare(valA);
    }

    // Numbers, Dates, etc.
    if (valA < valB) return order === "asc" ? -1 : 1;
    if (valA > valB) return order === "asc" ? 1 : -1;
    return 0;
  });
}
