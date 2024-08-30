import axios from 'axios';
import { tokenStorage } from '@/storage/token';

export const client = axios.create({
  baseURL: 'https://16.design.htmlacademy.pro/six-cities',
  timeout: 1000,
});

client.interceptors.request.use(
  (config) => {
    const token = tokenStorage.get();
    if (token) {
      config.headers['X-Token'] = token;
    }
    return config;
  },
  (error) => Promise.reject(error),
);
