<template>
  <div class="email__form">
    <q-input
      class="input"
      v-model="email"
      v-bind="emailProps"
      type="email"
      label="Your email"
      outlined
      :dense="false"
    />
  </div>
</template>

<script setup lang="ts">
import { useSignupStore } from "src/stores/signUpStore";
import { useForm } from "vee-validate";
import { watch } from "vue";
import { quasarConfig } from "./quasarConfig";
import { emailSchema } from "src/schemas/signupSchema";

const signupStore = useSignupStore();

const { defineField, errors } = useForm({
  validationSchema: emailSchema,
  initialValues: {
    email: signupStore.email,
    phone: signupStore.phone,
  },
});

const [email, emailProps] = defineField("email", quasarConfig);
watch(email, (newValue) => {
  signupStore.email = newValue;
});

watch(errors, (updatedErrors) => {
  if (updatedErrors.email) {
    signupStore.errors.email = true;
  } else signupStore.errors.email = false;
});
</script>

<style lang="scss" scoped>
.email__form {
  width: 55%;
}
</style>
