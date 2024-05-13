/*
|-----------------------------------------
| setting up Type for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

export type singleToolsType = {
  id: string;
  title?: string;
  description?: string[];
  code?: { id: string; yarn?: string; npm?: string; Terminal?: string }[];
  documentation?: { id: string; url: string; name: string }[];
  important?: boolean;
};

export interface toolsPageInterface {
  pageName: string;
  data: { context: singleToolsType[] }[];
}

// Example Data
export const initSingleTools: singleToolsType = {
  id: "tools0001",
};
export const initToolsPage = {
  pageName: "tools",
  data: [{ context: [initSingleTools] }],
};
