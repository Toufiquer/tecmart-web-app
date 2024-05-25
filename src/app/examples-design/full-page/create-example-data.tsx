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
  doc?: string[];
  component: JSX.Element;
};
export type exampleDataType = {
  id: string;
  pageName: string;
  children: singleExampleDataType[];
};
import V1_Help_Center_Page from "./only-design/help-center/v1/help-center/page";
import V2_Help_Center_Page from "./only-design/help-center/v2/help-center/page";
import V1_About_Us_Page from "./only-design/about-us/v1/about-us/page";
import V1_Checkout_Page from "./only-design/checkout/v1/checkout/page";
import V1_Contact_Us_Page from "./only-design/contact-us/v1/contact-us/page";
import V1_Create_an_event_Page from "./only-design/create-an-event/v1/create-an-event/page";
import V1_Event_Details_Page from "./only-design/event-details/v1/event-details/page";
import V1_FAQ_Page from "./only-design/faq/v1/faq/page";
import V1_Forgot_Password_Page from "./only-design/forgot-password/v1/forgot-password/page";
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
      {
        id: "2",
        name: "Help Center",
        version: "v2",
        cli: ["npx shadcn-ui@latest add accordion"],
        path: "@/examples-design/full-page/only-design/help-center/v2/help-center",
        urlPath:
          "http://localhost:3000/examples-design/full-page/only-design/help-center/v2/help-center",
        component: <V2_Help_Center_Page />,
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
  {
    id: "4",
    pageName: "Contact Us",
    children: [
      {
        id: "1",
        name: "Contact Us",
        version: "v1",
        cli: [
          "npx shadcn-ui@latest add textarea",
          "npx shadcn-ui@latest add button",
          "npx shadcn-ui@latest add input",
          "npx shadcn-ui@latest add label",
        ],
        path: "@/examples-design/full-page/only-design/contact-us/v1/contact-us",
        urlPath:
          "http://localhost:3000/examples-design/full-page/only-design/contact-us/v1/contact-us",
        component: <V1_Contact_Us_Page />,
      },
    ],
  },
  {
    id: "5",
    pageName: "Create an event",
    children: [
      {
        id: "1",
        name: "Create an event",
        version: "v1",
        cli: [
          "yarn add date-fns",
          "npx shadcn-ui@latest add radio-group",
          "npx shadcn-ui@latest add select",
          "npx shadcn-ui@latest add label",
          "npx shadcn-ui@latest add input",
          "npx shadcn-ui@latest add textarea",
          "npx shadcn-ui@latest add button",
          "npx shadcn-ui@latest add checkbox",
          "npx shadcn-ui@latest add calendar",
          "npx shadcn-ui@latest add popover",
        ],
        doc: ["https://ui.shadcn.com/docs/components/date-picker"],
        path: "@/examples-design/full-page/only-design/create-an-event/v1/create-an-event",
        urlPath:
          "http://localhost:3000/examples-design/full-page/only-design/create-an-event/v1/create-an-event",
        component: <V1_Create_an_event_Page />,
      },
    ],
  },
  {
    id: "6",
    pageName: "Event details",
    children: [
      {
        id: "1",
        name: "Event details",
        version: "v1",
        cli: [],
        path: "@/examples-design/full-page/only-design/event-details/v1/event-details",
        urlPath:
          "http://localhost:3000/examples-design/full-page/only-design/event-details/v1/event-details",
        component: <V1_Event_Details_Page />,
      },
    ],
  },
  {
    id: "7",
    pageName: "Frequently asked questions",
    children: [
      {
        id: "1",
        name: "Frequently asked questions",
        version: "v1",
        cli: [
          "npx shadcn-ui@latest add input",
          "npx shadcn-ui@latest add accordion",
          "npx shadcn-ui@latest add button",
        ],
        path: "@/examples-design/full-page/only-design/faq/v1/faq",
        urlPath:
          "http://localhost:3000/examples-design/full-page/only-design/faq/v1/faq",
        component: <V1_FAQ_Page />,
      },
    ],
  },
  {
    id: "8",
    pageName: "Forget Password",
    children: [
      {
        id: "1",
        name: "Forget Password",
        version: "v1",
        cli: [
          "npx shadcn-ui@latest add input",
          "npx shadcn-ui@latest add button",
        ],
        path: "@/examples-design/full-page/only-design/forgot-password/v1/forgot-password",
        urlPath:
          "http://localhost:3000/examples-design/full-page/only-design/forgot-password/v1/forgot-password",
        component: <V1_Forgot_Password_Page />,
      },
    ],
  },
];
