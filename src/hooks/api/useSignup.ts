"use client";

import { useState } from "react";
import useFormHandler from "../useFormHandler";
import { toast } from "sonner";
import { SignupFormDataType } from "@/app/types/form";
import { HandleSubmitType } from "@/app/types/event";
import { useRouter } from "next/navigation";

const useSignup = () => {
  const router = useRouter();
  const { formData, setFormData, handleOnChange } =
    useFormHandler<SignupFormDataType>({
      username: "",
      email: "",
      password: "",
    });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleOnSubmit = async (e: HandleSubmitType) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // TODO:  change it to real signup API
      await new Promise((resolve) => setTimeout(resolve, 3000));
      console.log("Form submitted", formData);
      toast.success("Account created successfully");

      // Resetting the form after submitting it
      setFormData({
        username: "",
        email: "",
        password: "",
      });

      // navigating to the dashboard page after success
      router.push("/dashboard");
    } catch (error: any) {
      console.log("Got an error");
      toast.error("Ann error occured during signup");
    } finally {
      setIsLoading(false);
    }
  };

  return { formData, isLoading, handleOnChange, handleOnSubmit };
};

export default useSignup;
