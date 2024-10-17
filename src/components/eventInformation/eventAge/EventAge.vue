<script setup lang="ts">
import livre from 'assets/faixa-etaria/livre.png';
import dez from 'assets/faixa-etaria/dez.png';
import doze from 'assets/faixa-etaria/doze.png';
import quatorze from 'assets/faixa-etaria/quatorze.png';
import dezesseis from 'assets/faixa-etaria/dezesseis.png';
import dezoito from 'assets/faixa-etaria/dezoito.png';

import { onMounted, ref } from 'vue';
import EventAgeProps from './types';

const props = defineProps<EventAgeProps>();
const ageCard = ref();

function defineAgeIcon(age: number) {
  if (age === 0) ageCard.value = livre;
  if (age === 10) ageCard.value = dez;
  if (age === 12) ageCard.value = doze;
  if (age === 14) ageCard.value = quatorze;
  if (age === 16) ageCard.value = dezesseis;
  if (age === 18) ageCard.value = dezoito;
}
onMounted(() => {
  defineAgeIcon(props.age);
});
</script>
<template>
  <q-icon :name="'img:' + ageCard" size="3rem" right />
</template>
