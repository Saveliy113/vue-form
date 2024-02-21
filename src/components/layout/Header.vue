<template>
  <div class="header">
    <router-link to="/" class="logo__link">
      <img src="/logo.png" alt="paypal_logo" />
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped>
.header {
  width: 45%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

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
