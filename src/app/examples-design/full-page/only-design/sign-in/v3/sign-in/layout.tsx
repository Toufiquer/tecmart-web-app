/*
|-----------------------------------------
| setting up Layout for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import React from "react";
import type { Metadata } from "next";

import PublicFooter from "./public-footer";

export const metadata: Metadata = {
  title: "Tec Mart",
  description: "Create, manage and run your store",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      {children}
      <PublicFooter />
    </main>
  );
};
export default Layout;
