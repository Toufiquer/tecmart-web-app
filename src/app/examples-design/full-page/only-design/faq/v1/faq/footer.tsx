/*
|-----------------------------------------
| setting up FAQ Footer for the app
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import { Button } from "@/components/ui/button";
import { BiSolidMessageRounded } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="min-h-96 flex w-full items-center justify-center py-20">
      <div className="w-full max-w-[600px] text-center">
        <h2 className="text-semibold text-2xl">
          Still can&apos;t find your answer?
        </h2>
        <p className="text"> We are happy to help</p>
        <Button
          variant="outline"
          className=" daauk-flex-center mx-auto mt-4 border-blue-600 text-[.75rem] text-blue-600 hover:border-blue-50 hover:bg-blue-600 hover:text-blue-50 "
        >
          <span className="mr-[5px] mt-[-2px]">
            <BiSolidMessageRounded />
          </span>{" "}
          Chat with us
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
