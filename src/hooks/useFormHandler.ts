"use client";

import { HandleChangeType } from "@/app/types/event";
import { useState } from "react";

const useFormHandler = <T extends Record<string, any>>(initialState: T) => {
  const [formData, setFormData] = useState<T>(initialState);

  const handleOnChange = (e: HandleChangeType) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return { formData, setFormData, handleOnChange };
};

export default useFormHandler;
