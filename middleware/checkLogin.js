import axios from '../config/axios-config'
import checkAuthority from './checkAuthority'

export default async function ({ store, error }) {
    if (!process.server) {
        console.log("middleware from client side");
        if (!store.state.user.data.user_id.trim()) {
            try {
                const { data } = await axios.get('/apis/user')
                if (data.status == 200) {
                    console.log("user : " + JSON.stringify(data.user));
                    store.commit('user/updateLocalUserData',data.user);
                } else {
                    console.log("status : " + res.data.status)
                    window.alert("login failed!");
                    window.location.href = "https://beta.ludonow.com/login?redirect=www";
                }
            } catch(e) {
                console.log("call api error : \n" + e);
                window.alert("login failed!");
                window.location.href = "https://beta.ludonow.com/login?redirect=www";
                return { data: new Object() }
            }       
        }
    }   
}