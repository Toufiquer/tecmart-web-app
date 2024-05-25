/*
|-----------------------------------------
| setting up Card for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { BiDislike, BiLike } from "react-icons/bi";

const DetailCard = () => {
  return (
    <main className="mb-12 mt-12 flex w-full flex-row justify-center gap-8">
      <Card className="w-[90%] min-w-[700px] max-w-[1000px] text-start">
        <CardHeader className="border-b">
          <CardTitle>
            <div className="text-start text-3xl font-bold">
              Get started with node.js
            </div>
            <p className="mt-2 text-sm font-normal">
              Last updated: 7 months ago by{" "}
              <span className="mx-2 text-[8px]">&#9899;</span> Sam Lanson
            </p>
          </CardTitle>
        </CardHeader>
        <CardContent className="text-slate-800">
          <p className="mt-3">
            Started several mistakes joy say painful removed reached end. State
            burst think end are its. Arrived off she elderly beloved him affixed
            noisier yet. Tickets regard to up he hardly. View four has said do
            men saw find dear shy. Talent men wicket add garden.
          </p>
          <Button variant="outline" className="mb-8 mt-4">
            Download Node Js
          </Button>

          <div className="text-start text-2xl font-bold">Table of Contents</div>
          <p className="mt-2 text-sm font-normal">
            Age she way earnestly the fulfilled extremely.
          </p>

          <Alert variant="destructive" className="mt-4 bg-red-200">
            <AlertDescription>
              <strong>Note:</strong> She offices for highest and replied one
              venture pasture. Applauded no discovery in <br /> newspaper
              allowance am northward. View more
            </AlertDescription>
          </Alert>
          <p className="mt-2 text-sm font-normal">
            Hold do at tore in park feet near my case. Invitation at understood
            occasional sentiments insipidity inhabiting in. Off melancholy
            alteration principles old. Is do speedily kindness properly oh.
            Respect article painted cottage he is offices parlors.
          </p>
          <ul className="ml-4 mt-4 list-disc">
            <li>
              Affronting imprudence do he he everything. Sex lasted dinner
              wanted indeed wished outlaw. Far advanced settling say finished
              raillery.
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
              Subjects he prospect elegance followed Laughter proposal laughing
              any son law consider.
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
          <p className="mt-2 text-sm font-normal">
            Improved own provided blessing may peculiar domestic. Sight house
            has sex never. No visited raising gravity outward subject my cottage
            Mr be. Hold do at tore in park feet near my case. Invitation at
            understood occasional sentiments insipidity inhabiting in.
            <Link href="#" className="underline">
              Off melancholy alteration principles old.
            </Link>
            Is do speedily kindness properly oh. Respect article painted cottage
            he is offices parlors.
          </p>
        </CardContent>
        <CardFooter>
          <div className="flex w-full items-center justify-between rounded-lg border p-6">
            <div className="text-start text-2xl font-bold">
              Was this article helpful?
            </div>{" "}
            <p>20 out of 45 found this helpful</p>
            <div className="flex items-center justify-center rounded-lg border-2 text-[.82rem]">
              <span className="flex items-center justify-center cursor-pointer gap-1 p-2 px-4 hover:bg-slate-100">
                <BiLike /> Yes
              </span>
              <span className="flex items-center justify-center cursor-pointer gap-1  border-l-2 p-2 px-4 hover:bg-slate-100">
                <BiDislike /> No
              </span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
};
export default DetailCard;
