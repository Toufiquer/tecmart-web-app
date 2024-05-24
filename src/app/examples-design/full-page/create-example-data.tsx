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
  cli?: string[];
  component: JSX.Element;
};
export type exampleDataType = {
  id: string;
  pageName: string;
  children: singleExampleDataType[];
};
import V1_Help_Center_Page from "./only-design/help-center/v1/help-center/page";
import V1_About_Us_Page from "./only-design/about-us/v1/about-us/page";
import V1_Checkout_Page from "./only-design/checkout/v1/checkout/page";
export const exampleData: exampleDataType[] = [
  {
    id: "1",
    pageName: "Help Center",
    children: [
      {
        id: "1",
        name: "Help Center",
        version: "v1",
        cli: ["npx shadcn-ui@latest add accordion"],
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
        cli: [
          "npx shadcn-ui@latest add avatar",
          "npx shadcn-ui@latest add card",
        ],
        path: "@/examples-design/full-page/only-design/about-us/v1/about-us",
        urlPath:
          "http://localhost:3000/examples-design/full-page/only-design/about-us/v1/about-us",
        component: <V1_About_Us_Page />,
      },
    ],
  },
  {
    id: "3",
    pageName: "Checkout",
    children: [
      {
        id: "1",
        name: "Checkout",
        version: "v1",
        cli: [
          "npx shadcn-ui@latest add checkbox",
          "npx shadcn-ui@latest add dropdown-menu",
          "npx shadcn-ui@latest add select",
          "npx shadcn-ui@latest add input",
        ],
        path: "@/examples-design/full-page/only-design/checkout/v1/checkout",
        urlPath:
          "http://localhost:3000/examples-design/full-page/only-design/checkout/v1/checkout",
        component: <V1_Checkout_Page />,
      },
    ],
  },
];
