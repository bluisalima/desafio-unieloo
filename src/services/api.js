import axios from 'axios';

const api = axios.create({ baseURL: 'https://unieloo-sandbox.herokuapp.com/teste'});

export default api;
