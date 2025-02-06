import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useUserStore = create(
  devtools((set) => ({
    loggedIn: false,
    username: null,
    age: 30,
    login: (username) =>
      set((state) => ({ ...state, loggedIn: true, username })),
    logout: () =>
      set((state) => ({ ...state, loggedIn: false, username: null })),
  }))
);
