/*
|-----------------------------------------
| setting up YourOrders for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, October, 2023
|-----------------------------------------
*/
import DataTable from "./data-table";

import { columns } from "./your-order-columns";
import { yourOrdersType } from "./your-order-type";

const yourOrdersData: yourOrdersType[] = [
  {
    id: 1,
    name: "Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Management & Skin Temperature Trends, Carbon/Graphite, One Size (S & L Bands)",
    color: "Pure matte black",
    price: 42,
    size: "Smartwatch",
    img: "https://i.ibb.co/ZfzRN83/product.png",
    productUrl: "https://i.ibb.co/ZfzRN83/product.png",
    width: "400g",
    orderId: "14746",
    date: "March 1, 2016",
    quantity: 3,
    status: "paid",
  },
  {
    id: 2,
    name: "2021 Apple 12.9-inch iPad Pro (Wi-Fi, 128GB) - Space Gray",
    color: "Black",
    price: 1499,
    size: "Tablet",
    img: "https://i.ibb.co/ZfzRN83/product.png",
    productUrl: "https://i.ibb.co/ZfzRN83/product.png",
    width: "400g",
    orderId: "14746",
    date: "March 1, 2016",
    quantity: 3,
    status: "failed",
  },
  {
    id: 3,
    name: "PlayStation 5 DualSense Wireless Controller",
    color: "White",
    price: 299,
    size: "Gaming controller",
    img: "https://i.ibb.co/ZfzRN83/product.png",
    productUrl: "https://i.ibb.co/ZfzRN83/product.png",
    width: "400g",
    orderId: "14746",
    date: "March 1, 2016",
    quantity: 3,
    status: "fulfilled",
  },
  {
    id: 4,
    name: "Apple MacBook Pro 13 inch-M1-8/256GB-space",
    color: "Space Gray",
    price: 1699,
    size: "Laptop",
    img: "https://i.ibb.co/ZfzRN83/product.png",
    productUrl: "https://i.ibb.co/ZfzRN83/product.png",
    width: "400g",
    orderId: "14746",
    date: "March 1, 2016",
    quantity: 3,
    status: "shipped",
  },
  {
    id: 5,
    name: 'Apple iMac 24" 4K Retina Display M1 8 Core CPU, 7 Core GPU, 256GB SSD, Green (MJV83ZP/A) 2021',
    color: "Ocean Blue",
    price: 65,
    size: "Desktop computer",
    img: "https://i.ibb.co/ZfzRN83/product.png",
    productUrl: "https://i.ibb.co/ZfzRN83/product.png",
    width: "400g",
    orderId: "14746",
    date: "March 1, 2016",
    quantity: 3,
    status: "pending",
  },
];

const YourOrders = () => {
  return (
    <main>
      <h2 className="mb-8 text-3xl font-semibold">Your Orders</h2>
      <DataTable columns={columns} data={yourOrdersData} />
    </main>
  );
};
export default YourOrders;
