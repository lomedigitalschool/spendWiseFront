import { create } from "zustand";

export const useTransactionsStore = create((set) => ({
  transactions: [
    {
      id: 2,
      amount: 200,
      description: "chaussure",
      category: "autres",
      type: "depense",
      date: "2024-03-12",
    },
    {
      id: 3,
      amount: 800,
      description: "nourriture",
      category: "alimentation",
      type: "depense",
    },
    {
      id: 4,
      amount: 100,
      description: "nourriture",
      category: "alimentation",
      type: "depense",
    },
    {
      id: 5,
      amount: 800,
      description: "nourriture",
      category: "alimentation",
      type: "depense",
    },
  ],
  setTransactions: (data) => set({ transactions: data }),
}));

export const useTransactionTypeStore = create((set) => ({
  transactionType: "depense",
  setTransactionType: (data) => set({ transactionType: data }),
}));
