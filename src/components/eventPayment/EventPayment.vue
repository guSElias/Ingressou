<script setup lang="ts">
import { useQuasar } from 'quasar';
import { ref, watch } from 'vue';

const $q = useQuasar();
const isDark = ref($q.dark.isActive);

const showDialog = ref(false);
function openDialog() {
  showDialog.value = true;
}

defineExpose({
  openDialog,
});

watch(
  () => $q.dark.isActive,
  (val) => {
    isDark.value = val;
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
    </q-card>
  </q-dialog>
</template>
