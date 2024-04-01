<template>
  <div class="personalInfoForm">
    <q-select 
      class="personal__input"
      outlined 
      clearable
      hide-bottom-space
      v-model="nationality" 
      v-bind="nationalityProps" 
      ref="nationalityRef"
      :options="options" 
      label="Nationality" 
    />  
    <q-input
      class="personal__input"
      type="text"
      label="Family name"
      outlined
      hide-bottom-space
      v-model="familyName"
      v-bind="familyNameProps"
      no-message-error
      />
      <q-input
      class="personal__input"
      type="text"
      label="First name"
      outlined
      hide-bottom-space
      v-model="firstName"
      v-bind="firstNameProps"
    />
    <div class="personal__input-block">
      <q-select 
        class="block__select" 
        outlined 
        hide-bottom-space
        clearable
        :options="['National ID', 'Passport', 'Driver license']" 
        label="Id Type" 
        v-model="idType"
        v-bind="idTypeProps" 
        />  
        <q-input
          class="block__input"
          type="text"
          label="ID number"
          mask="#########"
          outlined
          hide-bottom-space
          v-model="idNumber"
          v-bind="idNumberProps" 
        />
    </div>
    <q-input
          class="block__input"
          type="text"
          label="Date of birth"
          mask="##.##.####"
          outlined
          hide-bottom-space
          v-model="birthDate"
          v-bind="birthDateProps" 
          @keydown.enter="submit"
        />
  </div>
</template>

<script setup lang="ts">
import { personalInfoSchema } from 'src/schemas/signupSchema';
import { useSignupStore } from 'src/stores/signupStore';
import { onMounted, ref, watch } from 'vue';
import { quasarConfig } from './quasarConfig';
import { useForm } from 'vee-validate';
import { PersonalInfo } from 'src/stores/types';

const options = ref(['Kazakh', , 'Russian', 'Ukrainian']);

const props = defineProps({
  submit: {
    required: true,
    type: Function,
  }
});

const signupStore = useSignupStore();

const { defineField, errors } = useForm<PersonalInfo>({
  validationSchema: personalInfoSchema,
  initialValues: {
      nationality:  signupStore.personalInfo.nationality,
      familyName:signupStore.personalInfo.familyName,
      firstName: signupStore.personalInfo.firstName,
      idType: signupStore.personalInfo.idType,
      idNumber: signupStore.personalInfo.idNumber,
      birthDate: signupStore.personalInfo.birthDate,
  },
});

const nationalityRef = ref<HTMLInputElement | null>(null);
const [nationality, nationalityProps] = defineField("nationality", quasarConfig);
watch(nationality, (newNationality) => {
  signupStore.personalInfo.nationality = newNationality;
});

const [familyName, familyNameProps] = defineField("familyName", quasarConfig);
watch(familyName, (newFamilyName) => {
  signupStore.personalInfo.familyName = newFamilyName;
});

const [firstName, firstNameProps] = defineField("firstName", quasarConfig);
watch(firstName, (newFirstName) => {
  signupStore.personalInfo.firstName = newFirstName;
});

const [idType, idTypeProps] = defineField("idType", quasarConfig);
watch(idType, (newIdType) => {
  signupStore.personalInfo.idType = newIdType;
});

const [idNumber, idNumberProps] = defineField("idNumber", quasarConfig);
watch(idNumber, (newIdNumber) => {
  signupStore.personalInfo.idNumber = newIdNumber;
});

const [birthDate, birthDateProps] = defineField("birthDate", quasarConfig);
watch(birthDate, (newBirthDate) => {
  signupStore.personalInfo.birthDate = newBirthDate;
});

watch(errors, (updatedErrors) => {
  if (Object.entries(updatedErrors).length) {
    signupStore.errors.personalInfo = true;
  } else signupStore.errors.personalInfo = false;
});

onMounted(() => {
  if (nationalityRef.value) {
    nationalityRef.value.focus();
  }
});

watch(signupStore.personalInfo, () => {
  if (!Object.values(signupStore.personalInfo).filter(value => !value).length) {
    signupStore.personalInfoFullfilled = true;
  };
})
</script>

<style lang="scss" scoped>
.personalInfoForm {
  margin-top: 24px;
  width: 470px;

  > .personal__input {
    margin-bottom: 10px;
  }

    .personal__input-block {
      display: flex;
      gap: 15px;
      margin-bottom: 10px;

      > .block__select {
        width: 50%;
      }
      
      > .block__input {
        width: 50%;
      }
  }
}

@media only screen and (max-width: 480px) {
  .personalInfoForm {
    width: 100%;
  }
}
</style>