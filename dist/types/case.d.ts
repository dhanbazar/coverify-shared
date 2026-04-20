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
    assignedAgentId: string | null;
    assignedAt: string | null;
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
    assignedAt: string | null;
    pdfUrl?: string | null;
}
export interface CaseAssignment {
    caseIds: string[];
    agentId: string;
    deadline: string;
}
export interface CreateCasePayload {
    clientName: string;
    applicantName?: string;
    loanType: string;
    loanReferenceNo: string;
    verificationType: string;
    reportType: string;
    locationCity: string;
    locationAddress?: string;
    assignedAgentId?: string;
    deadline?: string;
    product?: string;
    clientBranch?: string;
}
export interface CreateCaseResponse {
    id: string;
    caseId: string;
    assignedAgentId: string | null;
    assignedTo: {
        id: string;
        fullName: string;
    } | null;
    status: CaseStatus;
    assignmentReason: string | null;
}
export interface BulkImportRow {
    client_name: string;
    applicant_name?: string;
    loan_type: string;
    loan_reference_no: string;
    verification_type: string;
    report_type: string;
    location_city: string;
    deadline?: string;
    product?: string;
    client_branch?: string;
}
export interface BulkImportResult {
    imported: number;
    failed: number;
    autoAssigned: number;
    unassigned: number;
    errors: Array<{
        row: number;
        message: string;
    }>;
}
//# sourceMappingURL=case.d.ts.map