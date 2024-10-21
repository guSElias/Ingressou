<script setup lang="ts">
import { ref, watch } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const isDark = ref($q.dark.isActive);

const form = ref({
  email: '',
  password: '',
});
const showpassword = ref(false);

const emailRules = [(val: string) => !!val || 'Campo obrigatório'];

const passwordRules = [
  (val: string) => !!val || 'Campo obrigatório',
  (val: string) =>
    val.length >= 7 || 'Campo senha deve conter ao menos 7 caracteres',
  (val: string) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])/.test(val) ||
    'A senha deve conter ao menos uma letra maiúscula, minúscula, um número e um símbolo.',
];

function onSubmit() {
  console.log('Enviado');
}

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
        <q-icon
          v-else
          name="img:src/assets/ingressou-logo.svg"
          size="10rem"
        />
        <q-btn icon="close" flat color="primary" class="absolute-top-right q-ma-sm" v-close-popup />
      </q-card-section>
      <q-card-section class="column justify-center q-pt-none">
        <div class="text-h5 text-center text-primary">Login</div>
        <q-form class="justify-center q-mx-xl" @submit="onSubmit">
          <div class="col-md-4 col-sm-6 col-xs-10 q-pb-md">
            <q-input
              label="Email"
              v-model="form.email"
              type="email"
              :rules="emailRules"
            />
            <q-input
              label="Senha"
              v-model="form.password"
              :type="showpassword ? 'text' : 'password'"
              :rules="passwordRules"
            >
              <template v-slot:append>
                <q-icon
                  :name="showpassword ? 'visibility' : 'visibility_off'"
                  class="cursor-pointer"
                  @click="showpassword = !showpassword"
                />
              </template>
            </q-input>
            <div class="q-pt-md q-gutter-md row justify-end">
              <q-btn
                to="/cadastro"
                label="cadastrar"
                outline
                color="primary"
              />
              <q-btn label="entrar" type="submit" color="primary" />
            </div>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
