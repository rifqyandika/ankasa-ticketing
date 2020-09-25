<template>
  <div>
    <div class="container-fluid" id="container">
      <div class="row mainrow">
        <div class="col-sm-8 d-none d-sm-flex jumbotr">
            <img src="../assets/icons/illustration.png">
        </div>
        <div class="col-sm-4 col-xs-12 form">
          <div class="title">
            <img src="../assets/icons/ankasa-smallicon.png" />
            <h2>Ankasa</h2>
          </div>
          <div class="form-group row rowform" v-if="forgotpassword">
            <div class="col-sm-10 align-middle">
              <h1>Forgot Password</h1>
              <input type="email" class="form-control" placeholder="Email" />
              <button type="button" class="btn btn-primary">Send</button>
              <p>You'll get message soon on your email</p>
            </div>
          </div>
          <div class="form-group row rowform" v-else>
            <div class="col-sm-10 align-middle">
              <h1>Login</h1>
              <input type="text" class="form-control" placeholder="Username" />
              <input
                type="password"
                class="form-control"
                placeholder="Password"
              />
              <button type="button" class="btn btn-primary">Sign In</button>
              <p>Do you forgot your password?</p>
              <p @click="forgotpassword=true" class="text-center linkk" >Tap here for reset</p>
              <br>
              <br>
              <hr />
              <p class="p-bott">or sign in with</p>
              <div class="signinother">
              <button type="button" class="btn btn-outline-primary">
                <img src="../assets/icons/google.png">
              </button>
              <button type="button" class="btn btn-outline-primary">
                <img src="../assets/icons/facebook.png">
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      forgotpassword: false
    }
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato&family=Poppins:wght@600&display=swap");
* {
  margin: 0px;
  padding: 0px;
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
  color: #9B96AB;
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
    background: #2395FF;
    box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
    border-radius: 10px;
}
.btn-outline-primary {
    box-sizing: border-box;
    border-radius: 6px;
    width: 95px;
    margin: 5px 5px
}
.signinother {
    display: flex;
    justify-content: center;
}
.signinother button img{
    width: 20px;
    height: 20px;
}
.checkboks{
    display: inline-flex;
    align-items: center;
  margin-bottom: 20px;
}
p {
  font-size: 16px;
  font-family: "Lato", sans-serif;
  text-align: center;
  color: #595959;
  margin: 3px 0px
}
p.p-bott {
  font-size: 14px;
  font-family: "Lato", sans-serif;
  text-align: center;
  color: #595959;
  margin: 5px 0px
}
.linkk{
    text-align: center;
    cursor: pointer;
    color: #2395FF;
    text-decoration: underline;
}
@media (max-width: 576px) {
    .form {
  padding: 10%;
}
 }
</style>
