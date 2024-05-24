/*
|-----------------------------------------
| setting up FullPageSidebar for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Dispatch, SetStateAction } from "react";
import { exampleDataType, singleExampleDataType } from "./create-example-data";

const FullPageSidebar = ({
  data,
  currentUI,
  setCurrentUI,
}: {
  currentUI: singleExampleDataType;
  setCurrentUI: Dispatch<SetStateAction<singleExampleDataType>>;
  data: any;
}) => {
  const handleSetUI = (idx: number, childId: string) => {
    const findData = data[idx].children.find(
      (curr: singleExampleDataType) => curr.id === childId
    );
    findData && setCurrentUI(findData);
  };
  return (
    <main>
      <div className="w-full flex flex-col gap-2 p-2">
        {data.map((curr: exampleDataType, parentIdx: number) => (
          <div key={curr.id}>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>{curr.pageName}</AccordionTrigger>
                <AccordionContent>
                  <div className="w-full flex flex-col gap-2 pl-2">
                    {curr.children.map((item, idx) => (
                      <div
                        key={item.id}
                        onClick={() => handleSetUI(parentIdx, item.id)}
                      >
                        <p
                          className={`hover:underline cursor-pointer ${
                            currentUI.id === item.id && " underline "
                          }`}
                        >
                          {idx + 1}. {item.version} - {item.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
    </main>
  );
};
export default FullPageSidebar;