<script setup lang="ts">
import { ref, watch } from 'vue';
import PasswordInputProps from './types';

const props = defineProps<PasswordInputProps>();
const emit = defineEmits(['update:modelValue']);

// `inputModel` para sincronizar com `modelValue`
const inputModel = ref(props.modelValue);
const showpassword = ref(false); // Adiciona `showpassword` como uma referência reativa

watch(inputModel, (val) => emit('update:modelValue', val));
watch(
  () => props.modelValue,
  (val) => {
    inputModel.value = val;
  }
);
</script>

<template>
  <q-input
    :label="props.label"
    v-model="inputModel"
    :type="showpassword ? 'text' : 'password'"
    :rules="props.rules"
  >
    <template v-slot:append>
      <q-icon
        :name="showpassword ? 'visibility' : 'visibility_off'"
        class="cursor-pointer"
        @click="showpassword = !showpassword"
      />
    </template>
  </q-input>
</template>
