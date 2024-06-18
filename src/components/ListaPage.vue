<template>
  <h1 class="listado">Listado de Mesas</h1>
  <div class="contain-mesas">
    <div v-for="mesa in mesas" :key="mesa.numero" class="mesa">
      <div class="contenedor-img">
        <img src="../assets/7.jpg" class="imagen-mesa">
      </div>
      <h3 class="titulo-mesa">{{ mesa.nombre }}</h3>
      <div class="info-mesa" v-if="!mesa.editando">
        <p>Número: {{ mesa.numero }}</p>
        <p>Descripción: {{ mesa.descripcion }}</p>
      </div>
      <form class="formulario-mesa" v-else @submit.prevent="guardarEdicion(mesa)">
        <input v-model="mesa.descripcion" type="text" placeholder="Descripción">
        <button type="submit">Guardar</button>
      </form>
      <div class="botones">
        <img class="botonM" src="../assets/editar.png" @click="activarEdicion(mesa)">
        <img class="botonM" src="../assets/borrar.png" @click="confirmarEliminacion(mesa.numero)">
      </div>
    </div>
    <!-- Formulario para agregar nueva mesa -->
    <div v-if="mostrarFormulario" class="formulario-agregar-mesa">
      <h3>Agregar Nueva Mesa</h3>
      <form @submit.prevent="agregarMesa">
        <input v-model="nuevaMesa.nombre" type="text" placeholder="Nombre">
        <input v-model="nuevaMesa.numero" type="text" placeholder="Número">
        <input v-model="nuevaMesa.descripcion" type="text" placeholder="Descripción">
        <button type="submit">Guardar</button>
      </form>
    </div>
  </div>
  <!-- Botón para mostrar el formulario de agregar mesa -->
  <img class="posicion" src="../assets/mas.png" @click="mostrarFormulario = true">
</template>

<script setup>
import axios from '@/axios';
import { ref, onMounted } from 'vue';

const mesas = ref([]);
const mostrarFormulario = ref(false);
const nuevaMesa = ref({ nombre: '', numero: '', descripcion: '' });

const obtenerMesas = async () => {
  try {
    const response = await axios.get('/mesas/');
    mesas.value = response.data;
    // Agregar propiedad 'editando' a cada mesa para controlar la edición
    mesas.value.forEach(mesa => {
      mesa.editando = false;
    });
  } catch (error) {
    console.error('Error al obtener las mesas:', error);
  }
}

const activarEdicion = (mesa) => {
  mesa.editando = true;
}

const guardarEdicion = async (mesa) => {
  try {
    await axios.put(`/mesas/${mesa.numero}`, mesa);
    // Desactivar el modo de edición y actualizar la lista de mesas
    mesa.editando = false;
    alert("Los datos fueron actualizados");
    await obtenerMesas();
  } catch (error) {
    console.error('Error al guardar los cambios:', error);
  }
}
const confirmarEliminacion = (numeroMesa) => {
  if (confirm("¿Estás seguro de que deseas eliminar esta mesa?")) {
    eliminarMesa(numeroMesa);
  }
}
//funcion eliminar
const eliminarMesa = async (numeroMesa) => {
  try {
    await axios.delete(`/mesas/${numeroMesa}`);
    alert("Mesa eliminada");
    await obtenerMesas();
  } catch (error) {
    console.error('Error al eliminar la mesa:', error);
  }
}
//funcion agregar
const agregarMesa = async () => {
  try {
    await axios.post('/mesas', nuevaMesa.value);
    // Resetear los valores del formulario 
    nuevaMesa.value = { nombre: '', numero: '', descripcion: '' };
    mostrarFormulario.value = false;
   
    await obtenerMesas();
    alert("Mesa agregada a la lista");
  } catch (error) {
    console.error('Error al agregar la mesa:', error);
    if (error.response.status === 400 && error.response.data === "Los datos ingresados ya existen") {
      alert("Los datos ingresados ya existen en la base de datos");
    }
  }
}

onMounted(() => {
  obtenerMesas();
});
</script>

<style>

.listado{
  margin: 0 auto;
  padding: 1rem;
}
.contain-mesas{
  width: 90%;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  padding: 2rem;
  justify-content: center;
  gap:1rem;
 

}
.mesa{
  width: 100%;
border: 3px solid #dfac10;
border-radius: 8px;
background-color:#fff6ce;


}
.contenedor-img{
  display: flex;
  justify-content: center;
}

.imagen-mesa{
  width: 18rem;
  margin: auto;
  padding: 1rem;
 
}
.titulo-mesa{
  text-align: center;
  text-transform: uppercase;

}
.botones{
  display: flex;
  gap: 2rem;
  justify-content: center;
  
}
.botonM{
  width: 10%;
  padding-bottom: 1rem;
}
.info-mesa{
  padding: 1rem;
}
.posicion{
  width: 5%;
  display: block;
  margin: auto;
}


</style>
