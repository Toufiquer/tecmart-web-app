/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import Header from "@/components/common/header";
import Outlet from "@/components/common/outlet";
import SideBar from "@/components/common/side-bar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import GlobalHeader from "./global-header";
import SiteNavLayout from "./site-nav-layout";

export default function Page() {
  return (
    <main className="bg-slate-900 text-white">
      <Header />
      <GlobalHeader />
      <ResizablePanelGroup direction="horizontal" className="min-h-[92vh]">
        <ResizablePanel defaultSize={30}>
          <SideBar />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>
          <Outlet title="Global Template" />
        </ResizablePanel>
      </ResizablePanelGroup>
      <SiteNavLayout />
    </main>
  );
}
