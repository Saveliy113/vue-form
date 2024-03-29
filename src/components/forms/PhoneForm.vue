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
      @keydown.enter="submit"
      ref="phoneRef"
      outlined
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useSignupStore } from "src/stores/signupStore";
import { useForm } from "vee-validate";
import { quasarConfig } from "./quasarConfig";
import { phoneSchema } from "src/schemas/signupSchema";
import { RootState } from "src/stores/types";

const signupStore = useSignupStore();

const props = defineProps({
  submit: {
    required: true,
    type: Function,
  }
});

const phoneRef = ref<HTMLInputElement | null>(null)

const { defineField, errors } = useForm<Pick<RootState, 'phone'>>({
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

onMounted(() => {
  signupStore.loading = false;

  if (phoneRef.value) {
    phoneRef.value.focus();
  }
})
</script>

<style lang="scss" scoped>
.phone__form {
  width: 470px;

  > p {
    font-size: 0.8rem;
    color: gray;
  }
}
</style>
