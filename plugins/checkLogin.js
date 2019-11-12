import axios from '../config/axios-config'

async function checkLogin (store) {
    console.log("checkLogin");
    if (!process.server) {
        // console.log(store.getters['user/getData']);
        if (!store.state.user.data.user_id) {
            try {
                const { data } = await axios.get('/apis/user')
                if (data.status == 200) {
                    const mami_user_data = await axios.get('/apis/mamiyoga-user-data');
                    Object.assign(data.user,mami_user_data.data);
                    console.log("user : " , data.user);
                    store.commit('user/updateLocalUserData',data.user);
                    return true;
                } else {
                    console.log("status : " + data.status)
                    return false;
                }
            } catch(e) {
                console.log("call api error : \n" + e);
                // window.alert("login failed!");
                // window.location.href = process.env.baseUrl + "/login";
                return { data: new Object() }
            }       
        } else {
            console.log("has user store");
            return true;
        }
    }   
}

export default ({ app }, inject) => {
    inject('checkLogin', checkLogin)
}