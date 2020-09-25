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
          <div class="form-group row rowform">
            <div class="col-sm-10 align-middle">
              <h1>Register</h1>
              <input type="text" class="form-control" placeholder="Full Name" />
              <input type="email" class="form-control" placeholder="Email" />
              <input
                type="password"
                class="form-control"
                placeholder="Password"
              />
              <button type="button" class="btn btn-primary">Sign Up</button>
              <div class="checkboks">
                <input id="term" type="checkbox" />
                <label for="term">Accept term and Conditions</label>
              </div>
              <hr />
              <p>Already have account?</p>
              <button type="button" class="btn btn-outline-primary">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
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
  border-bottom: 2px #d2c2ff solid !important;
  margin: 10px 0px;
}
input::-webkit-input-placeholder {
  color: #d2c2ff;
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
label {
  font-size: 16px;
}
.checkboks{
    display: inline-flex;
    align-items: center;
  margin-bottom: 20px;
}
label, p {
  font-size: 14px;
  font-family: "Lato", sans-serif;
  text-align: center;
  color: #d2c2ff;
}
input[type='checkbox'] {
    margin-right: 10px
}
@media (max-width: 576px) {
    .form {
  padding: 10%;
}
 }
</style>
