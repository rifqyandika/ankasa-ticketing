<template>
  <div>
    <div class="container-fluid" id="container">
      <div class="row mainrow">
        <div class="col-sm-8 d-none d-sm-flex jumbotr ">
          <img src="../../assets/icons/illustration.png" />
        </div>
        <div class="col-sm-4 col-xs-12 form mt-lg-4">
          <div class="title mt-lg-5 row mx-auto ml-lg-3">
            <img src="../../assets/icons/ankasa-smallicon.png" />
             <h2 class=" ml-n4"> Ankasa Group</h2>
          </div>
          <div class="form-group row rowform mt-5" v-if="forgot">
            <div class="col-sm-10 align-middle">
              <h1>Forgot Password</h1>
              <input type="email" class="form-control" placeholder="Email" />
              <button type="button" class="btn btn-primary">Send</button>
              <p>You'll get message soon on your email</p>
              <p @click="forgot = false" class="text-center text-decoration-none linkk">
                Remember Password
              </p>
            </div>
          </div>
          <div class="form-group row rowform mt-5" v-else>
            <div class="col-sm-10 align-middle">
              <h1>Login</h1>
              <form @submit.prevent="onLogin">
                <input type="email" class="form-control" placeholder="Email"
                  v-model="form.email" required/>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  v-model="form.password"
                  required
                />
                <button type="submit" class="btn btn-primary">Sign In</button>
              </form>
              <p>Do you forgot your password?</p>
              <p @click="forgot = true" class="text-center text-decoration-none linkk">
                Tap here for reset
              </p>
            </div>
          </div>
        </div>
        <div class="hide erro" ref="err">
          {{ errorres }}
        </div>
        <div class="hide succ" ref="suc">
          {{ successres }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import functions from '../../mixins/functions'

export default {
  data () {
    return {
      forgot: false,
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onLogin () {
      this.actionLogin(this.form)
        .then((response) => {
          if (response.code === 401) {
            this.errorres = response.message
            this.errAlert()
          }
          if (response.code === 200) {
            this.successres = response.message
            this.sucAlert()
            setTimeout(() => {
              window.location = '/admin/home'
            }, 1000)
          }
        })
        .catch((err) => {
          alert(err)
        })
    },
    ...mapActions({
      actionLogin: 'auth/login'
    })
  },
  mixins: [functions]
}
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
}
.hide {
  display: none !important ;

}
.erro {
  background: rgba(255, 11, 11, 0.863);
  color: rgb(88, 0, 0);
  height: 70px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-weight: 500;
  position: fixed;
  top: 100px;
  right: 100px;
  border-left: 5px rgb(151, 0, 0) solid;
}
.succ {
  background: rgba(0, 218, 11, 0.836);
  color: rgb(18, 90, 0);
  height: 70px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-weight: 500;
  position: fixed;
  top: 100px;
  right: 100px;
  border-left: 5px rgb(0, 68, 17) solid;
}
#container {
  height: 100vh;
  font-family: "Poppins", sans-serif;
}
.mainrow {
  min-height: 100%;
}
.rowform {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
.col-sm-10 {
  align-self: center;
}
.jumbotr {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2395ff;
}
.form {
  display: flex;
  flex-direction: column;
  background: white;
  font-family: "Lato", sans-serif;
  padding: 5%;
}
h1 {
  font-size: 36px;
  font-weight: 600;
}
input {
  border-radius: 0%;
  border: 0px;
  border-bottom: 2px rgba(210, 194, 255, 0.68) solid !important;
  margin: 10px 0px;
}
input::-webkit-input-placeholder {
  color: #9b96ab;
}
div.title {
  top: 20px;
  display: flex;
}
.title h2 {
  font-size: 24px;
  font-weight: 600;
  color:#2395FF;
}
.title img {
  margin-right: 30px;
}
.btn {
  width: 100%;
  font-size: 15px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  margin: 10px 0px;
  border-radius: 10px;
}
.btn-primary {
  background: #2395ff;
  box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
  border-radius: 10px;
}
.btn-outline-primary {
  box-sizing: border-box;
  border-radius: 6px;
  width: 95px;
  margin: 5px 5px;
}
.signinother {
  display: flex;
  justify-content: center;
}
.signinother button img {
  width: 20px;
  height: 20px;
}
.checkboks {
  display: inline-flex;
  align-items: center;
  margin-bottom: 20px;
}
p {
  font-size: 16px;
  font-family: "Lato", sans-serif;
  text-align: center;
  color: #595959;
  margin: 3px 0px;
}
p.p-bott {
  font-size: 14px;
  font-family: "Lato", sans-serif;
  text-align: center;
  color: #595959;
  margin: 5px 0px;
}
.linkk {
  text-align: center;
  cursor: pointer;
  color: #2395ff;
  text-decoration: underline;
}
@media (max-width: 576px) {
  .form {
    padding: 10%;
  }
}
</style>
