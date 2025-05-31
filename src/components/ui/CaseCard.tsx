"use client";

import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CaseData } from "@/app/types/case";
import Link from "next/link";

interface CaseCardProps {
  caseData: CaseData;
}



const CaseCard: React.FC<CaseCardProps> = ({ caseData }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const { caseStatus, pdfUrl, caseId } = caseData;
  console.log(caseData.caseId);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <span className="inline-block rounded-full border border-green-800 bg-green-100 text-green-900 px-3 py-1 text-xs font-semibold">
            {caseStatus}
          </span>
          <Button
            variant="ghost"
            size="icon"
            aria-label={isFavourite ? "Remove from favourites" : "Add to favourites"}
            className="hover:text-yellow-500 cursor-pointer"
            onClick={() => setIsFavourite(!isFavourite)}
          >
            {isFavourite ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="orange"
                viewBox="0 0 20 20"
                className="w-6 h-6"
                aria-hidden="true"
              >
                <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.564-.955L10 0l2.948 5.955 6.564.955-4.756 4.635 1.122 6.545z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 20 20"
                className="w-6 h-6"
                aria-hidden="true"
              >
                <path
                  d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.564-.955L10 0l2.948 5.955 6.564.955-4.756 4.635 1.122 6.545z"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </Button>
        </div>
      </CardHeader>

      <CardContent>
        {pdfUrl ? (
          <div className="flex flex-col items-center justify-center p-8 border rounded shadow-md bg-gray-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-16 h-16 text-red-600"
            >
              <path d="M6 2a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zm7 1.5L18.5 9H13a1 1 0 0 1-1-1V3.5zM8 13h8v2H8v-2zm0 4h5v2H8v-2z" />
            </svg>
            <h2>{caseData.caseTitle}</h2>
          </div>
        ) : (
          <p>No PDF available.</p>
        )}
      </CardContent>

      <CardFooter className="pt-2 flex justify-end">
        <Button className="cursor-pointer w-full" asChild>
          <Link href={`/create-case/${caseId}`}>
          Extract Case</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CaseCard;
