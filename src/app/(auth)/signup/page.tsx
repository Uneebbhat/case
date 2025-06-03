"use client";

import SignupForm from "@/components/forms/SignupForm";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import React from "react";

export default function SignupPage() {
  return (
    <>
      <div className="min-h-screen flex">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-5">
          <ModeToggle />
          <div className="w-full max-w-sm">
            <h2 className="text-2xl font-semibold mb-2">Create your account</h2>
            <p className="text-gray-500 mb-6">
              Enter your details to create your account
            </p>
            <SignupForm />
            <p className="mt-6 text-center text-gray-600 text-sm font-medium">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-500 underline">
                Login
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
            <div className="bg-black bg-opacity-80 text-white p-4 rounded-lg shadow-lg max-w-xs rotate-[-7deg]">
              <span className="text-sm">
                &quot;Thanks to this tool, my land dispute documents were ready
                in minutes. Truly a lifesaver.&quot;
                <br />— Ahmed R.
              </span>
            </div>
            <div className="bg-black bg-opacity-80 text-white p-4 rounded-lg shadow-lg max-w-xs rotate-[7deg] ml-16">
              <span className="text-sm">
                &quot;My lawyer used this platform to pull all custody case
                files quickly. Super efficient!&quot;
                <br />— Maria T.
              </span>
            </div>
            <div className="bg-black bg-opacity-80 text-white p-4 rounded-lg shadow-lg max-w-xs rotate-[-4deg] mt-0">
              <span className="text-sm">
                &quot;Helped us extract the right info fast during a criminal
                case. Highly reliable.&quot;
                <br />— Imtiaz H.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
