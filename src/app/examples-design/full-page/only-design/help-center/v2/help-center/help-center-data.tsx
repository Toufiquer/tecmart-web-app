/*
|-----------------------------------------
| setting up Help center data for the app
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import { BsEmojiSmile, BsInfoCircle, BsLayers } from "react-icons/bs";

export type LINKITEM = { name: string; link: string; id: number | string };

export type DATAITEM = {
  id: number | string;
  name: string;
  img: null | JSX.Element;
  links: LINKITEM[];
};

export const data = [
  {
    id: 1,
    name: "Get Started",
    img: <BsEmojiSmile />,
    links: [
      { name: "Group and Customization", link: "#", id: 1 },
      { name: "Color Schema and Logo Settings", link: "#", id: 2 },
      { name: "Dark mode, TEL version, and Lazy load", link: "#", id: 3 },
      { name: "Updates and Support", link: "#", id: 4 },
      { name: "TEL version, and Lazy load", link: "#", id: 5 },
    ],
  },
  {
    id: 2,
    name: "Account Setup",
    img: <BsLayers />,
    links: [
      { name: "Group and Customization", link: "#", id: 1 },
      { name: "Dark mode, TEL version, and Lazy load", link: "#", id: 2 },
      { name: "TEL version, and Lazy load", link: "#", id: 3 },
      { name: "Color Schema and Logo Settings", link: "#", id: 4 },
      { name: "Updates and Support", link: "#", id: 5 },
    ],
  },
  {
    id: 3,
    name: "Other Topics",
    img: <BsInfoCircle />,
    links: [
      { name: "Color Schema and Logo Settings", link: "#", id: 1 },
      { name: "Updates and Support", link: "#", id: 2 },
      { name: "Dark mode, TEL version, and Lazy load", link: "#", id: 3 },
      { name: "Group and Customization", link: "#", id: 4 },
      { name: "TEL version, and Lazy load", link: "#", id: 5 },
    ],
  },
];
