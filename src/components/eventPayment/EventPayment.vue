<script setup lang="ts">
import { ref, watch, defineProps, defineExpose } from 'vue';
import { useQuasar } from 'quasar';
import TipoIngresso from './tipoIngresso'; // Certifique-se de que o caminho está correto

// Definindo as propriedades esperadas
const props = defineProps<{
  tiposDeIngresso: TipoIngresso[]; // Tipo correto para tiposDeIngresso
}>();

// Usando o Quasar para verificar o tema escuro
const $q = useQuasar();
const isDark = ref($q.dark.isActive); // Variável para armazenar o estado do tema
const showDialog = ref(false); // Variável para controlar a exibição do diálogo

// Função para abrir o diálogo
function openDialog() {
  showDialog.value = true; // Altera o estado para mostrar o diálogo
}

// Expondo a função openDialog para que possa ser chamada externamente
defineExpose({
  openDialog,
});

// Observando mudanças no tema do Quasar
watch(
  () => $q.dark.isActive,
  (val) => {
    isDark.value = val; // Atualiza o estado do tema escuro
  }
);
</script>

<template>
  <q-dialog backdrop-filter="blur(4px)" v-model="showDialog">
    <q-card style="width: 25rem; max-width: 80vw">
      <q-card-section
        class="row justify-center q-pa-none relative-position"
        style="max-height: 8rem"
      >
        <q-icon
          v-if="isDark"
          name="img:src/assets/ingressou-logo-dark.svg"
          size="10rem"
        />
        <q-icon v-else name="img:src/assets/ingressou-logo.svg" size="10rem" />
        <q-btn
          icon="close"
          flat
          color="primary"
          class="absolute-top-right q-ma-sm"
          v-close-popup
        />
      </q-card-section>
      <q-card-section>
        <h5>Tipos de Ingresso:</h5>
        <ul>
          <li v-for="tipo in props.tiposDeIngresso" :key="tipo.id">
            {{ tipo.nome }} - R$ {{ tipo.precoBase }}
          </li>
        </ul>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
