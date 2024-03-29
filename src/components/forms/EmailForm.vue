<template>
  <div class="email__form">
    <q-input
      class="input"
      v-model="email"
      v-bind="emailProps"
      @keydown.enter="submit"
      ref="emailInput"
      type="email"
      label="Your email"
      outlined
      :dense="false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useSignupStore } from "src/stores/signupStore";
import { useForm } from "vee-validate";
import { onMounted, watch } from "vue";
import { quasarConfig } from "./quasarConfig";
import { emailSchema } from "src/schemas/signupSchema";
import { RootState } from 'src/stores/types';

const signupStore = useSignupStore();

const props = defineProps({
  submit: {
    required: true,
    type: Function,
  }
})

const { defineField, errors } = useForm<Pick<RootState, 'email'>>({
  validationSchema: emailSchema,
  initialValues: {
    email: signupStore.email,
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

const inputRef = ref<HTMLInputElement | null>(null);

onMounted(() => {
  if (inputRef.value) {
    inputRef.value.focus()
  }
})
</script>

<style lang="scss" scoped>
.email__form {
  width: 470px;
}
</style>
