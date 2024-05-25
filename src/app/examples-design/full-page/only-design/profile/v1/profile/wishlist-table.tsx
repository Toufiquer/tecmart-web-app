/*
|-----------------------------------------
| setting up wishlist-table for the app
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, September, 2023
|-----------------------------------------
*/

"use client";

import DataTable from "./data-table";
import { wishlist } from "./wishlist";
import { columns } from "./wishlist-columns";

const WishListTable = () => {
  return <DataTable columns={columns} data={wishlist} />;
};
export default WishListTable;
