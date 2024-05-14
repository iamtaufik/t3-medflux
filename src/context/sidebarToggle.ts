import { create } from 'zustand';

type Store = {
  isActive: boolean;
  setIsActive: (active: boolean) => void;
  isDesktopView: boolean;
  setDesktopView: (isDesktop: boolean) => void;
};

export const sidebarToggle = create<Store>((set) => ({
  isActive: true,
  setIsActive: (active: boolean) => set({ isActive: active }),
  isDesktopView: true,
  setDesktopView: (isDesktop: boolean) => set({ isDesktopView: isDesktop }),
}));
