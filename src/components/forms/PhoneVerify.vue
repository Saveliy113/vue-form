<template>
  <div class="phone__verify">
    <div class="verify__wrapper">
      <q-btn
        class="back__btn"
        @click="
          () =>
            router.push({
              path: '/',
              query: {
                step: 'phone',
              },
            })
        "
        flat
        round
        color="black"
        icon="close"
        text-color="grey-6"
      />
      <div class="verify__header">
        <h4>Confirm your phone</h4>
        <p class="code__text">Code sent to {{ `+7${signupStore.phone}` }}</p>
        <p class="resend__btn">Resend code</p>
      </div>
      <OtpInput :input-length="6" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSignupStore } from "src/stores/signupStore";
import OtpInput from "../OtpInput.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const signupStore = useSignupStore();
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
    position: relative;
    width: 700px;
    height: 100%;
    background-color: white;
    margin: 0 auto;

    > .back__btn {
      position: absolute;
      top: 20px;
      right: 20px;
    }

    > .verify__header {
      width: 100%;
      height: 200px;
      padding-top: 100px;
      text-align: center;

      > .code__text {
        margin-top: 0.3rem;
        font-size: 1.2rem;
        font-weight: 400;
      }

      > .resend__btn {
        width: fit-content;
        margin: 0 auto;
        color: #2373c8;
        font-size: 1.2rem;
        font-weight: 800;
        cursor: pointer;
        transition: all 0.2s ease-in;
        border-bottom: 1px solid transparent;

        &:hover {
          color: darken(#2373c8, 5%);
          border-bottom: 1px solid darken(#2373c8, 5%);
        }

        &:active {
          transform: scale(93%);
        }
      }
    }
  }
}
</style>
