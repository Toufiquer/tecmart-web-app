/*
|-----------------------------------------
| setting up CardItem for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LinkItem from "./link-item";
import { DATAITEM } from "./help-center-data";

const CardItem = ({ data }: { data: DATAITEM }) => (
  <Card className="mx-auto min-w-[300px] max-w-[320px]">
    <CardHeader>
      <CardTitle>
        <div className="daauk-flex-center gap-2 text-3xl font-bold">
          {data.img}
          {data.name}
        </div>
      </CardTitle>
    </CardHeader>
    <CardContent>
      {data.links.map((curr) => (
        <LinkItem key={curr.id} data={curr} />
      ))}
    </CardContent>
  </Card>
);

export default CardItem;
