import axios from '../config/axios-config'

async function getPoseResult (user_id,pose_id,createdAt) {
    if (!process.server) {
        try {
            let form = new FormData();
            form.append('user_id',user_id)
            form.append('pose_id',pose_id)
            form.append('language',language)
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