import type { CaseStatus, LoanType, VerificationType, ReportType, ReportStatus, TatStatus, SyncStatus } from "../constants/enums.js";
export interface Case {
    id: string;
    caseId: string;
    clientName: string;
    loanType: LoanType;
    loanReferenceNo: string;
    verificationType: VerificationType;
    reportType: ReportType;
    reportStatus: ReportStatus | null;
    status: CaseStatus;
    assignedAgentId: string;
    assignedAt: string;
    deadline: string;
    tatStatus: TatStatus;
    syncStatus: SyncStatus;
    locationCity: string;
    product: string | null;
    clientBranch: string | null;
    submittedAt: string | null;
    reviewedAt: string | null;
    reviewedBy: string | null;
    pdfUrl: string | null;
    createdAt: string;
    updatedAt: string;
}
export interface CaseListItem {
    id: string;
    caseId: string;
    clientName: string;
    loanType: LoanType;
    verificationType: VerificationType;
    status: CaseStatus;
    tatStatus: TatStatus;
    syncStatus: SyncStatus;
    deadline: string;
    applicantName: string;
    locationCity: string;
    assignedAt: string;
}
export interface CaseAssignment {
    caseIds: string[];
    agentId: string;
    deadline: string;
}
//# sourceMappingURL=case.d.ts.map