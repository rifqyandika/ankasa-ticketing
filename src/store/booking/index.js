import axios from 'axios'
const { url } = require('../../helper/env')

const state = () => {
  return {
    booking: []
  }
}

const mutations = {
  SET_BOOKING (state, payload) {
    state.booking = payload
  }
}

const getters = {
  getallBooking (state) {
    return state.booking
  }
}

const actions = {
  getDataBooking (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${url}/booking/getAll`)
        .then((response) => {
          context.commit('SET_BOOKING', response.data.data)
          console.log(response.data.data)
        })
        .catch((err) => {
          console.log(err)
        })
    })
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
