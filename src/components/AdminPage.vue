<template>
    <nav class="dashboard">
        <img src="../assets/logo2.jpg" alt="" class="imagen_navegacion">
          <router-link to="/inicio" class="navegacion__enlace">Lista de mesas</router-link>
          <router-link to="/inicio" class="navegacion__enlace">Mesas Reservadas</router-link>
          <button class="boton" @click="cerrarSesion">Cerrar Sesión</button>
        </nav>
     <div class="contain-home">
      <h1 class="titulo">MESAS</h1>
      <p class="descripcion">Escoge la mesa de tu preferencia </p>
      <div class="carta">
        <img src="../assets/1.jpg" alt="Imagen de carta" class="imagen_carta">
        <div class="contenido">
          <h2>Título de la carta</h2>
          <p>Descripción de la carta. Puedes escribir aquí más detalles sobre lo que ofrece esta carta.</p>
          <button class="boton_carta">Ver más</button>
        </div>
        
        </div>
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
     .carta {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto auto;
    border: 3px solid #f6af21;
    border-radius: 10px;
    overflow: hidden;
    margin: 20px;
    background-color: #dbad50;
    color: white;
    width: 30%;
    height: 100%;
  }
  
  .imagen_carta {
  margin-left: 1rem;
    width: 75%;
  padding: 1rem;
    border-bottom: 1px solid #fff;
  }
  
  .contenido {
    padding: 20px;
  }
  
  .boton_carta {
    background-color: #d68c00;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .boton_carta:hover {
    background-color: #b57000;
  }
  
     
  
  
       </style>