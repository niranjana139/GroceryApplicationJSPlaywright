import { Locator } from "@playwright/test";

export function getRandomLetters(length = 2) {
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    result += chars[randomIndex];
  }

  return result;
}

/**
 * Uploads multiple files to a file input element by setting the input files with full paths.
 * @param locator - The Playwright locator for the file input element.
 * @param files - Array of file names to upload.
 * @param baseDir - Base directory path where the files are located.
 */
export async function uploadFiles(
  locator: Locator,
  files: string[],
  baseDir: string,
): Promise<void> {
  const filePaths = files.map((file) => `${baseDir}/${file}`);
  await locator.setInputFiles(filePaths);
}

/**
 * Checks if an array of strings or numbers is sorted in ascending order.
 * Converts values to numbers for comparison.
 * @param arr - Array of strings or numbers to check.
 * @returns True if sorted ascending, false otherwise.
 */
export function isAscendingSort(arr: (string | number)[]): boolean {
  for (let i = 0; i < arr.length - 1; i++) {
    if (Number(arr[i]) > Number(arr[i + 1])) return false;
  }
  return true;
}

/**
 * Checks if an array of strings or numbers is sorted in descending order.
 * Parses string values to integers for comparison.
 * @param arr - Array of strings or numbers to check.
 * @returns True if sorted descending, false otherwise.
 */
export function isDescendingSort(arr: (string | number)[]): boolean {
  for (let i = 0; i < arr.length - 1; i++) {
    const amountA = parseInt(arr[i].toString(), 10);
    const amountB = parseInt(arr[i + 1].toString(), 10);

    if (amountA < amountB) {
      return false;
    }
  }
  return true;
}

/**
 * Checks if an array of strings or numbers is sorted alphanumerically in the specified order.
 * Performs case-insensitive comparison using localeCompare.
 * @param arr - Array of strings or numbers to check.
 * @param order - Sort order: 'asc' for ascending, 'desc' for descending.
 * @returns True if sorted in the specified order, false otherwise.
 */
export function alphaNumericSort(
  arr: (string | number)[],
  order: "asc" | "desc" = "asc",
): boolean {
  for (let i = 0; i < arr.length - 1; i++) {
    const a = arr[i].toString().toLowerCase();
    const b = arr[i + 1].toString().toLowerCase();

    const compare = a.localeCompare(b);

    if (order === "asc" && compare > 0) return false;
    if (order === "desc" && compare < 0) return false;
  }

  return true;
}

/**
 * Generates a timestamp string in the format MM_DD_YYYY_HH_MM.
 * Uses the current date and time.
 * @returns Formatted timestamp string.
 */
export function getTimestamp(): string {
  const d = new Date();

  const pad = (n: number): string => String(n).padStart(2, "0");

  return `${pad(d.getMonth() + 1)}_${pad(d.getDate())}_${d.getFullYear()}_${pad(d.getHours())}_${pad(d.getMinutes())}`;
}

/**
 * Gets the first day of a month that is a specified number of months ahead of the current month.
 * @param offset - Number of months to add to the current month (default: 1).
 * @returns Date string in MM/1/YYYY format.
 */
export function getUpcomingMonth(offset: number = 1): string {
  const d = new Date();
  d.setMonth(d.getMonth() + offset);

  return `${d.getMonth() + 1}/1/${d.getFullYear()}`;
}

/**
 * Generates a random email address with the specified length and domain.
 * Uses lowercase letters and numbers for the username.
 * @param length - Length of the username part (default: 8).
 * @param domain - Email domain (default: "mailsac.com").
 * @returns Randomly generated email address.
 */
export function generateEmail(
  length: number = 8,
  domain: string = "mailsac.com",
): string {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let str = "";

  for (let i = 0; i < length; i++) {
    str += chars[Math.floor(Math.random() * chars.length)];
  }

  return `${str}@${domain}`;
}

