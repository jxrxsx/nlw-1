import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.129.114:3333'
});

export default api;