<template>
  <SignUpForm />
</template>

<script setup lang="ts">
import SignUpForm from "src/components/forms/SignUpForm.vue";
import { ref } from "vue";
import { useMeta } from "quasar";

// Page meta
const meta = ref({
  title: "Sign Up",
  titleTemplate: (title: string): string => `${title} | Paypal`,
});
useMeta(meta.value);
</script>

<style lang="scss" scoped>

</style>
