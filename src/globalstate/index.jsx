import create from "zustand";
import { persist } from "zustand/middleware";

const useGlobalState = create(
  persist((set) => ({
    isLoggedIn: false,
    setIsLoggedIn: (isLoggedIn) => set((state) => ({ ...state, isLoggedIn })),
  }))
);

export default useGlobalState;
