import axios from '../config/axios-config'

async function checkPayed(u_id,c_id) {  
    let user_id = u_id;
    let course_id = c_id;

    try {
        let response = await axios.post('/apis/check-user-engagement',{course_id:course_id,user_id:user_id})
        if (response.data.result == true) {
            console.log("already engagement")
            return true;
        } else {
            console.log("not engagement")
            return false;
        }
    } catch(error) {
        console.log("wrong params for check engagement")
        console.log(error)
        return false;
    }
}

export default ({ app }, inject) => {
    inject('checkPayed', checkPayed)
}