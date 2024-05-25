/*
|-----------------------------------------
| setting up profile order type for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, September, 2023
|-----------------------------------------
*/
export type ORDERITEM = {
  id: number;
  orderNumber: number;
  status: string;
  deliveryMethod: string;
  deliveryDate: string;
  total: number;
};
