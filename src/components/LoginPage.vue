<template class="template-login">
  <div class="imagen">
    <img src="../assets/1.jpg" class="imagen-login">
  </div>
    <div class="formalogin">
      <h1>Iniciar Sesión</h1>
      <p>Ingresa tus Datos para acceder</p>
      <form @submit.prevent="login">
        <label for="user" class="sr-only">Usuario</label>
        <input type="text" v-model="user" id="user" placeholder="Nombre de Usuario">
        <label for="password" class="sr-only">Contraseña</label>
        <input type="password" v-model="password" id="password" placeholder="Contraseña">
        <button type="submit">Iniciar Sesión</button>
        <p class="error escondido" v-if="error">{{ error }}</p>
      </form>
      <p>¿Aun no estás registrado? - <router-link to="/registro">Registrarse</router-link></p>
    </div>
  </template>
  
  <script setup>
  import axios from '../axios';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const user = ref('');
  const password = ref('');
  const error = ref('');
  const router = useRouter();
  
  async function login() {
    try {
      const response = await axios.post('/login', { user: user.value, password: password.value });
      console.log(response.data);
      const token = response.data.token; // Extraer el token de la respuesta del servidor
      localStorage.setItem('token', token); // Almacenar el token en el almacenamiento local
      router.push('/home');
    } catch (error) {
      console.error('Error durante el inicio de sesión:', error);
      error.value = 'Error al iniciar sesión. Por favor, inténtalo de nuevo.';
    }
  }
  </script>
  
  <style scoped>


  .imagen-login{
    border-radius: 20px;
    padding-right: 1rem;
    
  }
 
 .formalogin{
    width: 500px;
    background-color: white;
    border-radius: 10px;
    padding: 50px;
    filter: none;
    text-align: center;
   }


form{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
form+p form p{
    text-align: center;
}

input,button{
    border-radius: 4px;
    border: unset;
    padding: 15px 30px;
    font-size: larger;
}
button{
    background-color: #f6af21;
    color: white;
    font-weight: bold;
    cursor: pointer;
}
button:hover{
    background-color: black;
}

.sr-only{
    position: absolute;
    left: -100000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
}
.error{
    color: rgb(243, 86, 86);
}
.escondido{
    display: none;
}



  </style>
  