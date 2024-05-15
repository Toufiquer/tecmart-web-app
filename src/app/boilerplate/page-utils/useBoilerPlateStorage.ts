/*
|-----------------------------------------
| setting up UseBoilerPlateStorage for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import { create } from "zustand";

import { initBoilerPlatePage, boilerPageInterface } from "./type";

import { exampleBoilerPlateData } from "./create-example-data";

type BoilerStorage = {
  boilerPlateStorage: boilerPageInterface;
  setBoilerPlateStorage: (payload: boilerPageInterface) => void;
  isFilter: boolean;
  setIsFilter: (payload: boolean) => void;
};

export const useBoilerStorage = create<BoilerStorage>()((set) => ({
  boilerPlateStorage: exampleBoilerPlateData || initBoilerPlatePage,
  setBoilerPlateStorage: (payload: boilerPageInterface) =>
    set((state) => ({ boilerPlateStorage: payload })),
  isFilter: false,
  setIsFilter: (payload: boolean) => set((state) => ({ isFilter: payload })),
}));
