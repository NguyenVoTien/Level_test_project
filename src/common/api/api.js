import axios from 'axios';

const API = axios.create({
    baseURL: 'http://103.82.195.138:8000',
});

export default API;