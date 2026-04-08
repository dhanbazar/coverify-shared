// ── Roles ──
export const UserRole = {
  AGENT: "agent",
  MANAGER: "manager",
  ADMIN: "admin",
  CLIENT_READONLY: "client_readonly",
} as const;
export type UserRole = (typeof UserRole)[keyof typeof UserRole];

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
} as const;
export type CaseStatus = (typeof CaseStatus)[keyof typeof CaseStatus];

// ── Loan Type ──
export const LoanType = {
  BL: "BL",
  SME: "SME",
  CPV: "CPV",
  RETAIL: "Retail",
  HOME_LOAN: "Home Loan",
  PERSONAL_LOAN: "Personal Loan",
} as const;
export type LoanType = (typeof LoanType)[keyof typeof LoanType];

// ── Verification Type ──
export const VerificationType = {
  BUSINESS: "Business",
  RESIDENCE: "Residence",
  FI: "FI",
  CPV: "CPV",
} as const;
export type VerificationType =
  (typeof VerificationType)[keyof typeof VerificationType];

// ── Report Type ──
export const ReportType = {
  PD: "PD",
  FI_CPV: "FI_CPV",
} as const;
export type ReportType = (typeof ReportType)[keyof typeof ReportType];

// ── Report Status / Recommendation ──
export const ReportStatus = {
  POSITIVE: "Positive",
  NEGATIVE: "Negative",
  REFER: "Refer to Credit",
} as const;
export type ReportStatus = (typeof ReportStatus)[keyof typeof ReportStatus];

// ── Premise Type ──
export const PremiseType = {
  SAME: "Same",
  DIFFERENT: "Different",
} as const;
export type PremiseType = (typeof PremiseType)[keyof typeof PremiseType];

// ── Residence Ownership ──
export const OwnershipType = {
  OWNED: "Owned",
  RENTED: "Rented",
  LEASED: "Leased",
  COMPANY_PROVIDED: "Company Provided",
  FAMILY_OWNED: "Family Owned",
} as const;
export type OwnershipType =
  (typeof OwnershipType)[keyof typeof OwnershipType];

// ── Locality Class ──
export const LocalityClass = {
  UPPER: "Upper",
  UPPER_MIDDLE: "Upper Middle",
  MIDDLE: "Middle",
  LOWER_MIDDLE: "Lower Middle",
  LOWER: "Lower",
} as const;
export type LocalityClass =
  (typeof LocalityClass)[keyof typeof LocalityClass];

// ── Accessibility ──
export const Accessibility = {
  EASY: "Easy",
  DIFFICULT: "Difficult",
} as const;
export type Accessibility =
  (typeof Accessibility)[keyof typeof Accessibility];

// ── Residence Type ──
export const ResidenceType = {
  FLAT: "Flat",
  TENEMENT: "Tenement",
  BUNGALOW: "Bungalow",
  ROW_HOUSE: "Row House",
  CHAWL: "Chawl",
} as const;
export type ResidenceType =
  (typeof ResidenceType)[keyof typeof ResidenceType];

// ── External Appearance ──
export const ExternalAppearance = {
  GOOD: "Good",
  AVERAGE: "Average",
  POOR: "Poor",
} as const;
export type ExternalAppearance =
  (typeof ExternalAppearance)[keyof typeof ExternalAppearance];

// ── Construction Type ──
export const ConstructionType = {
  PAKKA: "Pakka",
  KUTCHA: "Kutcha",
  SEMI_PAKKA: "Semi Pakka",
} as const;
export type ConstructionType =
  (typeof ConstructionType)[keyof typeof ConstructionType];

// ── Business Location Type ──
export const BusinessLocationType = {
  COMMERCIAL: "Commercial",
  INDUSTRIAL: "Industrial",
  RESIDENTIAL: "Residential",
} as const;
export type BusinessLocationType =
  (typeof BusinessLocationType)[keyof typeof BusinessLocationType];

// ── Office Type ──
export const OfficeType = {
  SHOP: "Shop",
  FACTORY: "Factory",
  GODOWN: "Godown",
  OFFICE: "Office",
} as const;
export type OfficeType = (typeof OfficeType)[keyof typeof OfficeType];

// ── Neighbour Check Status ──
export const NeighbourStatus = {
  POSITIVE: "Positive",
  NEGATIVE: "Negative",
} as const;
export type NeighbourStatus =
  (typeof NeighbourStatus)[keyof typeof NeighbourStatus];

// ── Sync Status ──
export const SyncStatus = {
  PENDING: "pending",
  SYNCING: "syncing",
  SYNCED: "synced",
  FAILED: "failed",
} as const;
export type SyncStatus = (typeof SyncStatus)[keyof typeof SyncStatus];

// ── Photo Type ──
export const PhotoType = {
  GPS_STAMPED: "gps_stamped",
  SIGNBOARD: "signboard",
  DOCUMENT: "document",
  GST_SCREENSHOT: "gst_screenshot",
  SATELLITE_MAP: "satellite_map",
  VISITING_CARD: "visiting_card",
  SIGNATURE: "signature",
} as const;
export type PhotoType = (typeof PhotoType)[keyof typeof PhotoType];

// ── TAT Status ──
export const TatStatus = {
  ON_TIME: "on_time",
  AT_RISK: "at_risk",
  BREACHED: "breached",
} as const;
export type TatStatus = (typeof TatStatus)[keyof typeof TatStatus];
