<template>
  <div class="loading__page">
    <div class="loader"></div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@import '../css/quasar.variables.scss';

.loading__page {
  width: 100%;
  height: 100vh;
  background-color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;

  > .loader {
    width: 100px;
    padding: 5px;
    aspect-ratio: 1;
    border-radius: 50%;
    background: $blue;
    --_m: 
      conic-gradient(#0000 10%,#000),
      linear-gradient(#000 0 0) content-box;
    -webkit-mask: var(--_m);
            mask: var(--_m);
    -webkit-mask-composite: source-out;
            mask-composite: subtract;
    animation: l3 1s infinite linear;
  }

  @keyframes l3 {to{transform: rotate(1turn)}}
  }
</style>