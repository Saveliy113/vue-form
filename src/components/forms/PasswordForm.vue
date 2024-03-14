<template>
  <div class="password__form">
    <q-input
      class="input"
      label="Create password"
      type="password"
      :raw="true"
      v-model="phone"
      v-bind="phoneProps"
      outlined
      :dense="dense"
    />
    <div class="hints">
      <p>● 8 or more characters</p>
      <p>● Use 2 of the following: letters, numbers or symbols</p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
> .password__form {
  width: 55%;

  > .hints {
    position: relative;
    top: -20px;
    color: gray;

    > p {
      margin: 0;
      font-size: 0.8rem;
    }
  }
}
</style>
