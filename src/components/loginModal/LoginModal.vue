<script setup lang="ts">
import { ref, watch } from 'vue';
import { useQuasar, Notify } from 'quasar'; // Importa Notify diretamente do Quasar
import PasswordInput from '../passwordInput/PasswordInput.vue';
import axios from 'axios';

const $q = useQuasar();
const isDark = ref($q.dark.isActive);
const showDialog = ref(false);

const form = ref({
  email: '',
  password: '',
});

// Regras de validação
const emailRules = [(val: string) => !!val || 'Campo obrigatório'];
const passwordRules = [
  (val: string) => !!val || 'Campo obrigatório',
  // Regras adicionais podem ser descomentadas se necessário
  // (val: string) =>
  //   val.length >= 7 || 'Campo senha deve conter ao menos 7 caracteres',
  // (val: string) =>
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])/.test(val) ||
  //   'A senha deve conter ao menos uma letra maiúscula, minúscula, um número e um símbolo.',
];

// Função para envio do formulário de login
async function onSubmit() {
  try {
    const response = await axios.post(
      'http://localhost:8080/api/usuarios/login',
      {
        email: form.value.email,
        senha: form.value.password,
      }
    );

    console.log('Login bem-sucedido:', response.data);
    Notify.create({
      color: 'positive',
      message: 'Login realizado com sucesso!',
    });
    closeDialog(); // Fechar o diálogo após login bem-sucedido

    // Realizar ações adicionais, como redirecionar o usuário
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    Notify.create({
      color: 'negative',
      message: 'Erro ao fazer login. Verifique suas credenciais.',
      icon: 'warning',
    });
  }
}

// Função para abrir o diálogo
function openDialog() {
  showDialog.value = true;
}

// Função para fechar o diálogo
function closeDialog() {
  showDialog.value = false;
  form.value.email = ''; // Limpar o campo de email
  form.value.password = ''; // Limpar o campo de senha
}

// Expõe a função para abrir o diálogo externamente
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
      <q-card-section class="column justify-center q-pt-none">
        <div class="text-h5 text-center text-primary">Login</div>
        <q-form class="justify-center q-mx-xl" @submit.prevent="onSubmit">
          <div class="col-md-4 col-sm-6 col-xs-10 q-pb-md">
            <q-input
              label="Email"
              v-model="form.email"
              type="email"
              :rules="emailRules"
            />
            <PasswordInput
              label="Senha"
              v-model="form.password"
              :rules="passwordRules"
            />
            <div class="q-pt-md q-gutter-md row justify-end">
              <q-btn to="/cadastro" label="Cadastrar" outline color="primary" />
              <q-btn label="Entrar" type="submit" color="primary" />
            </div>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<style scoped>
.q-card {
  width: 300px;
}
</style>
