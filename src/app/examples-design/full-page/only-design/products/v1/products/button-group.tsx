/*
|-----------------------------------------
| setting up ButtonGroup for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, September, 2023
|-----------------------------------------
*/
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GoTriangleDown } from "react-icons/go";

const commonStyle =
  "border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 w-[120px] lg:w-[140px]";
const firstChildStyle = `rounded-l-lg border ${commonStyle}`;
const secondChildStyle = `border-b border-t  ${commonStyle}`;
const thirdChildStyle = `rounded-r-md border  ${commonStyle}`;

const ButtonGroup = () => {
  return (
    <main className="inline-flex rounded-md shadow-sm" role="group">
      <DropdownMenu>
        <DropdownMenuTrigger className={firstChildStyle}>
          <span className="flex items-center justify-center">
            Category <GoTriangleDown />
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger className={secondChildStyle}>
          <span className="flex items-center justify-center">
            Vendor <GoTriangleDown />
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger className={thirdChildStyle}>
          <span className="flex items-center justify-center">
            More filter <GoTriangleDown />
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </main>
  );
};
export default ButtonGroup;
