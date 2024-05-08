<template>
  <div>
    <img src="../assets/12.png" class="imagen-home">

    <form @submit.prevent="buscarMesas">
      <input type="date" v-model="fecha" required>
      <button type="submit">Buscar</button>
    </form>

    <div class="contain-mesas">
      <div v-for="mesa in mesas" :key="mesa.numero" class="mesa">
        <div class="contenedor-img">
          <img src="../assets/7.jpg" class="imagen-mesa">
        </div>
        <h3 class="titulo-mesa">{{ mesa.nombre }}</h3>
        <div class="info-mesa">
          <p>Número: {{ mesa.numero }}</p>
          <p>Descripción: {{ mesa.descripcion }}</p>
          <button class="boton" @click="mostrarFormularioReserva(mesa)">RESERVAR</button>
          <form v-if="mostrarFormulario && mesa === mesaSeleccionada" @submit.prevent="reservarMesa(mesa.numero)">
            <label for="nombreReserva">Nombre de quien reserva:</label>
            <input type="text" id="nombreReserva" v-model="nombreReserva" required>
            <label for="motivoReserva">Motivo de la reserva:</label>
            <textarea id="motivoReserva" v-model="motivoReserva" required></textarea>
            <button type="submit">Reservar Ahora</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from '@/axios';
import { ref } from 'vue';

// Declaramos las variables como ref para poder reactivamente
const mesas = ref([]);
const fecha = ref('');
const mostrarFormulario = ref(false);
const mesaSeleccionada = ref(null);

// Definimos las variables nombreReserva y motivoReserva
const nombreReserva = ref('');
const motivoReserva = ref('');

// Función para obtener las mesas disponibles
const obtenerMesas = async () => {
  try {
    const response = await axios.get(`/mesas-disponibles?fecha=${fecha.value}`);
    mesas.value = response.data;
  } catch (error) {
    console.error('Error al obtener las mesas:', error);
  }
}

// Función para buscar las mesas
const buscarMesas = async () => {
  obtenerMesas();
}

// Función para mostrar el formulario de reserva
const mostrarFormularioReserva = (mesa) => {
  mostrarFormulario.value = true;
  mesaSeleccionada.value = mesa;
}

// Función para reservar una mesa
const reservarMesa = async (numeroMesa) => {
  try {
    // Enviamos una solicitud POST al endpoint '/api/reservar-mesa' con los datos necesarios
    await axios.post('/reservar-mesa', { 
      nombreReservante: nombreReserva.value,
      fecha: fecha.value, 
      numeroMesa,
      motivo: motivoReserva.value
    });
    console.log('Mesa reservada con éxito');
    // Actualizar la lista de mesas después de reservar
    obtenerMesas();
    // Ocultar el formulario después de reservar
    mostrarFormulario.value = false;
  } catch (error) {
    console.error('Error al reservar la mesa:', error);
  }
}
</script>

<style>
.contain-mesas {
  width: 90%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 2rem;
  justify-content: center;
  gap: 1rem;
}

.mesa {
  width: 100%;
  border: 3px solid #dfac10;
  border-radius: 8px;
  background-color: #fff6ce;
}

.contenedor-img {
  display: flex;
  justify-content: center;
}

.imagen-mesa {
  width: 18rem;
  margin: auto;
  padding: 1rem;
}

.titulo-mesa {
  text-align: center;
  text-transform: uppercase;
}

.info-mesa {
  padding: 1rem;
}

.imagen-home {
  padding-top: 3rem;
  padding-bottom: 1rem;
  width: 95%;
}
</style>

