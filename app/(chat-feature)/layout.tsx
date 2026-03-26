"use client";
import SideBarNav from "@/components/chat/side-bar-nav";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import HandlerSideBarNav from "@/components/chat/handler-side-bar-nav";
import useSyncRouteToStore from "@/hooks/use-sync-route-to-store";
export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useSyncRouteToStore();
  return (
    <TooltipProvider>
      <div className="w-full h-screen flex flex-col-reverse sm:flex-row overflow-hidden bg-white">
        <SideBarNav />

        <ResizablePanelGroup orientation="horizontal" className="flex-1">
          <ResizablePanel
            defaultSize={"25%"}
            minSize={"20%"}
            className="flex-1 sm:flex-none border-none"
          >
            <HandlerSideBarNav />
          </ResizablePanel>
          <ResizableHandle withHandle className="hidden sm:flex" />
          <ResizablePanel
            defaultSize={"75%"}
            minSize={"50%"}
            className="hidden sm:block"
          >
            <div className="h-full w-full">{children}</div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </TooltipProvider>
  );
}
