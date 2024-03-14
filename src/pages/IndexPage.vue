<template>
  <SignupForm />
</template>

<script setup lang="ts">
import SignupForm from "src/components/forms/SignupForm.vue";
import { ref } from "vue";
import { useMeta } from "quasar";

// Page meta
const meta = ref({
  title: "Sign Up",
  titleTemplate: (title: string): string => `${title} | Paypal`,
});
useMeta(meta.value);
</script>

<style lang="scss" scoped></style>
