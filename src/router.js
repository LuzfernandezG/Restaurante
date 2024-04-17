import { createRouter, createWebHistory } from 'vue-router';
import Principal from './components/PrincipalPage.vue';
import Registro from './components/RegistroPage.vue';
import Login from './components/LoginPage.vue';
import Home from './components/HomePage.vue';
import Conocenos from './components/ConocenosPage.vue';
import Inicio from './components/InicioPage.vue';



const routes = [
  { path: '/',component:Principal},
  { path: '/registro',name:"registro", component:Registro },
  { path: '/login',name:"login", component:Login },
  { path: '/home',name:"home", component:Home },
  { path: '/conocenos',name:"conocenos", component:Conocenos },
  { path: '/inicio',name:"incio", component:Inicio }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
