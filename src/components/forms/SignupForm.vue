<template>
  <Transition name="fade" mode="in-out">
    <PhoneVerify v-if="route.query.step === 'phone-verify'" />
    <div v-else class="content__wrapper">
      <h5 v-if="!route.query.step">Sign up for PayPal</h5>
      <h5 v-if="route.query.step === 'phone'">Phone number</h5>
      <h5 v-if="route.query.step === 'password'">Create password</h5>
      <div class="text-center" v-if="route.query.step === 'personal-info'">
        <h5>Personal info</h5>
        <p>Make sure this matches your official ID.</p>
      </div>
      <div class="text-center" v-if="route.query.step === 'address'">
        <h5>Your address</h5>
        <p>Make sure to use your billing address.</p>
      </div>
      <div class="text-center" v-if="route.query.step === 'services'">
        <h5>What do you want to try first?</h5>
        <p>Join over 400 million people using PayPal globally.</p>
      </div>
      <h5 v-if="route.query.step === 'card'">Link a card</h5>
      <Transition name="fade" mode="out-in">
        <EmailForm v-if="!route.query.step" :submit="onSubmit" />
        <PhoneForm v-else-if="route.query.step === 'phone'" :submit="onSubmit" />
        <PasswordForm v-else-if="route.query.step === 'password'" :submit="onSubmit" />
        <PersonalInfoForm v-else-if="route.query.step === 'personal-info'" :submit="onSubmit" />
        <AddressForm v-else-if="route.query.step === 'address'" />
        <LinkCardForm v-else-if="['card', 'card-success'].includes(String(route.query.step))" />
      </Transition>
      <q-btn
        @click="onSubmit"
        :disable="nextButtonDisabled"
        class="btn"
        rounded
        color="blue"
        :padding="`10px ${route.query.step !== 'address' ? '120px' : '25px'}`"
      >
        {{  route.query.step !== 'address' ? 'Next' : 'Agree and Create account'}}
      </q-btn>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useSignupStore } from "src/stores/signupStore";
import EmailForm from "./EmailForm.vue";
import { useRoute, useRouter } from "vue-router";
import PhoneForm from "./PhoneForm.vue";
import PhoneVerify from "./PhoneVerify.vue";
import PasswordForm from "./PasswordForm.vue";
import PersonalInfoForm from "./PersonalInfoForm.vue";
import AddressForm from "./AddressForm.vue";
import LinkCardForm from "./LinkCardForm.vue";
import { computed } from "vue";

const route = useRoute();
const router = useRouter();
const signupStore = useSignupStore();

const submit = () => {
  console.log(123)
}

const nextButtonDisabled = computed(() => {
  return (!route.query.step && (signupStore.errors.email || !signupStore.email)) ||
          (route.query.step === 'phone' && (signupStore.errors.phone || !signupStore.phone)) ||
          (route.query.step === 'password' && (signupStore.errors.password || !signupStore.password)) ||
          (route.query.step === 'personal-info' && (signupStore.errors.personalInfo || !signupStore.personalInfoFullfilled)) ||
          (route.query.step === 'address' && (signupStore.errors.addressInfo || !signupStore.addressInfoFullfilled)) 
})

const onSubmit = () => {
  switch (route.query.step) {
    case undefined:
      router.push({
        path: "/",
        query: {
          step: "phone",
        },
      });
      break;
    case "phone":
      router.push({
        path: "/",
        query: {
          step: "phone-verify",
        },
      });
      break;
    case "password":
      router.push({
        path: "/",
        query: {
          step: "personal-info",
        },
      });
      break;
    case "personal-info":
      router.push({
        path: "/",
        query: {
          step: "address",
        },
      });
      break;
    case "address":
      router.push({
        path: "/",
        query: {
          step: "services",
        },
      });
      break;
  }
};
</script>

<style lang="scss" scoped>
.content__wrapper {
  width: 45%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  > .form__btn {
    margin-top: 30px;
  }

  > .btn {
    margin-top: 40px;
  }
}
</style>
