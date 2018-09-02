import axios from 'axios';
import {getAccessToken} from './../auth/auth.js';

export const loader = axios.create({
  baseURL: 'http://localhost:3001/api/v1',
  timeout: 1000,
  headers: {'Authorization': 'Bearer '+ getAccessToken()}
});
