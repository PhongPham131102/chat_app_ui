"use client";

import useSideBarStore, { SidebarType } from "@/store/useSidebar.store";
import { Activity } from "react";
import ChatSideBarNav from "./char-side-bar-nav";

export default function HandlerSideBarNav() {
  const { isActiveSidebar } = useSideBarStore();
  return (
    <div className="w-full h-full">
      <Activity
        mode={isActiveSidebar === SidebarType.CHAT ? "visible" : "hidden"}
      >
        <ChatSideBarNav />
      </Activity>
    </div>
  );
}
