/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, October, 2023
|-----------------------------------------
*/

"use client";

import { useState } from "react";
import { X } from "lucide-react";

import { Button } from "@/components/ui/button";
import PaymentMethod from "./payment-method";
import Settings from "./settings";
import Address from "./address";
import Notification from "./notification";
import YourOrders from "./your-orders";
import { FiShoppingBag } from "react-icons/fi";
import { VscSettingsGear } from "react-icons/vsc";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";
import { BsBell } from "react-icons/bs";
import { TbLogout } from "react-icons/tb";
import { BiMenu } from "react-icons/bi";

const btnStyle = "flex min-w-[120px] items-center justify-start border-0 gap-2";
const activeStyle =
  "bg-slate-900 text-white hover:bg-slate-900 hover:text-white";

const Content = ({
  setToggle,
  toggle,
  setDower = () => "",
}: {
  setDower?: (value: boolean) => void;
  setToggle: (value: string) => void;
  toggle: string;
}) => (
  <div>
    <div className="mt-12 flex flex-col gap-1 px-4">
      <Button
        variant="outline"
        onClick={() => {
          setDower(false);
          setToggle("yourOrders");
        }}
        className={`${btnStyle} ${toggle === "yourOrders" && activeStyle}`}
      >
        <FiShoppingBag />
        Your Orders
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          setDower(false);
          setToggle("setting");
        }}
        className={`${btnStyle} ${toggle === "setting" && activeStyle}`}
      >
        <VscSettingsGear /> Settings
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          setDower(false);
          setToggle("address");
        }}
        className={`${btnStyle} ${toggle === "address" && activeStyle}`}
      >
        <CiLocationOn /> Address
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          setDower(false);
          setToggle("paymentMethod");
        }}
        className={`${btnStyle} ${toggle === "paymentMethod" && activeStyle}`}
      >
        <MdOutlinePayment /> Payment Method
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          setDower(false);
          setToggle("notification");
        }}
        className={`${btnStyle} ${toggle === "notification" && activeStyle}`}
      >
        <BsBell /> Notification
      </Button>
    </div>
    <div className="my-8 min-w-[220px] border-t" />
    <div className="mt-12 flex flex-col gap-1 px-4">
      <Button variant="outline" className={`${btnStyle}`}>
        <TbLogout /> Log out
      </Button>
    </div>
  </div>
);

const Page = () => {
  const [toggle, setToggle] = useState("yourOrders");
  const [dower, setDower] = useState(false);
  return (
    <main>
      <section className="grid w-full grid-cols-1 border-t lg:grid-cols-[300px_1fr]">
        <div className="pl-4 lg:ml-6 lg:min-h-screen">
          <div className="block w-full lg:hidden">
            <div className="mt-8 flex w-full items-center justify-between pr-4">
              <h2 className="text-2xl font-semibold">Account Setting</h2>
              <Button
                onClick={() => setDower(true)}
                variant="outline"
                className=" cursor-pointer border-0 text-3xl"
              >
                <BiMenu />
              </Button>
            </div>
            {dower && (
              <div className="fixed left-0 top-0 h-screen w-full bg-transparent">
                <div className="flex w-full">
                  <div className="flex h-screen w-[400px] flex-col  border-r bg-white p-8">
                    <div className="flex w-full items-center justify-end">
                      <Button
                        onClick={() => setDower(false)}
                        variant="outline"
                        className="cursor-pointer border-0 "
                      >
                        <X />
                      </Button>
                    </div>
                    <Content
                      toggle={toggle}
                      setToggle={setToggle}
                      setDower={setDower}
                    />
                  </div>
                </div>{" "}
              </div>
            )}
          </div>
          <div className="hidden lg:block">
            <Content toggle={toggle} setToggle={setToggle} />
          </div>
        </div>
        <div className="px-4 pt-12 lg:ml-6 lg:min-h-screen lg:border-l">
          {toggle === "yourOrders" && <YourOrders />}
          {toggle === "setting" && <Settings />}
          {toggle === "address" && <Address />}
          {toggle === "paymentMethod" && <PaymentMethod />}
          {toggle === "notification" && <Notification />}
        </div>
      </section>
    </main>
  );
};
export default Page;
