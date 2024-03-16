<template>
  <div class="password__form">
    <q-input
      class="input"
      label="Create password"
      type="password"
      :raw="true"
      v-model="password"
      v-bind="passwordProps"
      outlined
    />
    <Transition name="fade">
      <div v-if="!errors.password" class="hints">
        <p>● 8 or more characters</p>
        <p>● Use 2 of the following: letters, numbers or symbols</p>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { passwordSchema } from "src/schemas/signupSchema";
import { useSignupStore } from "src/stores/signUpStore";
import { useForm } from "vee-validate";
import { watch } from "vue";
import { quasarConfig } from "./quasarConfig";

const signupStore = useSignupStore();

const { defineField, errors } = useForm({
  validationSchema: passwordSchema,
  initialValues: {
    password: signupStore.password,
  },
});

const [password, passwordProps] = defineField("password", quasarConfig);
watch(password, (newPassword) => {
  signupStore.password = newPassword;
});

watch(errors, (updatedErrors) => {
  if (updatedErrors.password) {
    signupStore.errors.password = true;
  } else signupStore.errors.password = false;
});
</script>

<style lang="scss" scoped>
.password__form {
  width: 55%;

  > .hints {
    position: relative;
    top: -20px;
    color: gray;

    > p {
      margin: 0;
      font-size: 0.8rem;
    }
  }
}
</style>
