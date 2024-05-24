/*
|-----------------------------------------
| setting up CreateExampleData for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

export type singleExampleDataType = {
  id: string;
  name: string;
  path: string;
  version: string;
  urlPath: string;
  component: JSX.Element;
};
export type exampleDataType = {
  id: string;
  pageName: string;
  children: singleExampleDataType[];
};
import V1_Help_Center_Page from "./only-design/help-center/v1/help-center/page";
import V1_About_Us_Page from "./only-design/about-us/v1/about-us/page";
export const exampleData: exampleDataType[] = [
  {
    id: "1",
    pageName: "Help Center",
    children: [
      {
        id: "1",
        name: "Help Center",
        version: "v1",
        path: "@/examples-design/full-page/only-design/help-center/v1/help-center",
        urlPath:
          "http://localhost:3000/examples-design/full-page/only-design/help-center/v1/help-center",
        component: <V1_Help_Center_Page />,
      },
    ],
  },
  {
    id: "2",
    pageName: "About Us",
    children: [
      {
        id: "1",
        name: "About us",
        version: "v1",
        path: "@/examples-design/full-page/only-design/about-us/v1/about-us",
        urlPath:
          "http://localhost:3000/examples-design/full-page/only-design/about-us/v1/about-us",
        component: <V1_About_Us_Page />,
      },
    ],
  },
];
