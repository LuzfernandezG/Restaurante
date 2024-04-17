import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000/api', // URL base para todas las solicitudes
  timeout: 5000, // Tiempo máximo de espera para las solicitudes
});

export default instance;
