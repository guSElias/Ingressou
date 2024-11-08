<script setup lang="ts">
import http from 'src/api';
import RegisterForm from 'src/components/registerForm/RegisterForm.vue';
import Usuario from 'src/router/interfaces/Usuario';

async function addUser(payload: Usuario) {
  try {
    const response = await http.post('api/usuarios/criar', payload);
    console.log('Dados enviados com sucesso:', response.data);
  } catch (error) {
    console.error('Erro ao enviar dados:', error);
  }
}
</script>

<template>
  <q-page class="col items-center justify-evenly q-pa-xl">
    <span class="text-h4 text-bold text-center q-my-sm">Cadastrar</span>
    <RegisterForm @register="addUser" />
  </q-page>
</template>
