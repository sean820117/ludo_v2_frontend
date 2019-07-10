import axios from '../config/axios-config'

async function checkPayed(u_id,p_id) {  
    let user_id = u_id;
    let product_id = p_id;

    try {
        let response = await axios.post('/apis/check-is-payed',{product_id:product_id,user_id:user_id})
        if (response.data.status == '200') {
            console.log("check-payed success")
            if(response.data.result == 1) {
                return true;
            } else {
                return false;
            }
        } else {
            console.log(response)
            return false;
        }
    } catch(error) {
        console.log(error)
        return false;
    }
}

export default ({ app }, inject) => {
    inject('checkPayed', checkPayed)
}