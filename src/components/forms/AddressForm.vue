<template>
  <div class="address__form">
    <q-input
      ref="addressRef"
      class="address__input"
      type="text"
      label="Street name and house number"
      hide-bottom-space
      outlined
      v-model="address"
      v-bind="addressProps"
    >
    <template v-slot:append>
          <q-icon name="search" />
    </template>
    </q-input>
    <div class="details">
      <q-input
        class="details__input"
        type="text"
        label="City"
        outlined
        hide-bottom-space
        v-model="city"
        v-bind="cityProps"
      />
      <q-input
        class="details__input"
        type="text"
        label="District"
        outlined
        hide-bottom-space
        v-model="district"
        v-bind="districtProps"
      />
    </div>
    <div class="address__agreement">
      <q-checkbox 
        class="text-h3" 
        v-model="agreement" 
        v-bind=agreementProps 
      />
      <p>
        I have read and agree to PayPal's <a class=agreement__link href="#">User Agreement,</a> <a class=agreement__link href="#">Privacy Statement</a> and <a class=agreement__link href="#">Electronic Communications Delivery Policy.</a> If i provide my mobile number,
       I give PayPal permission to contact me about my PayPal branded accounts using automated calls or texts to: service my accounts, investigate fraud, or collect a debt, but not for telemarketing. If I don't want to receive automated calls or texts, I can change my preferences in my account settings at any time.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { addressSchema } from 'src/schemas/signupSchema';
import { useSignupStore } from 'src/stores/signupStore';
import { useForm } from 'vee-validate';
import { onMounted, ref, watch } from 'vue';
import { quasarConfig } from './quasarConfig';

const signupStore = useSignupStore();

const { defineField, errors } = useForm({
  validationSchema: addressSchema,
  initialValues: {
    address: signupStore.addressInfo.address,
    city: signupStore.addressInfo.city,
    district: signupStore.addressInfo.district,
    agreement: signupStore.addressInfo.agreement,
  },
});

const addressRef = ref<HTMLInputElement | null>(null)
const [address, addressProps] = defineField("address", quasarConfig);
watch(address, (newaddress) => {
  signupStore.addressInfo.address = newaddress;
});

const [district, districtProps] = defineField("district", quasarConfig);
watch(district, (newDistrict) => {
  signupStore.addressInfo.district = newDistrict;
});

const [city, cityProps] = defineField("city", quasarConfig);
watch(city, (newcity) => {
  signupStore.addressInfo.city = newcity;
});

const [agreement, agreementProps] = defineField("agreement", quasarConfig);
watch(agreement, (newagreement) => {
  signupStore.addressInfo.agreement = newagreement;
});

watch(errors, (updatedErrors) => {
  if (Object.entries(updatedErrors).length) {
    signupStore.errors.addressInfo = true;
  } else signupStore.errors.addressInfo = false;
});

watch(signupStore.addressInfo, () => {
  if (!Object.values(signupStore.addressInfo).filter(value => !value).length) {
    signupStore.addressInfoFullfilled = true;
  };
})

onMounted(() => {
  if (addressRef.value) {
    addressRef.value.focus();
  }
})
</script>

<style lang="scss" scoped>
@import '../../css/quasar.variables.scss';
.address__form {
  width: 470px;

  > .address__input {
    margin-top: 24px;
  }

  > .details {
    display: flex;
    margin-top: 15px;
    gap: 20px;

    > .details__input {
      width: 50%;
    }
  }

  > .address__agreement {
    display: flex;
    align-items: flex-start;
    margin-top: 10px;
    font-size: .8rem;

    > p {
      position: relative;
      top: 7px;

      > .agreement__link {
        text-decoration: none;
        color: $primary;
      }
    }
  }
}
</style>