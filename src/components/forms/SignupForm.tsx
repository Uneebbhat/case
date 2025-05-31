"use client";

import React from "react";
import useSignup from "@/hooks/api/useSignup";
import useTogglePassword from "@/hooks/useTogglePassword";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Loader2 } from "lucide-react";

const SignupForm = () => {
  const { isPassword, handleTogglePassword } = useTogglePassword();
  const { isLoading, handleOnChange, handleOnSubmit, formData } = useSignup();

  return (
    <>
      <form className="space-y-4" onSubmit={handleOnSubmit}>
        <div className="flex flex-col gap-2">
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            placeholder="Username"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleOnChange}
          />
        </div>
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
        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              type={isPassword ? "password" : "text"}
              placeholder="Password"
              name="password"
              id="password"
              value={formData.password}
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
            isLoading ||
            !formData.username ||
            !formData.email ||
            !formData.password
          }
        >
          {isLoading ? (
            <>
              <Loader2 className="animate-spin" />
              Signup
            </>
          ) : (
            "Signup"
          )}
        </Button>
      </form>
    </>
  );
};

export default SignupForm;
