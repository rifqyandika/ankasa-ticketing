<template>
  <div
  class="container-fluid pl-0 pr-0"
    style="overflow: hidden !important;
    overflow-x: hidden !important;
background: #F5F6FA;"
  ><Navbar/>
    <div class="row">
      <img
        class="img-fluid"
        src="..\assets\SearchResult.vue\Group 723.png"
        style="position:absolute;"
      />
    </div>
    <div class="container-fluid">
      <div class="row mt-5 mx-2">
        <div class="pl-0 col-8 cpHeader">Contact Person Details</div>
        <div class="col cpHeader">Flight Details</div>
        <div class="col  my-auto cpDetails text-right pr-0">
          View Details
        </div>
      </div>
      <div class="row mt-4 mx-3 mr-1 justify-content-between">
        <div class="col-8 boxperson pb-4 ">
          <div class="row form-group mx-2 my-2 ">
            <div class="col-12">
              <form >
                <div class="row ">
                  <div class="col-12 ">
                    <label class="mt-4">Full Name</label>
                    <input
                      type="text"
                      class="ml-n2 form-control border-0"
                      placeholder="Name"
                      required
                      v-model="userDetail.fullname"
                    />
                    <hr style="border: 1px solid #F5F6FA;margin-top:2px;" />
                  </div>
                  <div class="col-12 ">
                    <label class="mt-3">Email</label>
                    <input
                      type="email"
                      class="ml-n2 form-control border-0"
                      placeholder="Email"
                      required
                      v-model="userDetail.email"
                    />
                    <hr style="border: 1px solid #F5F6FA;margin-top:2px;" />
                  </div>
                  <div class="col-12 ">
                    <label class="mt-3">Phone Number</label>
                    <input
                      type="text"
                      class="ml-n2 form-control border-0"
                      placeholder="Phone Number"
                      required
                      v-model="userDetail.phone"
                    />
                    <hr style="border: 1px solid #F5F6FA;margin-top:2px;" />
                  </div>
                </div>
                <div class="row colorDanger mt-3">
                  <div class="col m-3">
                    <div class="row">
                      <div class="col-1 align-item-center ">
                        <img src="..\assets\icons\Vector (6).png" alt="" />
                      </div>
                      <div class="col pl-0 my-auto pasengerDetails">
                        <h6>
                          Make sure the customer data is correct.
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-4 boxperson" style="margin-bottom:60px;">
          <div class="row mt-4">
            <div class="col-4  mx-2">
              <img :src="`${url}/${databooking.image}`" />
            </div>
            <div class="col textPlanes my-auto ">
              {{databooking.airlines}}
            </div>
          </div>
          <div class="row mt-3 routeTeks  ">
            <div class="col-4  routeFlights ml-2">{{origin}}</div>
            <div class="col-1  ">
              <a href="#" class="mx-auto"
                ><img src="..\assets\icons\Vector (8).png"
              /></a>
            </div>
            <div class="col-5 ml-1 routeFlights">{{destination}}</div>
          </div>
          <div class="row mt-2">
            <div class="ml-2 col-5  daysFlight">
              {{datte}}
            </div>
            <div><p class="mt-n1">•</p></div>
            <div class="ml-2 col-5  daysFlight">
              {{databooking.departure}} - {{databooking.arrived}}
            </div>
          </div>
          <div class="row mt-3">
            <div class="col ml-2  ">
              <a href="#" class="text-decoration-none d-flex"
                ><img src="..\assets\icons\Group 1059.png" style="height: 20px; width: 20px;" />
                <h6 class="ml-2 m-0 refundable">Refundable</h6>
              </a>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col ml-2  ">
              <a href="#" class="text-decoration-none d-flex"
                ><img src="..\assets\icons\Group 1059.png" style="height: 20px; width: 20px;" />
                <h6 class="ml-2 m-0 refundable">Can reschedule</h6>
              </a>
            </div>
          </div>
          <hr />
          <div class="row justify-content-between ">
            <div class="ml-2 my-auto col-5 paymentRp">
              Total Payment
            </div>
            <div class="mr-2 my-auto col text-right totalRp">
              <b-navbar toggleable>
                <h6 href="#" class="totalRp">{{databooking.price * (child + adult)}}</h6>

                <b-navbar-toggle target="navbar-toggle-collapse">
                  <template v-slot:default="{ expanded }">
                    <b-icon
                      v-if="expanded"
                      class="text-decoration-none"
                      icon="chevron-bar-up"
                    ></b-icon>
                    <b-icon v-else icon="chevron-bar-down"></b-icon>
                  </template>
                </b-navbar-toggle>
              </b-navbar>
            </div>
          </div>
          <b-collapse id="navbar-toggle-collapse" class="border-0">
            <b-navbar-nav>
              <b-nav-item>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, aliquid!</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </div>
      </div>
      <div class="row mt-5 ">
        <div class="col passengerText">Passenger Details</div>
      </div>
      <div class="row mt-4 mx-3 mr-1 justify-content-between">
        <div class="col-8 boxperson pb-4 ">
          <div class="row form-group mx-2 my-2 ">
            <div class="col-12">
              <form >
                <div class="row boxPassenger mt-3">
                  <div class="col-6 mt-3 pasengerDetails my-3">
                    Passenger : {{ (child + adult) }}
                  </div>
                  <div class="col mx-3 pasengerDetails text-right my-3">
                    <div class="row  justify-content-end">
                      Same as contact person
                      <b-form-checkbox
                        v-model="checked"
                        name="check-button"
                        switch
                        size="lg"
                        class="mt-n1 ml-3"
                      >
                      </b-form-checkbox>
                    </div>
                  </div>
                </div>
                <div class="row ">
                  <div class="col-12 ">
                    <label class="mt-4">Title</label>
                    <div class="col-12 d-flex p-0">
                      <select class="custom-select custom-select-sm col border-0" v-model="detailPassenger.title">
                      <option value="Mr.">Mr</option>
                      <option value="Mrs.">Mrs</option>
                      <option value="Ms">Ms</option>
                    </select>
                    </div>
                    <hr style="border: 1px solid #F5F6FA;margin-top:2px;" />
                  </div>
                  <div class="col-12 ">
                    <label class="mt-3">Full Name</label>
                    <input
                      type="text"
                      class="ml-n2 form-control border-0"
                      placeholder="Full Name"
                      required
                      v-model="detailPassenger.fullname"
                    />
                    <hr style="border: 1px solid #F5F6FA;margin-top:2px;" />
                  </div>
                  <div class="col-12 ">
                    <label class="mt-4">Nationality</label>
                    <div class="col-12 d-flex p-0">
                      <select class="custom-select custom-select-sm col border-0" v-model="detailPassenger.nationality"
                      >
                      <option :value="country.id"
                      v-for="country in getdataCountry" :key="country.id">{{country.name}}</option>
                    </select>
                    </div>
                  </div>
                  <hr style="border: 1px solid #F5F6FA;margin-top:2px;" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-5 ">
        <div class="col passengerText">Passenger Details</div>
      </div>
      <div class="row mt-4 mx-3 mr-1 justify-content-between">
        <div class="col-8 boxperson pb-4 ">
          <div class="row form-group mx-2 my-2 ">
            <div class="col-12 ">
              <div class="row mt-3">
                <div class="col ml-n2">
                  <form @submit.prevent="onLogin">
                    <b-form-checkbox
                      v-model="checked"
                    >
                      <p class=" mt-1 travelText">Travel Insurance</p>
                    </b-form-checkbox>
                  </form>
                </div>
                <div class="col text-right">
                  <small class="rpPax">$ 2,00</small>
                  <small class="pasengerDetails">/pax</small>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="mx-3 row travelCompensation">
            Get travel compensation up to $ 10.000,00
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-8 proceed text-center mt-4">
          <button type="button"  class="btn" @click="proceedPayment">Proceed to Payment</button>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { mapActions, mapGetters } from 'vuex'
