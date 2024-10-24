<script setup lang="ts">
import { ref } from 'vue';
import PasswordInputProps from './types';

const showpassword = ref(false);

const props = defineProps<PasswordInputProps>();
const inputModel = props.model;
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
