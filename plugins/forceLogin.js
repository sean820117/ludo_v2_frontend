import axios from '../config/axios-config'
import Vue from 'vue'
// import checkAuthority from '../middleware/checkAuthority'

async function forceLogin (store) {
    console.log("forceLogin");
    if (!process.server) {
        console.log("middleware from client side");
        if (!store.state.user.data.user_id.trim()) {
            try {
                const { data } = await axios.get('/apis/user')
                if (data.status == 200) {
                    console.log("user : " + JSON.stringify(data.user));
                    store.commit('user/updateLocalUserData',data.user);
                    return true;
                } else {
                    console.log("status : " + data.status)
                    window.alert("請先登入再進行操作");
                    this.$router.push("/login");
                    return false;
                }
            } catch(e) {
                console.log("call api error : \n" + e);
                // window.alert("login failed!");
                // window.location.href = process.env.baseUrl + "/login";
                return false;
            }       
        } else {
            console.log("has store");
            return true;
        }
    }   
}

export default ({ app }, inject) => {
    inject('forceLogin', forceLogin)
}