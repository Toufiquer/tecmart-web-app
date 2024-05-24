/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Page = () => {
  return (
    <main className="mb-12 flex min-h-screen w-full items-center justify-center">
      <div className="grid w-full grid-cols-1 md:grid-cols-2">
        <div className="flex w-full items-center justify-end px-4">
          <Image
            src="https://i.ibb.co/q7JmgDk/forgot-p.png"
            width={400}
            height={400}
            alt="Sign in"
            className="h-auto w-3/4"
          />
        </div>
        <div className="flex h-full w-full items-center justify-center px-4 md:justify-start">
          <div className="max-w-[500px] px-2 text-slate-500">
            <h2 className="text-3xl font-bold text-slate-900">
              Forgot your password?
            </h2>
            <p className="mb-8 py-2 text-sm text-slate-500">
              Please enter the email address associated with your account and We
              will email you a link to reset your password.
            </p>
            <Input placeholder="Email" className="my-2" type="email" />
            <Button className="w-full bg-green-500 hover:bg-green-600">
              Reset Password
            </Button>
            <Link href="/logIn">
              <Button className="mt-4 w-full bg-slate-100 text-slate-800 hover:bg-slate-200 hover:text-slate-800">
                Back
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Page;
