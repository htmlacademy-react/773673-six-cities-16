import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://16.design.htmlacademy.pro/six-cities',
  timeout: 500,
});
