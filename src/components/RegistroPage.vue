<template class="template-registro">
  <div class="contain-registro">
<div class="imagen">
    <img src="../assets/2.jpg" class="imagen-registro">
  </div>
<div class="formaregistro">
            <h1>Crear Cuenta</h1>
            <p>registrate para poder acceder a la plataforma</p>
            <form id="register-form">
                <label for="user" class="sr-only">User</label>
                <input type="text" name="user" id="user" placeholder="Nombre de Usuario">
                <label for="email" class="sr-only">Email</label>
                <input type="email" name="email" id="email" placeholder="Corre Electronico">
                <label for="password" class="sr-only">Password</label>
                <input type="password" name="password" id="password" placeholder="Contraseña">
                <button type="submit">Registrarse</button>
                <p id="mensaje-error" class="error escondido">Error al Registrarse</p>

            </form>
            <p>¿Ya tienes una cuenta? - <a href="/login">Inciar Sesion</a></p>
        </div>
      </div>
    
  </template>
  
  <script setup>
import api from '../axios';
import { onMounted } from 'vue';

onMounted(() => {
  const registerForm = document.getElementById('register-form');
  console.log('Register form:', registerForm); // Verificar si registerForm es null o no

  if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();//elminar que se recargue por defecto
    
      const user = e.target.elements.user.value;
      const email = e.target.elements.email.value;
      const password = e.target.elements.password.value;
    
      try {
        const response = await api.post('/register', { user, email, password });
        console.log(response.data);
        window.location.href = '/login';
        
        // Manejar la respuesta del servidor, por ejemplo, redirigir al usuario a otra página
      } catch (error) {
        console.error('Error durante el registro:', error);
        // Mostrar mensaje de error al usuario
        document.getElementById('mensaje-error').innerText = 'Error durante el registro. Por favor, inténtelo de nuevo.';
      }
    });
  } else {
    console.error('El elemento con ID "register-form" no se encontró en el DOM.');
  }
});
</script>

   <style>
   .contain-registro{
    display: flex;
    margin-top: 11rem;
    margin-bottom: 4rem;
   }
   

   .imagen-registro{
    width: 22rem;
   }
.imagen-registro{
    border-radius: 20px;
    padding-right: 1rem;
    
  }

.formaregistro{
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
  