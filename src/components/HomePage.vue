<template>
  <div>
    <nav class="dashboard">
      <img src="../assets/logo2.jpg" alt="" class="imagen_navegacion">
      <router-link to="/home/lista2" class="navegacion__enlace">Lista de mesas</router-link>
      <router-link to="/home/reservaciones" class="navegacion__enlace">administrar</router-link>
      <button class="boton" @click="cerrarSesion">Cerrar Sesión</button>
    </nav>
   
   
    <div class="contain-home">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import axios from '@/axios'; 

const datos = ref("");
const router = useRouter();

const actualizarDatos = () => {
  switch (router.path) {
    case '/home':
      datos.value = 'home';
      break;
    case '/reservaciones':
      datos.value = 'admin';
      break;
  }
}

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

onMounted(() => {
  actualizarDatos();
});
</script>
   <style>
.contain-home{
       width: 75%;
       height:100%;
       background-color: white;
       display: grid;
      
       
     
       margin-left: 18rem;
      }
      .titulo,
      .descripcion{
       font-size: 1.5rem;
       text-align: center;
       
     
      }
      
 
      
      .dashboard{
       display: grid;
       position: fixed;
       top: 0;
       left: 0;
       height: 100%;
       width: 200px; /* Ajusta el ancho según tus necesidades */
       background-color: black;
       padding: 2rem 2rem;
       line-height: 1rem;
       
      }
      .navegacion__enlace{
     color:#f6af21;
     font-size: 1rem;
     text-align: center;
     text-decoration: none;
     font-size: 1.2rem;
     
     }
 
     .navegacion__enlace:hover{
     color: white;
     }
    .imagen_navegacion{
      width: 12rem;
      background-position: center;
     }
    .boton {
     font-size: 0.8rem; /* Tamaño de fuente más pequeño */
     padding: 0.5rem 1rem; /* Ajustar el padding */
    }
    .imagen3{
      padding-top: 2rem;
      padding-left: 18rem;
      width: 85%;
    }

  
    </style>