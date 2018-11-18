import axios from '../config/axios-config'

export default function ({ store, error }) {
    if (!process.server) {
        console.log("middleware from client side");
        if (!store.state.user.data.is_payed_user) {
            window.alert("You are not payed user");
        }
    }   
}