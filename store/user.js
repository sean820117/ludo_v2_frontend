import axios from '../config/axios-config'

export const state = () => ({
    data: {
        user_id:"",
        name:"",
        photo:"",
        marbles:"",
        heart:"",
        win_rate:"",
        success_rate:"",
        email:"",
        chatfuel_id:"",
        is_payed_user: "",
        
    }
})
export const mutations = {
    updateLocalUserData (state, userData) {
      state.data = userData;
    },
    remove (state, { todo }) {
        state.data = undefined;
    },
}

export const getters = {
    getData (state) {
      return state.data
    }
}

export const actions = {
    // async GET_USER_DATA ({ commit }) {
    //     const { data } = await axios.get('/apis/user')
    //     commit('updateLocalUserData', data)
    // }
}