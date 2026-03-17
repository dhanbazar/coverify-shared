import type {
  PremiseType,
  OwnershipType,
  LocalityClass,
  Accessibility,
  ResidenceType,
  ExternalAppearance,
  ConstructionType,
  BusinessLocationType,
  OfficeType,
  NeighbourStatus,
  ReportStatus,
} from "../constants/enums.js";

// ── S2: Visit Details ──
export interface VisitDetails {
  applicantName: string;
  personMet: string;
  designationOfPersonMet: string | null; // FI only
  addressOfMeeting: string;
  addressLat: number;
  addressLng: number;
  premiseType: PremiseType;
  metByAgent: string; // auto-filled
  dateTimeOfVisit: string; // auto-stamped
  tatMet: boolean | null; // FI only, auto-calc
  oclRangeKm: number | null; // FI only
  mobileNumber: string;
  dateOfAllocation: string | null; // FI only
  backOfficeEmployee: string | null; // FI only
}

// ── S3: Personal Details ──
export interface PersonalDetails {
  ownershipPercentInFirm: number | null; // PD only
  familyMembersTotal: number;
  familyBreakdown: string | null;
  residenceOwnership: OwnershipType;
  residenceMarketValue: number | null; // PD only
  rentAmount: number | null; // PD only
  yearsAtAddress: number | null; // FI only
  monthsAtAddress: number | null; // FI only
  localityClass: LocalityClass | null; // FI only
  accessibility: Accessibility | null; // FI only
  typeOfResidence: ResidenceType | null; // FI only
  externalAppearance: ExternalAppearance | null; // FI only
  constructionType: ConstructionType | null; // FI only
  vehiclesTwoWheeler: number;
  vehiclesFourWheeler: number;
}

// ── S4: Business Profile ──
export interface BusinessProfile {
  businessName: string;
  natureOfBusiness: string;
  businessExperienceYears: number;
  gstRegistrationDate: string | null; // PD only
  numberOfStaff: number;
  totalSalaryBill: number | null; // PD only
  businessPremiseOwnership: OwnershipType | null; // PD only
  officeFactoryValue: number | null; // PD only
  businessLocationType: BusinessLocationType;
  purchaseCreditPeriod: string | null; // PD only
  salesPaymentCycle: string | null; // PD only
  grossMarginPercent: number | null; // PD only
  electricityBillOffice: number | null; // PD only
  electricityBillFactory: number | null; // PD only
  typeOfOffice: OfficeType | null; // FI only
  entryAllowed: boolean | null; // FI only
  signBoardSeen: boolean | null; // FI only
  machinesSeen: string | null; // FI only
}

// ── S5: Suppliers, Customers & Banking ──
export interface ContactEntry {
  name: string;
  phone: string;
}

export interface SuppliersCustomersBanking {
  majorSuppliers: ContactEntry[];
  majorCustomers: ContactEntry[];
  currentBankNameBranch: string | null; // PD only
  ccOdFacility: string | null; // PD only
  branchesCities: string | null; // PD only
  nearbyCompetitorCount: number | null; // PD only
}

// ── S6: Financials & Setup (PD only) ──
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

// ── S7: Obligations & Documents (PD only) ──
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
  applicantPanCardNo: string | null; // stored encrypted
  firmPanCardNo: string | null; // stored encrypted
  gstRegistrationNo: string | null;
  aadhaarCardNo: string | null; // stored encrypted
}

// ── S8: Reference Check ──
export interface ReferenceCheck {
  neighbour1Name: string;
  neighbour1Status: NeighbourStatus;
  neighbour1Feedback: string | null; // FI only
  neighbour2Name: string | null;
  neighbour2Status: NeighbourStatus | null;
  neighbour2Feedback: string | null;
  visitingCardObtained: boolean | null; // FI only
  prominentLandmark: string;
}

// ── S9: Interviewer Comments ──
export interface InterviewerComments {
  strengths: string[];
  weaknesses: string[];
  finalRecommendation: ReportStatus;
  recommendationText: string;
  commentsSummary: string | null; // FI only
}

// ── Complete Form Data ──
export interface CaseFormData {
  visitDetails: VisitDetails;
  personalDetails: PersonalDetails;
  businessProfile: BusinessProfile;
  suppliersCustomersBanking: SuppliersCustomersBanking;
  financials: Financials | null; // PD only
  obligations: Obligations | null; // PD only
  referenceCheck: ReferenceCheck;
  interviewerComments: InterviewerComments;
}
