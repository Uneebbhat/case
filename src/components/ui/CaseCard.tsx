"use client";

import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CaseData } from "@/app/types/case";

import { Document, Page, pdfjs } from "react-pdf";

// Setting worker src for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface CaseCardProps {
  caseData: CaseData;
}

const CaseCard: React.FC<CaseCardProps> = ({ caseData }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  const { caseTitle, caseStatus, caseDescription, pdfUrl } = caseData;

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  return (
    <Card className="max-w-3xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl">{caseTitle}</CardTitle>
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
        <div className="mt-2">
          <span className="inline-block rounded-full border border-green-800 bg-green-100 text-green-900 px-3 py-1 text-xs font-semibold">
            {caseStatus}
          </span>
        </div>
      </CardHeader>

      <CardContent>
        <p className="mb-4">{caseDescription}</p>

        {/* PDF Viewer */}
        {pdfUrl ? (
          <div className="border rounded shadow-md">
            <Document
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={<p>Loading PDF...</p>}
              className="react-pdf__Document"
            >
              <Page pageNumber={pageNumber} className="react-pdf__Page" />
            </Document>
            <div className="flex justify-between items-center p-2 bg-gray-100">
              <p>
                Page {pageNumber} of {numPages}
              </p>
              <div>
                <Button
                  size="sm"
                  onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
                  disabled={pageNumber <= 1}
                  className="mr-2"
                >
                  Previous
                </Button>
                <Button
                  size="sm"
                  onClick={() => setPageNumber((prev) => (numPages ? Math.min(prev + 1, numPages) : prev))}
                  disabled={numPages ? pageNumber >= numPages : true}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <p>No PDF available.</p>
        )}
      </CardContent>

      <CardFooter className="pt-2 flex justify-end">
        <Button className="cursor-pointer w-full">Extract Case</Button>
      </CardFooter>
    </Card>
  );
};

export default CaseCard;
