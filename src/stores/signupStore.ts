import { defineStore } from "pinia";

export const useSignupStore = defineStore("signup", {
  state: () => ({
    step: 1,
    email: "",
    phone: "",
    password: '',
    errors: {
      email: false,
      phone: false,
      password: false,
    },
  }),
  persist: true,
});
