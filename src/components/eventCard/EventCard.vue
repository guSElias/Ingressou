<script setup lang="ts">
import formatarDataEvento from 'src/util/formatarData';
import EventCardProps from './types';

const props = defineProps<EventCardProps>();
</script>

<template>
  <q-card
    v-for="(card, index) in props.cards"
    :key="index"
    class="q-ma-xs"
    style="max-width: 20rem"
  >
    <img :src="card.imagemUrl" />
    <q-card-section>
      <div class="text-h6">{{ card.nome }}</div>
      <div class="row q-gutter-sm text-subtitle3">
        <span>
          {{ formatarDataEvento(card.dataEvento, card.horaAbertura) }}
        </span>
        <div class="text-primary text-bold justify-center">
          <q-icon
            name="location_on"
            color="primary"
            size="1.8rem"
            class="event-location"
          />
          <span>{{ card.localEvento }}</span>
        </div>
      </div>
    </q-card-section>
    <q-card-section class="justify-center">
      <q-btn
        icon="confirmation_number"
        color="primary"
        label="comprar"
        text-color="dark"
        to="evento"
      />
    </q-card-section>
  </q-card>
</template>
