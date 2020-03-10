import axios from 'axios';

// baseURL: 'https://f49a3285.ngrok.io',
var axiosInstance = axios.create({
    baseURL: 'https://api.ludonow.com',
    // baseURL: 'https://30ec3ee3.ngrok.io',
    // baseURL: 'http://localhost:8080',
    withCredentials: 'true',
    timeout: 2000000,
});

export default axiosInstance;
