/*
|-----------------------------------------
| setting up Reviews for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, September, 2023
|-----------------------------------------
*/

import { REVIEW } from "./review-columns";

export const reviews: REVIEW[] = [
  {
    id: 1,
    rating: 5,
    product:
      "Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Management & Skin Temperature Trends, Carbon/Graphite, One Size (S & L Bands)",
    review:
      "This Fitbit is fantastic! I was trying to be in better shape and needed some motivation, so I decided to treat myself to a new Fitbit.",
    status: "APPROVED",
    date: "Just now",
  },
  {
    id: 2,
    rating: 5,
    product: "iPhone 13 pro max-Pacific Blue-128GB storage",
    review:
      "The order was delivered ahead of schedule. To give us additional time, you should leave the packaging sealed with plastic.",
    status: "PENDING",
    date: "Dec 9, 2:28 PM",
  },
  {
    id: 3,
    rating: 5,
    product: "Apple MacBook Pro 13 inch-M1-8/256GB-space",
    review:
      "It's a Mac, after all. Once you've gone Mac, there's no going back. My first Mac lasted over nine years, and this is my second.",
    status: "APPROVED",
    date: "Dec 4, 12:56 PM",
  },
  {
    id: 4,
    rating: 1,
    product:
      'Apple iMac 24" 4K Retina Display M1 8 Core CPU, 7 Core GPU, 256GB SSD, Green (MJV83ZP/A) 2021',
    review:
      "Personally, I like the minimalist style, but I wouldn't choose it if I were searching for a computer that I would use frequently. It's not horrible in terms of speed and power",
    status: "APPROVED",
    date: "Nov 28, 7:28 PM",
  },
  {
    id: 5,
    rating: 3,
    product: "Razer Kraken v3 x Wired 7.1 Surroung Sound Gaming headset",
    review:
      "It performs exactly as expected. There are three of these in the family.",
    status: "CANCELLED",
    date: "Nov 24, 10:16 AM",
  },
  {
    id: 6,
    rating: 4,
    product: "PlayStation 5 DualSense Wireless Controller",
    review:
      "The controller is quite comfy for me. Despite its increased size, the controller still fits well in my hands.",
    status: "APPROVED",
    date: "Just now",
  },
];
