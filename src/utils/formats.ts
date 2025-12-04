// Centraliza todos los formateadores de fecha aquí. No importes date-fns ni locales directamente en los componentes.
import { format, parseISO, formatDistanceToNow, compareDesc } from "date-fns";
import { es } from "date-fns/locale";

// Re-export compareDesc for sorting dates
export { compareDesc };

/**
 * Devuelve un string tipo "hace 2 días" o "hace 3 meses" para una fecha dada.
 */
export function formatTimeAgo(date?: Date | string | null) {
  if (!date) return "";
  const d = typeof date === "string" ? parseISO(date) : date;
  return formatDistanceToNow(d, { addSuffix: true, locale: es });
}

// ...existing code...
/**
 * Formats a date in a pretty way for Spanish (Colombia).
 * Example: "3 de diciembre de 2025"
 */
export function formatDate(date?: Date | string | null) {
  if (!date) return "";
  const d = typeof date === "string" ? parseISO(date) : date;
  return format(d, "d 'de' MMMM 'de' yyyy", { locale: es });
}

/**
 * Returns a short ISO-like date string `YYYY-MM-DD` for quick display or data attributes.
 */
export function formatDateShort(date?: Date | string | null) {
  if (!date) return "";
  const d = typeof date === "string" ? parseISO(date) : date;
  return format(d, "yyyy-MM-dd");
}

/**
 * Returns the full ISO 8601 datetime string. Useful for `datetime` attributes.
 */
export function toISODateTime(date?: Date | string | null) {
  if (!date) return "";
  const d = typeof date === "string" ? parseISO(date) : date;
  return d.toISOString();
}

/**
 * Formats a start/end period, localized to Spanish (Colombia).
 * Example: "sep. 2021 - presente" or "sep. 2021 - dic. 2022"
 */
export function formatPeriod(
  startDate?: Date | string | null,
  endDate?: Date | string | null
) {
  if (!startDate) return "";
  const s = typeof startDate === "string" ? parseISO(startDate) : startDate;
  const e = endDate ? (typeof endDate === "string" ? parseISO(endDate) : endDate) : null;
  const startStr = format(s, "MMM yyyy", { locale: es });
  const endStr = e ? format(e, "MMM yyyy", { locale: es }) : "Presente";
  return `${startStr} - ${endStr}`;
}