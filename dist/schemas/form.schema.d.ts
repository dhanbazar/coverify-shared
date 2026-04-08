import { z } from "zod/v4";
export declare const caseHeaderSchema: z.ZodObject<{
    clientName: z.ZodString;
    loanType: z.ZodEnum<{
        BL: "BL";
        SME: "SME";
        CPV: "CPV";
        Retail: "Retail";
        "Home Loan": "Home Loan";
        "Personal Loan": "Personal Loan";
    }>;
    loanReferenceNo: z.ZodString;
    verificationType: z.ZodEnum<{
        CPV: "CPV";
        Business: "Business";
        Residence: "Residence";
        FI: "FI";
    }>;
    reportStatus: z.ZodNullable<z.ZodEnum<{
        Positive: "Positive";
        Negative: "Negative";
        "Refer to Credit": "Refer to Credit";
    }>>;
    locationCity: z.ZodString;
    product: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    clientBranch: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export declare const visitDetailsSchema: z.ZodObject<{
    applicantName: z.ZodString;
    personMet: z.ZodString;
    designationOfPersonMet: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    addressOfMeeting: z.ZodString;
    addressLat: z.ZodNumber;
    addressLng: z.ZodNumber;
    premiseType: z.ZodEnum<{
        Same: "Same";
        Different: "Different";
    }>;
    metByAgent: z.ZodString;
    dateTimeOfVisit: z.ZodISODateTime;
    tatMet: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    oclRangeKm: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    mobileNumber: z.ZodString;
    dateOfAllocation: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    backOfficeEmployee: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export declare const personalDetailsSchema: z.ZodObject<{
    ownershipPercentInFirm: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    familyMembersTotal: z.ZodNumber;
    familyBreakdown: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    residenceOwnership: z.ZodEnum<{
        Owned: "Owned";
        Rented: "Rented";
        Leased: "Leased";
        "Company Provided": "Company Provided";
        "Family Owned": "Family Owned";
    }>;
    residenceMarketValue: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    rentAmount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    yearsAtAddress: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    monthsAtAddress: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    localityClass: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        Upper: "Upper";
        "Upper Middle": "Upper Middle";
        Middle: "Middle";
        "Lower Middle": "Lower Middle";
        Lower: "Lower";
    }>>>;
    accessibility: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        Easy: "Easy";
        Difficult: "Difficult";
    }>>>;
    typeOfResidence: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        Flat: "Flat";
        Tenement: "Tenement";
        Bungalow: "Bungalow";
        "Row House": "Row House";
        Chawl: "Chawl";
    }>>>;
    externalAppearance: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        Good: "Good";
        Average: "Average";
        Poor: "Poor";
    }>>>;
    constructionType: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        Pakka: "Pakka";
        Kutcha: "Kutcha";
        "Semi Pakka": "Semi Pakka";
    }>>>;
    vehiclesTwoWheeler: z.ZodNumber;
    vehiclesFourWheeler: z.ZodNumber;
}, z.core.$strip>;
export declare const businessProfileSchema: z.ZodObject<{
    businessName: z.ZodString;
    natureOfBusiness: z.ZodString;
    businessExperienceYears: z.ZodNumber;
    gstRegistrationDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    numberOfStaff: z.ZodNumber;
    totalSalaryBill: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    businessPremiseOwnership: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        Owned: "Owned";
        Rented: "Rented";
        Leased: "Leased";
        "Company Provided": "Company Provided";
        "Family Owned": "Family Owned";
    }>>>;
    officeFactoryValue: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    businessLocationType: z.ZodEnum<{
        Commercial: "Commercial";
        Industrial: "Industrial";
        Residential: "Residential";
    }>;
    purchaseCreditPeriod: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    salesPaymentCycle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    grossMarginPercent: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    electricityBillOffice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    electricityBillFactory: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    typeOfOffice: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        Shop: "Shop";
        Factory: "Factory";
        Godown: "Godown";
        Office: "Office";
    }>>>;
    entryAllowed: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    signBoardSeen: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    machinesSeen: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export declare const suppliersCustomersBankingSchema: z.ZodObject<{
    majorSuppliers: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        phone: z.ZodString;
    }, z.core.$strip>>;
    majorCustomers: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        phone: z.ZodString;
    }, z.core.$strip>>;
    currentBankNameBranch: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    ccOdFacility: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    branchesCities: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    nearbyCompetitorCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
