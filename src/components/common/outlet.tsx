/*
|-----------------------------------------
| setting up Outlet for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

import  SignUpPage  from "@/app/examples-design/full-page/auth/with-border/signUp/page"

const Outlet = ({ title,uiPath }: {uiPath?:string, title?: string }) => {
  
  let renderUI = (
    <main className="w-full min-h-screen flex items-center justify-center text-4xl ">
      {title ? title : "Outlet"}
    </main>
  );
  if (uiPath === "@/app/examples-design/full-page/auth/with-border/signUp/page")
    renderUI = <SignUpPage />;
  return renderUI;
};
export default Outlet;
