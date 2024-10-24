<script setup lang="ts">
import { ref } from 'vue';
import PasswordInput from '../passwordInput/PasswordInput.vue';

const form = ref({
  nome: '',
  email: '',
  dtNascimento: '',
  documento: '',
  telefone: '',
  cidade: '',
  estado: '',
  senha: '',
  confirmarSenha: '',
});
const nomeRules = [(val: string) => !!val || 'Campo obrigatório'];
const emailRules = [(val: string) => !!val || 'Campo obrigatório'];
const dtNascimentoRules = [(val: string) => !!val || 'Campo obrigatório'];
const documentoRules = [
  (val: string) => !!val || 'Campo obrigatório',
  (val: string) =>
    val.length == 11 || 'Campo documento deve conter 11 caracteres',
];
const telefoneRules = [
  (val: string) => !!val || 'Campo obrigatório',
  (val: string) =>
    val.length == 10 || 'Campo telefone deve conter 10 caracteres',
];
const cidadeRules = [(val: string) => !!val || 'Campo obrigatório'];
const estadoRules = [(val: string) => !!val || 'Campo obrigatório'];
const passwordRules = [
  (val: string) => !!val || 'Campo obrigatório',
  (val: string) =>
    val.length >= 7 || 'Campo senha deve conter ao menos 7 caracteres',
  (val: string) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])/.test(val) ||
    'A senha deve conter ao menos uma letra maiúscula, minúscula, um número e um símbolo.',
];
const passwordConfirmRules = [
  (val: string) => val === form.value.senha || 'As senhas devem ser iguais.',
];
const valorIdade = () => {
  return 1 + 1;
};
function register() {
  console.log('teste');
  const payload = {
    NMUSUARIO: form.value.nome,
    DSCIDADE: form.value.cidade,
    DSESTADO: form.value.estado,
    NUTELEFONE: form.value.telefone,
    NUIDADE: valorIdade,
    DSEMAIL: form.value.email,
    DSSENHA: form.value.senha,
    DOCUMENTO: form.value.documento,
  };
  console.log(payload);
}
</script>
<template>
  <q-form class="justify-center wrap q-ma-md" @submit="register">
    <q-input label="Nome" v-model="form.nome" type="text" :rules="nomeRules" />
    <q-input
      label="Email"
      v-model="form.email"
      type="email"
      :rules="emailRules"
    />
    <q-input
      label="Data de Nascimento"
      v-model="form.dtNascimento"
      type="date"
      :rules="dtNascimentoRules"
      oninput="console.log(form.dtNascimento)"
    />
    <q-input
      label="Documento"
      v-model="form.documento"
      type="number"
      :rules="documentoRules"
    />
    <q-input
      label="Telefone"
      v-model="form.telefone"
      type="number"
      :rules="telefoneRules"
    />
    <q-input
      label="Cidade"
      v-model="form.cidade"
      type="text"
      :rules="cidadeRules"
    />
    <q-input
      label="Estado"
      v-model="form.estado"
      type="text"
      :rules="estadoRules"
    />
    <PasswordInput label="Senha" :model="form.senha" :rules="passwordRules" />
    <PasswordInput
      label="Confirmar Senha"
      :model="form.confirmarSenha"
      :rules="passwordConfirmRules"
    />
    <div class="row justify-center">
      <q-btn label="cadastrar" color="primary" type="submit" />
    </div>
  </q-form>
</template>
