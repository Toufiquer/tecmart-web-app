/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Page = () => {
  const [typeToggle, setTypeToggle] = useState("password");
  const handleTypeToggle = () => {
    if (typeToggle === "password") {
      setTypeToggle("text");
    } else {
      setTypeToggle("password");
    }
  };
  return (
    <main className="mb-12 flex min-h-screen  w-full items-center justify-center">
      <div className="grid w-full grid-cols-1 md:grid-cols-2">
        <div className="flex w-full items-center justify-end px-4">
          <Image
            src="https://i.ibb.co/7kXQh5f/signin-g.png"
            width={800}
            height={800}
            alt="Sign in"
            className="h-auto w-3/4"
          />
        </div>
        <div className="mt-8 flex h-full w-full items-center justify-center px-4 md:mt-0 md:justify-start">
          <div className="px-2 text-slate-500">
            <h2 className="text-3xl font-bold text-slate-900">
              Sign in to FreshCart
            </h2>
            <p className="mb-4 py-2 text-slate-500">
              Welcome back to FreshCart! Enter your email to get started.
            </p>
            <Input placeholder="Email" className="my-2" type="email" />
            <div className="relative">
              <Button
                variant="outline"
                className="absolute right-0 border-0 bg-transparent hover:bg-transparent"
                onClick={handleTypeToggle}
              >
                {typeToggle === "text" ? (
                  <AiOutlineEye />
                ) : (
                  <AiOutlineEyeInvisible />
                )}
              </Button>
              <Input
                placeholder="********"
                className="my-2"
                type={typeToggle}
              />
            </div>
            <div className="flex w-full items-center gap-2">
              <Checkbox id="terms" className="-mt-2" />
              <label
                htmlFor="terms"
                className="w-full pb-4 pt-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                <input type="text" className="hidden" />
                <span className="flex w-full items-center justify-between">
                  <span className="cursor-pointer">Remember me</span>
                  <span>
                    Forgot password?{" "}
                    <Link
                      href="/forgot-password"
                      className="cursor-pointer font-semibold text-green-400"
                    >
                      Reset It
                    </Link>
                  </span>
                </span>
              </label>
            </div>
            <Button className="w-full bg-green-400 hover:bg-green-500">
              Sign In
            </Button>
            <p className="pt-2 text-sm ">
              <span>
                Don&apos;t have an account?
                <Link
                  href="/sign-up"
                  className="ml-2 cursor-pointer font-semibold text-green-400"
                >
                  Sign Up
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Page;
