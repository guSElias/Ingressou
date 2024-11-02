<script setup lang="ts">
import http from 'src/api';
import EventCard from 'src/components/eventCard/EventCard.vue';
import type Evento from 'src/router/interfaces/Evento';
import { onMounted, ref } from 'vue';

const eventos = ref<Evento[]>([]);

onMounted(async () => {
  const response = await http.get('/api/eventos/listar');
  eventos.value = response.data.map((evento: Evento) => ({
    ...evento,
    dataEvento: new Date(evento.dataEvento),
  }));
});
</script>
<template>
  <q-page class="row items-center justify-evenly q-pa-md">
    <div class="eventos">
      <EventCard :cards="eventos" />
    </div>
    <q-btn color="primary" label="ver mais" />
  </q-page>
</template>
<style lang="scss" scoped>
.eventos {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
}
</style>
