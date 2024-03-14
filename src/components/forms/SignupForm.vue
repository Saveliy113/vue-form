<template>
  <div class="content__wrapper">
    <h5 v-if="!route.query.step">Sign up for PayPal</h5>
    <h5 v-if="route.query.step === 'phone'">Phone number</h5>
    <h5 v-if="route.query.step === 'password'">Create password</h5>
    <EmailForm />
  </div>
</template>

<script setup lang="ts">
import EmailForm from "./EmailForm.vue";
import { useRoute } from "vue-router";

const route = useRoute();

// const onSubmit = handleSubmit((values: any) => {
//   console.log(errors.value);
//   if (!errors.email && !route.query.step) {
//     router.push({
//       path: "/",
//       query: {
//         step: "phone",
//       },
//     });
//   }

//   if (!errors.phone && route.query.step === "phone") {
//     router.push({
//       path: "/",
//       query: {
//         step: "phone-verify",
//       },
//     });
//   }
// });
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
}
</style>
