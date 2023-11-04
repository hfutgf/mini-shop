import { create } from "zustand";

export const useStore = create((set) => ({
  products: [],
  categoryProducts: [],

  setProducts: (payload: IProduct[]) =>
    set(() => {
      return {
        products: [...payload],
      };
    }),
  setProductsByCategory: (payload: IProduct[]) => {
    set(() => {
      return {
        categoryProducts: [...payload],
      };
    });
  },
}));
