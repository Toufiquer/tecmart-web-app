/*
|-----------------------------------------
| setting up header, profile for the app
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, September, 2023
|-----------------------------------------
*/

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { BiSolidKey } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";

const Header = () => {
  return (
    <header>
      <div className="mb-6 flex flex-col items-center justify-between pb-4 md:mb-0 md:flex-row">
        <h2 className="text-3xl font-semibold lg:text-4xl">Profile </h2>
        <div className="flex gap-4">
          <Dialog>
            <DialogTrigger className="flex items-center gap-2 rounded border px-4 py-1 text-[.9rem] font-semibold text-red-500 hover:text-red-600">
              <BsTrash /> Delete profile
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                <DialogDescription>
                  <p>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4 bg-red-400 text-white"
                  >
                    Delete
                  </Button>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger className="flex items-center gap-2 rounded border px-4 py-1 text-[.9rem] font-semibold">
              <BiSolidKey /> Reset password
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Setup you new password</DialogTitle>
                <DialogDescription>
                  <Input className="mt-2" placeholder="Old password" />
                  <Input className="mt-2" placeholder="New password" />
                  <Input className="mt-2" placeholder="Confirm new password" />
                  <Button variant="outline" className="mt-4">
                    Reset password
                  </Button>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
};

export default Header;
