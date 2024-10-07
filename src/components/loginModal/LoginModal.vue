<script setup lang="ts">
import { ref } from 'vue';

const form = ref({
  email: '',
  password: '',
});

const showDialog = ref(false);

function openDialog() {
  showDialog.value = true;
}

defineExpose({
  openDialog,
});
</script>
<template>
  <q-dialog backdrop-filter="blur(4px)" v-model="showDialog">
    <q-card style="width: 500px; max-width: 80vw">
      <q-card-section class="row justify-center">
        <q-icon name="img:src/assets/ingressou-logo.svg" size="10rem" />
        <q-btn icon="close" flat color="primary" v-close-popup />
      </q-card-section>
      <q-card-section class="column justify-center">
        <div class="text-h5 text-center">Login</div>
        <q-form class="row justify-center">
          <div class="col-md-4 col-sm-6 col-xs-10">
            <q-input label="Email" v-model="form.email" />
            <q-input label="Senha" v-model="form.password" />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
