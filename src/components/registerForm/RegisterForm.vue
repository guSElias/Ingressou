<template>
  <q-form class="justify-center wrap q-ma-md" @submit.prevent="register">
    <q-input label="Nome" v-model="form.nome" type="text" :rules="nomeRules" />
    <q-input
      label="Email"
      v-model="form.email"
      type="email"
      :rules="emailRules"
    />
    <q-input
      label="Data de Nascimento"
      mask="####-##-##"
      v-model="form.dtNascimento"
      type="date"
    />
    <q-input
      label="Documento"
      v-model="form.documento"
      type="text"
      mask="###.###.###-##"
      :rules="documentoRules"
    />
    <q-input
      label="Telefone"
      v-model="form.telefone"
      type="tel"
      mask="(##) ##### - ####"
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
    <PasswordInput label="Senha" v-model="form.senha" :rules="passwordRules" />
    <PasswordInput
      label="Confirmar Senha"
      v-model="form.confirmarSenha"
      :rules="passwordConfirmRules"
    />
    <div class="row justify-center">
      <q-btn label="Cadastrar" color="primary" type="submit" />
    </div>

    <!-- Diálogo para notificações de erro -->
    <q-dialog v-model="errorDialog" persistent>
      <q-card class="bg-red-2 text-red-9">
        <q-card-section>
          <div class="text-h6">Erro!</div>
          <div>{{ errorMessage }}</div>
        </q-card-section>
        <q-card-actions class="q-justify-center">
          <div class="q-gutter-md">
            <!-- Espaço adicional nos lados do botão -->
            <q-btn
              label="Fechar"
              color="red"
              @click="errorDialog = false"
              text-color="white"
            />
          </div>
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Diálogo para notificações de sucesso -->
    <q-dialog v-model="successDialog" persistent>
      <q-card class="bg-green-2 text-green-9">
        <q-card-section>
          <div class="text-h6">Sucesso!</div>
          <div>{{ successMessage }}</div>
        </q-card-section>
        <q-card-actions class="q-justify-center">
          <q-btn label="Fechar" color="green" @click="successDialog = false" />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!-- Diálogo para notificações de sucesso -->
    <q-dialog v-model="successDialog" persistent>
      <q-card class="bg-green-2 text-green-9">
        <q-card-section>
          <div class="text-h6">Sucesso!</div>
          <div>{{ successMessage }}</div>
        </q-card-section>
        <q-card-actions class="q-justify-center">
          <div class="q-gutter-sm q-ma-xs">
            <q-btn
              label="Fechar"
              color="green"
              @click="successDialog = false"
              text-color="white"
            />
          </div>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-form>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import axios from 'axios';
import PasswordInput from '../passwordInput/PasswordInput.vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const isDark = ref($q.dark.isActive);

// Estado para controlar os diálogos
const errorDialog = ref(false);
const successDialog = ref(false);
const errorMessage = ref('');
const successMessage = ref('');

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

// Observa o estado do tema (claro ou escuro)
watch(
  () => $q.dark.isActive,
  (val) => {
    isDark.value = val;
  }
);

// Regras de validação para os campos do formulário
const nomeRules = [(val: string) => !!val || 'Nome é um campo obrigatório.'];
const emailRules = [(val: string) => !!val || 'Email é um campo obrigatório.'];
const documentoRules = [
  (val: string) => !!val || 'Documento é um campo obrigatório.',
];
const telefoneRules = [
  (val: string) => !!val || 'Telefone é um campo obrigatório.',
];
const cidadeRules = [
  (val: string) => !!val || 'Cidade é um campo obrigatório.',
];
const estadoRules = [
  (val: string) => !!val || 'Estado é um campo obrigatório.',
];
const passwordRules = [
  (val: string) => !!val || 'Campo obrigatório',
  (val: string) =>
    val.length >= 7 || 'A senha deve conter ao menos 7 caracteres',
  (val: string) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])/.test(val) ||
    'A senha deve conter ao menos uma letra maiúscula, minúscula, um número e um símbolo.',
];
const passwordConfirmRules = [
  (val: string) => val === form.value.senha || 'As senhas devem ser iguais.',
];

// Função para validar a data de nascimento
const isValidDate = (dateString: string): boolean => {
  const [year, month, day] = dateString.split('-').map(Number);

  // Verifica se o ano, mês e dia são válidos
  if (!year || !month || !day) return false;

  // Cria a data para verificar a validade
  const date = new Date(year, month - 1, day);
  const today = new Date();

  // Verifica se a data corresponde exatamente ao input (evita 30/02 virando 02/03)
  const isDateValid =
    date.getFullYear() === year &&
    date.getMonth() + 1 === month &&
    date.getDate() === day;

  // Verifica se a data de nascimento é no futuro
  const isInFuture = date > today;

  return isDateValid && !isInFuture;
};

// Função para calcular a idade com base na data de nascimento
const calcularIdade = (): number => {
  if (!form.value.dtNascimento) return 0;
  const [year, month, day] = form.value.dtNascimento.split('-').map(Number);
  const birthDate = new Date(year, month - 1, day);
  const today = new Date();

  let idade = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    idade--;
  }

  return idade;
};

// Função para validar o formulário
const validateForm = () => {
  const requiredFields = [
    form.value.nome,
    form.value.email,
    form.value.documento,
    form.value.telefone,
    form.value.cidade,
    form.value.estado,
    form.value.senha,
    form.value.confirmarSenha,
  ];

  for (const field of requiredFields) {
    if (!field) {
      console.error('Todos os campos são obrigatórios.');
      errorMessage.value = 'Todos os campos são obrigatórios.';
      errorDialog.value = true;
      return false;
    }
  }

  if (!isValidDate(form.value.dtNascimento)) {
    errorMessage.value = 'Data de nascimento inválida ou no futuro.';
    errorDialog.value = true;
    return false;
  }

  return true;
};

const formatDate = (dateString: string) => dateString;

function register() {
  console.log('Iniciando registro...');

  if (!validateForm()) {
    return;
  }

  const payload = {
    nomeUsuario: form.value.nome,
    cidade: form.value.cidade,
    estado: form.value.estado,
    telefone: form.value.telefone.replace(/\D/g, ''),
    idade: calcularIdade(),
    email: form.value.email,
    senha: form.value.senha,
    documento: form.value.documento,
    dtNascimento: formatDate(form.value.dtNascimento),
  };

  console.log('Payload de Registro:', payload); // Verificação de payload

  axios
    .post('http://localhost:8080/api/usuarios/criar', payload)
    .then((response) => {
      console.log('Usuário cadastrado com sucesso:', response.data);
      successMessage.value = 'Cadastro efetuado com sucesso!';
      successDialog.value = true;
      form.value = {
        nome: '',
        email: '',
        dtNascimento: '',
        documento: '',
        telefone: '',
        cidade: '',
        estado: '',
        senha: '',
        confirmarSenha: '',
      };
    })
    .catch((error) => {
      console.error('Erro ao cadastrar usuário:', error);
      errorMessage.value =
        'Erro ao cadastrar usuário: ' +
        (error.response?.data?.message || 'Erro desconhecido.');
      errorDialog.value = true;
    });
}
</script>
