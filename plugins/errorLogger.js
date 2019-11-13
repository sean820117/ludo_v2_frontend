import axios from '../config/axios-config'

async function errorLogger(path,func,error) {
    try {
        let r = await axios.post('/apis/error-logger',{
            path:path,
            func: func,
            origin: 'frontend',
            error:error,
            userAgent: navigator.userAgent,
        })
        console.log("send to errorLogger success");
    } catch (error) {
        console.error("errorLogger broken",error);
    }
}

export default ({ app }, inject) => {
    inject('errorLogger', errorLogger)
}