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
    personalInfoFullfilled: false,
    addressInfo: {
      address: '',
      city: '',
      district: '',
      agreement: false,
    },
    addressInfoFullfilled: false,
    cardInfo: {
      card: '',
      cardType: '',
      expirationDate: '',
      securityCode: '',
      billingAddress: '',
    },
    cardInfoFullfilled: false,
    errors: {
      email: false,
      phone: false,
      password: false,
      personalInfo: false,
      addressInfo: false,
      cardInfo: false,
    },
  }),
  persist: true,
});
