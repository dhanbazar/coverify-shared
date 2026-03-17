/**
 * Generate a human-readable case ID.
 * Format: CV-YYYY-XXXXX (e.g., CV-2026-00042)
 */
export function generateCaseId(sequenceNumber: number): string {
  const year = new Date().getFullYear();
  const padded = String(sequenceNumber).padStart(5, "0");
  return `CV-${year}-${padded}`;
}

/**
 * Parse a case ID to extract year and sequence.
 */
export function parseCaseId(
  caseId: string,
): { year: number; sequence: number } | null {
  const match = caseId.match(/^CV-(\d{4})-(\d{5})$/);
  if (!match?.[1] || !match[2]) return null;
  return {
    year: parseInt(match[1], 10),
    sequence: parseInt(match[2], 10),
  };
}
