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
import { ScrollArea } from "@/components/ui/scroll-area";

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
      <ScrollArea className="w-full h-screen">
        <div className="text-slate-400 text-xs text-center">
          Total Page:{" "}
          {data.reduce((acc, curr) => acc + curr.children.length, 0)}
        </div>
        <div className="w-full flex flex-col gap-2 p-2">
          {data
            .sort(
              (a: { pageName: string }, b: { pageName: string }) =>
                a.pageName?.localeCompare(b.pageName || "") || 1
            )
            .map((curr: exampleDataType, parentIdx: number) => (
              <div key={curr.id}>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      <div className="flex items-center justify-start gap-1">
                        {parentIdx + 1}. {curr.pageName}
                        <small className="text-xs mt-4 text-slate-400">
                          ({curr.children.length})
                        </small>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="w-full flex flex-col gap-2 pl-2">
                        {curr.children.map((item, idx) => (
                          <div
                            key={item.id}
                            onClick={() => handleSetUI(parentIdx, item.id)}
                          >
                            <p
                              className={`hover:underline cursor-pointer ${
                                currentUI.id === item.id &&
                                currentUI.name === item.name &&
                                " underline "
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
      </ScrollArea>
    </main>
  );
};
export default FullPageSidebar;
