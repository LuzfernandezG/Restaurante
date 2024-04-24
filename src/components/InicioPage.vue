<template>
    <div class="contain-banner">
             <div class="banner2">
              <div class="info">
                <h1 class="h1-info">Bienvenido a nuestra plataforma</h1>
                <p class="p-info">¿Deseas conocer mas Informacion?</p>
               <button><router-link class="boton" to="/conocenos">CLICK AQUI</router-link></button>
              </div>
             </div> 
         </div>
      </template>
      
      <script setup>
 
      </script>
      
      
      <style>
      .h1-info{
        font-size: 3rem;
      }
      .p-info{
        font-size: 1.2rem;
      }

      .contain-banner{
        margin-top: 7.5rem;
        width: 100%;
        height: 550px;
        animation-name: changeBackground;
    animation-duration: 12s;
    animation-iteration-count: infinite;
        background-size: 100% 100%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      @keyframes changeBackground {
    0% { background-image: url('../assets/3.jpg'); }
    33% { background-image: url('../assets/4.jpg'); }
    66% { background-image: url('../assets/3.jpg'); }
    100% { background-image: url('../assets/4.jpg'); }
}
.banner2{
  width: 100%;
  height: 550px;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);

 
}
.info{
  line-height: 0.5;
 padding-top: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centrar verticalmente */
  align-items: center; /* Centrar horizontalmente */
  color: white;
  text-align: center; /* Alinear texto al centro */
}
button{
  border-radius: 4px;
    border: unset;
    padding: 10px 40px;
    font-size: larger;
   
}
.boton{
  text-decoration: none;
  color: white;
  cursor: pointer;
}




      


      </style>