import { create } from "zustand";

export const useModaltypeStore = create((set) => ({
  modalType: "create",
  setModalType: (data) => set({ modalType: data }),
}));

export const useShowModal = create((set) => ({
  showModal: false,
  setShowModal: (data) => set({ showModal: data }),
}));

export const useSelectedTransaction = create((set) => ({
  selectedTransaction: undefined,
  setSelectedTransaction: (data) => set({ selectedTransaction: data }),
}));
