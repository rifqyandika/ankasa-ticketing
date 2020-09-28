<template>
  <div>
    <div class="container-fluid" id="container">
      <div class="row mainrow">
        <div class="col-sm-8 d-none d-sm-flex jumbotr">
          <img src="../assets/icons/illustration.png" />
        </div>
        <div class="col-sm-4 col-xs-12 form">
          <div class="title">
            <img src="../assets/icons/ankasa-smallicon.png" />
            <h2>Ankasa</h2>
          </div>
          <div class="form-group row rowform">
            <div class="col-sm-10 align-middle">
              <h1>Reset Password</h1>
              <form @submit.prevent="onResetpassword">

              <input type="password" class="form-control" placeholder="Password" @keyup="checkpassword" v-model="form.password" required/>
              <input type="password" v-model="form.confirmpwd" class="form-control" @keyup="checkpassword" placeholder="Confirm Password" required/>
              <p ref="checkerror" style="color: red; display: block;">{{errorcheck}}</p>
              <button type="submit" class="btn btn-primary">Reset Password</button>
              <div class="checkboks">
                <input id="term" type="checkbox" required/>
                <label for="term">Accept term and Conditions</label>
              </div>
              </form>
              <hr />
              <p>Already have account?</p>
              <router-link to="/login" type="button" class="btn btn-outline-primary">
                Reset Password
              </router-link>
            </div>
          </div>
        </div>
        <div class="hide erro" ref="err">
         {{errorres}}
        </div>
        <div class="hide succ" ref="suc">
         {{successres}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import functions from '../mixins/functions'

export default {
  data () {
    return {
      form: {
        password: '',
        confirmpwd: '',
        key: ''
      },
      errorcheck: ''
    }
  },
  methods: {
    onResetpassword () {
      if (this.errorcheck === 'password not match') {
        this.errorres = 'Please Check your Password'
        this.errAlert()
      } else {
        this.actionRegist(this.form)
          .then((response) => {
            if (response.code === 402) {
              this.errorres = response.message
              this.errAlert()
            } if (response.code === 200) {
              this.successres = response.message
              this.sucAlert()
              setTimeout(() => {
                window.location = '/login'
              }, 1000)
            }
          })
          .catch((err) => {
            alert(err)
          })
      }
    },
    checkpassword () {
      if (this.form.password !== this.form.confirmpwd) {
        this.errorcheck = 'password not match'
        const err = this.$refs.checkerror.style
        err.display = 'block'
      } else {
        const err = this.$refs.checkerror.style
        err.display = 'none'
        this.errorcheck = ''
      }
    },
    ...mapActions({
      // actionRegist: 'auth/register'
    })
  },
  mixins: [functions]
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato&family=Poppins:wght@600&display=swap");
* {
  margin: 0px;
  padding: 0px;
}
.hide {
  display: none !important ;

}
.erro {
  background: rgba(255, 1, 1, 0.377);
  color: rgb(88, 0, 0);
  height: 70px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px 0px 0px 5px;
  font-weight: 500;
  position: fixed;
  top: 100px;
  right: 0px;
  border-left: 5px rgb(151, 0, 0) solid;
}
.succ {
  background: rgba(3, 255, 16, 0.377);
  color: rgb(18, 90, 0);
  height: 70px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px 0px 0px 5px;
  font-weight: 500;
  position: fixed;
  top: 100px;
  right: 0px;
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
  justify-content: flex-end;
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
label {
  font-size: 16px;
}
.checkboks {
  display: inline-flex;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  justify-content: center;
}
label,
p {
  font-size: 14px;
  font-family: "Lato", sans-serif;
  text-align: center;
  color: #595959;
}
input[type="checkbox"] {
  margin-right: 10px;
}
@media (max-width: 576px) {
  .form {
    padding: 10%;
  }
  .rowform {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
}
</style>
