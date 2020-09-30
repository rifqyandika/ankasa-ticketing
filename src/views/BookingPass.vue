<template>
  <div class="container-fluid">
    <Navbar />
        <div class="container-fluid d-flex justify-content-center outer">
            <div class="box-card col-8 d-flex justify-content-center">
                <div class="col-10 pt-5">
                    <div class="col-12 justify-content-between d-flex align-items-center">
                        <h3>Booking Pass</h3>
                        <img src="../assets/icons/iconOption.png" style="max-height: 23px;" >
                    </div>
                    <div class="col-12">
                        <div class="box-ticket d-flex">
                            <div class="left col-2">
                                a
                            </div>
                            <hr style="border: 2px black solid">
                            <div class="left col-8">
                                b
                            </div>
                            <div class="left col-2">
                                c
                            </div>
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
// import { mapActions, mapGetters } from 'vuex'
// const { url } = require('../helper/env')

export default {
  data () {
    return {
    }
  },
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped>
.container-fluid {
  padding: 0;
  margin: 0;
}
.outer {
  background: #2395FF;
  height: 650px;
  display: flex;
  align-items: center;
}
.box-card {
    background: #FFFFFF;
box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.19);
border-radius: 20px;
height: 550px;
}
.box-ticket {
    background: #FFFFFF;
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
    border-radius: 7.5px;
    height: 350px;
}

</style>
