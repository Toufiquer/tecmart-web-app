/*
|-----------------------------------------
| setting up Settings for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, October, 2023
|-----------------------------------------
*/
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Settings = () => {
  return (
    <main className="mb-12 lg:ml-8">
      <h2 className="text-4xl font-semibold">Account Setting</h2>
      <p className="mt-4 text-xl font-semibold">Account details</p>
      <div className=" flex w-full flex-col">
        <div className="my-4 grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="name">Name</Label>
          <Input type="name" id="name" placeholder="Name" />
        </div>
        <div className="my-4 grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
        <div className="my-4 grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="phone">Phone</Label>
          <Input type="phone" id="phone" placeholder="Phone" />
        </div>
      </div>
      <Button className="min-w-[180px] bg-green-400 hover:bg-green-500">Save Details</Button>

      <div className="my-8 mt-12 w-full border-b" />
      <div className="flex w-full flex-col">
        <p className="mt-4 text-xl font-semibold">Password</p>
        <div className="flex w-full gap-4">
          <div className="my-4 grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="password">New Password</Label>
            <Input type="password" id="password" placeholder="********" />
          </div>
          <div className="my-4 grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="password">Current Password</Label>
            <Input type="password" id="password" placeholder="********" />
          </div>
        </div>

        <p className="my-4 text-sm ">
          Can&apos;t remember your current password?{" "}
          <span className="cursor-pointer">
            <span className="hover-underline-animation text-green-400 ">Reset your password.</span>
          </span>
        </p>
        <Button className="max-w-[200px] bg-green-400 hover:bg-green-500">Save Password</Button>
      </div>
      <div className="my-8 mt-12 w-full border-b" />

      <p className="mt-8 text-xl font-semibold">Delete Account</p>
      <p className="py-2 text-sm text-slate-600">Would you like to delete your account?</p>
      <p className="pb-2 text-sm text-slate-600">
        This account contain 12 orders, Deleting your account will remove all the order details associated with it.
      </p>
      <Button
        variant="outline"
        className="mb-4 mt-4 min-w-[300px] max-w-[200px] border-rose-400 text-rose-500 hover:bg-rose-100 hover:text-rose-500"
      >
        I want to delete my account
      </Button>
    </main>
  );
};
export default Settings;
