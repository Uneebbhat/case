"use client";

import ForgotPasswordForm from "@/components/forms/ForgotPasswordForm";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

export default function ForgotPasswordPage() {
  return (
    <>
      <section className="flex items-center justify-center h-[100dvh] p-5">
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
            <CardTitle>Forgot your password</CardTitle>
            <CardDescription>
              Enter your email to get the password reset link
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ForgotPasswordForm />
          </CardContent>
        </Card>
      </section>
    </>
  );
}
