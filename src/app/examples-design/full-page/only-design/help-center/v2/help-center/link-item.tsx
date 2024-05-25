/*
|-----------------------------------------
| setting up LinkItem for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import Link from "next/link";

import { AiOutlineRight } from "react-icons/ai";
import { LINKITEM } from "./help-center-data";

const LinkItem = ({ data }: { data: LINKITEM }) => (
  <div className="mb-2 flex items-start justify-start gap-2 text-start hover:text-violet-600">
    <AiOutlineRight />
    <Link href={data.link}>
      {data.name} {data.id}
    </Link>
  </div>
);
export default LinkItem;
