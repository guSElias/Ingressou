<script setup lang="ts">
import EventCard from 'src/components/eventCard/EventCard.vue';
import eventosExemplo from 'src/components/eventCard/testEvents';
</script>
<template>
  <q-page class="row items-center justify-evenly q-pa-md">
    <div class="eventos">
      <EventCard :cards="eventosExemplo" />
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
