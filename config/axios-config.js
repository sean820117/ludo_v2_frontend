import axios from 'axios';

// baseURL: 'https://f49a3285.ngrok.io',
var axiosInstance = axios.create({
    baseURL: 'https://api.ludonow.com',
    // baseURL: 'http://c9990ac9.ngrok.io',
    withCredentials: 'true',
    timeout: 2000000,
});

export default axiosInstance;