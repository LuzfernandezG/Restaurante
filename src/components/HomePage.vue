<template>
   <div class="contain-home">
     <h1>Bienvenido</h1>
     <button @click="cerrarSesion">Cerrar Sesión</button>
   </div>
 </template>
 
 <script setup>
 import { useRouter } from 'vue-router'; // Importa el router de Vue
 import axios from '@/axios'; // Importa tu instancia de Axios
 
 const router = useRouter(); // Obtiene el router
 
 // Función para cerrar sesión
 const cerrarSesion = () => {
   // Envía una solicitud al servidor para cerrar sesión
   axios.get("/logout")
     .then((response) => {
       if (response.status === 200) {
         // Si la respuesta es exitosa, redirige al usuario a la página de inicio de sesión
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
     .contain-home{
      width: 500px;
    background-color: white;
    border-radius: 10px;
    padding: 50px;
    filter: none;
     }
   
     </style>
     