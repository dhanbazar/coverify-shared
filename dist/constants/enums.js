// ── Roles ──
export const UserRole = {
    AGENT: "agent",
    MANAGER: "manager",
    ADMIN: "admin",
    CLIENT_READONLY: "client_readonly",
};
// ── Case Status ──
export const CaseStatus = {
    ASSIGNED: "assigned",
    IN_PROGRESS: "in_progress",
    PENDING_SYNC: "pending_sync",
    SUBMITTED: "submitted",
    UNDER_REVIEW: "under_review",
    APPROVED: "approved",
    REJECTED: "rejected",
    REOPENED: "reopened",
    REPORT_GENERATED: "report_generated",
};
// ── Loan Type ──
export const LoanType = {
    BL: "BL",
    SME: "SME",
    CPV: "CPV",
    RETAIL: "Retail",
    HOME_LOAN: "Home Loan",
    PERSONAL_LOAN: "Personal Loan",
};
// ── Verification Type ──
export const VerificationType = {
    BUSINESS: "Business",
    RESIDENCE: "Residence",
    FI: "FI",
    CPV: "CPV",
};
// ── Report Type ──
export const ReportType = {
    PD: "PD",
    FI_CPV: "FI_CPV",
};
// ── Report Status / Recommendation ──
export const ReportStatus = {
    POSITIVE: "Positive",
    NEGATIVE: "Negative",
    REFER: "Refer to Credit",
};
// ── Premise Type ──
export const PremiseType = {
    SAME: "Same",
    DIFFERENT: "Different",
};
// ── Residence Ownership ──
export const OwnershipType = {
    OWNED: "Owned",
    RENTED: "Rented",
    LEASED: "Leased",
    COMPANY_PROVIDED: "Company Provided",
    FAMILY_OWNED: "Family Owned",
};
// ── Locality Class ──
export const LocalityClass = {
    UPPER: "Upper",
    UPPER_MIDDLE: "Upper Middle",
    MIDDLE: "Middle",
    LOWER_MIDDLE: "Lower Middle",
    LOWER: "Lower",
};
// ── Accessibility ──
export const Accessibility = {
    EASY: "Easy",
    DIFFICULT: "Difficult",
};
// ── Residence Type ──
export const ResidenceType = {
    FLAT: "Flat",
    TENEMENT: "Tenement",
    BUNGALOW: "Bungalow",
    ROW_HOUSE: "Row House",
    CHAWL: "Chawl",
};
// ── External Appearance ──
export const ExternalAppearance = {
    GOOD: "Good",
    AVERAGE: "Average",
    POOR: "Poor",
};
// ── Construction Type ──
export const ConstructionType = {
    PAKKA: "Pakka",
    KUTCHA: "Kutcha",
    SEMI_PAKKA: "Semi Pakka",
};
// ── Business Location Type ──
export const BusinessLocationType = {
    COMMERCIAL: "Commercial",
    INDUSTRIAL: "Industrial",
    RESIDENTIAL: "Residential",
};
// ── Office Type ──
export const OfficeType = {
    SHOP: "Shop",
    FACTORY: "Factory",
    GODOWN: "Godown",
    OFFICE: "Office",
};
// ── Neighbour Check Status ──
export const NeighbourStatus = {
    POSITIVE: "Positive",
    NEGATIVE: "Negative",
};
// ── Sync Status ──
export const SyncStatus = {
    PENDING: "pending",
    SYNCING: "syncing",
    SYNCED: "synced",
    FAILED: "failed",
};
// ── Photo Type ──
export const PhotoType = {
    GPS_STAMPED: "gps_stamped",
    SIGNBOARD: "signboard",
    DOCUMENT: "document",
    GST_SCREENSHOT: "gst_screenshot",
    SATELLITE_MAP: "satellite_map",
    VISITING_CARD: "visiting_card",
    SIGNATURE: "signature",
};
// ── TAT Status ──
export const TatStatus = {
    ON_TIME: "on_time",
    AT_RISK: "at_risk",
    BREACHED: "breached",
};
//# sourceMappingURL=enums.js.map