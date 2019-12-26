import axios from '../config/axios-config'

async function sendData (port,send_data) {
    if (!process.server) {
        try {
            const res = await axios.post(port,send_data)
            console.log(res)
            return res 
        } catch(error) {
            return false;
        }
    }

}

export default ({ app }, inject) => {
    inject('sendData', sendData)
}