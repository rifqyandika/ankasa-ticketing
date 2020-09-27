<template>
  <div class="container-fluid">
    <Navbar />
    <div class="container-fluid container-profile">
      <div class="row">
        <div class="col-12 col-sm-4 d-none d-sm-block">
          <div class="row user-card">
            <div class="col-12 d-flex justify-content-center">
              <div class="profile-image rounded-circle">
                <img
                  src="http://54.160.81.6:3001/404P.png"
                  class="rounded-circle"
                />
              </div>
            </div>
            <div class="input-pp d-flex justify-content-center">
              <div class="fileUpload btn btn-outline-primary rounded-20">
                <span>Select File</span>
                <input class="upload" type="file" />
              </div>
            </div>
            <div class="name-profile">
              <h4 class="text-center">Full Name</h4>
              <p class="text-center">Medan, Indonesia</p>
            </div>
            <div class="d-flex flex-row justify-content-center">
              <p>Card</p>
              <a class="ml-auto"> Add + </a>
            </div>
            <div class="d-flex justify-content-center">
              <div class="number-card">
                <p class="d-flex flex justify-content-center m-0">1234567890</p>
                <span class="d-flex m-0">
                  <p class="mr-auto">X Card</p>
                  <p class="ml-auto">$12345</p>
                </span>
              </div>
            </div>
            <div class="d-flex flex-column justify-content-center">
              <div class="profilebtn">
                <img class="active" src="../assets/icons/user.svg" />
                <p class="clicked">Profile</p>
                <p class="clicked">></p>
              </div>
              <div class="reviewbtn">
                <img src="../assets/icons/star.svg" />
                <p class="">Review</p>
                <p class="">></p>
              </div>
              <div class="settingbtn">
                <img src="../assets/icons/setting.svg" />
                <p class="">Setting</p>
                <p class="">></p>
              </div>
              <div class="logoutbtn" @click="logout" style="color: red">
                <img src="../assets/icons/logout.svg" />
                <p class="">Logout</p>
                <p class="">></p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-8 d-none d-sm-block">
          <div class="row formprofile">
            <div
              class="col-12 mb-4"
              style="color: #2395ff; font-size: 14px; letter-spacing: 2px"
            >
              MY BOOKING
            </div>
            <div class="col-6" style="font-size: 20px; font-weight: bold">
              My Booking
            </div>
            <div
              class="col-6 d-flex justify-content-end"
              style="color: #2395ff; font-size: 20px"
            >
              Order History
            </div>
          </div>
          <div class="row formprofile">
            <div class="col-12 mb-4 p-0" style="font-size: 14px">
              Monday, 20 July'20 - 12:33
            </div>
            <div class="col-12 mb-1" style="font-size: 14px">
              <div class="d-flex flex-row">
                <h4>IDN</h4>
                <div class="mr-3 ml-3">
                  <img src="../assets/icons/miniplane.svg" />
                </div>
                <h4>JPN</h4>
              </div>
            </div>
            <div
              class="col-12 d-flex mb-3 justify-content-start p-0"
              style="font-size: 12px; color: #979797"
            >
              Garuda Indonesia, AB-221
            </div>
            <hr>
            <div class="col-12 p-0">
              <b-navbar toggleable type="light" variant="light">
                <div class="d-flex flex-row" style="font-size: 14px;">
                    <p class="mr-5 mb-0 align-items-center p-1" style="color: #979797">status</p>
                    <div class="p-1 pl-2 pr-2" style="background: #FF7F23; border-radius: 6px; color: white;">
                        Waiting for payment
                    </div>
                </div>
                <b-navbar-toggle target="navbar-toggle-collapse">
                  <template v-slot:default="{ expanded }" class="d-flex flex-row">
                      <p class="m-0 border-0 ml-auto" style="color: #2395ff; ">
                          View details
                          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
                    <b-icon v-else icon="chevron-bar-down"></b-icon>
                    </p>
                  </template>
                </b-navbar-toggle>
                <b-collapse id="navbar-toggle-collapse" is-nav>
                  <b-navbar-nav class="mr-auto">
                    <p style="color: #2395ff;" class="mt-3">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, quia?
                    </p>
                  </b-navbar-nav>
                </b-collapse>
              </b-navbar>
            </div>
          </div>
          <div class="row formprofile">
            <div class="col-12 mb-4 p-0" style="font-size: 14px">
              Monday, 20 July'20 - 12:33
            </div>
            <div class="col-12 mb-1" style="font-size: 14px">
              <div class="d-flex flex-row">
                <h4>IDN</h4>
                <div class="mr-3 ml-3">
                  <img src="../assets/icons/miniplane.svg" />
                </div>
                <h4>JPN</h4>
              </div>
            </div>
            <div
              class="col-12 d-flex mb-3 justify-content-start p-0"
              style="font-size: 12px; color: #979797"
            >
              Garuda Indonesia, AB-221
            </div>
            <hr>
            <div class="col-12 p-0">
              <b-navbar toggleable type="light" variant="light">
                <div class="d-flex flex-row" style="font-size: 14px;">
                    <p class="mr-5 mb-0 align-items-center p-1" style="color: #979797">status</p>
                    <div class="p-1 pl-2 pr-2" style="background: #4FCF4D; border-radius: 6px; color: white;">
                        Eticket issued
                    </div>
                </div>
                <b-navbar-toggle target="navbar-toggle-collapse2">
                  <template v-slot:default="{ expanded }" class="d-flex flex-row">
                      <p class="m-0 border-0 ml-auto" style="color: #2395ff; ">
                          View details
                          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
                    <b-icon v-else icon="chevron-bar-down"></b-icon>
                    </p>
                  </template>
                </b-navbar-toggle>
                <b-collapse id="navbar-toggle-collapse2" is-nav>
                  <b-navbar-nav class="mr-auto">
                    <p style="color: #2395ff;" class="mt-3">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, quia?
                    </p>
                  </b-navbar-nav>
                </b-collapse>
              </b-navbar>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default {
  components: {
    Navbar,
    Footer
  },
  methods: {
    logout () {
      localStorage.removeItem('token')
      localStorage.removeItem('refreshToken')
      localStorage.removeItem('id')
      window.location.reload()
    }
  }
}
</script>

