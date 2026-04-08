import { z } from "zod/v4";

// ── Reusable field schemas ──
const phoneSchema = z
  .string()
  .regex(/^[6-9]\d{9}$/, "Invalid Indian mobile number");

const panSchema = z
  .string()
  .regex(/^[A-Z]{5}[0-9]{4}[A-Z]$/, "Invalid PAN format");

const gstSchema = z
  .string()
  .regex(
    /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][1-9A-Z]Z[0-9A-Z]$/,
    "Invalid GST format",
  );

const aadhaarSchema = z
  .string()
  .regex(/^\d{12}$/, "Invalid Aadhaar format");

const contactEntrySchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: phoneSchema,
});

const existingLoanSchema = z.object({
  facilityType: z.string().min(1),
  bankName: z.string().min(1),
  amount: z.number().nonnegative(),
  emi: z.number().nonnegative(),
  outstandingBalance: z.number().nonnegative(),
});

// ── S1: Case Header ──
export const caseHeaderSchema = z.object({
  clientName: z.string().min(1, "Client name is required"),
  loanType: z.enum(["BL", "SME", "CPV", "Retail", "Home Loan", "Personal Loan"]),
  loanReferenceNo: z.string().min(1, "Loan reference number is required"),
  verificationType: z.enum(["Business", "Residence", "FI", "CPV"]),
  reportStatus: z
    .enum(["Positive", "Negative", "Refer to Credit"])
    .nullable(),
  locationCity: z.string().min(1, "Location is required"),
  product: z.string().nullable().optional(),
  clientBranch: z.string().nullable().optional(),
});

// ── S2: Visit Details ──
export const visitDetailsSchema = z.object({
  applicantName: z.string().min(1, "Applicant name is required"),
  personMet: z.string().min(1, "Person met is required"),
  designationOfPersonMet: z.string().nullable().optional(),
  addressOfMeeting: z.string().min(1, "Address is required"),
  addressLat: z.number().min(-90).max(90),
  addressLng: z.number().min(-180).max(180),
  premiseType: z.enum(["Same", "Different"]),
  metByAgent: z.string().min(1),
  dateTimeOfVisit: z.iso.datetime(),
  tatMet: z.boolean().nullable().optional(),
  oclRangeKm: z.number().nonnegative().nullable().optional(),
  mobileNumber: phoneSchema,
  dateOfAllocation: z.iso.datetime().nullable().optional(),
  backOfficeEmployee: z.string().nullable().optional(),
});

// ── S3: Personal Details ──
export const personalDetailsSchema = z.object({
  ownershipPercentInFirm: z
    .number()
    .min(0)
    .max(100)
    .nullable()
    .optional(),
  familyMembersTotal: z.number().int().nonnegative(),
  familyBreakdown: z.string().nullable().optional(),
  residenceOwnership: z.enum([
    "Owned",
    "Rented",
    "Leased",
    "Company Provided",
    "Family Owned",
  ]),
  residenceMarketValue: z.number().nonnegative().nullable().optional(),
  rentAmount: z.number().nonnegative().nullable().optional(),
  yearsAtAddress: z.number().int().nonnegative().nullable().optional(),
  monthsAtAddress: z.number().int().min(0).max(11).nullable().optional(),
  localityClass: z
    .enum(["Upper", "Upper Middle", "Middle", "Lower Middle", "Lower"])
    .nullable()
    .optional(),
  accessibility: z.enum(["Easy", "Difficult"]).nullable().optional(),
  typeOfResidence: z
    .enum(["Flat", "Tenement", "Bungalow", "Row House", "Chawl"])
    .nullable()
    .optional(),
  externalAppearance: z
    .enum(["Good", "Average", "Poor"])
    .nullable()
    .optional(),
  constructionType: z
    .enum(["Pakka", "Kutcha", "Semi Pakka"])
    .nullable()
    .optional(),
  vehiclesTwoWheeler: z.number().int().nonnegative(),
  vehiclesFourWheeler: z.number().int().nonnegative(),
});

// ── S4: Business Profile ──
export const businessProfileSchema = z.object({
  businessName: z.string().min(1, "Business name is required"),
  natureOfBusiness: z.string().min(1, "Nature of business is required"),
  businessExperienceYears: z.number().nonnegative(),
  gstRegistrationDate: z.string().nullable().optional(),
  numberOfStaff: z.number().int().nonnegative(),
  totalSalaryBill: z.number().nonnegative().nullable().optional(),
  businessPremiseOwnership: z
    .enum(["Owned", "Rented", "Leased", "Company Provided", "Family Owned"])
    .nullable()
    .optional(),
  officeFactoryValue: z.number().nonnegative().nullable().optional(),
  businessLocationType: z.enum(["Commercial", "Industrial", "Residential"]),
  purchaseCreditPeriod: z.string().nullable().optional(),
  salesPaymentCycle: z.string().nullable().optional(),
  grossMarginPercent: z
    .number()
    .min(0)
    .max(100)
    .nullable()
    .optional(),
  electricityBillOffice: z.number().nonnegative().nullable().optional(),
  electricityBillFactory: z.number().nonnegative().nullable().optional(),
  typeOfOffice: z
    .enum(["Shop", "Factory", "Godown", "Office"])
    .nullable()
    .optional(),
  entryAllowed: z.boolean().nullable().optional(),
  signBoardSeen: z.boolean().nullable().optional(),
  machinesSeen: z.string().nullable().optional(),
});

