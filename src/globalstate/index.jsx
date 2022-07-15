import create from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

const useGlobalState = create(
  persist(
    (set) => ({
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

      idSoal: 0,
      setIdSoal: (idSoal) => set((state) => ({ ...state, idSoal })),

      jawaban: [],
      setJawaban: (index, input) => {
        set((state) => {
          const newJawaban = [...state.jawaban];
          newJawaban[index] = input;
          return { ...state, jawaban: newJawaban };
        });
      },
      removeAllJawaban: () => set(() => ({ jawaban: [] })),

      timer : 300000,
      setTimer : (timer) => set((state) => ({ ...state, timer })),
    }),
    {
      name: "globalstate",
    }
  )
);

export default useGlobalState;
