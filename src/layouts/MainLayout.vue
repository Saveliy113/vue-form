<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "src/components/layout/Header.vue";
import Footer from "src/components/layout/Footer.vue";
</script>
