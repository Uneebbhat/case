"use client";

import { ResetPasswordFormDataType } from "@/app/types/form";
import useFormHandler from "../useFormHandler";
import { HandleSubmitType } from "@/app/types/event";
import { useState } from "react";
import { toast } from "sonner";

const useResetPassword = () => {
  const { formData, setFormData, handleOnChange } =
    useFormHandler<ResetPasswordFormDataType>({
      newPassword: "",
      confirmPassword: "",
    });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleOnSubmit = async (e: HandleSubmitType) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccess(false);
    try {
      // TODO: change it to real reset password API
      await new Promise((resolve) => setTimeout(resolve, 3000));
      console.log("New password created successfully");
      toast.success("New password created successfully");

      // resetting the form after submitting it
      setFormData({
        newPassword: "",
        confirmPassword: "",
      });
      setSuccess(true);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log("An error occured while setting up new password");
        toast.error("An error occured while setting up new password");
      } else {
        console.error("Unexpected reset password error", error);
        toast.error("An unexpected error occurred during resetting password");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { formData, isLoading, success, handleOnChange, handleOnSubmit };
};

export default useResetPassword;
