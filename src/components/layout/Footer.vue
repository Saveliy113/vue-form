<template>
  <div class="footer">
    <p>©2024 PayPal</p>
    <div class="links">
      <router-link to="/">Privacy</router-link>
      <router-link to="/">Legal</router-link>
      <router-link to="/">Contact</router-link>
      <router-link to="/">Feedback</router-link>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 45%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  > p {
    margin: 0;
    color: gray;
    white-space: nowrap;
  }

  > .links {
    display: flex;
    gap: 8px;

    > a {
      color: unset;
      font-weight: 500;
    }
  }
}

@media only screen and (max-width: 480px) {
  .footer {
    width: 95%;
    padding: 10px 5px;
  }
}
</style>
