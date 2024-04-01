<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <LoadingPage v-if="signupStore.loading" />
      <component v-else :is="Component" />
      </transition>
    </router-view>
</template>

<script setup lang="ts">
import { useSignupStore } from './stores/signupStore';
import LoadingPage from './pages/LoadingPage.vue'

const signupStore = useSignupStore();
</script>
