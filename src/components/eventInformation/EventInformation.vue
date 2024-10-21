<script setup lang="ts">
import { ref } from 'vue';
import EventAge from './eventAge/EventAge.vue';
import eventoExemplo from './eventAge/testEvent';
const showMore = ref(true);

function toggleShowMore() {
  showMore.value = !showMore.value;
}

const formatarDataEvento = (data: Date): string => {
  const diasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const diaSemana = diasSemana[data.getUTCDay()];
  const dia = String(data.getUTCDate()).padStart(2, '0');
  const mes = String(data.getUTCMonth() + 1).padStart(2, '0');
  return `${diaSemana}, ${dia}/${mes} - ${eventoExemplo.aberturaEvento}`;
};
const dtEventoFormatado = formatarDataEvento(eventoExemplo.dtEvento);
</script>

<template>
  <div class="text-center">
    <div class="header">
      <p class="text-h4 q-my-md">{{ eventoExemplo.nomeEvento }}</p>
      <q-btn icon="arrow_back" flat class="q-ml-xs"></q-btn>
    </div>
    <q-img
      :src="eventoExemplo.imagemURL"
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
          {{ 'Início previsto: ' + eventoExemplo.inicioEvento }}
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
        />
      </div>
    </div>
  </div>
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
