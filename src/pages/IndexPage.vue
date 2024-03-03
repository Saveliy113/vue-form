<template>
  <div class="content__wrapper">
    <h5 v-if="step === 1">Sign up for PayPal</h5>
    <h5 v-if="step === 2">Phone number</h5>
    <q-input
      v-if="!route.query.step"
      class="email__input"
      v-model="email"
      v-bind="emailProps"
      type="email"
      label="Your email"
      outlined
      :dense="dense"
    />
    <div v-if="route.query.step === 'phone'" class="phone">
      <q-input
        class="phone__input"
        label="Phone"
        type="tel"
        mask="(###) ### - ####"
        prefix="+7"
        hint="By continuing, you confirm that you are authorized to use this phone
        number and agree to receive text messages. Carrier fees may apply."
        v-model="phone"
        v-bind="phoneProps"
        outlined
        :dense="dense"
      />
      <!-- <p>
        By continuing, you confirm that you are authorized to use this phone
        number and agree to receive text messages. Carrier fees may apply.
      </p> -->
    </div>
    <q-btn
      @click="onSubmit"
      :disabled="errors.email"
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
import { ref, watch, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useMeta } from "quasar";
import { useForm } from "vee-validate";
import { useSignupStore } from "src/stores/signUpStore";
import { emailSchema } from "src/schemas/signupSchema";

// Page meta
const meta = ref({
  title: "Sign Up",
  titleTemplate: (title: string): string => `${title} | Paypal`,
});
useMeta(meta.value);

const router = useRouter();
const route = useRoute();
const signupStore = useSignupStore();

//Configs
const quasarConfig = (state: any): any => ({
  props: {
    error: !!state.errors[0],
    "error-message": state.errors[0],
  },
});

//Forms
const { defineField, handleSubmit, resetForm, errors } = useForm({
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

const [phone, phoneProps] = defineField("phone", quasarConfig);
watch(phone, (newValue) => {
  signupStore.phone = newValue;
});

const onSubmit = handleSubmit((values: any) => {
  console.log(errors.value);
  if (!errors.email) {
    // step.value++;
    router.push({
      path: "/",
      query: {
        step: "phone",
      },
    });
    console.log("Submitted with", values);
  }
});

const step = ref(1);

//Forms:

//Email form:

watch(route, (newRoute) => console.log("New Route: ", newRoute.query.step));

const dense = ref(false);
</script>

<style lang="scss" scoped>
.content__wrapper {
  width: 45%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .email__input {
    font-size: 1rem;
    margin-top: 40px;
    width: 55%;
  }

  > .phone {
    width: 55%;

    > .phone__input {
      margin-top: 40px;
    }

    > p {
      font-size: 0.8rem;
      color: gray;
    }
  }

  > .btn {
    margin-top: 40px;
  }
}
</style>
