<script setup lang="ts">
import LoginModalProps from './types';

const props = defineProps<LoginModalProps>() 
</script>
<template>
  <q-dialog v-if="props.isVisible" backdrop-filter="blur(4px)">

  </q-dialog>
</template>