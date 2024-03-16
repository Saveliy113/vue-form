<template>
  <div class="phone__form">
    <q-input
      class="input"
      label="Phone"
      type="tel"
      mask="(###) ### - ####"
      prefix="+7"
      hint="By continuing, you confirm that you are authorized to use this phone
      number and agree to receive text messages. Carrier fees may apply."
      v-model="phone"
      v-bind="phoneProps"
      outlined
    />
  </div>
</template>

<script setup lang="ts">
import { useSignupStore } from "src/stores/signUpStore";
import { useForm } from "vee-validate";
import { watch } from "vue";
import { quasarConfig } from "./quasarConfig";
import { phoneSchema } from "src/schemas/signupSchema";

const signupStore = useSignupStore();

const { defineField, errors } = useForm({
  validationSchema: phoneSchema,
  initialValues: {
    phone: signupStore.phone,
  },
});

const [phone, phoneProps] = defineField("phone", quasarConfig);
watch(phone, (newPhone) => {
  signupStore.phone = newPhone;
});

watch(errors, (updatedErrors) => {
  if (updatedErrors.phone) {
    signupStore.errors.phone = true;
  } else signupStore.errors.phone = false;
});
</script>

<style lang="scss" scoped>
.phone__form {
  width: 55%;

  > p {
    font-size: 0.8rem;
    color: gray;
  }
}
</style>
