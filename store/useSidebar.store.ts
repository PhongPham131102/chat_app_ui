import { create } from "zustand";
export enum SidebarType {
  CHAT,
  STATUS,
  CHANNEL,
  COMMUNITY,
}
interface useSideBarStore {
  isActiveSidebar: SidebarType;
  setisActiveSideBar: (isActiveSidebar: SidebarType) => void;
}
const useSideBarStore = create<useSideBarStore>((set) => ({
  isActiveSidebar: SidebarType.CHAT,
  setisActiveSideBar: (isActiveSidebar: SidebarType) =>
    set({ isActiveSidebar }),
}));

export default useSideBarStore;
