"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Metadata } from "next";

const metadata: Metadata = {
  title: "Create Case",
};

export default function CreateCaseIdPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Create Case
        </h3>
        <Button>Export to xls</Button>
      </div>
      <section className="py-5">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="phone-number">Phone Number</Label>
            <Input type="number" id="phone-number" placeholder="Phone Number" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address-line">Address Line 1</Label>
            <Input type="text" id="address-line" placeholder="Address Line 1" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input type="text" id="city" placeholder="City" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="state">State</Label>
            <Input type="text" id="state" placeholder="State" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="zip">Zip</Label>
            <Input type="text" id="zip" placeholder="Zip" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="google-sheet-id">
              Enter your Google Sheet ID (from the URL)
            </Label>
            <Input
              type="url"
              id="google-sheet-id"
              placeholder="Google Sheet ID"
            />
          </div>
        </div>
      </section>
    </>
  );
}
