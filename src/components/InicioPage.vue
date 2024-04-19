<template>
    <div class="contain-banner">
             <div class="banner2">
              <div class="info">
                <h1>Bienvenido a nuestra plataforma</h1>
                <p>¿Deseas conocer mas Informacion?</p>
               <button><router-link to="/conocenos">Click Aqui</router-link></button>
              </div>
             </div> 
         </div>
      </template>
      
      <script setup>
 
      </script>
      
      
      <style>

      .contain-banner{
        width: 100%;
        height: 500px;
        animation-name: changeBackground;
    animation-duration: 15s;
    animation-iteration-count: infinite;
        background-size: 100% 100%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      @keyframes changeBackground {
    0% { background-image: url('../assets/1.jpg'); }
    33% { background-image: url('../assets/2.jpg'); }
    66% { background-image: url('../assets/1.jpg'); }
    100% { background-image: url('../assets/2.jpg'); }
}
.banner2{
  width: 100%;
  height: 500px;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
 
}
.info{
 
    width: 500px;
    color: white;
    z-index: 1;
    text-align: center;
    max-width: 550px;
  
}
button{
  border-radius: 4px;
    border: unset;
    padding: 15px 30px;
    font-size: larger;
}




      


      </style>