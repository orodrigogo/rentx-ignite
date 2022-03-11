import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.142.20.40:3333',
});

export { api };
