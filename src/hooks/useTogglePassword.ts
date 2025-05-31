"use client";

import { useState } from "react";

const useTogglePassword = () => {
  const [isPassword, setIsPassword] = useState<boolean>(true);

  const handleTogglePassword = () => {
    setIsPassword(!isPassword);
  };

  return { isPassword, handleTogglePassword };
};

export default useTogglePassword;
