<template>

  <div class="contenedor-consulta">
    <h1 class="titulo-consulta">Tus Reservas</h1>
    <p>Para consulta sobre tu reserva o Cancelaciones ingresa el nombre de quien fue reservada</p>
    <form @submit.prevent="buscarReservas">
      <input type="text" v-model="nombreReservante" required placeholder="Nombre del reservante">
      <button type="submit">Buscar</button>
    </form>

    <div v-if="reservas.length > 0" class="resultado">

      <h2>Reservaciones encontradas:</h2>

      <div v-for="reserva in reservas" :key="reserva.id" class="reserva">
        <h3>Reservante: {{ reserva.nombre_reservante }}</h3>
        <p>Número de mesa: {{ reserva.numero_mesa }}</p>
        <p>Fecha de reserva: {{ formatearFecha(reserva.fecha) }}</p>
        <p>Motivo de reserva: {{ reserva.motivo }}</p>
        <p>Modalidad de pago: {{ reserva.modop }}</p>
        <p>Estado: {{ reserva.estado }}</p>

        <div class="boton-borrar" @click="mostrarConfirmacion(reserva.id)">
          <img src="../assets/borrar.png" alt="Eliminar Reserva">
        </div>
        
        <div v-if="reserva.id === reservaSeleccionada" class="confirmacion">
          <input type="number" v-model="cedula" required placeholder="Ingrese la cédula">
          <button @click="eliminarReserva(reserva.id)">Enviar</button>

        </div>

      </div>

    </div>

    <div v-else-if="reservas === null">
      <p>Realizando búsqueda...</p>
    </div>

    <div v-else>
      <p class="nota" v-if="nombreReservante !== ''">No existen reservaciones con el nombre proporcionado.</p>
    </div>
  </div>
</template>

<script setup>
import axios from '@/axios';
import { ref } from 'vue';

const nombreReservante = ref('');
const reservas = ref([]);
const reservaSeleccionada = ref(null);
const cedula = ref('');

const buscarReservas = async () => {
  try {
    const response = await axios.get(`/reservas-por-nombre?nombreReservante=${nombreReservante.value}`);
    reservas.value = response.data.data;
  } catch (error) {
    console.error('Error al buscar las reservas:', error);
    reservas.value = [];
  }
}

const mostrarConfirmacion = (reservaId) => {
  reservaSeleccionada.value = reservaId;
}

const eliminarReserva = async (reservaId) => {
  try {
    await axios.delete(`/reservas/${reservaId}/${nombreReservante.value}/${cedula.value}`);
    buscarReservas();
  } catch (error) {
    console.error('Error al eliminar la reserva');
  }
}

// Función para formatear la fecha
const formatearFecha = (fecha) => {
  const fechaObj = new Date(fecha);
  const año = fechaObj.getFullYear();
  const mes = fechaObj.getMonth() + 1;
  const mesFormateado = mes < 10 ? `0${mes}` : mes;
  const dia = fechaObj.getDate();
  const diaFormateado = dia < 10 ? `0${dia}` : dia;
  return `${año}-${mesFormateado}-${diaFormateado}`;
}
</script>

<style>
.contenedor-consulta {
  margin: 0 auto;
  width: 50%;
  background-color: white;
  border-radius: 10px;
  padding: 50px;
  filter: none;
  text-align: center;
}
.titulo-consulta {
  text-align: left;
}
.resultado {
  margin: 0 auto;
  margin-top: 4rem;
  width: 50%;
  background-color: rgb(231, 201, 143);
  border-radius: 10px;
  padding: 50px;
  filter: none;
  text-align: center;
}
.nota {
  background-color: red;
  border-radius: 10px;
  padding: 10px;
  filter: none;
  text-align: center;
}
.confirmacion {
  margin-top: 1rem;
}
.boton-borrar {
  cursor: pointer;
  display: inline-block;
}
.boton-borrar img {
  width: 30px;
  height: 30px;
}
</style>
