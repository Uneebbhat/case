"use client";

import { ForgotPasswordFromDataType } from "@/app/types/form";
import useFormHandler from "../useFormHandler";
import { HandleSubmitType } from "@/app/types/event";
import { useState } from "react";
import { toast } from "sonner";

const useForgotPassword = () => {
  const { formData, handleOnChange, setFormData } =
    useFormHandler<ForgotPasswordFromDataType>({
      email: "",
    });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleOnSubmit = async (e: HandleSubmitType) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // TODO: change it to real forgot password API
      await new Promise((resolve) => setTimeout(resolve, 3000));
      console.log("Email sent successfully", formData);
      toast.success("Email sent successfully");

      // Resetting the form after submitting it
      setFormData({ email: "" });
    } catch (error: any) {
      console.log("An error occured while sending email");
      toast.error("An error occured while sending email");
    } finally {
      setIsLoading(false);
    }
  };

  return { formData, isLoading, handleOnChange, handleOnSubmit };
};

export default useForgotPassword;
