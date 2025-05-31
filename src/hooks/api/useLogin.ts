"use client";

import { useState } from "react";
import useFormHandler from "../useFormHandler";
import { toast } from "sonner";
import { LoginFormDataType } from "@/app/types/form";
import { HandleSubmitType } from "@/app/types/event";
import { useRouter } from "next/navigation";

const useLogin = () => {
  const router = useRouter();
  const { formData, setFormData, handleOnChange } =
    useFormHandler<LoginFormDataType>({
      email: "",
      password: "",
    });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleOnSubmit = async (e: HandleSubmitType) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // TODO: change it to real login API
      await new Promise((resolve) => setTimeout(resolve, 3000));
      console.log("Form submitted", formData);
      toast.success("Login successfully");

      // Resetting the form after submitting it
      setFormData({
        email: "",
        password: "",
      });

      // navigating to the dashboard page after success
      router.push("/dashboard");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log("Got an error");
        toast.error("Ann error occured during login");
      } else {
        console.error("Unexpected login error", error);
        toast.error("An unexpected error occurred during login");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { formData, isLoading, handleOnChange, handleOnSubmit };
};

export default useLogin;
