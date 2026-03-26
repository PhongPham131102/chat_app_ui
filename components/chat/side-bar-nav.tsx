"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  CircleDotDashed,
  LucideIcon,
  Mailbox,
  MessageCircleMore,
  UsersRound,
} from "lucide-react";
import useSideBarStore, { SidebarType } from "@/store/useSidebar.store";
export default function SideBarNav() {
  const { isActiveSidebar, setisActiveSideBar } = useSideBarStore();
  const icons: {
    icon: LucideIcon;
    label: string;
    type: SidebarType;
  }[] = [
    {
      icon: MessageCircleMore,
      label: "Đoạn chat",
      type: SidebarType.CHAT,
    },
    {
      icon: CircleDotDashed,
      label: "Trạng thái",
      type: SidebarType.STATUS,
    },
    {
      icon: Mailbox,
      label: "Kênh",
      type: SidebarType.CHANNEL,
    },
    {
      icon: UsersRound,
      label: "Cộng đồng",
      type: SidebarType.COMMUNITY,
    },
  ];
  return (
    <div className="flex flex-col gap-4 border-r-[0.5px] h-full w-15 border-r-gray-200 py-5 bg-chat-layout">
      {icons.map((icon, index) => (
        <Tooltip key={index}>
          <TooltipTrigger className={`flex items-center justify-center `}>
            <div
              className={`p-2 rounded-full ${
                isActiveSidebar === icon.type && "bg-chat-active"
              }`}
              onClick={() => setisActiveSideBar(icon.type)}
            >
              <icon.icon
                className={`size-5 text-neutral-700 cursor-pointer `}
              />
            </div>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Đoạn chat</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}