export declare const financialsSchema: z.ZodObject<{
    turnoverAmount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    turnoverAssessmentYear: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    netProfit: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    employeesSeenAtVisit: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    stockMachinerySeen: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    stockMachineryDescription: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    premisesAreaSqFt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    stockEstimatedValue: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
export declare const obligationsSchema: z.ZodObject<{
    existingLoans: z.ZodArray<z.ZodObject<{
        facilityType: z.ZodString;
        bankName: z.ZodString;
        amount: z.ZodNumber;
        emi: z.ZodNumber;
        outstandingBalance: z.ZodNumber;
    }, z.core.$strip>>;
    monthlyTotalEmi: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    loanAmountRequired: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    endUseOfFunds: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    applicantPanCardNo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    firmPanCardNo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    gstRegistrationNo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    aadhaarCardNo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export declare const referenceCheckSchema: z.ZodObject<{
    neighbour1Name: z.ZodString;
    neighbour1Status: z.ZodEnum<{
        Positive: "Positive";
        Negative: "Negative";
    }>;
    neighbour1Feedback: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    neighbour2Name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    neighbour2Status: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        Positive: "Positive";
        Negative: "Negative";
    }>>>;
    neighbour2Feedback: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    visitingCardObtained: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    prominentLandmark: z.ZodDefault<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
export declare const interviewerCommentsSchema: z.ZodObject<{
    strengths: z.ZodArray<z.ZodString>;
    weaknesses: z.ZodArray<z.ZodString>;
    finalRecommendation: z.ZodEnum<{
        Positive: "Positive";
        Negative: "Negative";
        "Refer to Credit": "Refer to Credit";
    }>;
    recommendationText: z.ZodString;
    commentsSummary: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export declare const caseFormDataSchema: z.ZodObject<{
    visitDetails: z.ZodObject<{
        applicantName: z.ZodString;
        personMet: z.ZodString;
        designationOfPersonMet: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        addressOfMeeting: z.ZodString;
        addressLat: z.ZodNumber;
        addressLng: z.ZodNumber;
        premiseType: z.ZodEnum<{
            Same: "Same";
            Different: "Different";
        }>;
        metByAgent: z.ZodString;
        dateTimeOfVisit: z.ZodISODateTime;
        tatMet: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        oclRangeKm: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        mobileNumber: z.ZodString;
        dateOfAllocation: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        backOfficeEmployee: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>;
    personalDetails: z.ZodObject<{
        ownershipPercentInFirm: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        familyMembersTotal: z.ZodNumber;
        familyBreakdown: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        residenceOwnership: z.ZodEnum<{
            Owned: "Owned";
            Rented: "Rented";
            Leased: "Leased";
            "Company Provided": "Company Provided";
            "Family Owned": "Family Owned";
        }>;
        residenceMarketValue: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rentAmount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        yearsAtAddress: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        monthsAtAddress: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        localityClass: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            Upper: "Upper";
            "Upper Middle": "Upper Middle";
            Middle: "Middle";
            "Lower Middle": "Lower Middle";
            Lower: "Lower";
        }>>>;
        accessibility: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            Easy: "Easy";
            Difficult: "Difficult";
        }>>>;
        typeOfResidence: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            Flat: "Flat";
            Tenement: "Tenement";
            Bungalow: "Bungalow";
            "Row House": "Row House";
            Chawl: "Chawl";
        }>>>;
        externalAppearance: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            Good: "Good";
            Average: "Average";
            Poor: "Poor";
        }>>>;
        constructionType: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            Pakka: "Pakka";
            Kutcha: "Kutcha";
            "Semi Pakka": "Semi Pakka";
        }>>>;
        vehiclesTwoWheeler: z.ZodNumber;
        vehiclesFourWheeler: z.ZodNumber;
    }, z.core.$strip>;
    businessProfile: z.ZodObject<{
        businessName: z.ZodString;
        natureOfBusiness: z.ZodString;
        businessExperienceYears: z.ZodNumber;
        gstRegistrationDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        numberOfStaff: z.ZodNumber;
        totalSalaryBill: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        businessPremiseOwnership: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            Owned: "Owned";
            Rented: "Rented";
            Leased: "Leased";
            "Company Provided": "Company Provided";
            "Family Owned": "Family Owned";
        }>>>;
        officeFactoryValue: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        businessLocationType: z.ZodEnum<{
            Commercial: "Commercial";
            Industrial: "Industrial";
            Residential: "Residential";
        }>;
        purchaseCreditPeriod: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        salesPaymentCycle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        grossMarginPercent: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        electricityBillOffice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        electricityBillFactory: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        typeOfOffice: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            Shop: "Shop";
            Factory: "Factory";
            Godown: "Godown";
            Office: "Office";
        }>>>;
        entryAllowed: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        signBoardSeen: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        machinesSeen: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>;
    suppliersCustomersBanking: z.ZodObject<{
        majorSuppliers: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            phone: z.ZodString;
        }, z.core.$strip>>;
        majorCustomers: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            phone: z.ZodString;
        }, z.core.$strip>>;
        currentBankNameBranch: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ccOdFacility: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        branchesCities: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nearbyCompetitorCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>;
    financials: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        turnoverAmount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        turnoverAssessmentYear: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        netProfit: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        employeesSeenAtVisit: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        stockMachinerySeen: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        stockMachineryDescription: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        premisesAreaSqFt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        stockEstimatedValue: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>>;
    obligations: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        existingLoans: z.ZodArray<z.ZodObject<{
            facilityType: z.ZodString;
            bankName: z.ZodString;
            amount: z.ZodNumber;
            emi: z.ZodNumber;
            outstandingBalance: z.ZodNumber;
        }, z.core.$strip>>;
        monthlyTotalEmi: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        loanAmountRequired: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        endUseOfFunds: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        applicantPanCardNo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        firmPanCardNo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        gstRegistrationNo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        aadhaarCardNo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
    referenceCheck: z.ZodObject<{
        neighbour1Name: z.ZodString;
        neighbour1Status: z.ZodEnum<{
            Positive: "Positive";
            Negative: "Negative";
        }>;
        neighbour1Feedback: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        neighbour2Name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        neighbour2Status: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            Positive: "Positive";
            Negative: "Negative";
        }>>>;
        neighbour2Feedback: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        visitingCardObtained: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        prominentLandmark: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    }, z.core.$strip>;
    interviewerComments: z.ZodObject<{
        strengths: z.ZodArray<z.ZodString>;
        weaknesses: z.ZodArray<z.ZodString>;
        finalRecommendation: z.ZodEnum<{
            Positive: "Positive";
            Negative: "Negative";
            "Refer to Credit": "Refer to Credit";
        }>;
        recommendationText: z.ZodString;
        commentsSummary: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>;
}, z.core.$strip>;
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
//# sourceMappingURL=form.schema.d.ts.map