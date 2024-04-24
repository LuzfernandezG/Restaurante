

<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">
  <div class="template">
    <nav v-if="route.path !== '/home'" class="navegacion">
      <img src="../assets/logo2.jpg" alt="" class="imagen_navegacion">
      <div class="links">
        <router-link to="/inicio" class="navegacion__enlace">Principal</router-link>
        <router-link to="/conocenos" class="navegacion__enlace">Mas informacion</router-link>
        <router-link to="/login" class="navegacion__enlace">Iniciar Sesión</router-link>
      </div>
    </nav>

    <div class="contenedor">
      <router-view></router-view>
    </div>

    <footer v-if="route.path !== '/home'">
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
        case '/home':
        datos.value = 'home';
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

background-image: url(/src/assets/fondo3.jpg);
align-items: center center;
display: flex;
width: 100%;
height: 100%;
margin: 0 auto;
font-family: "Figtree", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;

  
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
 


  }
 *, *:before, *:after {
    box-sizing: inherit;
 }

 .navegacion {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  color: #fff;
  background: black;
  display: flex;
  align-items: center; /* Alinear verticalmente al centro */
  padding: 2.2rem;
}



.links {
  margin-left: auto;
  padding-right: 2rem; /* Empujar los enlaces hacia la derecha */
}

.navegacion__enlace{
    color:#f6af21;
    padding-right: 2rem;
    
}

.navegacion__enlace:hover{
    color: white;
}

.imagen_navegacion{
  width: 21rem;
  height: 3rem;
  
  
  
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

