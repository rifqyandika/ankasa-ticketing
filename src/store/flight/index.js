import axios from 'axios'
const { url } = require('../../helper/env')

const state = () => {
  return {
    flight: []
  }
}

const mutations = {
  SET_FLIGHT (state, payload) {
    state.flight = payload
  }
}

const getters = {
  getallFlight (state) {
    return state.flight
  }
}

const actions = {
  getDataFlight (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${url}/flight/getAll`)
        .then((response) => {
          context.commit('SET_FLIGHT', response.data.data)
        //   console.log(response.data.data)
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
