import axios from '../config/axios-config'

async function poseUpload (file,user_id,pose_id,language,is_dev = false) {
    if (!process.server) {
        try {
            let form = new FormData();
            form.append('file',file)
            form.append('pose_id',pose_id)
            form.append('language',language)
            form.append('user_id',user_id);
            if (is_dev) {
                form.append('dev_url','http://ec2-3-0-127-179.ap-southeast-1.compute.amazonaws.com:8787/pose_estimation/input/');
                console.log('is_dev');
            }
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