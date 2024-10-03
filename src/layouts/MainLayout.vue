<script setup lang="ts">
import { ref, watch } from 'vue';

import { useQuasar } from 'quasar';

const $q = useQuasar();
const currentTheme = ref(false);

watch(
  () => $q.dark.isActive,
  (val) => {
    currentTheme.value = val;
  }
);
</script>
<template>
  <q-layout view="lhh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <q-icon name="img:src/assets/ingressou-logo.svg" size="7rem" right />
        </q-toolbar-title>
        <q-btn
          flat
          dense
          round
          size="1rem"
          :color="currentTheme ? 'dark' : 'secondary'"
          :icon="currentTheme ? 'dark_mode' : 'light_mode'"
          @click="$q.dark.toggle()"
        />
        <q-btn
          flat
          dense
          round
          size="1rem"
          :color="currentTheme ? 'dark' : 'secondary'"
          icon="account_circle"
          @click="console.log('abrir modal')"
        />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
