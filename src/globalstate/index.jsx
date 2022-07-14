import create from "zustand";
import { persist } from "zustand/middleware";

const useGlobalState = create(
  persist((set) => ({
    isLoggedIn: false,
    setIsLoggedIn: (isLoggedIn) => set((state) => ({ ...state, isLoggedIn })),

    nama: "",
    setNama: (nama) => set((state) => ({ ...state, nama })),
  }))
);

export default useGlobalState;
