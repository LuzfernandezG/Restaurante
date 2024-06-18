<template>
  <div class="contain-login">
    <div class="imagen">
      <img src="../assets/1.jpg" class="imagen-login">
    </div>
    <div class="formalogin">
      <h1>Iniciar Sesión</h1>
      <p>Ingresa tus Datos para acceder</p>
      <form @submit.prevent="login">
        <p class="textos">Usuario*</p>
        <label for="user" class="sr-only">Usuario</label>
        <input type="text" v-model="user" id="user" placeholder="Nombre de Usuario">
        <p class="textos">Contraseña*</p>
        <label for="password" class="sr-only">Contraseña</label>
        <input type="password" v-model="password" id="password" placeholder="Contraseña">
        <button type="submit">Iniciar Sesión</button>
        <p class="error escondido" v-if="error">{{ error }}</p>
      </form>
      <p>¿Aun no estás registrado? - <router-link to="/registro">Registrarse</router-link></p>
    </div>
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

  
    if (response.data.redirect === '/admin') {
      // Redirigir al admin
      router.push('/admin/lista');
      alert("Bienvenido Admin");
    } else {
      // Redirigir al home
      router.push('/home/lista2');
      alert("Bienvenido Cliente");
    }
  } catch (error) {
    console.error('Error durante el inicio de sesión:', error);
    alert("Ingresaste mal las credenciales");
    error.value = 'Error al iniciar sesión. Por favor, inténtalo de nuevo.';
  }
}
</script>

  <style scoped>


.contain-login{
  display: flex;
  margin-top: 11rem;
  margin-bottom: 4rem;
}

  .imagen-login{
    border-radius: 20px;
    padding-right: 1rem;
    width: 23rem;
   
    
  }
 
 .formalogin{
    width: 30rem;
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
    border-radius: 20px;
    border: unset;
    padding: 15px 30px;
    font-size: larger;
    background-color: rgb(221, 220, 220);
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
.textos{
  text-align: left;
 
}


  </style>
  