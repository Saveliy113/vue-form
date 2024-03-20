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
    addressInfo: {
      address: '',
      city: '',
      district: '',
      agreement: '',
    },
    errors: {
      email: false,
      phone: false,
      password: false,
      personalInfo: false,
      addressInfo: false,
    },
  }),
  persist: true,
});
