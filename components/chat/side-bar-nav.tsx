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
import { useRouter } from "next/navigation";
import useSideBarStore, { SidebarType } from "@/store/useSidebar.store";
import { UrlFeatureEnum } from "@/app/enums/url.enum";
export default function SideBarNav() {
  const { isActiveSidebar, setisActiveSideBar } = useSideBarStore();
  const router = useRouter();
  const icons: {
    icon: LucideIcon;
    label: string;
    type: SidebarType;
    url: UrlFeatureEnum;
  }[] = [
    {
      icon: MessageCircleMore,
      label: "Đoạn chat",
      type: SidebarType.MESSAGE,
      url: UrlFeatureEnum.MESSAGE,
    },
    {
      icon: CircleDotDashed,
      label: "Trạng thái",
      type: SidebarType.STATUS,
      url: UrlFeatureEnum.STATUS,
    },
    {
      icon: Mailbox,
      label: "Kênh",
      type: SidebarType.CHANNEL,
      url: UrlFeatureEnum.CHANNEL,
    },
    {
      icon: UsersRound,
      label: "Cộng đồng",
      type: SidebarType.COMMUNITY,
      url: UrlFeatureEnum.COMMUNITY,
    },
  ];
  return (
    <div className="flex flex-row sm:flex-col gap-4 border-t-[0.5px] sm:border-t-0 sm:border-r-[0.5px] h-auto sm:h-full w-full sm:w-15 border-gray-200 py-3 sm:py-5 bg-chat-layout shrink-0 justify-around sm:justify-start">
      {icons.map((icon, index) => (
        <Tooltip key={index}>
          <TooltipTrigger className={`flex items-center justify-center `}>
            <div
              className={`p-2 rounded-full ${
                isActiveSidebar === icon.type && "bg-chat-active"
              }`}
              onClick={() => router.push(icon.url)}
            >
              <icon.icon
                className={`size-6 sm:size-5 text-neutral-700 cursor-pointer `}
              />
            </div>
          </TooltipTrigger>
          <TooltipContent side="right" className="hidden sm:block">
            <p>{icon.label}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}
