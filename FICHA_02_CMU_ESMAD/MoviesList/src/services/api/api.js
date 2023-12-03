import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dummyapi.online/api',
  contentType: 'application/json',
});

export default api;
