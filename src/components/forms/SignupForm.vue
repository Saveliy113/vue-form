<template>
  <Transition name="fade" mode="in-out">
    <PhoneVerify v-if="route.query.step === 'phone-verify'" />
    <div v-else class="content__wrapper">
      <h5 v-if="!route.query.step">Sign up for PayPal</h5>
      <h5 v-if="route.query.step === 'phone'">Phone number</h5>
      <h5 v-if="route.query.step === 'password'">Create password</h5>
      <div class="text-center" v-if="route.query.step === 'personal-info'">
        <h5 >Personal info</h5>
        <p>Make sure this matches your official ID.</p>
      </div>
      <Transition name="fade" mode="out-in">
        <EmailForm v-if="!route.query.step" />
        <PhoneForm v-else-if="route.query.step === 'phone'" />
        <PasswordForm v-else-if="route.query.step === 'password'" />
        <PersonalInfoForm v-else-if="route.query.step === 'personal-info'" />
      </Transition>
      <q-btn
        @click="onSubmit"
        :disable="
          (!route.query.step && signupStore.errors.email) ||
          (route.query.step === 'phone' && signupStore.errors.phone) ||
          (route.query.step === 'password' && signupStore.errors.password)
        "
        class="btn"
        rounded
        color="blue"
        padding="10px 120px"
      >
        Next
      </q-btn>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useSignupStore } from "src/stores/signUpStore";
import EmailForm from "./EmailForm.vue";
import { useRoute, useRouter } from "vue-router";
import PhoneForm from "./PhoneForm.vue";
import PhoneVerify from "./PhoneVerify.vue";
import PasswordForm from "./PasswordForm.vue";
import PersonalInfoForm from "./PersonalInfoForm.vue";

const route = useRoute();
const router = useRouter();

const signupStore = useSignupStore();

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
