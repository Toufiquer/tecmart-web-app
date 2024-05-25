/*
|-----------------------------------------
| setting up CardItem for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import Link from "next/link";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BiLike } from "react-icons/bi";
import { RiMessage3Line } from "react-icons/ri";

const CardItem = () => (
  <Card className="min-w-[300px] max-w-[330px]">
    <CardHeader className="pb-2">
      <CardTitle>
        <div className=" text-start text-[1rem] text-violet-700">
          10 Articles
        </div>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="ml-1">
        <h2 className="mt-[-5px] text-2xl font-bold duration-200">
          <Link href="#" className="hover:text-violet-700">
            Sending Effective Email to customers
          </Link>
        </h2>
      </div>
    </CardContent>
    <CardFooter>
      <div className="flex w-full items-center justify-between text-sm">
        <p>2 hour ago</p>
        <div className="flex items-center justify-end gap-2 font-bold">
          <span className="flex items-center justify-end gap-1">
            <BiLike /> 05
          </span>
          <span className="flex items-center justify-end gap-1">
            <RiMessage3Line /> 08
          </span>
        </div>
      </div>
    </CardFooter>
  </Card>
);
export default CardItem;
