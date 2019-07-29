import axios from '../config/axios-config'

async function poseUpload (file,pose_id,language) {
    if (!process.server) {
        try {
            let form = new FormData();
            form.append('file',file)
            form.append('pose_id',pose_id)
            form.append('language',language)
            const res = await axios.post('/apis/video-upload',form)
            console.log(res.data);
            return res.data;
        } catch (error) {
            return false;
        }
    }   
}

export default ({ app }, inject) => {
    inject('poseUpload', poseUpload)
}