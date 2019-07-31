import axios from '../config/axios-config'

async function getPoseResult (user_id,pose_id,createdAt) {
    if (!process.server) {
        try {
            const res = await axios.post('/apis/get-pose-result',{user_id,pose_id,createdAt})
            console.log(res.data);
            return res.data;
        } catch (error) {
            return false;
        }
    }   
}

export default ({ app }, inject) => {
    inject('getPoseResult', getPoseResult)
}