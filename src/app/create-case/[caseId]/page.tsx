"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function CreateCaseIdPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Create Case
        </h3>
        <Button>Export xls</Button>
      </div>
      <section className="py-5">
        <div className="flex flex-col md:flex-row items-center gap-x-5 gap-y-2 md:gap-y-0">
          <Image src={"/pdf.jpg"} alt={"Title"} width={1000} height={1000} />
        </div>
      </section>
    </>
  );
}
