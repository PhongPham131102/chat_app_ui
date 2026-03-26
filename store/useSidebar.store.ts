import { create } from "zustand";
export enum SidebarType {
  MESSAGE,
  STATUS,
  CHANNEL,
  COMMUNITY,
}
interface useSideBarStore {
  isActiveSidebar: SidebarType;
  setisActiveSideBar: (isActiveSidebar: SidebarType) => void;
  activeId: string | null;
  setActiveId: (activeId: string | null) => void;
}
const useSideBarStore = create<useSideBarStore>((set) => ({
  isActiveSidebar: SidebarType.MESSAGE,
  setisActiveSideBar: (isActiveSidebar: SidebarType) =>
    set({ isActiveSidebar }),
  activeId: null,
  setActiveId: (activeId: string | null) => set({ activeId }),
}));

export default useSideBarStore;
