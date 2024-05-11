/*
|-----------------------------------------
| setting up ToolsOutlet for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

"use client";

import { useToolsStorage } from "./page-utils/useToolsStorage";

const ToolsOutlet = () => {
  const toolsStorage = useToolsStorage((storage) => storage.toolsStorage);
  const setToolsStorage = useToolsStorage((storage) => storage.setToolsStorage);

  const data =
    (toolsStorage?.data && toolsStorage?.data[0]?.context) || "not found";
  console.log("toolsStorage :", data);
  return (
    <main>
      <div>?</div>
    </main>
  );
};
export default ToolsOutlet;
