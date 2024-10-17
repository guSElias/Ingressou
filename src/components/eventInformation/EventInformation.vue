<script setup lang="ts">
import EventAge from './eventAge/EventAge.vue';
import Evento from './types';

const eventoExemplo: Evento = {
  cdevento: 1,
  tipoEvento: 'Concerto',
  descricao: 'Um evento musical ao ar livre com diversas bandas e artistas.',
  dtEvento: new Date('2024-07-15'),
  nomeEvento: 'Concerto de Verão',
  localEvento: 'Parque Central',
  faixaEtaria: 0,
  imagemURL:
    'https://me-gestao-imagens.s3.amazonaws.com/minhaentrada/gestao/fotos/24166_banner6.jpg',
  aberturaEvento: new Date('2024-07-15T17:00:00'),
  InicioEvento: '19:00:00',
  capacidade: 5000,
  qtdIngressos: 3000,
};
const formatarDataEvento = (data: Date): string => {
  const diasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const diaSemana = diasSemana[data.getUTCDay()];

  const dia = String(data.getUTCDate()).padStart(2, '0');
  const mes = String(data.getUTCMonth() + 1).padStart(2, '0');
  const horas = String(data.getUTCHours()).padStart(2, '0');
  const minutos = String(data.getUTCMinutes()).padStart(2, '0');

  return `${diaSemana}, ${dia}/${mes} - ${horas}:${minutos}h`;
};
const dtEventoFormatado = formatarDataEvento(eventoExemplo.dtEvento);
</script>

<template>
  <div class="text-center">
    <div class="row justify-center">
      <h5>{{ eventoExemplo.nomeEvento }}</h5>
      <q-btn icon="arrow_back" flat class="q-ml-xs"></q-btn>
    </div>
    <q-img
      :src="eventoExemplo.imagemURL"
      width="80%"
      class="shadow-box shadow-7"
      style="height: 300px"
      fit="fill"
    />
    <div class="event-info row">
      <span>{{ dtEventoFormatado }}</span>
      <div class="text-primary text-bold justify-center">
        <q-icon name="location_on" color="primary" size="1.8rem"/>
        <span>{{ eventoExemplo.localEvento }}</span>
      </div>
      <EventAge :age="eventoExemplo.faixaEtaria" class="q-ml-auto" />
    </div>
    <q-separator
      color="primary"
      class="q-mb-md q-mx-xl"
      size="0.5rem"
    ></q-separator>
  </div>
</template>
<style scoped lang="scss">
  .event-info {
    margin: 0.5rem 10%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 0.8rem;
    span {
      font-size: 1.25rem;
      font-weight: 800;
    }
  }
</style>