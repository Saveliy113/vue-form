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
</template>

<script setup lang="ts"></script>

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
</style>
