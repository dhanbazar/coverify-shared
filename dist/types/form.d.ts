import type { PremiseType, OwnershipType, LocalityClass, Accessibility, ResidenceType, ExternalAppearance, ConstructionType, BusinessLocationType, OfficeType, NeighbourStatus, ReportStatus } from "../constants/enums.js";
export interface VisitDetails {
    applicantName: string;
    personMet: string;
    designationOfPersonMet: string | null;
    addressOfMeeting: string;
    addressLat: number;
    addressLng: number;
    premiseType: PremiseType;
    metByAgent: string;
    dateTimeOfVisit: string;
    tatMet: boolean | null;
    oclRangeKm: number | null;
    mobileNumber: string;
    dateOfAllocation: string | null;
    backOfficeEmployee: string | null;
}
export interface PersonalDetails {
    ownershipPercentInFirm: number | null;
    familyMembersTotal: number;
    familyBreakdown: string | null;
    residenceOwnership: OwnershipType;
    residenceMarketValue: number | null;
    rentAmount: number | null;
    yearsAtAddress: number | null;
    monthsAtAddress: number | null;
    localityClass: LocalityClass | null;
    accessibility: Accessibility | null;
    typeOfResidence: ResidenceType | null;
    externalAppearance: ExternalAppearance | null;
    constructionType: ConstructionType | null;
    vehiclesTwoWheeler: number;
    vehiclesFourWheeler: number;
}
export interface BusinessProfile {
    businessName: string;
    natureOfBusiness: string;
    businessExperienceYears: number;
    gstRegistrationDate: string | null;
    numberOfStaff: number;
    totalSalaryBill: number | null;
    businessPremiseOwnership: OwnershipType | null;
    officeFactoryValue: number | null;
    businessLocationType: BusinessLocationType;
    purchaseCreditPeriod: string | null;
    salesPaymentCycle: string | null;
    grossMarginPercent: number | null;
    electricityBillOffice: number | null;
    electricityBillFactory: number | null;
    typeOfOffice: OfficeType | null;
    entryAllowed: boolean | null;
    signBoardSeen: boolean | null;
    machinesSeen: string | null;
}
export interface ContactEntry {
    name: string;
    phone: string;
}
export interface SuppliersCustomersBanking {
    majorSuppliers: ContactEntry[];
    majorCustomers: ContactEntry[];
    currentBankNameBranch: string | null;
    ccOdFacility: string | null;
    branchesCities: string | null;
    nearbyCompetitorCount: number | null;
}
export interface Financials {
    turnoverAmount: number | null;
    turnoverAssessmentYear: string | null;
    netProfit: string | null;
    employeesSeenAtVisit: number | null;
    stockMachinerySeen: boolean | null;
    stockMachineryDescription: string | null;
    premisesAreaSqFt: number | null;
    stockEstimatedValue: number | null;
}
export interface ExistingLoan {
    facilityType: string;
    bankName: string;
    amount: number;
    emi: number;
    outstandingBalance: number;
}
export interface Obligations {
    existingLoans: ExistingLoan[];
    monthlyTotalEmi: number | null;
    loanAmountRequired: string | null;
    endUseOfFunds: string | null;
    applicantPanCardNo: string | null;
    firmPanCardNo: string | null;
    gstRegistrationNo: string | null;
    aadhaarCardNo: string | null;
}
export interface ReferenceCheck {
    neighbour1Name: string;
    neighbour1Status: NeighbourStatus;
    neighbour1Feedback: string | null;
    neighbour2Name: string | null;
    neighbour2Status: NeighbourStatus | null;
    neighbour2Feedback: string | null;
    visitingCardObtained: boolean | null;
    prominentLandmark: string;
}
export interface InterviewerComments {
    strengths: string[];
    weaknesses: string[];
    finalRecommendation: ReportStatus;
    recommendationText: string;
    commentsSummary: string | null;
}
export interface CustomQuestion {
    question: string;
    answer: string;
}
export interface CaseFormData {
    visitDetails: VisitDetails;
    personalDetails: PersonalDetails;
    businessProfile: BusinessProfile;
    suppliersCustomersBanking: SuppliersCustomersBanking;
    financials: Financials | null;
    obligations: Obligations | null;
    referenceCheck: ReferenceCheck;
    interviewerComments: InterviewerComments;
    customQuestions: CustomQuestion[];
}
//# sourceMappingURL=form.d.ts.map