<style scoped>
.bg-light {
    background-color: #fff !important;
}
.navbar-light .navbar-toggler {
    border: none;
}
.navbar {
    padding: 0;
}
.container-fluid {
  padding: 0;
  margin: 0;
}
.container-profile {
  background: #e5e5e5;
  padding: 30px 50px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
}
.user-card {
  background: white;
  padding: 30px;
  padding-top: 30px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.profile-image {
  width: 137px;
  border: 3px #2395ff solid;
  padding: 5px;
}
.profile-image img {
  width: 100%;
}
.fileUpload {
  position: relative;
  overflow: hidden;
  margin: 30px;
}
.fileUpload input.upload {
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0;
  font-size: 20px;
  cursor: pointer;
  opacity: 0;
  filter: alpha(opacity=0);
}
.number-card {
  width: 100%;
  background: #2395ff;
  border-radius: 10px;
  color: white;
  font-size: 15px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  padding: 10px 10px;
  box-shadow: 0px 8px 25px rgba(35, 149, 255, 0.49);
  margin-bottom: 15px;
}
.profilebtn {
  display: grid;
  grid-template-columns: 30px auto 30px;
  margin: 10px 0px;
  cursor: pointer;
}
.reviewbtn {
  display: grid;
  grid-template-columns: 30px auto 30px;
  margin: 10px 0px;
  cursor: pointer;
}
.settingbtn {
  display: grid;
  grid-template-columns: 30px auto 30px;
  margin: 10px 0px;
  cursor: pointer;
}
.logoutbtn {
  display: grid;
  grid-template-columns: 30px auto 30px;
  margin: 10px 0px;
  cursor: pointer;
}
.clicked {
  color: #2395ff;
}
.formprofile {
  padding: 20px;
  background-color: #fff;
  margin-left: 10px;
  border-radius: 10px;
  margin-bottom: 30px;
}
input,
select {
  border: none;
  border-bottom: 2px #9b96ab solid;
  width: 100%;
  padding: 0px 10px;
  margin-bottom: 30px;
}
.label {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #9b96ab;
  margin-bottom: 5px;
}
.formm {
  width: 100%;
}
.btnsave {
  width: 100px;
  border-radius: 10px;
  box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
}
.bio-con {
  margin-bottom: 30px;
}
</style>
