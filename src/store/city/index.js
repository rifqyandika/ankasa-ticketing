import axios from 'axios'
const { url } = require('../../helper/env')

const state = () => {
  return {
    city: [],
    country: []
  }
}

const mutations = {
  SET_CITY (state, payload) {
    state.city = payload
  },
  SET_COUNTRY (state, payload) {
    state.country = payload
  }
}

const getters = {
  getallCity (state) {
    return state.city
  },
  getallCountry (state) {
    return state.country
  }
}

const actions = {
  getDataCity (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${url}/city/getAll`)
        .then((response) => {
          context.commit('SET_CITY', response.data.data)
        })
        .catch((err) => {
          console.log(err)
        })
    })
  },
  getDataCountry (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${url}/country/getall`)
        .then((response) => {
          console.log(response.data.data)
          context.commit('SET_COUNTRY', response.data.data)
          resolve()
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
