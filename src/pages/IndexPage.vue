<template>
  <SignupForm v-if="route.query.step !== 'services'" />
  <div class="services" v-if="route.query.step === 'services'">
    <div class="service">
      <div class="icon">
        <q-icon name="lock" />
      </div>
      <div class="text">
        <h5>Shop</h5>
        <p>Check out on millions of websites by adding a card</p>
      </div>
      <div class="link">
        <q-icon name="east" />
      </div>
    </div>

    <div class="service">
      <div class="icon">
        <q-icon name="send" />
      </div>
      <div class="text">
        <h5>Send money</h5>
        <p>Get your money where it needs to go. Every time. For every moment.</p>
      </div>
      <div class="link">
        <q-icon name="east" />
      </div>
    </div>
    <p class="next__btn" @click="router.push({
      path: '/',
      query: {
        step: 'card'
      }
    })">Not now</p>
  </div>
</template>

<script setup lang="ts">
import SignupForm from "src/components/forms/SignupForm.vue";
import { ref } from "vue";
import { useMeta } from "quasar";
import { useRoute, useRouter } from "vue-router";
import {  MetaData  }  from './types'

const route = useRoute();
const router = useRouter();

// Page meta
const meta = ref<MetaData>({
  title: "Sign Up",
  titleTemplate: (title: string): string => `${title} | Paypal`,
});
useMeta(meta.value);
</script>

<style lang="scss" scoped>
@import '../css/quasar.variables.scss';

.services {
  width: 350px;
  margin: 32px auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  > .service {
    color: #151515;
    display: flex;
    padding: 30px 30px 30px 10px;
    border-radius: 12px;
    border: 1px solid #d2d2d2a5;

    > .icon {
      flex-shrink: 0;
      width: 50px;
      height: 50px;
      font-size: 20px;
      border-radius: 50%;
      background-color: #F9F8F6;
      display: flex;
      justify-content: center;
      align-items: center;
      color: $primary;
    }

    &:nth-child(2) {
      > .icon {
        transform: rotate(-45deg);
      }
    }

    > .text {
      width: 13.5rem;
      margin-left: 1rem;

      > h5 {
        margin-bottom: 10px;
      }
      > p {
        color: #515151;
      }
    }

    > .link {
      color: $blue;
      font-size: 30px;
      cursor: pointer;
      transition: all .2s ease-in;

      > i {
        &:hover {
          transform: scale(105%);
        }
      }
    }
  }

  > .next__btn {
      width: fit-content;
      margin: 0 auto;
      color: #2373c8;
      font-size: 1rem;
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
</style>
