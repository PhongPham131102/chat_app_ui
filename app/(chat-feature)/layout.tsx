import SideBarNav from "@/components/chat/side-bar-nav";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import HandlerSideBarNav from "@/components/chat/handler-side-bar-nav";
export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TooltipProvider>
      <div className="w-full h-screen flex">
        <SideBarNav />

        <ResizablePanelGroup orientation="horizontal">
          <ResizablePanel defaultSize="25%">
            <HandlerSideBarNav />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize="75%">{children}</ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </TooltipProvider>
  );
}