/**
 * Generates a random 10-digit phone number starting with 9.
 * @returns Randomly generated phone number as a string.
 */
export function generatePhone(): string {
  return `9${Math.floor(100000000 + Math.random() * 900000000)}`;
}

/**
 * Generates a random Social Security Number (SSN) in XXX-XX-XXXX format.
 * @returns Randomly generated SSN string.
 */
export function generateSSN(): string {
  const area = Math.floor(100 + Math.random() * 900); // 100–999
  const group = Math.floor(10 + Math.random() * 90); // 10–99
  const serial = Math.floor(1000 + Math.random() * 9000); // 1000–9999

  return `${area}-${group}-${serial}`;
}

/**
 * Generates a random company name by combining random prefixes and suffixes.
 * @returns Randomly generated company name string.
 */
export function generateCompanyName(): string {
  const prefixes = [
    "Tech", "Global", "Smart", "Digital", "Advanced", "Premier", "Elite", "Innovative",
    "Dynamic", "Strategic", "NextGen", "Future", "Quantum", "Apex", "Vertex", "Zenith"
  ];

  const suffixes = [
    "Solutions", "Systems", "Technologies", "Corp", "LLC", "Inc", "Enterprises",
    "Group", "Industries", "Labs", "Studios", "Partners", "Ventures", "Hub"
  ];

  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];

  return `${prefix} ${suffix}`;
}

/**
 * Checks if an array of date strings or Date objects is sorted in ascending order.
 * Converts string values to Date objects for comparison.
 * @param arr - Array of date strings or Date objects to check.
 * @returns True if sorted ascending by date, false otherwise.
 */
export function isSortedByDate(arr: (string | Date)[]): boolean {
  for (let i = 0; i < arr.length - 1; i++) {
    const date1 = new Date(arr[i]);
    const date2 = new Date(arr[i + 1]);

    if (date1 > date2) {
      return false;
    }
  }
  return true;
}

/**
 * Checks if an array of date strings or Date objects is sorted in descending order.
 * Converts string values to Date objects for comparison.
 * @param array - Array of date strings or Date objects to check.
 * @returns True if sorted descending by date, false otherwise.
 */
export function isSortedByDateReverse(array: (string | Date)[]): boolean {
  for (let i = 0; i < array.length - 1; i++) {
    const date1 = new Date(array[i]).getTime();
    const date2 = new Date(array[i + 1]).getTime();

    if (date2 > date1) {
      return false;
    }
  }
  return true;
}

/**
 * Gets the date exactly one month ago from today in MM/DD/YYYY format.
 * Accounts for timezone offset to ensure consistent date calculation.
 * @returns Date string in MM/DD/YYYY format for one month ago.
 */
export function dateOneMonthAgo(): string {
  const offset = new Date().getTimezoneOffset();

  const today = new Date(Date.now() - offset * 60 * 1000);
  today.setMonth(today.getMonth() - 1);
  let dd: string | number = today.getDate();
  let mm: string | number = today.getMonth() + 1;
  const yyyy = today.getFullYear();
  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  return `${mm}/${dd}/${yyyy}`;
}

export function getRandomBirthdayByAge(age: string | number): [Date, Date] {
  const parsedAge = typeof age === "string" ? parseInt(age, 10) : age;

  function getRange(age: number): [Date, Date] {
    const now = new Date();

    const earliest = new Date(now);
    const latest = new Date(now);

    earliest.setFullYear(earliest.getFullYear() - (age + 1));
    earliest.setDate(earliest.getDate() + 2);

    latest.setFullYear(latest.getFullYear() - age);
    latest.setDate(latest.getDate() - 2);

    return [earliest, latest];
  }

  return getRange(parsedAge);
}

export function dateBetween(from: Date, to: Date): Date {
  const fromTime = from.getTime();
  const toTime = to.getTime();

  const randomTime = fromTime + Math.random() * (toTime - fromTime);

  return new Date(randomTime);
}
