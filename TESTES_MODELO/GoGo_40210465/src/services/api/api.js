import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gogo-api-amber.vercel.app/',
  contentType: 'application/json',
});

export default api;
