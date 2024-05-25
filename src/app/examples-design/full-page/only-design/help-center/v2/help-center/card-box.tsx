/*
|-----------------------------------------
| setting up Card for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import { data } from "./help-center-data";
import CardItem from "./card-item";

const CardBox = () => {
  return (
    <main className="mb-12 mt-12 flex w-full min-w-[760px] max-w-[1200px] flex-wrap justify-center gap-8 lg:flex-row">
      {data.map((curr) => (
        <CardItem key={curr.id} data={curr} />
      ))}
    </main>
  );
};

export default CardBox;
