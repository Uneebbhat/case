export enum CaseStatus {
  active = "active",
  inactive = "inactive",
}

export interface CaseData {
  caseId: string;
  caseTitle: string;
  caseDescription: string;
  caseStatus: CaseStatus;
  startDate: Date;
  endDate: Date;
  caseType: string;
  pdfUrl: string | unknown;
}
