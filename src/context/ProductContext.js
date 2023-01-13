import { create } from "zustand";

export const useProducts = create(set => ({
  currentProduct: {},
  products: [],
  isLoading:true,
  setProducts: datas => set(()=>({products: datas})),
  setCurrentProduct: current => set(()=>({currentProduct:current})),
  setIsLoading: (loading) => set(() => ({isLoading: loading }))
}));