<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Loading } from 'quasar';
import { buscarEventoPorId } from 'src/api/eventoService';
import { listarTiposDeIngresso } from 'src/api/tipoIngressoService';
import EventAge from './eventAge/EventAge.vue';
import EventPayment from '../eventPayment/EventPayment.vue';
import formatarDataEvento from 'src/util/formatarData';
import TipoIngresso from '../eventPayment/tipoIngresso';
import { Evento } from 'src/api/eventoService';

const showMore = ref(true);
const paymentModal = ref();
const tiposDeIngresso = ref<TipoIngresso[]>([]);
const carregandoIngressos = ref(false);
const evento = ref<Evento | null>(null);

onMounted(async () => {
  carregandoIngressos.value = true;

  // Obtém o ID do evento do localStorage
  const eventoId = localStorage.getItem('eventoId');
  if (!eventoId) {
    console.error('ID do evento não encontrado no localStorage.');
    return;
  }

  try {
    const idEvento = Number(eventoId);
    if (!isNaN(idEvento)) {
      evento.value = await buscarEventoPorId(idEvento);
      if (!evento.value) {
        console.error(`Evento com ID ${idEvento} não encontrado.`);
        return;
      }

      console.log('Evento buscado:', evento.value);

      tiposDeIngresso.value = await listarTiposDeIngresso(idEvento);
      console.log('Tipos de ingresso:', tiposDeIngresso.value);

      if (tiposDeIngresso.value.length === 0) {
        console.log('Nenhum ingresso cadastrado para este evento.');
      }
    } else {
      console.error(`ID do evento inválido: ${eventoId}`);
    }
  } catch (error) {
    console.error('Erro ao carregar evento ou tipos de ingresso:', error);
  } finally {
    carregandoIngressos.value = false;
  }
});

function toggleShowMore() {
  showMore.value = !showMore.value;
}

function buyTicket() {
  Loading.show();
  if (paymentModal.value) {
    paymentModal.value.tiposDeIngresso = tiposDeIngresso.value;
    paymentModal.value.openDialog();
  }
  Loading.hide();
}
</script>

<template>
  <div class="text-center">
    <div class="header">
      <p class="text-h4 q-my-md">{{ evento?.nome }}</p>
      <q-btn icon="arrow_back" flat class="q-ml-xs" to="/" />
    </div>
    <q-img
      :src="evento?.imagemUrl"
      width="70%"
      class="shadow-box shadow-3"
      fit="fill"
    />
    <div class="event-info row">
      <span>{{
        evento
          ? formatarDataEvento(evento.dataEvento, evento.horaAbertura)
          : 'Carregando...'
      }}</span>
      <div class="text-primary text-bold justify-center">
        <q-icon
          name="location_on"
          color="primary"
          size="1.8rem"
          class="justify-center align-center"
        />
        <span>{{ evento?.localEvento }}</span>
      </div>
      <EventAge :age="evento?.faixaEtaria ?? 0" class="q-ml-auto" />
    </div>
    <q-separator color="primary" class="q-mb-md q-mx-xl" size="0.5rem" />

    <div class="row aditional-info">
      <div class="col informacoes-gerais">
        <span class="text-h5 text-bold q-mb-sm">Informações Gerais:</span>
        <span class="text-subtitle1 text-bold">{{
          'Início previsto: ' + evento?.horaInicio
        }}</span>
        <span :class="showMore ? 'short-text' : 'full-text'">{{
          evento?.descricao
        }}</span>
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
          class="q-ml-lg"
          @click="buyTicket"
        />
      </div>
    </div>
  </div>
  <EventPayment
    ref="paymentModal"
    :tipos-de-ingresso="tiposDeIngresso.length ? tiposDeIngresso : []"
  />
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
  gap: 1rem;

  span {
    font-size: 1.25rem;
    font-weight: bold;
  }

  .text-primary {
    color: #007bff;
  }
}
.aditional-info {
  margin: 1.5rem 15%;
}
.informacoes-gerais {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.short-text,
.full-text {
  transition: max-height 0.5s ease;
}

.short-text {
  max-height: 15rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 11;
  -webkit-box-orient: vertical;
}
</style>
