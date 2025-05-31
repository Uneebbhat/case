"use client";

import ResetPasswordForm from "@/components/forms/ResetPasswordForm";
import ResetPasswordSuccessCard from "@/components/ResetPasswordSuccessCard";

import useResetPassword from "@/hooks/api/useResetPassword";

export default function ResetPasswordPage() {
  return (
    <>
      <section className="flex items-center justify-center h-[100dvh] p-5">
        <ResetPasswordForm />
      </section>
    </>
  );
}
