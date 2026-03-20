import { TatStatus } from "../constants/enums.js";
/**
 * Calculate TAT status based on deadline and current time.
 * - ON_TIME: more than 2 hours remaining
 * - AT_RISK: less than 2 hours remaining
 * - BREACHED: past deadline
 */
export declare function calculateTatStatus(deadline: string | Date, now?: Date): TatStatus;
/**
 * Calculate remaining time until deadline in human-readable format.
 */
export declare function formatTimeRemaining(deadline: string | Date, now?: Date): string;
/**
 * Check if TAT was met (submitted before deadline).
 */
export declare function wasTatMet(deadline: string | Date, submittedAt: string | Date): boolean;
//# sourceMappingURL=tat.d.ts.map