import axios from 'axios'
const { url } = require('../../helper/env')

const state = () => {
  return {
    city: []
  }
}

const mutations = {
  SET_CITY (state, payload) {
    state.city = payload
  }
}

const getters = {
  getallCity (state) {
    return state.city
  }
}

const actions = {
  getDataCity (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${url}/city/getAll`)
        .then((response) => {
          context.commit('SET_CITY', response.data.data)
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
