<template>
  <div class="linkCard__form-container">
    <div class="wrapper">
      <router-link to="/" class="logo__link">
        <img src="/logo.png" alt="paypal_logo" />
      </router-link>
      <h5>Link a card</h5>
      <div class="linkCard__form">
        <div class="banner bg-grey-2">
          <q-icon class="icon text-grey-5" name="credit_card" />
        </div>
        <q-input
          class="card__input"
          type="text"
          label="Debit or credit card number"
          placeholder="Enter card number"
          outlined
        />
        <q-select label="Card type" placeholder="Select your card type" class="card__input" outlined :options="['Visa', 'Mastercard']" />
        <q-input
        class="card__input"
        type="text"
        label="Security code"
        placeholder="Enter card number"
        outlined
        />
        <q-select label="Billing address" class="card__input" outlined :options="['Koktem-1, 14, Almaty, Almaty', 'Koktem-2, 20, Almaty, Kazakhstan']" />
        <q-btn class="link__btn" color="primary" rounded>
          Link Card
        </q-btn>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

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
    width: 45%;
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
      width: 60%;
      border: 1px solid red;
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

      > .link__btn {
        text-transform: none;
        margin-top: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
        width: 100%;
      }
    }
  }

}
</style>