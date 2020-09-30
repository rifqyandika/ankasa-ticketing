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
  },
  SET_LOADING (state, payload) {
    state.all.loading = payload
  },
  SET_PRODUCTS_DETAIL (state, payload) {
    state.detail = payload
  },
  SET_META (state, payload) {
    state.all.meta = payload
  }
}

const getters = {
  getallData (state) {
    return state.user
  },
  getdetail (state) {
    return state.detail
  }
}

const actions = {
  getData (context, payload) {
    context.commit('SET_LOADING', true)
    return new Promise((resolve, reject) => {
      if (payload) {
        axios.get(`${url}/products/getall?`, {
          params: {
            name: payload.name,
            page: payload.page
          }
        })
          .then((response) => {
            context.commit('SET_PRODUCTS', response.data)
            context.commit('SET_META', response.meta)
            resolve(response.message)
          })
          .catch((err) => {
            reject(err)
          })
          .finally(() => {
            context.commit('SET_LOADING', false)
          })
      } else {
        axios.get(`${url}/products/getall?`)
          .then((response) => {
            context.commit('SET_PRODUCTS', response.data)
            context.commit('SET_META', response.meta)
            resolve(response.message)
          })
          .catch((err) => {
            reject(err)
          })
          .finally(() => {
            context.commit('SET_LOADING', false)
          })
      }
    })
  },
  sendData (context, payload) {
    console.log(payload.image)
    const formdata = new FormData()
    formdata.append('product_name', payload.product_name)
    formdata.append('category_id', payload.category_id)
    formdata.append('product_price', payload.product_price)
    formdata.append('image', payload.image)
    return new Promise((resolve, reject) => {
      axios.post(url + '/products/insert', formdata)
        .then((response) => {
          resolve(response.message)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
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
  },
  deleteData (context, payload) {
    console.log(payload)
    return new Promise((resolve, reject) => {
      axios.delete(`${url}/products/delete/${payload}`)
        .then((response) => {
          console.log(response.data)
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