const { url } = require('../helper/env')

export default {
  components: {
    Navbar,
    Footer
  },
  data () {
    return {
      databooking: JSON.parse(localStorage.getItem('data')),
      origin: this.$route.query.origin,
      destination: this.$route.query.destination,
      datte: this.$route.query.date,
      child: parseInt(this.$route.query.childPerson),
      adult: parseInt(this.$route.query.adultPerson),
      url: url,
      checked: null,
      userDetail: {},
      detailPassenger: {
        title: '',
        fullname: '',
        nationality: null
      }
    }
  },
  methods: {
    ...mapActions({
      getUser: 'user/getUserDetail',
      getCountry: 'city/getDataCountry'
    }),
    proceedPayment () {
      const dataPassenger = {
        id_user: this.userDetail.id_user,
        id_flight: this.databooking.id,
        title: this.detailPassenger.title,
        fullname: this.detailPassenger.fullname,
        id_country: this.detailPassenger.nationality,
        insurance: 0,
        payment_status: 0,
        terminal: 4,
        gate: 2,
        child: this.adult,
        adults: this.child,
        total: this.databooking.price * (this.child + this.adult)
      }
      console.log(dataPassenger)
    }
  },
  mounted () {
    this.getUser().then((res) => {
      this.userDetail = this.getdetaildata
    })
    this.getCountry().then((res) => {
      console.log(this.getdataCountry)
    })
  },
  computed: {
    ...mapGetters({
      getdetaildata: 'user/getallData',
      getdataCountry: 'city/getallCountry'
    })
  }
}
</script>
<style>
.proceed button {
  font-family: Poppins;
  font-weight: bold;
  font-size: 18px;
  color: #ffffff;
  border-radius: 15px;
  background-color: #2395ff;
  box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
  border-radius: 10px;
  width: 319px;
  height: 57px;
}

