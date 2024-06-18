<template>
  <div>
    <img src="../assets/12.png" class="imagen-home">
    <p class="descripcion-home">Ingresa la fecha para la que deseas la Reservacion con el formato mes/dia/año y a continuacion te mostraremos el listado de las mesas disponibles</p>

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
            <label for="nombreReserva">Nombre completo de quien reserva:</label>
            <input type="text" id="nombreReserva" v-model="nombreReserva" required>
            <label for="cedulaReserva">Ingresar cédula:</label>
            <input type="number" id="cedulaReserva" v-model="cedulaReserva" required>
            <label for="motivoReserva">Motivo de la reserva:</label>
            <textarea id="motivoReserva" v-model="motivoReserva" required></textarea>
            <label for="modalidad">Modo de Pago:</label>
            <select id="modalidad" v-model="modalidad" required>
              <option value="efectivo">Efectivo</option>
              <option value="tarjeta">Tarjeta</option>
            </select>
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

const mesas = ref([]);
const fecha = ref('');
const mostrarFormulario = ref(false);
const mesaSeleccionada = ref(null);


const nombreReserva = ref('');
const cedulaReserva = ref('');
const motivoReserva = ref('');
const modalidad = ref('');

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
    await axios.post('/reservar-mesa', { 
      nombreReservante: nombreReserva.value,
      cedula: cedulaReserva.value,
      fecha: fecha.value, 
      numeroMesa,
      motivo: motivoReserva.value,
      modalidad: modalidad.value
    });
    console.log('Mesa reservada con éxito');
    alert("Mesa reservada con éxito");
    obtenerMesas();
    mostrarFormulario.value = false;
  } catch (error) {
    console.error('Error al reservar la mesa:', error);
  }
}
</script>
<style>
.descripcion-home {
  text-align: center;
}

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

.boton {
  cursor: pointer;
}

select {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
}
</style>
