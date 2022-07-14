import create from "zustand";
import { persist } from "zustand/middleware";

const useGlobalState = create(
  persist((set) => ({
    isLoggedIn: false,
    setIsLoggedIn: (isLoggedIn) => set((state) => ({ ...state, isLoggedIn })),

    nama: "",
    setNama: (nama) => set((state) => ({ ...state, nama })),

    easy: [],
    setEasy: async (api) => {
      const response = await fetch(api);
      const data = await response.json();
      set((state) => ({ ...state, easy: data.results }));
    },

    medium: [],
    setMedium: async (api) => {
      const response = await fetch(api);
      const data = await response.json();
      set((state) => ({ ...state, medium: data.results }));
    },

    hard: [],
    setHard: async (api) => {
      const response = await fetch(api);
      const data = await response.json();
      set((state) => ({ ...state, hard: data.results }));
    },
  }))
);

export default useGlobalState;
