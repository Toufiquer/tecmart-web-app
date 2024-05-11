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

  export default function Home() {
    return (
      <main className="bg-slate-900 text-white">
        <Header />
        <ResizablePanelGroup direction="horizontal" className="min-h-[68vh]">
          <ResizablePanel defaultSize={30}>
            <SideBar />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel>
            <Outlet />
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    );
  }
