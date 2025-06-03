"use client";

import React from "react";
import useTogglePassword from "@/hooks/useTogglePassword";
import useResetPassword from "@/hooks/api/useResetPassword";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Eye, EyeOff, Loader2 } from "lucide-react";
import ResetPasswordSuccessCard from "../ResetPasswordSuccessCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ResetPasswordForm = () => {
  const { isPassword, handleTogglePassword } = useTogglePassword();
  const { formData, isLoading, success, handleOnChange, handleOnSubmit } =
    useResetPassword();

  if (success) {
    return <ResetPasswordSuccessCard />;
  }

  return (
    <>
      <Card className="w-full max-w-[500px]">
        <CardHeader>
          <Button
            variant={"ghost"}
            size={"icon"}
            className="cursor-pointer"
            onClick={() => window.history.back()}
          >
            <ArrowLeft />
          </Button>
          <CardTitle>Create new password</CardTitle>
          <CardDescription>
            Enter your new password and login again
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleOnSubmit}>
            <div className="flex flex-col gap-2">
              <Label htmlFor="newPassword">New Password</Label>
              <div className="relative">
                <Input
                  type={isPassword ? "password" : "text"}
                  placeholder="New Password"
                  name="newPassword"
                  id="newPassword"
                  value={formData.newPassword}
                  onChange={handleOnChange}
                />
                {isPassword ? (
                  <Eye
                    className="absolute top-2 right-2 cursor-pointer"
                    size={20}
                    onClick={handleTogglePassword}
                  />
                ) : (
                  <EyeOff
                    className="absolute top-2 right-2 cursor-pointer"
                    size={20}
                    onClick={handleTogglePassword}
                  />
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative">
                <Input
                  type={isPassword ? "password" : "text"}
                  placeholder="Password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleOnChange}
                />
                {isPassword ? (
                  <Eye
                    className="absolute top-2 right-2 cursor-pointer"
                    size={20}
                    onClick={handleTogglePassword}
                  />
                ) : (
                  <EyeOff
                    className="absolute top-2 right-2 cursor-pointer"
                    size={20}
                    onClick={handleTogglePassword}
                  />
                )}
              </div>
            </div>
            <Button
              className="w-full cursor-pointer"
              disabled={
                isLoading || !formData.newPassword || !formData.confirmPassword
              }
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" />
                  Reset password
                </>
              ) : (
                "Reset password"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default ResetPasswordForm;
