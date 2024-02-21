<template>
  <div class="content__wrapper">
    <h5>Sign up for PayPal</h5>
    <q-input
      class="input"
      outlined
      v-model="text"
      label="You email"
      :dense="dense"
    />
    <q-btn
      class="btn"
      padding="10px 120px"
      color="blue"
      no-caps
      unelevated
      rounded
      label="Next"
      size="lg"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useMeta } from "quasar";

const meta = ref({
  title: "Sign Up",
  titleTemplate: (title: string): string => `${title} | Paypal`,
});
useMeta(meta.value);

const dense = ref(false);
const text = ref("");
</script>

<style lang="scss" scoped>
.content__wrapper {
  width: 45%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  > .input {
    margin-top: 40px;
    width: 55%;
  }

  > .btn {
    margin-top: 40px;
  }
}
</style>
