"use client";

import LoginForm from "@/components/forms/LoginForm";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "@/components/mode-toggle";

export default function LoginPage() {
  return (
    <>
      <div className="min-h-screen flex">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-5">
          <ModeToggle />
          <div className="w-full max-w-sm">
            <h2 className="text-2xl font-semibold mb-2">
              Login to your account
            </h2>
            <p className="text-gray-500 mb-6">
              Enter your credentials to login
            </p>
            <LoginForm />
            <p className="mt-6 text-center text-gray-600 text-sm font-medium">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-blue-500 underline">
                Signup
              </Link>
            </p>
          </div>
        </div>
        {/* Right: Brand & Testimonials */}
        <div className="hidden md:flex w-1/2 flex-col justify-center items-center relative bg-gradient-to-br from-black via-blue-900 to-purple-600">
          <div className="absolute top-8 left-8">
            <span className="text-white text-2xl font-bold">Apexify</span>
          </div>
          <div className="flex flex-col gap-6 items-center w-full px-16">
            <div className="bg-black bg-opacity-80 text-white p-4 rounded-lg shadow-lg max-w-xs rotate-[7deg]">
              <span className="text-sm">
                &apos;We needed documents for a corporate case urgently—this
                portal delivered instantly.&apos;
                <br />— Hassan J.
              </span>
            </div>
            <div className="bg-black bg-opacity-80 text-white p-4 rounded-lg shadow-lg max-w-xs rotate-[-7deg] ml-16">
              <span className="text-sm">
                &apos;Made it easy to gather and share data during my contract
                dispute. Very helpful.&apos;
                <br />— Nimra A.
              </span>
            </div>
            <div className="bg-black bg-opacity-80 text-white p-4 rounded-lg shadow-lg max-w-xs rotate-[4deg] mt-0">
              <span className="text-sm">
                &apos;My lawyer used this platform to pull all custody case
                files quickly. Super efficient!&apos;
                <br />— Maria T.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
