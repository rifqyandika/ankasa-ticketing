import axios from 'axios'
const { url } = require('../../helper/env')

const state = () => {
  return {
    user: []
  }
}

const mutations = {
  SET_USER (state, payload) {
    state.user = payload
  }
}

const getters = {
  getallData (state) {
    return state.user
  }
}

const actions = {
  getUserDetail (context, payload) {
    // console.log(payload)
    const id = localStorage.getItem('id')
    return new Promise((resolve, reject) => {
      axios.get(`${url}/user/getOne/${id}`)
        .then((response) => {
        //   console.log(response)
          context.commit('SET_USER', response.data.data[0])
          resolve(response.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  updateData (context, payload) {
    console.log(payload)
    const formdata = new FormData()
    formdata.append('email', payload.email)
    formdata.append('address', payload.address)
    formdata.append('fullname', payload.fullname)
    formdata.append('image', payload.newImage)
    formdata.append('phone', payload.phone)
    formdata.append('post_code', payload.post_code)
    return new Promise((resolve, reject) => {
      axios.patch(url + `/user/edit/${payload.id_user}`, formdata)
        .then((response) => {
          resolve(response.data.message)
        })
        .catch((err) => {
          reject(err)
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
