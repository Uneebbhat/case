"use client";

import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CaseData } from "@/app/types/case";

const CaseCard = ({ caseData }: any) => {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  return (
    <Card className="">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl">{caseData.caseTitle}</CardTitle>
          <Button
            variant="ghost"
            size="icon"
            aria-label={
              isFavourite ? "Remove from favourites" : "Add to favourites"
            }
            className="hover:text-yellow-500 cursor-pointer"
            onClick={() => setIsFavourite((f) => !f)}
          >
            {isFavourite ? (
              // Filled star when active
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="orange"
                viewBox="0 0 20 20"
                className="w-6 h-6"
              >
                <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.564-.955L10 0l2.948 5.955 6.564.955-4.756 4.635 1.122 6.545z" />
              </svg>
            ) : (
              // Outline star when not active
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 20 20"
                className="w-6 h-6"
              >
                <path
                  d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.564-.955L10 0l2.948 5.955 6.564.955-4.756 4.635 1.122 6.545z"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </Button>
        </div>
        <div className="mt-2">
          <span className="inline-block rounded-full border border-green-800 bg-green-100 text-green-900 px-3 py-1 text-xs font-semibold">
            {caseData.caseStatus}
          </span>
        </div>
      </CardHeader>
      <CardContent>{caseData.caseDescription}</CardContent>
      <CardFooter className="pt-2 flex justify-end">
        <Button className="cursor-pointer w-full">Extract Case</Button>
      </CardFooter>
    </Card>
  );
};

export default CaseCard;
