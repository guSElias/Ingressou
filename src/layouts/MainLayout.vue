<script setup lang="ts">
import { ref, watch } from 'vue';

import { useQuasar } from 'quasar';
import LoginModal from 'src/components/loginModal/LoginModal.vue';

const $q = useQuasar();
const currentTheme = ref(false);
const loginModal = ref();

function openDialog() {
  loginModal.value.openDialog();
}

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
          <q-btn flat to="/" class="q-px-sm">
            <img
              src="src/assets/ingressou-logo.svg"
              alt="ingressou logo"
              class="q-py-sm"
              style="width: 12rem; height: 5rem"
            />
          </q-btn>
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
          @click="openDialog"
        />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <LoginModal ref="loginModal" :is-dark="currentTheme" />
      <router-view />
    </q-page-container>
  </q-layout>
</template>
