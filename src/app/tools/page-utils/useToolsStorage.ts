/*
|-----------------------------------------
| setting up UseToolsStorage for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import { create } from "zustand";

import { initToolsPage, toolsPageInterface } from "./type";

import { exampleToolsData } from "./create-example-data";

type ToolsStorage = {
  toolsStorage: toolsPageInterface;
  setToolsStorage: (payload: toolsPageInterface) => void;
};

export const useToolsStorage = create<ToolsStorage>()((set) => ({
  toolsStorage: exampleToolsData || initToolsPage,
  setToolsStorage: (payload: toolsPageInterface) =>
    set((state) => ({ toolsStorage: payload })),
}));