.travelCompensation {
  font-family: Poppins;
  font-size: 14px;
}
.rpPax {
  font-family: Lato;
  font-weight: bold;
  font-size: 18px;
  color: #2395ff;
}
.travelText {
  font-family: Lato;
  font-weight: 600;
  font-size: 18px;
  color: #000000;
}
.pasengerDetails {
  word-spacing: 1px;
  font-family: Lato;
  font-weight: 600;
  font-size: 14px;
  color: #595959;
}

.boxPassenger {
  background: rgba(35, 149, 255, 0.1);
  border-radius: 10px;
}
.passengerText {
  font-family: Poppins;
  font-weight: 600;
  font-size: 24px;
  color: #000000;
}
.totalRp {
  margin-left: 10px;
  font-family: Poppins;
  font-weight: 600;
  font-size: 24px;
  color: #2395ff;
}
.paymentRp {
  font-family: Poppins;
  font-weight: 500;
  font-size: 18px;
  color: #000000;
}
.refundable {
  font-family: Poppins;
  font-weight: 500;
  font-size: 14px;
  color: #2395ff;
}
.daysFlight {
  font-family: Poppins;
  font-size: 12px;
  color: #6b6b6b;
}
.routeFlights {
  font-family: Poppins;
  font-weight: 500;
  font-size: 18px;
  color: #000000;
}
.textPlanes {
  font-family: Poppins;
  font-weight: 500;
  font-size: 16px;
  color: #595959;
}
.cpDetails {
  font-family: Poppins;
  font-weight: 400;
  font-size: 16px;
  text-align: right;

  color: #ffffff;
}
.cpHeader {
  font-family: Poppins;
  font-weight: 400;
  font-size: 24px;
  color: #ffffff;
}
.logoAirlines {
  width: 100px !important;
  height: 57px !important;
}
.airlinesName {
  font-family: Poppins;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #595959;
}
label {
  font-family: Lato;
  font-size: 14px;
  line-height: 17px;
  color: #9b96ab;
}
.colorDanger {
  background: rgba(242, 69, 69, 0.1);
  border-radius: 10px;
  font-family: Lato;
  font-size: 14px;
  color: #595959;
}
.boxperson {
  background: #ffffff;
  border-radius: 15px;
  margin-left: -15px !important;
  margin-right: -15px !important;
}
</style>
