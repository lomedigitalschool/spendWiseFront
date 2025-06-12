import { create } from "zustand";

export const useTransactionsStore = create((set) => ({
  transactions: [],
  setTransactions: (data) => set({ transactions: data }),
}));
