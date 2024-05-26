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
import V1_Help_Details_Page from "./only-design/help-details/v1/help-details/page";
import V2_Help_Details_Page from "./only-design/help-details/v2/help-details/page";
import V1_Sign_In_Page from "./only-design/sign-in/v1/sign-in/page";
import V2_Sign_In_Page from "./only-design/sign-in/v2/sign-in/page";
import V3_Sign_In_Page from "./only-design/sign-in/v3/sign-in/page";
import V1_Sign_Up_Page from "./only-design/sign-up/v1/sign-up/page";
import V2_Sign_Up_Page from "./only-design/sign-up/v2/sign-up/page";
import V3_Sign_Up_Page from "./only-design/sign-up/v3/sign-up/page";
import V1_Maintenance_Page from "./only-design/maintenance/v1/maintenance/page";
import V1_Pricing_Page from "./only-design/pricing/v1/pricing/page";
import V1_Privacy_Policy_Page from "./only-design/privacy-policy/v1/privacy-policy/page";
import V1_Privacy_Page from "./only-design/privacy/v1/privacy/page";
import V1_Products_Page from "./only-design/products/v1/products/page";
import V1_Profile_Page from "./only-design/profile/v1/profile/page";
import V2_Profile_Page from "./only-design/profile/v2/profile/page";
import V1_Public_Page from "./only-design/public/v1/public/page";
import V1_Account_Page from "./only-design/account/v1/account/page";
import V1_Cart_Page from "./only-design/cart/v1/cart/page";
import V2_Cart_Page from "./only-design/cart/v2/cart/page";
import V1_Category_Page from "./only-design/category/v1/category/page";
import V1_Single_Product_Page from "./only-design/single-product/v1/single-product/page";
import V1_Refund_Page from "./only-design/refund/v1/refund/page";
import V1_Terms_And_Condition_Page from "./only-design/terms-and-conditions/v1/terms-and-conditions/page";
import V1_Terms_Of_Service_Page from "./only-design/terms-of-service/v1/terms-of-service/page";
import V1_Dashboard_Page from "./only-design/dashboard/v1/dashboard/page";
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
        path: "@/app/examples-design/full-page/only-design/help-center/v1/help-center",
        urlPath:
          "/examples-design/full-page/only-design/help-center/v1/help-center",
        component: <V1_Help_Center_Page />,
      },
      {
        id: "2",
        name: "Help Center",
        version: "v2",
        cli: [
          "npx shadcn-ui@latest add accordion",
          "npx shadcn-ui@latest add input",
          "npx shadcn-ui@latest add button",
          "npx shadcn-ui@latest add card",
        ],
        path: "@/app/examples-design/full-page/only-design/help-center/v2/help-center",
        urlPath:
          "/examples-design/full-page/only-design/help-center/v2/help-center",
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
        path: "@/app/examples-design/full-page/only-design/about-us/v1/about-us",
        urlPath: "/examples-design/full-page/only-design/about-us/v1/about-us",
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
        path: "@/app/examples-design/full-page/only-design/checkout/v1/checkout",
        urlPath: "/examples-design/full-page/only-design/checkout/v1/checkout",
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
        path: "@/app/examples-design/full-page/only-design/contact-us/v1/contact-us",
        urlPath:
          "/examples-design/full-page/only-design/contact-us/v1/contact-us",
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
        path: "@/app/examples-design/full-page/only-design/create-an-event/v1/create-an-event",
        urlPath:
          "/examples-design/full-page/only-design/create-an-event/v1/create-an-event",
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
        path: "@/app/examples-design/full-page/only-design/event-details/v1/event-details",
        urlPath:
          "/examples-design/full-page/only-design/event-details/v1/event-details",
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
        path: "@/app/examples-design/full-page/only-design/faq/v1/faq",
        urlPath: "/examples-design/full-page/only-design/faq/v1/faq",
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
        path: "@/app/examples-design/full-page/only-design/forgot-password/v1/forgot-password",
        urlPath:
          "/examples-design/full-page/only-design/forgot-password/v1/forgot-password",
        component: <V1_Forgot_Password_Page />,
      },
    ],
  },
  {
    id: "9",
    pageName: "Help Details",
    children: [
      {
        id: "1",
        name: "Help Details",
        version: "v1",
        cli: [
          "npx shadcn-ui@latest add input",
          "npx shadcn-ui@latest add button",
          "npx shadcn-ui@latest add card",
          "npx shadcn-ui@latest add alert",
        ],
        path: "@/app/examples-design/full-page/only-design/help-details/v1/help-details",
        urlPath:
          "/examples-design/full-page/only-design/help-details/v1/help-details",
        component: <V1_Help_Details_Page />,
      },
      {
        id: "2",
        name: "Help Details",
        version: "v2",

        path: "@/app/examples-design/full-page/only-design/help-details/v2/help-details",
        urlPath:
          "/examples-design/full-page/only-design/help-details/v2/help-details",
        component: <V2_Help_Details_Page />,
      },
    ],
  },
  {
    id: "10",
    pageName: "Sign In",
    children: [
      {
        id: "1",
        name: "Sign In",
        version: "v1",
        cli: ["yarn add react-hook-form", "yarn add zod"],
        doc: [
          "https://react-hook-form.com",
          "https://www.npmjs.com/package/zod",
        ],
        path: "@/app/examples-design/full-page/only-design/sign-in/v1/sign-in",
        urlPath: "/examples-design/full-page/only-design/sign-in/v1/sign-in",
        component: <V1_Sign_In_Page />,
      },
      {
        id: "2",
        name: "Sign In",
        version: "v2",
        cli: ["yarn add react-hook-form", "yarn add zod"],
        doc: [
          "https://react-hook-form.com",
          "https://www.npmjs.com/package/zod",
        ],
        path: "@/app/examples-design/full-page/only-design/sign-in/v2/sign-in",
        urlPath: "/examples-design/full-page/only-design/sign-in/v2/sign-in",
        component: <V2_Sign_In_Page />,
      },
      {
        id: "3",
        name: "Sign In",
        version: "v3",
        cli: [
          "npx shadcn-ui@latest add button",
          "npx shadcn-ui@latest add checkbox",
          "npx shadcn-ui@latest add input",
        ],
        path: "@/app/examples-design/full-page/only-design/sign-in/v3/sign-in",
        urlPath: "/examples-design/full-page/only-design/sign-in/v3/sign-in",
        component: <V3_Sign_In_Page />,
      },
    ],
  },
  {
    id: "11",
    pageName: "Sign Up",
    children: [
      {
        id: "1",
        name: "Sign Up",
        version: "v1",
        cli: ["yarn add react-hook-form", "yarn add zod"],
        doc: [
          "https://react-hook-form.com",
          "https://www.npmjs.com/package/zod",
        ],
        path: "@/app/examples-design/full-page/only-design/sign-up/v1/sign-up",
        urlPath: "/examples-design/full-page/only-design/sign-up/v1/sign-up",
        component: <V1_Sign_Up_Page />,
      },
      {
        id: "2",
        name: "Sign Up",
        version: "v2",
        cli: ["yarn add react-hook-form", "yarn add zod"],
        doc: [
          "https://react-hook-form.com",
          "https://www.npmjs.com/package/zod",
        ],
        path: "@/app/examples-design/full-page/only-design/sign-up/v2/sign-up",
        urlPath: "/examples-design/full-page/only-design/sign-up/v2/sign-up",
        component: <V2_Sign_Up_Page />,
      },
      {
        id: "3",
        name: "Sign Up",
        version: "v3",
        cli: [
          "npx shadcn-ui@latest add button",
          "npx shadcn-ui@latest add checkbox",
          "npx shadcn-ui@latest add input",
        ],
        path: "@/app/examples-design/full-page/only-design/sign-up/v3/sign-up",
        urlPath: "/examples-design/full-page/only-design/sign-up/v3/sign-up",
        component: <V3_Sign_Up_Page />,
      },
    ],
  },
  {
    id: "12",
    pageName: "Maintenance",
    children: [
      {
        id: "1",
        name: "Maintenance",
        version: "v1",

        path: "@/app/examples-design/full-page/only-design/maintenance/v1/maintenance",
        urlPath:
          "/examples-design/full-page/only-design/maintenance/v1/maintenance",
        component: <V1_Maintenance_Page />,
      },
    ],
  },
  {
    id: "13",
    pageName: "Pricing",
    children: [
      {
        id: "1",
        name: "Pricing",
        version: "v1",

        path: "@/app/examples-design/full-page/only-design/pricing/v1/pricing",
        urlPath: "/examples-design/full-page/only-design/pricing/v1/pricing",
        component: <V1_Pricing_Page />,
      },
    ],
  },
  {
    id: "14",
    pageName: "Privacy Policy",
    children: [
      {
        id: "1",
        name: "Privacy Policy",
        version: "v1",

        path: "@/app/examples-design/full-page/only-design/privacy-policy/v1/privacy-policy",
        urlPath:
          "/examples-design/full-page/only-design/privacy-policy/v1/privacy-policy",
        component: <V1_Privacy_Policy_Page />,
      },
    ],
  },
  {
    id: "15",
    pageName: "Privacy",
    children: [
      {
        id: "1",
        name: "Privacy",
        version: "v1",

        path: "@/app/examples-design/full-page/only-design/privacy/v1/privacy",
        urlPath: "/examples-design/full-page/only-design/privacy/v1/privacy",
        component: <V1_Privacy_Page />,
      },
    ],
  },
  {
    id: "16",
    pageName: "Products",
    children: [
      {
        id: "1",
        name: "Products",
        version: "v1",
        path: "@/app/examples-design/full-page/only-design/products/v1/products",
        urlPath: "/examples-design/full-page/only-design/products/v1/products",
        component: <V1_Products_Page />,
      },
    ],
  },
  {
    id: "17",
    pageName: "Profile",
    children: [
      {
        id: "1",
        name: "Profile",
        version: "v1",

        path: "@/app/examples-design/full-page/only-design/profile/v1/profile",
        urlPath: "/examples-design/full-page/only-design/profile/v1/profile",
        component: <V1_Profile_Page />,
      },
      {
        id: "2",
        name: "Profile",
        version: "v2",

        path: "@/app/examples-design/full-page/only-design/profile/v2/profile",
        urlPath: "/examples-design/full-page/only-design/profile/v2/profile",
        component: <V2_Profile_Page />,
      },
    ],
  },
  {
    id: "18",
    pageName: "Public",
    children: [
      {
        id: "1",
        name: "Public",
        version: "v1",

        path: "@/app/examples-design/full-page/only-design/public/v1/public",
        urlPath: "/examples-design/full-page/only-design/public/v1/public",
        component: <V1_Public_Page />,
      },
    ],
  },
  {
    id: "19",
    pageName: "Account",
    children: [
      {
        id: "1",
        name: "Account",
        version: "v1",

        path: "@/app/examples-design/full-page/only-design/account/v1/account",
        urlPath: "/examples-design/full-page/only-design/account/v1/account",
        component: <V1_Account_Page />,
      },
    ],
  },
  {
    id: "20",
    pageName: "Cart",
    children: [
      {
        id: "1",
        name: "Cart",
        version: "v1",

        path: "@/app/examples-design/full-page/only-design/cart/v1/cart",
        urlPath: "/examples-design/full-page/only-design/cart/v1/cart",
        component: <V1_Cart_Page />,
      },
      {
        id: "2",
        name: "Cart",
        version: "v2",

        path: "@/app/examples-design/full-page/only-design/cart/v2/cart",
        urlPath: "/examples-design/full-page/only-design/cart/v2/cart",
        component: <V2_Cart_Page />,
      },
    ],
  },
  {
    id: "21",
    pageName: "Category",
    children: [
      {
        id: "1",
        name: "Category",
        version: "v1",

        path: "@/app/examples-design/full-page/only-design/category/v1/category",
        urlPath: "/examples-design/full-page/only-design/category/v1/category",
        component: <V1_Category_Page />,
      },
    ],
  },
  {
    id: "21",
    pageName: "Single Product",
    children: [
      {
        id: "1",
        name: "Single Product",
        version: "v1",

        path: "@/app/examples-design/full-page/only-design/single-product/v1/single-product",
        urlPath:
          "/examples-design/full-page/only-design/single-product/v1/single-product",
        component: <V1_Single_Product_Page />,
      },
    ],
  },
  {
    id: "22",
    pageName: "Refund",
    children: [
      {
        id: "1",
        name: "Refund",
        version: "v1",

        path: "@/app/examples-design/full-page/only-design/refund/v1/refund",
        urlPath: "/examples-design/full-page/only-design/refund/v1/refund",
        component: <V1_Refund_Page />,
      },
    ],
  },
  {
    id: "23",
    pageName: "Terms and Conditions",
    children: [
      {
        id: "1",
        name: "Terms and Conditions",
        version: "v1",

        path: "@/app/examples-design/full-page/only-design/terms-and-conditions/v1/terms-and-conditions",
        urlPath:
          "/examples-design/full-page/only-design/terms-and-conditions/v1/terms-and-conditions",
        component: <V1_Terms_And_Condition_Page />,
      },
    ],
  },
  {
    id: "24",
    pageName: "Terms of Service",
    children: [
      {
        id: "1",
        name: "Terms of Service",
        version: "v1",

        path: "@/app/examples-design/full-page/only-design/terms-of-service/v1/terms-of-service",
        urlPath:
          "/examples-design/full-page/only-design/terms-of-service/v1/terms-of-service",
        component: <V1_Terms_Of_Service_Page />,
      },
    ],
  },
  {
    id: "25",
    pageName: "Dashboard",
    children: [
      {
        id: "1",
        name: "Dashboard",
        version: "v1",

        path: "@/app/examples-design/full-page/only-design/dashboard/v1/dashboard",
        urlPath:
          "/examples-design/full-page/only-design/dashboard/v1/dashboard",
        component: <V1_Dashboard_Page />,
      },
    ],
  },
];
