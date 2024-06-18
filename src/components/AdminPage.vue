<template>
  <div class="container">
    <nav class="dashboard">
      <img src="../assets/logo2.jpg" alt="" class="imagen_navegacion">
      <router-link to="/admin/lista" class="navegacion__enlace">Lista de mesas</router-link>
      <router-link to="/admin/actuales" class="navegacion__enlace">reservas actuales</router-link>
      <button class="boton" @click="cerrarSesion">Cerrar Sesión</button>
    </nav>
    <div class="contain-home">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import axios from '@/axios'; 

const router = useRouter();

// Función para cerrar sesión
const cerrarSesion = () => {

  axios.get("/logout")
    .then((response) => {
      if (response.status === 200) {
       
        router.push("/login");
      } else {
        console.error("Error al cerrar sesión:", response.statusText);
      }
    })
    .catch((error) => {
      console.error("Error al cerrar sesión:", error);
    });
};
</script>

<style>
body {
  margin: 0;
  background-color: rgb(231, 201, 143);
}

.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.dashboard {
  background-color: black;
  margin: 0;
  width: 15rem;
}

.contain-home {
  
  background-color: rgb(231, 201, 143);
  width: 85%;
  height:100vh; /* Establece la anchura al 100% */
}

/* Estilos adicionales según sea necesario */
.navegacion__enlace {
  color: #f6af21;
  font-size: 1.2rem;
  text-align: center;
  text-decoration: none;
}

.navegacion__enlace:hover {
  color: white;
}

.imagen_navegacion {
  width: 12rem;
  margin-left: 2rem;
 
}

.boton {
  margin-top: 1rem;
  font-size: 1rem;
  width: 90%;
  height: 35%;
  margin-left: 1rem;
  
}
</style>
