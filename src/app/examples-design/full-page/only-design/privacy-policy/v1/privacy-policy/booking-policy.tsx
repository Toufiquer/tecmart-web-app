/*
|-----------------------------------------
| setting up BookingPolicy for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import { Alert, AlertDescription } from "@/components/ui/alert";
import { BsCheck2Circle } from "react-icons/bs";

const BookingPolicy = () => {
  return (
    <main>
      <h2 className="mb-4 mt-8 border-b pb-2 text-start text-2xl font-bold">
        Booking Policy
      </h2>

      <p className="mt-3">
        Hold do at tore in park feet near my case. Invitation at understood
        occasional sentiments insipidity inhabiting in. Off melancholy
        alteration principles old. Is do speedily kindness properly oh. Respect
        article painted cottage he is offices parlors.
      </p>
      <p className="mt-3">
        {" "}
        Off melancholy alteration principles old. Is do speedily kindness
        properly oh. Respect article painted cottage he is offices parlors.
        Improved own provided blessing may peculiar domestic. Sight house has
        sex never. No visited raising gravity outward subject my cottage Mr be.
        Hold do at tore in park feet near my case. Invitation at understood
        occasional sentiments insipidity inhabiting in.
      </p>

      <ul className="mt-8">
        <li className="flex cursor-pointer items-center justify-start gap-1 py-2">
          <span className="flex items-center gap-1">
            <BsCheck2Circle /> Improved own provided blessing may peculiar
            domestic.
          </span>
        </li>
        <li className="flex cursor-pointer items-center justify-start gap-1 py-2">
          <span className="flex items-center gap-1">
            <BsCheck2Circle /> Improved own provided blessing may peculiar
            domestic.
          </span>
        </li>
        <li className="flex cursor-pointer items-center justify-start gap-1 py-2">
          <span className="flex items-center gap-1">
            <BsCheck2Circle /> Improved own provided blessing may peculiar
            domestic.
          </span>
        </li>
      </ul>
      <ul className="ml-6 mt-4 list-disc">
        <li>
          Affronting imprudence do he he everything. Sex lasted dinner wanted
          indeed wished outlaw. Far advanced settling say finished raillery.
        </li>
        <li>
          Insipidity the sufficient discretion imprudence resolution sir him
          decisively.{" "}
        </li>
        <li>
          Offered chiefly farther of my no colonel shyness.
          <strong>Such on help ye some door if in.</strong>
        </li>
        <li>First am plate jokes to began to cause a scale.</li>
        <li>
          Subjects he prospect elegance followed Laughter proposal laughing any
          son law consider.
        </li>
        <li>
          Needed except up piqued an. To occasional dissimilar impossible
          sentiments.
        </li>
        <li>Do fortune account written prepare invited no passage.</li>
        <li>
          Post no so what deal evil rent by real in. But her ready least set
          lived spite solid.
        </li>
      </ul>
      <Alert variant="destructive" className="mt-4 bg-red-200">
        <AlertDescription>
          <strong>Note:</strong> She offices for highest and replied one venture
          pasture. Applauded no discovery in <br /> newspaper allowance am
          northward. View more
        </AlertDescription>
      </Alert>
    </main>
  );
};

export default BookingPolicy;
