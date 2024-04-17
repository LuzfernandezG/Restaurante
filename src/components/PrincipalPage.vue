
<template>

    <div class="template">
      <nav class="navegacion">
        <img src="../assets/logo2.png" alt="" class="imagen_navegacion">
        <router-link to="/inicio" class="navegacion__enlace">PRINCIPAL</router-link>
        <router-link to="/conocenos" class="navegacion__enlace">CONOCENOS</router-link>
        <router-link to="/login" class="navegacion__enlace">RESERVA AQUI</router-link>
      </nav>
  

      <div class="contenedor">
        <router-view></router-view>
      </div>
  
      <footer>
        <p class="footer__texto">Realizado por Luz Angela Fernandez y Jesus Soto.</p>
      </footer>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  import { ref, onMounted } from 'vue';
  
  const datos = ref("");
  const route = useRoute();
  
  const actualizarDatos = () => {
    switch (route.path) {
      case '/':
        datos.value = 'Pricipal';
        break;
      case '/conocenos':
        datos.value = 'Conocenos';
        break;
      case '/login':
        datos.value = 'login';
        break;
        case '/registro':
        datos.value = 'registro';
        break;
        case '/inicio':
        datos.value = 'inicio';
        break;

    }
  }
  
  
  onMounted(() => {
    actualizarDatos();
  });
  </script>
  


<style scoped>



.contenedor{
justify-content: center;
padding: 7rem;
background-image: url(/src/assets/fondo3.jpg);
align-items: center center;
display: flex;
width: 100%;
margin: 0 auto;

  
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  padding-top: 2rem;
  color: white;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-size: 1.5rem;
}
p{
    font-weight: 400;
    font-style: normal;

}

.template {
  background-color: white;
  box-sizing: border-box; /* Hack Elimina Efecto caja */
  font-size: 62.5%; /* Mejora el entorno de diseño */
  background-repeat: no-repeat;
   background-size: 100%;
   background-attachment: fixed;
   padding-top: 6rem;
 


  }
 *, *:before, *:after {
    box-sizing: inherit;
 }

.navegacion{
   position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  color: #fff; /* Color del texto */
  background: white;
  display: grid;
  justify-content: center;
  text-align: center;
  line-height: 0.8rem;
  padding: 1rem  ; 
}
@media (min-width:768px){
    .navegacion{
    display: flex;
    padding: 2rem 3rem ;
    gap: 4rem;
    line-height: 2rem;
    }
}

.navegacion__enlace{
    color:#f6af21;
    
}

.navegacion__enlace:hover{
    color: rgb(0, 0, 0);
}

.imagen_navegacion{
  width: 20rem;
  height: 4rem;
  
  
}

footer{
  background:#f6af21;
  color:black;
  
  font-weight: 400;
  font-style: normal;
  padding: 1px;
  font-size: 1rem;
  text-align: center; 

}


</style>

