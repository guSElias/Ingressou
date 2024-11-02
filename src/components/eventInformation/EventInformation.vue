<script setup lang="ts">
import { ref } from 'vue';
import EventAge from './eventAge/EventAge.vue';
import eventoExemplo from './eventAge/testEvent';
import EventPayment from '../eventPayment/EventPayment.vue';
import formatarDataEvento from 'src/util/formatarData';
const showMore = ref(true);
const paymentModal = ref();

function toggleShowMore() {
  showMore.value = !showMore.value;
}
function buyTicket() {
  paymentModal.value.openDialog();
}
const dtEventoFormatado = formatarDataEvento(
  eventoExemplo.dataEvento,
  eventoExemplo.horaAbertura
);
</script>

<template>
  <div class="text-center">
    <div class="header">
      <p class="text-h4 q-my-md">{{ eventoExemplo.nome }}</p>
      <q-btn icon="arrow_back" flat class="q-ml-xs" to="/" />
    </div>
    <q-img
      :src="eventoExemplo.imagemUrl"
      width="70%"
      class="shadow-box shadow-3"
      fit="fill"
    />
    <div class="event-info row">
      <span>{{ dtEventoFormatado }}</span>
      <div class="text-primary text-bold justify-center">
        <q-icon
          name="location_on"
          color="primary"
          size="1.8rem"
          class="justify-center align-center"
        />
        <span>{{ eventoExemplo.localEvento }}</span>
      </div>
      <EventAge :age="eventoExemplo.faixaEtaria" class="q-ml-auto" />
    </div>
    <q-separator color="primary" class="q-mb-md q-mx-xl" size="0.5rem" />
    <div class="row aditional-info">
      <div class="col informacoes-gerais">
        <span class="text-h5 text-bold q-mb-sm">Informações Gerais:</span>
        <span class="text-subtitle1 text-bold">
          {{ 'Início previsto: ' + eventoExemplo.horaInicio }}
        </span>
        <span :class="showMore ? 'short-text' : 'full-text'">
          {{ eventoExemplo.descricao }}
        </span>
        <q-btn
          @click="toggleShowMore"
          flat
          rounded
          text-color="primary"
          :label="showMore ? 'Mostrar mais' : 'Mostrar menos'"
        />
      </div>
      <div class="col">
        <q-btn
          icon="confirmation_number"
          color="primary"
          label="comprar"
          text-color="dark"
          size="lg"
          @click="buyTicket"
        />
      </div>
    </div>
  </div>
  <EventPayment ref="paymentModal" />
</template>
<style scoped lang="scss">
.header {
  display: flex;
  flex-direction: row;
  margin: 0 15%;
  justify-content: space-between;
  line-height: 1.5rem;
}
.event-info {
  margin: 0.5rem 15%;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  span {
    font-size: 1.25rem;
    font-weight: 800;
  }
}
.aditional-info {
  margin: 0 15%;
}
.informacoes-gerais {
  display: flex;
  flex-direction: column;
}
.short-text {
  font-size: 0.9rem;
  max-height: 15rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 11;
  -webkit-box-orient: vertical;
  :deep(p) {
    white-space: normal;
  }
}
.full-text {
  font-size: 0.9rem;
}
</style>
