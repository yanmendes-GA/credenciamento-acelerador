import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sua-api-url.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
