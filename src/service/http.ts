import axios from 'axios';
import server from '../config/server';

const http = axios.create({
  baseURL: server.BASE_URL,
  headers: {
    Authorization: 'Bearer ' + server.API_TOKEN,
    Accept: 'application/json',
  },
});

export default http;
