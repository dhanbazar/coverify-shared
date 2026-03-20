/**
 * Generate a human-readable case ID.
 * Format: CV-YYYY-XXXXX (e.g., CV-2026-00042)
 */
export declare function generateCaseId(sequenceNumber: number): string;
/**
 * Parse a case ID to extract year and sequence.
 */
export declare function parseCaseId(caseId: string): {
    year: number;
    sequence: number;
} | null;
//# sourceMappingURL=caseId.d.ts.map