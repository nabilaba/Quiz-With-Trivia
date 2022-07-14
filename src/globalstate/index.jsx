import create from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

const useGlobalState = create(
  persist((set) => ({
    isLoggedIn: false,
    setIsLoggedIn: (isLoggedIn) => set((state) => ({ ...state, isLoggedIn })),

    nama: "",
    setNama: (nama) => set((state) => ({ ...state, nama })),

    namaKuis: "",
    setNamaKuis: (namaKuis) => set((state) => ({ ...state, namaKuis })),

    dataKuis: [],
    setDataKuis: async (api) => {
      const { data } = await axios.get(api);
      set((state) => ({ ...state, dataKuis: data.results }));
    },
  }))
);

export default useGlobalState;
