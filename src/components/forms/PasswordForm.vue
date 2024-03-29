<template>
  <div class="password__form">
    <q-input
      class="input"
      label="Create password"
      type="password"
      :raw="true"
      v-model="password"
      v-bind="passwordProps"
      @keydown.enter="submit"
      ref="passwordRef"
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
import { useSignupStore } from "src/stores/signupStore";
import { useForm } from "vee-validate";
import { onMounted, ref, watch } from "vue";
import { quasarConfig } from "./quasarConfig";

const props = defineProps({
  submit: {
    required: true,
    type: Function,
  }
});

const passwordRef = ref<HTMLInputElement | null>(null)

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

onMounted(() => {
  if (passwordRef.value) {
    passwordRef.value.focus();
  }
})
</script>

<style lang="scss" scoped>
.password__form {
  width: 470px;

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
