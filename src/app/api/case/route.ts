import { NextRequest, NextResponse } from "next/server";
import casesData from "@/casesData.json";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const caseCategory = searchParams.get("caseCategory");
  const caseStatus = searchParams.get("caseStatus");

  let filteredCases = casesData;

  if (caseCategory) {
    filteredCases = filteredCases.filter(
      (caseItem) => caseItem.caseType === caseCategory
    );
  }

  if (caseStatus) {
    filteredCases = filteredCases.filter(
      (caseItem) =>
        caseItem.caseStatus.toLowerCase() === caseStatus.toLowerCase()
    );
  }

  return NextResponse.json(filteredCases);
}