// ── S5: Suppliers, Customers & Banking ──
export const suppliersCustomersBankingSchema = z.object({
  majorSuppliers: z.array(contactEntrySchema).min(1, "At least one supplier required"),
  majorCustomers: z.array(contactEntrySchema).min(1, "At least one customer required"),
  currentBankNameBranch: z.string().nullable().optional(),
  ccOdFacility: z.string().nullable().optional(),
  branchesCities: z.string().nullable().optional(),
  nearbyCompetitorCount: z.number().int().nonnegative().nullable().optional(),
});

// ── S6: Financials & Setup (PD only) ──
export const financialsSchema = z.object({
  turnoverAmount: z.number().nonnegative().nullable().optional(),
  turnoverAssessmentYear: z.string().nullable().optional(),
  netProfit: z.string().nullable().optional(),
  employeesSeenAtVisit: z.number().int().nonnegative().nullable().optional(),
  stockMachinerySeen: z.boolean().nullable().optional(),
  stockMachineryDescription: z.string().nullable().optional(),
  premisesAreaSqFt: z.number().nonnegative().nullable().optional(),
  stockEstimatedValue: z.number().nonnegative().nullable().optional(),
});

// ── S7: Obligations & Documents (PD only) ──
export const obligationsSchema = z.object({
  existingLoans: z.array(existingLoanSchema),
  monthlyTotalEmi: z.number().nonnegative().nullable().optional(),
  loanAmountRequired: z.string().nullable().optional(),
  endUseOfFunds: z.string().nullable().optional(),
  applicantPanCardNo: panSchema.nullable().optional(),
  firmPanCardNo: panSchema.nullable().optional(),
  gstRegistrationNo: gstSchema.nullable().optional(),
  aadhaarCardNo: aadhaarSchema.nullable().optional(),
});

// ── S8: Reference Check ──
export const referenceCheckSchema = z.object({
  neighbour1Name: z.string().min(1, "Neighbour name is required"),
  neighbour1Status: z.enum(["Positive", "Negative"]),
  neighbour1Feedback: z.string().nullable().optional(),
  neighbour2Name: z.string().nullable().optional(),
  neighbour2Status: z.enum(["Positive", "Negative"]).nullable().optional(),
  neighbour2Feedback: z.string().nullable().optional(),
  visitingCardObtained: z.boolean().nullable().optional(),
  prominentLandmark: z.string().optional().default(""),
});

// ── S9: Interviewer Comments ──
export const interviewerCommentsSchema = z.object({
  strengths: z.array(z.string().min(1)).min(1, "At least one strength required"),
  weaknesses: z.array(z.string().min(1)).min(1, "At least one weakness required"),
  finalRecommendation: z.enum(["Positive", "Negative", "Refer to Credit"]),
  recommendationText: z.string().min(1, "Recommendation text is required"),
  commentsSummary: z.string().nullable().optional(),
});

// ── Complete Form ──
export const caseFormDataSchema = z.object({
  visitDetails: visitDetailsSchema,
  personalDetails: personalDetailsSchema,
  businessProfile: businessProfileSchema,
  suppliersCustomersBanking: suppliersCustomersBankingSchema,
  financials: financialsSchema.nullable().optional(),
  obligations: obligationsSchema.nullable().optional(),
  referenceCheck: referenceCheckSchema,
  interviewerComments: interviewerCommentsSchema,
});

// ── Inferred Types ──
export type CaseHeaderInput = z.infer<typeof caseHeaderSchema>;
export type VisitDetailsInput = z.infer<typeof visitDetailsSchema>;
export type PersonalDetailsInput = z.infer<typeof personalDetailsSchema>;
export type BusinessProfileInput = z.infer<typeof businessProfileSchema>;
export type SuppliersCustomersBankingInput = z.infer<typeof suppliersCustomersBankingSchema>;
export type FinancialsInput = z.infer<typeof financialsSchema>;
export type ObligationsInput = z.infer<typeof obligationsSchema>;
export type ReferenceCheckInput = z.infer<typeof referenceCheckSchema>;
export type InterviewerCommentsInput = z.infer<typeof interviewerCommentsSchema>;
export type CaseFormDataInput = z.infer<typeof caseFormDataSchema>;
