/*
|-----------------------------------------
| setting up RatingStar for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, September, 2023
|-----------------------------------------
*/

import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";

export const RatingStar = ({ num = 0 }: { num: number }) => {
  const result = [1, 2, 3, 4, 5];
  const starts = result.map((curr) => (
    <span key={curr}>
      {curr <= num ? <AiTwotoneStar /> : <AiOutlineStar />}
    </span>
  ));
  return (
    <div className="flex items-center gap-1 text-orange-500">{starts}</div>
  );
};
