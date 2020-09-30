import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
const { url } = require('./helper/env')

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

axios.defaults.headers = {
  token: localStorage.getItem('token')
}

axios.interceptors.response.use((response) => {
  // console.log(response)
  if (response.data.code === 403) {
    const refreshToken = localStorage.getItem('refreshToken')
    axios.post(`${url}/user/refresh`,
      { refreshToken })
      .then(async (result) => {
        await localStorage.setItem('token', result.data.data.newToken)
        await window.location.reload
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return response
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
