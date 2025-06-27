<template>
  <form @submit.prevent="send">
    <input v-model="form.nombre" placeholder="Tu nombre" />
    <textarea v-model="form.mensaje" placeholder="Mensaje..." />
    <button type="submit">Enviar</button>
  </form>
</template>

<script setup>
import { reactive } from 'vue'
const form = reactive({ nombre: '', mensaje: '' })
const send = () => alert(`Mensaje de ${form.nombre}`)
</script>
