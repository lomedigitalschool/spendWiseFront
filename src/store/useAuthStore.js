import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null,
  token: null,

  // Fonction pour se connecter
  login: (user, token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    set({ user, token });
  },

  // Fonction pour se déconnecter
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    set({ user: null, token: null });
  },

  // Initialisation du store à partir de localStorage
  initialize: () => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token && user) {
      set({ token, user: JSON.parse(user) });
    }
  },
}));

export default useAuthStore;
