/*
|-----------------------------------------
| setting up ContactTicket for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BsTicket } from "react-icons/bs";

const ContactTicket = () => {
  return (
    <main className="mx-auto mb-12 grid w-full max-w-[1100px] grid-cols-1 md:grid-cols-2">
      <Card className="min-w-[500px] max-w-[520px]">
        <CardContent>
          <div className="flex items-start gap-2">
            <span className=" text-3xl font-bold">
              <TfiHeadphoneAlt />
            </span>
            <div className="ml-1">
              <h2 className=" mt-[-5px] text-3xl font-bold">
                Contact Support?
              </h2>

              <p className="mb-4">Not finding the help you need?</p>
              <Link href="#">
                <Button>Contact Us</Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="min-w-[500px] max-w-[520px]">
        <CardContent>
          <div className="flex items-start gap-2">
            <span className=" text-3xl font-bold">
              <BsTicket />
            </span>
            <div className="ml-1">
              <h2 className=" mt-[-5px] text-3xl font-bold">Submit a Ticket</h2>

              <p className="mb-4">
                Prosperous impression had conviction For every delay
              </p>
              <Link href="#">
                <Button>Submit ticket</Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
};
export default ContactTicket;
