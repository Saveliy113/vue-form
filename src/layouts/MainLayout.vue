<template>
  <div>
    <Header v-if="route.query.step !== 'phone-verify'" />
    <router-view />
    <Footer v-if="route.query.step !== 'phone-verify'" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import Header from "src/components/layout/Header.vue";
import Footer from "src/components/layout/Footer.vue";
const route = useRoute();
</script>
