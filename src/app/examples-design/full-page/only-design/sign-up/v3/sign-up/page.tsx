/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, October, 2023
|-----------------------------------------
*/

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
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
    <main className="mb-12 flex min-h-screen w-full items-center justify-center">
      <div className="grid w-full grid-cols-1 md:grid-cols-2">
        <div className="flex w-full items-center justify-end px-4">
          <Image
            src="https://i.ibb.co/SvBwNN0/signup-g.png"
            width={800}
            height={800}
            alt="Sign in"
            className="h-auto w-3/4"
          />
        </div>
        <div className="mt-8 flex h-full w-full items-center justify-center px-4 md:mt-0 md:justify-start">
          <div className="px-2 text-slate-500">
            <h2 className="text-3xl font-bold text-slate-900">
              Get Start Shopping
            </h2>
            <p className="mb-4 py-2 text-slate-500">
              Welcome to FreshCart! Enter your email to get started.
            </p>
            <div className="flex w-full gap-4">
              <Input placeholder="First Name" className="my-2" type="text" />
              <Input placeholder="Last Name" className="my-2" type="text" />
            </div>
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
            <Button className="w-full bg-green-500 hover:bg-green-600">
              Register
            </Button>
            <p className="pt-2 text-sm ">
              <span>Already have an account?</span>
              <Link
                href="/logIn"
                className="ml-2 cursor-pointer font-semibold text-green-400"
              >
                Log In
              </Link>
            </p>
            <p className="pt-2 text-sm ">
              <span>
                By continuing, you agree to our
                <Link
                  href="/signIn"
                  className="ml-2 cursor-pointer font-semibold text-green-400"
                >
                  Terms of Service
                </Link>
                <span className="px-2">&</span>
                <Link
                  href="/signIn"
                  className="cursor-pointer font-semibold text-green-400"
                >
                  Privacy Policy
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
