/*
|-----------------------------------------
| setting up Information for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, October, 2023
|-----------------------------------------
*/
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const tableData1 = [
  {
    id: 1,
    title: "width",
    value: "1000 Grams",
  },
  {
    id: 2,
    title: "IngredientType",
    value: "Vegetarian",
  },
  {
    id: 3,
    title: "Brand",
    value: "Dmart",
  },
  {
    id: 4,
    title: "ItemPackageQuantity",
    value: "1",
  },
  {
    id: 5,
    title: "Form",
    value: "Larry the Bird",
  },
  {
    id: 6,
    title: "Manufacturer",
    value: "Dmart",
  },
  {
    id: 7,
    title: "NetQuantity",
    value: "340.0 Gram",
  },
  {
    id: 7,
    title: "ProductDimensions",
    value: "9.6 x 7.49 x 18.49 cm",
  },
];
const tableData2 = [
  {
    id: 1,
    title: "ASIN",
    value: "SB0025UJ75W",
  },
  {
    id: 2,
    title: "Best Sellers Rank",
    value: "#2 in Fruits",
  },
  {
    id: 3,
    title: "Date First Available",
    value: "30 April 2022",
  },
  {
    id: 4,
    title: "Item Weight",
    value: "500g",
  },
  {
    id: 5,
    title: "Generic Name",
    value: "Banana Robusta",
  },
];

const Information = () => {
  return (
    <section className="mb-12 px-4">
      <h2 className="mb-2 text-2xl font-semibold">Details</h2>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        <Table className="border-b">
          <TableBody>
            {tableData1.map((curr, idx) => (
              <TableRow key={curr.id} className={`${idx % 2 === 0 && "bg-slate-100"}`}>
                <TableCell className=" font-semibold">{curr.title}</TableCell>
                <TableCell className="text-start">{curr.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Table className="border-b">
          <TableBody>
            {tableData2.map((curr, idx) => (
              <TableRow key={curr.id} className={`${idx % 2 === 0 && "bg-slate-100"}`}>
                <TableCell className=" font-semibold">{curr.title}</TableCell>
                <TableCell className="text-start">{curr.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};
export default Information;
