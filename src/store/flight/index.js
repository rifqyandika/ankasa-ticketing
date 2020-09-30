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
    console.log(payload)
    return new Promise((resolve, reject) => {
      axios.get(`${url}/flight/getflight?origin=${payload.origin}&destination=${payload.destination}&date=${payload.date}&class_flight=${payload.classFlight}`)
        .then((response) => {
          context.commit('SET_FLIGHT', response.data.data)
          console.log(response.data.data)
          resolve(response.data.message)
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
