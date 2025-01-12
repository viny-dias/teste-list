import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

// @todo Implementar as funções getTasks, createTask, updateTask e deleteTask.

export default api;