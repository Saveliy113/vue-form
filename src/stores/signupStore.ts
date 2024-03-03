import { defineStore } from "pinia";

export const useSignupStore = defineStore("signup", {
  state: () => ({
    step: 1,
    email: "",
    phone: "",
  }),
  persist: true,
});
