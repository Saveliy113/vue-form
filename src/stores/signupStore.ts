import { defineStore } from "pinia";

export const useSignupStore = defineStore("signup", {
  state: () => ({
    step: 1,
    email: "",
    phone: "",
    password: '',
    personalInfo: {
      nationality:  '',
      familyName: '',
      firstName: '',
      idType: '',
      idNumber: '',
      birthDate: '',
    },
    errors: {
      email: false,
      phone: false,
      password: false,
      personalInfo: false
    },
  }),
  persist: true,
});
