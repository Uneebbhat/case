"use client";

import React from "react";
import useForgotPassword from "@/hooks/api/useForgotPassword";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import Link from "next/link";

const ForgotPasswordForm = () => {
  const { formData, isLoading, handleOnChange, handleOnSubmit } =
    useForgotPassword();

  return (
    <>
      <form className="space-y-4" onSubmit={handleOnSubmit}>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleOnChange}
          />
        </div>
        <Button
          className="w-full cursor-pointer"
          disabled={isLoading || !formData.email}
        >
          {isLoading ? (
            <>
              <Loader2 className="animate-spin" />
              Send email
            </>
          ) : (
            "Send email"
          )}
        </Button>
      </form>
    </>
  );
};

export default ForgotPasswordForm;
