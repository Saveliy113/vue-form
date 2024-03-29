<template>
  <div class="linkCard__form-container">
    <div class="wrapper">
      <router-link to="/" class="logo__link">
        <img src="/logo.png" alt="paypal_logo" />
      </router-link>
      <h5 v-if="route.query.step === 'card'">Link a card</h5>

      <div v-if="route.query.step === 'card'"  class="linkCard__form">
        <div class="banner bg-grey-2">
          <q-icon class="icon text-grey-5" name="credit_card" />
        </div>
        <q-input
          class="card__input"
          type="text"
          label="Debit or credit card number"
          placeholder="Enter card number"
          mask="#### #### #### ####"
          ref="cardRef"
          outlined
          hide-bottom-space
          v-model="card"
          v-bind="cardProps"
        />
        <q-select 
          label="Card type" 
          placeholder="Select your card type" 
          class="card__input" 
          outlined 
          hide-bottom-space
          :options="['Visa', 'Mastercard']" 
          v-model="cardType"
          v-bind="cardTypeProps"
        />
        <q-input
          class="card__input"
          type="text"
          label="Expiration date"
          placeholder="Enter expiration date"
          mask="##.##.####"
          outlined
          hide-bottom-space
          v-model="expirationDate"
          v-bind="expirationDateProps"
        />
        <q-input
          class="card__input"
          type="password"
          maxlength="3"
          label="Security code"
          placeholder="Enter card number"
          outlined
          hide-bottom-space
          v-model="securityCode"
          v-bind="securityCodeProps"
        />
        <q-select 
          label="Billing address" 
          class="card__input" 
          outlined 
          hide-bottom-space
          :options="['Koktem-1, 14, Almaty, Almaty', 'Koktem-2, 20, Almaty, Kazakhstan']" 
          v-model="billingAddress"
          v-bind="billingAddressProps"
        />
      </div>

      <div v-else-if="route.query.step === 'card-success'" class="success">
        <div class="success__icon">
          <div class="icon">
            <q-icon name="done" />
          </div>
          <div class="shadow"></div>
        </div>

        <p>
          {{ `You linked your ${signupStore.cardInfo.cardType} Debit ●●${signupStore.cardInfo.card.slice(-4)}` }}
        </p>
      </div>

      <q-btn @click="onSubmit" 
        class="link__btn" 
        color="primary" 
        rounded
        :disabled="signupStore.errors.cardInfo || !signupStore.cardInfoFullfilled"
      >
          {{ route.query.step === 'card' ? 'Link Card' : 'Done'}}
        </q-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { cardSchema } from 'src/schemas/signupSchema';
import { useSignupStore } from 'src/stores/signupStore';
import { useForm } from 'vee-validate';
import { onMounted, ref, watch } from 'vue';
import { quasarConfig } from './quasarConfig';
import { useRoute, useRouter } from 'vue-router';
import JSConfetti from 'js-confetti';
import { useQuasar } from 'quasar';
import { CardInfo } from 'src/stores/types';

const signupStore = useSignupStore();
const route = useRoute();
const router = useRouter();
const $q = useQuasar();
let jsConfetti: any; 


const onSubmit = () => {
  if (route.query.step === 'card') {
    signupStore.loading = true;
    setTimeout(() => {
      signupStore.loading = false;
      router.push({
        path: '/',
          query: {
            step: 'card-success',
          }
        })
    }, 2500)
    } else {
      jsConfetti.addConfetti();
      
      $q.notify({
        message: 'Sign up completed',
        position: 'bottom',
        type: 'positive'
      });
  }
}

const { defineField, errors } = useForm<CardInfo>({
  validationSchema: cardSchema,
  initialValues: {
    card: signupStore.cardInfo.card,
    cardType: signupStore.cardInfo.cardType,
    expirationDate: signupStore.cardInfo.expirationDate,
    securityCode: signupStore.cardInfo.securityCode,
    billingAddress: signupStore.cardInfo.billingAddress,
  },
});

const cardRef = ref<HTMLInputElement | null>(null);
const [card, cardProps] = defineField("card", quasarConfig);
watch(card, (newCard) => {
  signupStore.cardInfo.card = newCard;
});

const [cardType, cardTypeProps] = defineField("cardType", quasarConfig);
watch(cardType, (newCardType) => {
  signupStore.cardInfo.cardType = newCardType;
});

const [expirationDate, expirationDateProps] = defineField("expirationDate", quasarConfig);
watch(expirationDate, (newExpirationDate) => {
  signupStore.cardInfo.expirationDate = newExpirationDate;
});

const [securityCode, securityCodeProps] = defineField("securityCode", quasarConfig);
watch(securityCode, (newSecurityCode) => {
  signupStore.cardInfo.securityCode = newSecurityCode;
});

const [billingAddress, billingAddressProps] = defineField("billingAddress", quasarConfig);
watch(billingAddress, (newBillingAddress) => {
  signupStore.cardInfo.billingAddress = newBillingAddress;
});

watch(signupStore.cardInfo, () => {
  if (!Object.values(signupStore.cardInfo).filter(value => !value).length) {
    signupStore.cardInfoFullfilled = true;
  };
})

onMounted(() => {
  jsConfetti = new JSConfetti();
  
  if (cardRef.value) {
    cardRef.value.focus();
  }

});

</script>

<style lang="scss" scoped>
.linkCard__form-container {
  background-color: rgba(0, 0, 0, 0.047);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 99;

  > .wrapper {
    position: relative;
    width: 700px;
    height: 100%;
    background-color: white;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    > .logo__link {
      margin-top: 20px;
      width: 30px;
      height: 30px;

    > img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

    > h5 {
      margin-top: 50px;
      margin-bottom: 20px;
    }

    > .linkCard__form {
      width: 470px;
      display: flex;
      flex-direction: column;
      align-items: center;
    
      > .banner {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 40px;
        border-radius: 8px;
    
        > .icon {
          display: block;
          font-size: 100px;
        }
      }
    
      > .card__input {
        width: 100%;
        margin-top: 15px
      }
    }

    > .success {
      margin-top: 80px;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;

      > .success__icon {
        position: relative;

        > .icon {
        position: relative;
        width: 70px;
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 50px;
        color: white;
        border-radius: 50%;
        background-color: #308A67;
        z-index: 999;
      }

      > .shadow {
        position: absolute;
        bottom: -3px;
        right: 50%;
        transform: translateX(50%);
        z-index: 0;
        width: 70px;
        height: 20px;
        border-radius: 100%;
        background-color: #CFCDCE;
      }
      }

      > p {
        margin: 0;
        margin-top: 50px;
        font-weight: 400;
        font-size: 1rem;
      }
    }

    > .link__btn {
        width: 45%;
        text-transform: none;
        margin-top: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
      }
  }

}
</style>