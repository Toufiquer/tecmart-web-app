/*
|-----------------------------------------
| setting up Data for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import { ReactNode } from "react";

import { CiHeart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { GoTrash, GoSignOut } from "react-icons/go";
import { BsBriefcase, BsBasket } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlinePayment, MdOutlineSecurity } from "react-icons/md";

export type sidebarType = {
  id: string;
  name: string;
  link: string;
  component: string;
  icon: ReactNode | string;
};
export interface SidebarDataType {
  menu: sidebarType[];
  profile: { name: string; imgUrl: string; email: string };
}
const basePath = "/examples-design/full-page/only-design/profile/v2/profile";
export const sidebarData: SidebarDataType = {
  menu: [
    {
      id: "1",
      name: "Profile",
      link: `${basePath}`,
      component: `${basePath}`,
      icon: <IoPersonOutline />,
    },
    {
      id: "2",
      name: "Security",
      link: `${basePath}/security`,
      component: "/security",
      icon: <MdOutlineSecurity />,
    },
    {
      id: "3",
      name: "Notification",
      link: `${basePath}/notification`,
      component: "/notification",
      icon: <IoIosNotificationsOutline />,
    },
    {
      id: "4",
      name: "My Projects",
      link: `${basePath}/my-projects`,
      component: "/my-projects",
      icon: <BsBriefcase />,
    },
    {
      id: "5",
      name: "Payment details",
      link: `${basePath}/payment-details`,
      component: "/payment-details",
      icon: <MdOutlinePayment />,
    },
    {
      id: "6",
      name: "Order history",
      link: `${basePath}/order-history`,
      component: "/order-history",
      icon: <BsBasket />,
    },
    {
      id: "7",
      name: "Wishlist",
      link: `${basePath}/wishlist`,
      component: "/wishlist",
      icon: <CiHeart />,
    },
    {
      id: "8",
      name: "Delete profile",
      link: `${basePath}/delete-profile`,
      component: "/delete-profile",
      icon: <GoTrash />,
    },
    {
      id: "9",
      name: "Sign Out",
      link: `${basePath}/sign-out`,
      component: "/sign-out",
      icon: <GoSignOut />,
    },
  ],
  profile: { name: "Jacob Vau Miller", imgUrl: "", email: "example@gmail.com" },
};
