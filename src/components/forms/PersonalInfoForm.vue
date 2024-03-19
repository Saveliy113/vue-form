<template>
  <div class="personalInfoForm">
    <q-select outlined v-model="model" :options="options" label="Nationality" />  
    <q-input
    class="personal__input"
    type="text"
    label="Family name"
    outlined
    />
    <q-input
      class="personal__input"
      type="text"
      label="First name"
      outlined
    />
    <div class="personal__input-block">
      <q-select class="block__select" outlined v-model="model" :options="['National ID', 'Passport', 'Driver license']" label="Id Type" />  
      <q-input
        class="block__input"
        type="text"
        label="ID number"
        outlined
      />
    </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const model = ref(null);
const options = ref(['Kazakh', , 'Russian', 'Ukrainian'])
</script>

<style lang="scss" scoped>
.personalInfoForm {
  margin-top: 24px;
  border: 1px solid red;
  width: 70%;

  > .personal__input {
    margin-top: 10px;
  }

    .personal__input-block {
      margin-top: 15px;
      display: flex;
      gap: 15px;

      > .block__select {
        width: 50%;
      }
      
      > .block__input {
        width: 50%;
      }
      

  }
}
</style>