"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import CaseCard from "@/components/ui/CaseCard";
import { DatePickerWithRange } from "@/components/ui/datepicker";
import {
  Select,
  SelectItem,
  SelectValue,
  SelectContent,
  SelectTrigger,
} from "@/components/ui/select";
import useGetCases from "@/hooks/api/useGetCases";
import { CaseStatus } from "@/app/types/case";
import Image from "next/image";

export default function CreateCasePage() {
  const { cases, handleOnSubmit, loading } = useGetCases();
  const [dateRange, setDateRange] = useState<{ from: Date; to: Date }>();
  const [category, setCategory] = useState<string>("");
  const [status, setStatus] = useState<CaseStatus | "">("");

  const onFilterSubmit = () => {
    console.log("Submitting filters:", { dateRange, category, status });

    // Only submit if at least one filter is selected
    if (dateRange || category || status) {
      handleOnSubmit({
        dateRange,
        category: category || undefined,
        status: status || undefined,
      });
    } else {
      console.log("Please select at least one filter");
    }
  };

  const clearFilters = () => {
    setDateRange(undefined);
    setCategory("");
    setStatus("");
  };

  return (
    <>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Create Case
      </h3>
      <section className="py-5">
        <div className="flex flex-col md:flex-row items-center gap-x-5 gap-y-2 md:gap-y-0">
          <div className="w-full md:w-fit">
            <DatePickerWithRange
              selected={dateRange}
              onSelect={(range) =>
                setDateRange(range as { from: Date; to: Date })
              }
            />
          </div>
          <div className="w-full">
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Case Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="debt">Debt</SelectItem>
                <SelectItem value="dead">Dead</SelectItem>
                <SelectItem value="murder">Murder</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-[100%]">
            <Select
              value={status}
              onValueChange={(value) => setStatus(value as CaseStatus)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Case Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-2">
            <Button
              className="w-full md:w-fit cursor-pointer"
              onClick={onFilterSubmit}
              disabled={loading}
            >
              {loading ? "Loading..." : "Get cases"}
            </Button>
            <Button
              variant="outline"
              className="w-full md:w-fit cursor-pointer"
              onClick={clearFilters}
            >
              Clear
            </Button>
          </div>
        </div>
      </section>

      <section className="py-5">
        {loading ? (
          <p>Loading cases...</p>
        ) : cases.length > 0 ? (
          <>
            <p className="mb-4 text-sm text-gray-600">
              Found {cases.length} case(s) matching your filters
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {cases.map((caseItem, idx) => (
                <CaseCard key={caseItem.caseId || idx} caseData={caseItem} />
              ))}
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center">
            <Image
              src={"/data-not-found.png"}
              alt="No data found"
              width={500}
              height={500}
            />
          </div>
        )}
      </section>
    </>
  );
}
