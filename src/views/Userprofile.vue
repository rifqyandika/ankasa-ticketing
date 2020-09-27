<template>
  <div class="container-fluid">
    <Navbar />
    <div class="container-fluid container-profile">
      <div class="row">
        <div class="col-12 col-sm-4">
          <div class="row user-card">
            <div class="col-12 d-flex justify-content-center">
              <div class="profile-image rounded-circle">
                <img src="../assets/img/anonymous.jpg" class="rounded-circle" />
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
                <div class="col-12 " style="color: #2395FF; font-size: 14px; letter-spacing: 2px;">
                    PROFILE
                </div>
                <div class="col-12" style="margin-bottom: 30px">
                    <h2 style="font-weight: bold">Profile</h2>
                </div>
                <div class="col-12 col-sm-6">
                    <div class="col-12 m-10 bio-con">
                        Contact
                    </div>
                    <div class="col-12">
                        <div>
                            <p class="label">Email</p>
                            <input type="email" >
                        </div>
                        <div>
                            <p class="label">Phone Number</p>
                            <input type="text">
                        </div>
                        <a class="d-flex justify-content-end">
                            Account Setting >
                        </a>
                    </div>
                </div>
                <div class="col-12 col-sm-6 ">
                    <div class="col-12 m-10 bio-con">
                        Biodata
                    </div>
                    <div class="col-12 formm">
                        <div>
                            <p class="label">User Name</p>
                            <input type="email">
                        </div>
                        <div>
                            <p class="label">City</p>
                            <Select>
                                <option value="">Medan</option>
                                <option value="">Bukan Medan</option>
                            </Select>
                        </div>
                        <div>
                            <p class="label">Address</p>
                            <input type="email">
                        </div>
                        <div>
                            <p class="label">Post Code</p>
                            <input type="text">
                        </div>
                    </div>
                </div>
                <div class="col-12 d-flex justify-content-end">
                  <button class="btn  btn-primary btnsave mr-3" >Save</button>
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
      window.location = '/'
    }
  }
}
</script>

<style scoped>
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
}
input,select {
    border: none;
    border-bottom: 2px #9B96AB solid;
    width: 100%;
    padding: 0px 10px;
    margin-bottom: 30px;
}
.label {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #9B96AB;
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
