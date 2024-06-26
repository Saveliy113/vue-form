<template>
  <div class="otp__input">
    <q-input
      v-for="i in length"
      :key="i"
      class="digit__input"
      style="text-align: center"
      :ref="(el) => updateFieldRef(el, i - 1)"
      v-model="fieldValues[i - 1]"
      v-bind="$attrs"
      @keyup="onKeyUp($event, i - 1)"
      @update:model-value="onUpdate($event, i - 1)"
      mask="#"
      outlined
    />
  </div>
</template>

<script setup lang="ts">
import { useSignupStore } from "src/stores/signupStore";
import { defineProps, computed, ref, onBeforeUpdate, watch, onMounted } from "vue";
import { useRouter } from "vue-router";

const signupStore = useSignupStore();

const props = defineProps({
  inputLength: {
    type: Number,
    required: true
  },
});

const router = useRouter();

// Количество инпутов
const length = computed(() => props.inputLength);

const fields = ref<HTMLInputElement[] | []>([]);
const fieldValues = ref([]);
const otp = ref("");

watch(
  fieldValues,
  () => {
    const notNullFields = fieldValues.value.filter((value) => value).join("");
    if (length.value === notNullFields.length) {
      otp.value = fieldValues.value.filter((value) => value).join("");
      fields.value[length.value - 1].blur();

      signupStore.loading = true;
      
      setTimeout(() => {
        signupStore.loading = false;
        router.push({
          path: "/",
          query: { step: "password" },
        });
      }, 2500);
    }
  },
  { deep: true }
);

onBeforeUpdate(() => {
  fields.value = [];
});

// Получаем все инпуты, записываем в fields в соответствии с порядковым номером
const updateFieldRef = (element: HTMLInputElement, index: number) => {
  if (element) {
    fields.value[index] = element;
  }
};

// Фокус элементов
const focus = (index: number) => {
  if (index >= 0) {
    if (index < length.value) {
      fields.value[index].select();
    }
  }
};

const onUpdate = (value, index) => {
  if (value) {
    focus(index + 1);
  }
};

// Keyup logic
const onKeyUp = (evnt, index) => {
  const key = evnt.key;

  if (["Tab", "Shift", "Meta", "Control", "Alt", "Delete"].includes(key)) {
    return;
  }

  if (key === "ArrowLeft" || key === "Backspace") {
    focus(index - 1);
  } else if (key === "ArrowRight") {
    focus(index + 1);
  }
};

onMounted(() => {
  focus(0);
});
</script>

<style lang="scss" scoped>
.otp__input {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 70px;

  .digit__input {
    text-align: center;
    width: 60px;
    font-size: 1.2rem;
  }
}
</style>
