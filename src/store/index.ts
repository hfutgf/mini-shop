import { create } from "zustand";

export const useStore = create((set) => ({
  products: [],

  setProducts: (payload: IProduct[]) =>
    set(() => {
      return {
        products: [...payload],
      };
    }),
}));
