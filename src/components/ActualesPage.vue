<template>
    <div class="contenedor-reservas">
      <h1>Reservas</h1>
      <ul>
        <li v-for="reserva in reservas" :key="reserva.id">
          <p>Nombre del reservante: {{ reserva.nombre_reservante }}</p>
          <p>Fecha de reserva: {{ reserva.fecha }}</p>
          <p>Número de mesa: {{ reserva.numero_mesa }}</p>
          <p>Motivo de la reserva: {{ reserva.motivo }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import axios from '@/axios';
  import { ref, onMounted } from 'vue';
  
  const reservas = ref([]);
  
  const obtenerReservas = async () => {
    try {
      const response = await axios.get('/imprimir-reservas');
      reservas.value = response.data;
    } catch (error) {
      console.error('Error al obtener las reservas:', error);
    }
  }
  
  onMounted(() => {
    obtenerReservas();
  });
  </script>
  