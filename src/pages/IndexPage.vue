<template>
  <div class="phone__verify" v-if="route.query.step === 'phone-verify'">
    <div class="verify__wrapper">
      <div class="verify__header">
        <h4>Confirm your phone</h4>
        <p class="code__text">Code sent to {{ `+7${signupStore.phone}` }}</p>
        <p class="resend__btn">Resend code</p>
      </div>
      <OtpInput :input-length="6" />
    </div>
  </div>
  <div class="content__wrapper" v-else>
    <h5 v-if="!route.query.step">Sign up for PayPal</h5>
    <h5 v-if="route.query.step === 'phone'">Phone number</h5>
    <h5 v-if="route.query.step === 'password'">Create password</h5>
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

    <div v-if="route.query.step === 'password'" class="phone">
      <q-input
        class="phone__input"
        label="Create password"
        type="password"
        :raw="true"
        v-model="phone"
        v-bind="phoneProps"
        outlined
        :dense="dense"
      />
      <div class="hints">
        <p>● 8 or more characters</p>
        <p>● Use 2 of the following: letters, numbers or symbols</p>
      </div>
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
import OtpInput from "src/components/OtpInput.vue";

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
  if (!errors.email && !route.query.step) {
    // step.value++;
    router.push({
      path: "/",
      query: {
        step: "phone",
      },
    });
    console.log("Submitted with", values);
  }

  if (!errors.phone && route.query.step === "phone") {
    // step.value++;
    router.push({
      path: "/",
      query: {
        step: "phone-verify",
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
.phone__verify {
  background-color: rgba(0, 0, 0, 0.325);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 99;

  > .verify__wrapper {
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    margin: 0 auto;

    > .verify__header {
      width: 100%;
      text-align: center;
      padding-top: 100px;

      > .code__text {
        margin-top: 0.3rem;
        font-size: 1.2rem;
      }

      > .resend__btn {
        width: fit-content;
        margin: 0 auto;
        color: #2373c8;
        font-size: 1rem;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.2s ease-in;
        border-bottom: 1px solid transparent;

        &:hover {
          color: darken(#2373c8, 5%);
          border-bottom: 1px solid darken(#2373c8, 5%);
        }
      }
    }
  }
}

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
