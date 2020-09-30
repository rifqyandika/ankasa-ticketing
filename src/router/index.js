import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Search from '../views/Searchresult.vue'
import store from '../store'
import Profile from '../views/Userprofile.vue'
import Booking from '../views/Mybooking.vue'
import Reset from '../views/Resetpassword.vue'
import Notifications from '../views/Notifications.vue'
import BookingPass from '../views/BookingPass.vue'
import FlightDetails from '../views/FlightDetails.vue'
import AdminLogin from '../views/Admin/Login.vue'
import AdminHome from '../views/Admin/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About'
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/reset-pwd',
    name: 'Reset',
    component: Reset
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
    meta: { requiresAuth: true }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { requiresAuth: true }
  },
  {
    path: '/booking',
    name: 'Booking',
    component: Booking,
    meta: { requiresAuth: true }
  },
  {
    path: '/flightdetails',
    name: 'FlightDetails',
    component: FlightDetails,
    meta: { requiresAuth: true }
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: Notifications,
    meta: { requiresAuth: true }
  },
  {
    path: '/booking-pass',
    name: 'booking-pass',
    component: BookingPass,
    meta: { requiresAuth: true }
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminLogin
    // meta: { requiresAuth: true }
  },
  {
    path: '/admin/home',
    name: 'adminhome',
    component: AdminHome
    // meta: { requiresAuth: true }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters['auth/isLogin']) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})

export default router
