"use client";
import { UrlFeatureEnum } from "@/app/enums/url.enum";
import useSideBarStore, { SidebarType } from "@/store/useSidebar.store";
import { useParams, usePathname } from "next/navigation";
import { useEffect } from "react";

const ROUTE_MAP: Array<{
  prefix: UrlFeatureEnum;
  sidebar: SidebarType;
  paramKey: string;
}> = [
  {
    prefix: UrlFeatureEnum.MESSAGE,
    sidebar: SidebarType.MESSAGE,
    paramKey: "conversationId",
  },
  {
    prefix: UrlFeatureEnum.STATUS,
    sidebar: SidebarType.STATUS,
    paramKey: "channelId",
  },
  {
    prefix: UrlFeatureEnum.CHANNEL,
    sidebar: SidebarType.CHANNEL,
    paramKey: "channelId",
  },
  {
    prefix: UrlFeatureEnum.COMMUNITY,
    sidebar: SidebarType.COMMUNITY,
    paramKey: "communityId",
  },
];

export default function useSyncRouteToStore() {
  const pathname = usePathname();
  const params = useParams();

  useEffect(() => {
    const matched = ROUTE_MAP.find(({ prefix }) => pathname.startsWith(prefix));

    if (!matched) return;

    useSideBarStore.setState({
      isActiveSidebar: matched.sidebar,
      activeId: (params[matched.paramKey] as string) ?? null,
    });
  }, [pathname, params]);
}
