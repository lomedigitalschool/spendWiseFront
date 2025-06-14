import { create } from "zustand";

export const useErrorFetch = create((set) => ({
  errors: undefined,
  setErrors: (data) => set({ errors: data }),
}));
