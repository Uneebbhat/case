"use client";

import CaseCard from "@/components/ui/CaseCard";
import { CaseStatus } from "../types/case";

export default function HistoryPage() {
  return (
    <>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        History
      </h3>

      <section className="py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[...Array(6)].map((_, idx) => (
            <CaseCard
              key={idx}
              caseData={{
                caseId: idx.toString(),
                caseTitle: `Case ${idx + 1}`,
                caseDescription: `Case ${idx + 1}`,
                caseStatus: CaseStatus.active,
                startDate: new Date(),
                endDate: new Date(),
                caseType: "Debt",
                pdfUrl: "/dummy_case_document.pdf",
              }}
            />
          ))}
        </div>
      </section>
    </>
  );
}
