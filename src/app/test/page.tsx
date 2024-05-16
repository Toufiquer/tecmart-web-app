/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

import SiteNavLayoutClick from "../examples-design/tec-combo/site-nav-clickable/site-nav-layout-click";
import SiteNavLayoutResizable from "../examples-design/tec-combo/site-nav-clickable/site-nav-layout-resizable";
import SpyScrollPage from "../examples-design/tec-combo/spy-scroll/page";

const Page = () => {
  return (
    <main>
      <div className=" border-0 border-y border-slate-700 py-12 text-sm text-center">
        Example Side Bar with child [ResizableHandle]
      </div>
      <SiteNavLayoutResizable />
      <div className=" border-0 border-y border-slate-700 py-12 text-sm text-center">
        Example Side Bar with child [Click button || Bottom]
      </div>
      <SiteNavLayoutClick />
    </main>
  );
};
export default Page;
