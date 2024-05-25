/*
|-----------------------------------------
| setting up Wishlist for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, September, 2023
|-----------------------------------------
*/

import { Url } from "url";

export type WISHLIST = {
  id: number;
  name: string;
  color: string;
  price: number;
  size: string;
  img: string | Url;
  productUrl: string | Url;
};

export const wishlist: WISHLIST[] = [
  {
    id: 1,
    name: "Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Management & Skin Temperature Trends, Carbon/Graphite, One Size (S & L Bands)",
    color: "Pure matte black",
    price: 42,
    size: "Smartwatch",
    img: "/product.jpg",
    productUrl: "/product.jpg",
  },
  {
    id: 2,
    name: "2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 128GB) - Space Gray",
    color: "Black",
    price: 1499,
    size: "Tablet",
    img: "/product.jpg",
    productUrl: "/product.jpg",
  },
  {
    id: 3,
    name: "PlayStation 5 DualSense Wireless Controller",
    color: "White",
    price: 299,
    size: "Gaming controller",
    img: "/product.jpg",
    productUrl: "/product.jpg",
  },
  {
    id: 4,
    name: "Apple MacBook Pro 13 inch-M1-8/256GB-space",
    color: "Space Gray",
    price: 1699,
    size: "Laptop",
    img: "/product.jpg",
    productUrl: "/product.jpg",
  },
  {
    id: 5,
    name: 'Apple iMac 24" 4K Retina Display M1 8 Core CPU, 7 Core GPU, 256GB SSD, Green (MJV83ZP/A) 2021',
    color: "Ocean Blue",
    price: 65,
    size: "Desktop computer",
    img: "/product.jpg",
    productUrl: "/product.jpg",
  },
];
