/*
|-----------------------------------------
| setting up SingleCard for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BsTwitter } from "react-icons/bs";
import { BiLogoFacebookCircle, BiLogoGooglePlus } from "react-icons/bi";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const socialStyle =
  "rounded-lg text-blue-500 hover:text-white cursor-pointer border p-2 hover:bg-blue-500";
const SingleCard = () => {
  return (
    <main className="min-w-[270px] max-w-[280px] pb-0 pt-2 text-start duration-200 hover:pb-2 hover:pt-0">
      <Card>
        <CardHeader className="pb-0">
          <CardTitle>
            <Avatar className="h-auto w-[100px]">
              <AvatarImage
                src="https://github.com/shadcn.png"
                className="w-[100px]"
              />
              <AvatarFallback>Avatar</AvatarFallback>
            </Avatar>
          </CardTitle>
          <CardDescription>
            <span className="text-slate-700">FOUNDER / CEO </span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <span className="inline-block py-2 text-xl font-semibold text-slate-900">
            Christina Kray
          </span>
          <p className="text-slate-700">
            I am an ambitious workaholic, but apart from that, pretty simple
            person.
          </p>
        </CardContent>
        <CardFooter>
          <div className="flex gap-4 pt-4">
            <div className={socialStyle}>
              <BiLogoFacebookCircle />
            </div>
            <div className={socialStyle}>
              <BiLogoGooglePlus />
            </div>
            <div className={socialStyle}>
              <BsTwitter />
            </div>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
};
export default SingleCard;
