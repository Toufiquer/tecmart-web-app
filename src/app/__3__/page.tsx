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

import ToolsOutlet from "./tools-outlet";
import ToolsSidebar from "./tools-sidebar";


  import { ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

  export default function Page() {
    return (
      <main className="bg-slate-900 text-white min-h-screen">
        <Header />
        <ResizablePanelGroup direction="horizontal" className="min-h-[90vh]">
          <ResizablePanel defaultSize={30}>
            <ToolsSidebar />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel>
            <ToolsOutlet />
          </ResizablePanel>
        </ResizablePanelGroup>

        <ToastContainer />
      </main>
    );
  }
