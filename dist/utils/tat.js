import { TatStatus } from "../constants/enums.js";
/**
 * Calculate TAT status based on deadline and current time.
 * - ON_TIME: more than 2 hours remaining
 * - AT_RISK: less than 2 hours remaining
 * - BREACHED: past deadline
 */
export function calculateTatStatus(deadline, now = new Date()) {
    const deadlineDate = typeof deadline === "string" ? new Date(deadline) : deadline;
    const diffMs = deadlineDate.getTime() - now.getTime();
    if (diffMs <= 0)
        return TatStatus.BREACHED;
    if (diffMs <= 2 * 60 * 60 * 1000)
        return TatStatus.AT_RISK;
    return TatStatus.ON_TIME;
}
/**
 * Calculate remaining time until deadline in human-readable format.
 */
export function formatTimeRemaining(deadline, now = new Date()) {
    const deadlineDate = typeof deadline === "string" ? new Date(deadline) : deadline;
    const diffMs = deadlineDate.getTime() - now.getTime();
    if (diffMs <= 0)
        return "Overdue";
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    if (hours > 24) {
        const days = Math.floor(hours / 24);
        return `${days}d ${hours % 24}h`;
    }
    return `${hours}h ${minutes}m`;
}
/**
 * Check if TAT was met (submitted before deadline).
 */
export function wasTatMet(deadline, submittedAt) {
    const d = typeof deadline === "string" ? new Date(deadline) : deadline;
    const s = typeof submittedAt === "string" ? new Date(submittedAt) : submittedAt;
    return s.getTime() <= d.getTime();
}
//# sourceMappingURL=tat.js.map