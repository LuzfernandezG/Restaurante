<template>
  <h1 class="titulo-reserva">Reservas</h1>
  <img src="../assets/reserva2.jpg" class="imagen-reserva">
  <div class="contenedor-reservas">
    <div v-for="reserva in reservas" :key="reserva.id" class="tabla">
      <img src="../assets/reserva3.png" class="imagen-contenedor">
      <div class="tablas2">
        <p>Nombre del reservante: {{ reserva.nombre_reservante }}</p>
        <p>Fecha de reservación: {{ formatDate(reserva.fecha) }}</p>
        <p>Número de mesa: {{ reserva.numero_mesa }}</p>
        <p>Motivo de la reserva: {{ reserva.motivo }}</p>
        <p>Modalidad de pago: {{ reserva.modop }}</p>
        <p>Estado: {{ reserva.estado }}</p>
        <img class="boton-borrar" src="../assets/borrar.png" @click="confirmarEliminacion(reserva.id)" alt="Eliminar reserva">
        <img class="boton-configurar" src="../assets/configuraciones.png" @click="mostrarOpciones(reserva.id)" alt="Configurar reserva">
        <div v-if="reserva.id === reservaSeleccionadaId" class="opciones-estado">
          <select v-model="nuevoEstado">
            <option value="pendiente">Pendiente</option>
            <option value="cancelada">Cancelada</option>
          </select>
          <button @click="guardarEstado(reserva.id)">Guardar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from '@/axios';
import { ref } from 'vue';

const reservas = ref([]);
const reservaSeleccionadaId = ref(null);
const nuevoEstado = ref('');

const obtenerReservas = async () => {
  try {
    const response = await axios.get('/imprimir-reservas');
    reservas.value = response.data;
  } catch (error) {
    console.error('Error al obtener las reservas:', error);
  }
}

const confirmarEliminacion = (reservaId) => {
  if (confirm("¿Estás seguro de que deseas eliminar esta mesa?")) {
    eliminarReserva(reservaId);
  }
}

const eliminarReserva = async (reservaId) => {
  try {
    await axios.delete(`/reservas/${reservaId}`);
    alert("La reserva seleccionada fue eliminada");
    obtenerReservas();
  } catch (error) {
    console.error('Error al eliminar la reserva:', error);
  }
}

const mostrarOpciones = (reservaId) => {
  reservaSeleccionadaId.value = reservaId;
  const reserva = reservas.value.find(r => r.id === reservaId);
  nuevoEstado.value = reserva.estado;
}

const guardarEstado = async (reservaId) => {
  try {
    await axios.put(`/reservas/${reservaId}`, { estado: nuevoEstado.value });
    alert("Estado actualizado exitosamente");
    reservaSeleccionadaId.value = null;
    obtenerReservas();
  } catch (error) {
    console.error('Error al actualizar el estado:', error);
  }
}

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', options);
}

obtenerReservas();
</script>

<style>
.imagen-reserva {
  width: 30rem;
  margin: 0 auto;
  padding-bottom: 2rem;
}

.contenedor-reservas {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  text-align: center;
  height: 80%;
  padding-left: 4rem;
}

.imagen-contenedor {
  padding-top: 2rem;
  width: 15rem;
  height: 15rem;
}

.titulo-reserva {
  margin-top: 4rem;
  font-size: 2.5rem;
  text-transform: uppercase;
  margin: 0 auto;
}

.tabla {
  display: flex;
  border: 3px solid #dfac10;
  border-radius: 8px;
  background-color: #fff6ce;
  gap: 2rem;
  justify-content: center;
  text-align: center;
  width: 82%;
  padding: 1rem;
}

.boton-borrar, .boton-configurar {
  text-align: center;
  justify-content: center;
  width: 3rem;
  margin-left: 4rem;
  cursor: pointer;
}

.opciones-estado {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
}

.opciones-estado select, .opciones-estado button {
  margin: 0.5rem 0;
}
</style>
