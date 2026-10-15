export interface EmploymentMonth { dateTime: string; label: string }

/** Strict ISO year-month parsing, formatted independently of the host timezone. */
export function employmentMonth(value?: string): EmploymentMonth | undefined {
  if (!value || !/^\d{4}-(0[1-9]|1[0-2])$/.test(value) || value.startsWith('0000')) return undefined;
  const date = new Date(`${value}-01T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return undefined;
  return {
    dateTime: value,
    label: new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric', timeZone: 'UTC' }).format(date),
  };
}
