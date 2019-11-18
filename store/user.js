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
    updateFreeTrial(state, free_trial_starting_time){
        state.data.free_trial_starting_time = free_trial_starting_time;
    },
    updataPregnantData(state, pregnant_data){
        state.data.pregnant_data = pregnant_data;
    }
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