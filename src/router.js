import { createRouter, createWebHistory } from 'vue-router';
import Principal from './components/PrincipalPage.vue';
import Registro from './components/RegistroPage.vue';
import Login from './components/LoginPage.vue';
import Home from './components/HomePage.vue';
import Conocenos from './components/ConocenosPage.vue';
import Inicio from './components/InicioPage.vue';
import Admin from './components/AdminPage.vue';
import Lista from './components/ListaPage.vue'
import Actuales from './components/ActualesPage.vue'
import Lista2 from './components/ListaPageHome.vue'
import Reservaciones from './components/ReservacionPage.vue'



const routes = [
  { path: '/',component:Principal,
children:[
  { path: 'registro',name:"registro", component:Registro },
  { path: 'login',name:"login", component:Login },
  { path: 'conocenos',name:"conocenos", component:Conocenos },
  { path: 'inicio',name:"incio", component:Inicio },

]},
  

  { path: '/admin',name:"admin", component:Admin ,
children:[
  { path: 'lista',name:"lista", component:Lista },
  { path: 'actuales',name:"actuales", component:Actuales }

]},
  { path: '/home',name:"home",component:Home ,
children:[
  { path: 'lista2',name:"lista2", component:Lista2 },
  { path: 'reservaciones',name:"reservaciones", component:Reservaciones }

]}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
