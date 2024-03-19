<template>
  <div class="address__form">
    <q-input
      class="address__input"
      type="text"
      label="Street name and house number"
      outlined
    >
    <template v-slot:append>
          <q-icon name="search" />
    </template>
    </q-input>
    <div class="details">
      <q-input
        class="details__input"
        type="text"
        label="City"
        outlined
      />
      <q-input
        class="details__input"
        type="text"
        label="District"
        outlined
      />
    </div>
    <div class="address__agreement">
      <q-checkbox class="text-h3" v-model="right" />
      <p>
        I have read and agree to PayPal's <a class=agreement__link href="#">User Agreement,</a> <a class=agreement__link href="#">Privacy Statement</a> and <a class=agreement__link href="#">Electronic Communications Delivery Policy.</a> If i provide my mobile number,
       I give PayPal permission to contact me about my PayPal branded accounts using automated calls or texts to: service my accounts, investigate fraud, or collect a debt, but not for telemarketing. If I don't want to receive automated calls or texts, I can change my preferences in my account settings at any time.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const right = ref(false);
</script>

<style lang="scss" scoped>
@import '../../css/quasar.variables.scss';
.address__form {
  width: 70%;

  > .address__input {
    margin-top: 24px;
  }

  > .details {
    display: flex;
    margin-top: 15px;
    gap: 20px;

    > .details__input {
      width: 50%;
    }
  }

  > .address__agreement {
    display: flex;
    align-items: flex-start;
    margin-top: 10px;
    font-size: .8rem;

    > p {
      position: relative;
      top: 7px;

      > .agreement__link {
        text-decoration: none;
        color: $primary;
      }
    }
  }
}
</style>