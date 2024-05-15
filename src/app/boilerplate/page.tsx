/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/


import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Header from "@/components/common/header";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BoilerplateSidebar from "./boilerplate-sidebar";
import BoilerplateOutlet from "./boilerplate-outlet";

export default function Page() {
  return (
    <main className="bg-slate-900 text-white">
      <Header />
      <ResizablePanelGroup direction="horizontal" className="min-h-[92vh]">
        <ResizablePanel defaultSize={30}>
          <BoilerplateSidebar />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>
          <BoilerplateOutlet />
        </ResizablePanel>
      </ResizablePanelGroup>

      <ToastContainer />
    </main>
  );
}
