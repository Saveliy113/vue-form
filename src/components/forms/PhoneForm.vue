<template>
  <div class="phone__form">
    <q-input
      class="input"
      label="Phone"
      type="tel"
      mask="(###) ### - ####"
      prefix="+7"
      hint="By continuing, you confirm that you are authorized to use this phone
      number and agree to receive text messages. Carrier fees may apply."
      v-model="phone"
      v-bind="phoneProps"
      outlined
      :dense="dense"
    />
    <!-- <p>
      By continuing, you confirm that you are authorized to use this phone
      number and agree to receive text messages. Carrier fees may apply.
    </p> -->
  </div>
</template>

<script setup lang="ts">
const [phone, phoneProps] = defineField("phone", quasarConfig);
watch(phone, (newValue) => {
  signupStore.phone = newValue;
});
</script>

<style lang="scss" scoped>
> .phone__form {
  width: 55%;

  > p {
    font-size: 0.8rem;
    color: gray;
  }
}
</style>
