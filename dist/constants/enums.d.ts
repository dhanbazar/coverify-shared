export declare const UserRole: {
    readonly AGENT: "agent";
    readonly MANAGER: "manager";
    readonly ADMIN: "admin";
    readonly CLIENT_READONLY: "client_readonly";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const CaseStatus: {
    readonly ASSIGNED: "assigned";
    readonly IN_PROGRESS: "in_progress";
    readonly PENDING_SYNC: "pending_sync";
    readonly SUBMITTED: "submitted";
    readonly UNDER_REVIEW: "under_review";
    readonly APPROVED: "approved";
    readonly REJECTED: "rejected";
    readonly REOPENED: "reopened";
};
export type CaseStatus = (typeof CaseStatus)[keyof typeof CaseStatus];
export declare const LoanType: {
    readonly BL: "BL";
    readonly SME: "SME";
    readonly CPV: "CPV";
    readonly RETAIL: "Retail";
    readonly HOME_LOAN: "Home Loan";
    readonly PERSONAL_LOAN: "Personal Loan";
};
export type LoanType = (typeof LoanType)[keyof typeof LoanType];
export declare const VerificationType: {
    readonly BUSINESS: "Business";
    readonly RESIDENCE: "Residence";
    readonly FI: "FI";
    readonly CPV: "CPV";
};
export type VerificationType = (typeof VerificationType)[keyof typeof VerificationType];
export declare const ReportType: {
    readonly PD: "PD";
    readonly FI_CPV: "FI_CPV";
};
export type ReportType = (typeof ReportType)[keyof typeof ReportType];
export declare const ReportStatus: {
    readonly POSITIVE: "Positive";
    readonly NEGATIVE: "Negative";
    readonly REFER: "Refer to Credit";
};
export type ReportStatus = (typeof ReportStatus)[keyof typeof ReportStatus];
export declare const PremiseType: {
    readonly SAME: "Same";
    readonly DIFFERENT: "Different";
};
export type PremiseType = (typeof PremiseType)[keyof typeof PremiseType];
export declare const OwnershipType: {
    readonly OWNED: "Owned";
    readonly RENTED: "Rented";
    readonly LEASED: "Leased";
    readonly COMPANY_PROVIDED: "Company Provided";
    readonly FAMILY_OWNED: "Family Owned";
};
export type OwnershipType = (typeof OwnershipType)[keyof typeof OwnershipType];
export declare const LocalityClass: {
    readonly UPPER: "Upper";
    readonly UPPER_MIDDLE: "Upper Middle";
    readonly MIDDLE: "Middle";
    readonly LOWER_MIDDLE: "Lower Middle";
    readonly LOWER: "Lower";
};
export type LocalityClass = (typeof LocalityClass)[keyof typeof LocalityClass];
export declare const Accessibility: {
    readonly EASY: "Easy";
    readonly DIFFICULT: "Difficult";
};
export type Accessibility = (typeof Accessibility)[keyof typeof Accessibility];
export declare const ResidenceType: {
    readonly FLAT: "Flat";
    readonly TENEMENT: "Tenement";
    readonly BUNGALOW: "Bungalow";
    readonly ROW_HOUSE: "Row House";
    readonly CHAWL: "Chawl";
};
export type ResidenceType = (typeof ResidenceType)[keyof typeof ResidenceType];
export declare const ExternalAppearance: {
    readonly GOOD: "Good";
    readonly AVERAGE: "Average";
    readonly POOR: "Poor";
};
export type ExternalAppearance = (typeof ExternalAppearance)[keyof typeof ExternalAppearance];
export declare const ConstructionType: {
    readonly PAKKA: "Pakka";
    readonly KUTCHA: "Kutcha";
    readonly SEMI_PAKKA: "Semi Pakka";
};
export type ConstructionType = (typeof ConstructionType)[keyof typeof ConstructionType];
export declare const BusinessLocationType: {
    readonly COMMERCIAL: "Commercial";
    readonly INDUSTRIAL: "Industrial";
    readonly RESIDENTIAL: "Residential";
};
export type BusinessLocationType = (typeof BusinessLocationType)[keyof typeof BusinessLocationType];
export declare const OfficeType: {
    readonly SHOP: "Shop";
    readonly FACTORY: "Factory";
    readonly GODOWN: "Godown";
    readonly OFFICE: "Office";
};
export type OfficeType = (typeof OfficeType)[keyof typeof OfficeType];
export declare const NeighbourStatus: {
    readonly POSITIVE: "Positive";
    readonly NEGATIVE: "Negative";
};
export type NeighbourStatus = (typeof NeighbourStatus)[keyof typeof NeighbourStatus];
export declare const SyncStatus: {
    readonly PENDING: "pending";
    readonly SYNCING: "syncing";
    readonly SYNCED: "synced";
    readonly FAILED: "failed";
};
export type SyncStatus = (typeof SyncStatus)[keyof typeof SyncStatus];
export declare const PhotoType: {
    readonly GPS_STAMPED: "gps_stamped";
    readonly SIGNBOARD: "signboard";
    readonly DOCUMENT: "document";
    readonly GST_SCREENSHOT: "gst_screenshot";
    readonly SATELLITE_MAP: "satellite_map";
    readonly VISITING_CARD: "visiting_card";
    readonly SIGNATURE: "signature";
};
export type PhotoType = (typeof PhotoType)[keyof typeof PhotoType];
export declare const TatStatus: {
    readonly ON_TIME: "on_time";
    readonly AT_RISK: "at_risk";
    readonly BREACHED: "breached";
};
export type TatStatus = (typeof TatStatus)[keyof typeof TatStatus];
//# sourceMappingURL=enums.d.ts.map