import axios from 'axios';
import server from '../config/server';

let HTTPHandler = axios.create({
  baseURL: server.BASE_URL,
  headers: {
    Authorization: 'Bearer ' + server.API_TOKEN,
  },
});

export default HTTPHandler;
