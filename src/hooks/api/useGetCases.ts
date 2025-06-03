"use client";

import { useState } from "react";
import { CaseData, CaseStatus } from "@/app/types/case";
import caseData from "@/casesData.json";
// import axios from "axios";
import { toast } from "sonner";

interface DateRange {
  from: Date;
  to: Date;
}

interface Filters {
  dateRange?: DateRange;
  category?: string;
  status?: CaseStatus;
}

const useGetCases = () => {
  const [cases, setCases] = useState<CaseData[]>([]);
  const [loading, setLoading] = useState(false);

  const handleOnSubmit = async (filters: Filters) => {
    try {
      setLoading(true);

      // Option 1: Client-side filtering using the imported JSON data
      let filteredCases = [...caseData] as unknown as CaseData[];

      // Filter by date range
      if (filters.dateRange) {
        filteredCases = filteredCases.filter((caseItem) => {
          const startDate = new Date(caseItem.startDate);
          const endDate = new Date(caseItem.endDate);
          return (
            startDate >= filters.dateRange!.from &&
            endDate <= filters.dateRange!.to
          );
        });
      }

      // Filter by category (caseType)
      if (filters.category) {
        filteredCases = filteredCases.filter(
          (caseItem) =>
            caseItem.caseType.toLowerCase() === filters.category!.toLowerCase()
        );
      }

      // Filter by status
      if (filters.status) {
        filteredCases = filteredCases.filter(
          (caseItem) =>
            caseItem.caseStatus.toLowerCase() === filters.status!.toLowerCase()
        );
      }

      setCases(filteredCases);

      // Option 2: If you want to use API with filters, uncomment below and modify your API
      /*
      const { data } = await axios.get("/api/case", {
        params: {
          startDate: filters.dateRange?.from?.toISOString(),
          endDate: filters.dateRange?.to?.toISOString(),
          category: filters.category,
          status: filters.status,
        }
      });
      setCases(data);
      */
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error filtering cases:", error);
        setCases([]);
      } else {
        console.error("Unexpected error", error);
        toast.error("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return { cases, handleOnSubmit, loading };
};

export default useGetCases;
