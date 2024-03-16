<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import Header from "src/components/layout/Header.vue";
import Footer from "src/components/layout/Footer.vue";
const route = useRoute();
</script>
