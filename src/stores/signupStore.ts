import { defineStore } from "pinia";

export const useSignupStore = defineStore("signup", {
  state: () => ({
    email: "",
    phone: "",
  }),
  persist: true,
});
