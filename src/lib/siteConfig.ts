export function getSiteNumber(): number {
  const siteNumber = process.env.SITE_NUMBER || process.env.NEXT_PUBLIC_SITE_NUMBER || "1";
  const parsed = parseInt(siteNumber, 10);

  if (isNaN(parsed) || parsed < 1 || parsed > 40) {
    throw new Error(`SITE_NUMBER must be between 1 and 40, got: ${siteNumber}`);
  }

  return parsed;
}
