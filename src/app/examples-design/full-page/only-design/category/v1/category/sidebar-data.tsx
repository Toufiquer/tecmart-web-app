import { BiCategory, BiPieChartAlt } from "react-icons/bi";
/*
|-----------------------------------------
| setting up sidebar-data for the app
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, September, 2023
|-----------------------------------------
*/

import { SIDEBARTYPE } from "./sidebar-hover-item";
import {
  MdEdit,
  MdOutlineCategory,
  MdOutlineEventAvailable,
  MdOutlineManageAccounts,
  MdOutlineViewKanban,
} from "react-icons/md";
import {
  AiOutlineExclamationCircle,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import {
  BsBookmark,
  BsCalendar4Event,
  BsCartPlus,
  BsChatLeft,
  BsClipboard,
  BsGlobe2,
  BsQuestionCircle,
  BsTrash,
} from "react-icons/bs";
import { IoCallOutline, IoShareSocialOutline } from "react-icons/io5";
import { TbDeviceAnalytics } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import { CiLocationArrow1 } from "react-icons/ci";
import { FiCompass } from "react-icons/fi";

export const sidebarDataHome: SIDEBARTYPE = {
  name: "Home",
  icon: <BiPieChartAlt />,
  content: [
    { icon: <MdOutlineManageAccounts />, name: "E commerce", link: "#", id: 1 },
    { icon: <MdOutlineManageAccounts />, name: "Marketing", link: "#", id: 2 },
    {
      icon: <MdOutlineManageAccounts />,
      name: "CRM",
      link: "#",
      badge: "NEW",
      id: 3,
    },
    {
      icon: <MdOutlineManageAccounts />,
      name: "Social feed",
      link: "#",
      id: 4,
    },
  ],
};
export const sidebarDataECommerce: SIDEBARTYPE = {
  name: "E commerce",
  icon: <AiOutlineShoppingCart />,
  content: [
    {
      icon: <BsCartPlus />,
      name: "Product management",
      link: "/dashboard/product-management",
      id: 1,
    },
    {
      icon: <BiCategory />,
      name: "Category",
      link: "/dashboard/product-management/category",
      id: 2,
    },
    {
      icon: <MdOutlineCategory />,
      name: "Sub Category",
      link: "/dashboard/product-management/sub-category",
      id: 3,
    },
    {
      icon: <MdOutlineManageAccounts />,
      name: "Orders",
      link: "/dashboard/orders",
      id: 4,
    },
  ],
};
export const sidebarDataCRM: SIDEBARTYPE = {
  name: "CRM",
  icon: <IoCallOutline />,
  content: [
    {
      name: "Customers",
      link: "/dashboard/customers",
      id: 1,
      icon: <MdOutlineManageAccounts />,
    },
    {
      name: "Analytics",
      link: "/dashboard/analytics",
      id: 2,
      icon: <TbDeviceAnalytics />,
    },
  ],
  isActive: true,
};
export const sidebarDataProjectManagement: SIDEBARTYPE = {
  name: "Project management",
  icon: <BsClipboard />,
  content: [],
};
export const sidebarDataProjectChat: SIDEBARTYPE = {
  name: "Chat",
  icon: <BsChatLeft />,
  content: [],
  isDropdown: false,
};
export const sidebarDataProjectEmail: SIDEBARTYPE = {
  name: "Email",
  icon: <HiOutlineMail />,
  content: [
    { id: 1, name: "Inbox", link: "/dashboard/inbox", icon: <HiOutlineMail /> },
    {
      id: 2,
      name: "Sent",
      link: "/dashboard/inbox",
      icon: <CiLocationArrow1 />,
    },
    { id: 3, name: "Draft", link: "/dashboard/inbox", icon: <MdEdit /> },
    {
      id: 4,
      name: "Spam",
      link: "/dashboard/inbox",
      icon: <AiOutlineExclamationCircle />,
    },
    { id: 5, name: "Trash", link: "/dashboard/inbox", icon: <BsTrash /> },
  ],
};
export const sidebarDataProjectEvents: SIDEBARTYPE = {
  name: "Events",
  icon: <BsBookmark />,
  content: [
    {
      name: "Create an event",
      link: "/create-an-event",
      id: 2,
      icon: <MdOutlineEventAvailable />,
    },
    {
      name: "Event Details",
      link: "/event-details",
      id: 2,
      icon: <BsCalendar4Event />,
    },
  ],
};
export const sidebarDataProjectKanban: SIDEBARTYPE = {
  name: "Kanban",
  icon: <MdOutlineViewKanban />,
  content: [],
  isActive: true,
};
export const sidebarDataProjectSocial: SIDEBARTYPE = {
  name: "Social",
  icon: <IoShareSocialOutline />,
  content: [],
};
export const sidebarDataProjectCalendar: SIDEBARTYPE = {
  name: "Calendar",
  icon: <AiOutlineShoppingCart />,
  content: [],
};
export const sidebarDataProjectStarter: SIDEBARTYPE = {
  name: "Starter",
  icon: <FiCompass />,
  content: [],
  isDropdown: false,
  link: "/#",
};
export const sidebarDataProjectFaq: SIDEBARTYPE = {
  name: "Faq",
  icon: <BsQuestionCircle />,
  content: [],
  isActive: true,
  link: "/faq",
};
export const sidebarDataProjectLoading: SIDEBARTYPE = {
  name: "Loading",
  icon: <BsGlobe2 />,
  content: [
    { name: "Dashboard", link: "/dashboard", id: 1 },
    { name: "Product management", link: "#", id: 2 },
    { name: "CRM", link: "#", badge: "NEW", id: 3 },
    { name: "Social feed", link: "#", id: 4 },
  ],
  isActive: true,
};
