<template>
  <div class="header">
    <q-btn
      v-if="route.query.step"
      class="back__btn"
      @click="this.$router.go(-1)"
      flat
      round
      color="primary"
      icon="west"
      text-color="grey-6"
    />
    <router-link to="/" class="logo__link">
      <img src="/logo.png" alt="paypal_logo" />
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  border: 1px solid red;
  width: 35%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  > .back__btn {
    position: absolute;
    left: 0;
  }

  > .logo__link {
    width: 70px;
    height: 70px;

    > img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>
