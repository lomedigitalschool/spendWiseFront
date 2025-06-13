import { create } from "zustand";

export const useTransactionsStore = create((set) => ({
  transactions: [],
  setTransactions: (data) => set({ transactions: data }),
}));

export const useTransactionTypeStore = create((set) => ({
  transactionType: "depense",
  setTransactionType: (data) => set({ transctionType: data }),
}));
