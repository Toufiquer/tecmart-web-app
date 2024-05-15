/*
|-----------------------------------------
| setting up Type for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

export type singleBoilerPlateType = {
  id: string;
  title?: string;
  description?: string[];
  examplePath?: string;
  boilerPlate?: {
    id: string;
    name: string;
    description: string;
    content: { id: string; name: string; code: string[]; fileName: string }[];
  }[];
  code?: { id: string; yarn?: string; npm?: string; Terminal?: string }[];
  documentation?: { id: string; url: string; name: string }[];
  important?: boolean;
};

export interface boilerPageInterface {
  pageName: string;
  data: { context: singleBoilerPlateType[] }[];
}

// Example Data
export const initSingleBoilerPlate: singleBoilerPlateType = {
  id: "boilerPlate-0001",
};
export const initBoilerPlatePage = {
  pageName: "boilerPlate",
  data: [{ context: [initSingleBoilerPlate] }],
};
