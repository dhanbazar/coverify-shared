import type { ReportType, ReportStatus } from "../constants/enums.js";

export interface ReportGenerationRequest {
  caseId: string;
  reportType: ReportType;
}

export interface ReportMetadata {
  id: string;
  caseId: string;
  reportType: ReportType;
  status: ReportStatus;
  pdfUrl: string;
  generatedAt: string;
  generatedBy: string;
  fileSizeBytes: number;
  pageCount: number;
}

export interface ReportLetterhead {
  companyName: string;
  companyAddress: string;
  logoUrl: string;
  directorName: string;
  directorSignatureUrl: string;
  disclaimerText: string;
}
