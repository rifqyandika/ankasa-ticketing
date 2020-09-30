<template>
  <div>
    <Navbar />
    <div class="container-fluid">
      <div class="top col-12 row d-flex align-items-center">
        <div
          class="col-12 col-sm-5 d-flex justify-content-end flex-row align-items-center"
        >
          <div class="mr-3 d-none d-sm-flex">
            <img
              src="../assets/icons/ankasawhiteicon.svg"
              style="width: 50px"
            />
          </div>
          <div class="col-sm-8">
            <div class="col-12 justify-content-between d-flex flex-row lato">
              <p>from</p>
              <p>to</p>
            </div>
            <div class="col-12 justify-content-between d-flex flex-row">
              <p>{{origin}}</p>
              <img
                src="../assets/icons/switch-white.svg"
                style="width: 17px; height: 17px"
              />
              <p>{{destination}}</p>
            </div>
            <div class="col-12 justify-content-between d-flex flex-row lato">
              <p>{{date}}</p>
              <p>{{passenger}}passenger</p>
              <p>{{ classFlight }}</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-7 d-flex justify-content-end">
          <div class="mr-sm-5">Change Search</div>
        </div>
      </div>
      <div class="mid col-12 row">
        <div class="col-4 d-none d-sm-block">
          <div class="col-12  d-flex flex-row">
            <p>Filter</p>
            <p>Reset</p>
          </div>
          <div class="col-12 card-filter">
            <div class="col-12 d-flex flex-column">
              <b-navbar toggleable variant="" style="padding: 0" class="mb-2">
                <b-navbar-toggle
                  target="navbar-toggle-transit justify-content-between"
                  class="d-none d-sm-block col-12"
                  style="border: none; padding: 0"
                >
                  <template
                    v-slot:default="{ expanded }"
                    class="d-flex flex-row"
                  >
                    <div
                      class="m-0 border-0 justify-content-between d-flex flex-row"
                      style="color: #000"
                    >
                    <p>Transit</p>
                      <b-icon v-if="expanded" icon="chevron-bar-up" class=""></b-icon>
                      <b-icon v-else icon="chevron-bar-down"></b-icon>
                    </div>
                  </template>
                </b-navbar-toggle>
                <b-collapse id="navbar-toggle-transit" is-nav>
                  <b-navbar-nav class="mr-auto">
                    <div class="form-check form-check-inline justify-content-between mt-3">
                      <label class="form-check-label"
                        >Direct</label
                      >
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="option1"
                      />
                    </div>
                    <div class="form-check form-check-inline justify-content-between">
                      <label class="form-check-label"
                        >Transit</label
                      >
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="option1"
                      />
                    </div>
                    <div class="form-check form-check-inline justify-content-between mb-3">
                      <label class="form-check-label"
                        >Transit 2+</label
                      >
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="option1"
                      />
                    </div>
                  </b-navbar-nav>
                </b-collapse>
              </b-navbar>
              <b-navbar toggleable variant="" style="padding: 0" class="mb-2">
                <b-navbar-toggle
                  target="navbar-toggle-facilities"
                  class="d-none d-sm-block col-12"
                  style="border: none; padding: 0"
                >
                  <template
                    v-slot:default="{ expanded }"
                    class="d-flex flex-row"
                  >
                    <div
                      class="m-0 border-0 justify-content-between d-flex flex-row"
                      style="color: #000"
                    >
                    <p>Facilities</p>
                      <b-icon v-if="expanded" icon="chevron-bar-up" class=""></b-icon>
                      <b-icon v-else icon="chevron-bar-down"></b-icon>
                    </div>
                  </template>
                </b-navbar-toggle>
                <b-collapse id="navbar-toggle-facilities" is-nav>
                  <b-navbar-nav class="mr-auto">
                    <div class="form-check form-check-inline justify-content-between mt-3">
                      <label class="form-check-label"
                        >Luggage</label
                      >
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="option1"
                      />
                    </div>
                    <div class="form-check form-check-inline justify-content-between">
                      <label class="form-check-label"
                        >In-Flight Meal</label
                      >
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="option1"
                      />
                    </div>
                    <div class="form-check form-check-inline justify-content-between mb-3">
                      <label class="form-check-label"
                        >Wi-fi</label
                      >
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="option1"
                      />
                    </div>
                  </b-navbar-nav>
                </b-collapse>
              </b-navbar>
              <b-navbar toggleable variant="" style="padding: 0" class="mb-2">
                <b-navbar-toggle
                  target="navbar-toggle-departue"
                  class="d-none d-sm-block col-12"
                  style="border: none; padding: 0"
                >
                  <template
                    v-slot:default="{ expanded }"
                    class="d-flex flex-row"
                  >
                    <div
                      class="m-0 border-0 justify-content-between d-flex flex-row"
                      style="color: #000"
                    >
                    <p>Departure Time</p>
                      <b-icon v-if="expanded" icon="chevron-bar-up" class=""></b-icon>
                      <b-icon v-else icon="chevron-bar-down"></b-icon>
                    </div>
                  </template>
                </b-navbar-toggle>
                <b-collapse id="navbar-toggle-departue" is-nav>
                  <b-navbar-nav class="mr-auto">
                    <div class="form-check form-check-inline justify-content-between mt-3">
                      <label class="form-check-label"
                        >00:00 - 06:00</label
                      >
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="option1"
                      />
                    </div>
                    <div class="form-check form-check-inline justify-content-between">
                      <label class="form-check-label"
                        >06:00 - 12:00</label
                      >
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="option1"
                      />
                    </div>
                    <div class="form-check form-check-inline justify-content-between">
                      <label class="form-check-label"
                        >12:00 - 18:00</label
                      >
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="option1"
                      />
                    </div>
                    <div class="form-check form-check-inline justify-content-between mb-3">
                      <label class="form-check-label"
                        >18:00 - 24:00</label
                      >
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="option1"
                      />
                    </div>
                  </b-navbar-nav>
                </b-collapse>
              </b-navbar>
              <b-navbar toggleable variant="" style="padding: 0" class="mb-2">
                <b-navbar-toggle
                  target="navbar-toggle-arrive"
                  class="d-none d-sm-block col-12"
                  style="border: none; padding: 0"
                >
                  <template
                    v-slot:default="{ expanded }"
                    class="d-flex flex-row"
                  >
                    <div
                      class="m-0 border-0 justify-content-between d-flex flex-row"
                      style="color: #000"
                    >
                    <p>Time Arrived</p>
                      <b-icon v-if="expanded" icon="chevron-bar-up" class=""></b-icon>
                      <b-icon v-else icon="chevron-bar-down"></b-icon>
                    </div>
                  </template>
                </b-navbar-toggle>
                <b-collapse id="navbar-toggle-arrive" is-nav>
                  <b-navbar-nav class="mr-auto">
                    <div class="form-check form-check-inline justify-content-between mt-3">
                      <label class="form-check-label"
                        >00:00 - 06:00</label
                      >
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="option1"
                      />
                    </div>
                    <div class="form-check form-check-inline justify-content-between">
                      <label class="form-check-label"
                        >06:00 - 12:00</label
                      >
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="option1"
                      />
                    </div>
                    <div class="form-check form-check-inline justify-content-between">
                      <label class="form-check-label"
                        >12:00 - 18:00</label
                      >
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="option1"
                      />
                    </div>
                    <div class="form-check form-check-inline justify-content-between mb-3">
                      <label class="form-check-label"
                        >18:00 - 24:00</label
                      >
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="option1"
                      />
                    </div>
                  </b-navbar-nav>
                </b-collapse>
              </b-navbar>
              <b-navbar toggleable variant="" style="padding: 0" class="mb-2">
                <b-navbar-toggle
                  target="navbar-toggle-airlines"
                  class="d-none d-sm-block col-12"
                  style="border: none; padding: 0"
                >
                  <template
                    v-slot:default="{ expanded }"
                    class="d-flex flex-row"
                  >
                    <div
                      class="m-0 border-0 justify-content-between d-flex flex-row"
                      style="color: #000"
                    >
                    <p>Departure Time</p>
                      <b-icon v-if="expanded" icon="chevron-bar-up" class=""></b-icon>
                      <b-icon v-else icon="chevron-bar-down"></b-icon>
                    </div>
                  </template>
                </b-navbar-toggle>
                <b-collapse id="navbar-toggle-airlines" is-nav>
                  <b-navbar-nav class="mr-auto">
                    <div class="form-check form-check-inline justify-content-between mt-3">
                      <label class="form-check-label"
                        >Garuda Indonesia</label
                      >
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="option1"
                      />
                    </div>
                    <div class="form-check form-check-inline justify-content-between">
                      <label class="form-check-label"
                        >Air Asia</label
                      >
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="option1"
                      />
                    </div>
                    <div class="form-check form-check-inline justify-content-between mb-3">
                      <label class="form-check-label"
                        >Lion Air</label
                      >
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="option1"
                      />
                    </div>
                  </b-navbar-nav>
                </b-collapse>
              </b-navbar>
              <b-navbar toggleable variant="" style="padding: 0" class="mb-2">
                <b-navbar-toggle
                  target="navbar-toggle-price"
                  class="d-none d-sm-block col-12"
                  style="border: none; padding: 0"
                >
                  <template
                    v-slot:default="{ expanded }"
                    class="d-flex flex-row"
                  >
                    <div
                      class="m-0 border-0 justify-content-between d-flex flex-row"
                      style="color: #000"
                    >
                    <p>Ticket Price</p>
                      <b-icon v-if="expanded" icon="chevron-bar-up" class=""></b-icon>
                      <b-icon v-else icon="chevron-bar-down"></b-icon>
                    </div>
                  </template>
                </b-navbar-toggle>
                <b-collapse id="navbar-toggle-price" is-nav>
                  <b-navbar-nav class="mr-auto">
                    <label for="customRange1" class="justify-content-between d-flex" style="color: #6B6B6B; font-size: 12px; height: 20px">
                      <p>lowest</p>
                      <p>highest</p>
                    </label>
                    <input type="range" class="custom-range mb-2" id="customRange1" min="145" max="300">
                    <label for="customRange1" class="justify-content-between d-flex" style="color: #2395FF; font-size: 14px">
                      <p>$145,00</p>
                      <p>$300,00</p>
                    </label>
                  </b-navbar-nav>
                </b-collapse>
              </b-navbar>
            </div>
          </div>
        </div>
        <div class="col-sm-8">
          <div class="col-12 justify-content-between d-flex flex-row">
            <p>Salah ticket</p>
            <p>Sort by <img src="../assets/icons/siwtch-sort.png" /></p>
          </div>
          <div class="col-12 card-ticket" v-for="flight in dataFlight" :key="flight.id">
            <div class="col-12 d-flex flex-row">
              <div class="col-3"><img :src="`${url}/${flight.image_airlines}`" ></div>
              <div class="col-9">{{flight.airlines}}</div>
            </div>
            <div class="col-12 d-flex flex-row mb-2 mt-2">
              <div class="col-5 d-flex align-items-center">
                <div class="col-6 d-flex">
                  <h5>{{flight.origin_code}}</h5>
                  <img src="../assets/icons/miniplane.svg" class="mr-2 ml-2" />
                  <h5>{{flight.destination_code}}</h5>
                </div>
                <div class="col-6">
                  <div class="d-flex flex-column justify-content-end">
                    <p class="m-0 d-flex justify-content-end" style="font-size: 12px">{{flight.flight_duration}}</p>
                    <p class="m-0 d-flex justify-content-end" style="font-size: 12px" v-if="flight.transit===0">( Direct )</p>
                    <p class="m-0 d-flex justify-content-end" style="font-size: 12px" v-else-if="flight.transit===1">( 1 Transit )</p>
                    <p class="m-0 d-flex justify-content-end" style="font-size: 12px" v-else-if="flight.transit===2">( Transit 2+ )</p>
                    <p class="m-0 d-flex justify-content-end" style="font-size: 12px" v-else>No COMMENT!!!!</p>
                  </div>
                </div>
              </div>
              <div class="col-7 d-flex">
                <div class="col d-flex">
                  <div v-if="luggage">
                    <img src="../assets/icons/bag.svg" class="mr-1" v-if="flight.luggage===1"/>
                  </div>
                  <div v-if="meals" class="mr-1">
                    <img src="../assets/icons/meals.svg" v-if="flight.meal===1"/>
                  </div>
                  <div v-if="wifi">
                    <img src="../assets/icons/wifi.svg" v-if="flight.wifi===1"/>
                  </div>
                </div>
                <div class="col d-flex">
                  <div>{{flight.price}}</div>
                </div>
                <div class="col d-flex">
                  <button class="btn btn-primary btnselect ml-auto">
                    Select
                  </button>
                </div>
              </div>
            </div>
            <div class="col-12 d-flex flex-row">
              <b-navbar toggleable variant="" style="padding: 0">
                <b-navbar-toggle
                  :target="`navbar-toggle-collapse${flight.id}`"
                  class="d-none d-sm-block"
                  style="border: none; padding: 0"
                >
                  <template
                    v-slot:default="{ expanded }"
                    class="d-flex flex-row"
                  >
                    <p class="m-0 border-0 ml-auto" style="color: #2395ff">
                      View details
                      <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
                      <b-icon v-else icon="chevron-bar-down"></b-icon>
                    </p>
                  </template>
                </b-navbar-toggle>
                <b-collapse :id="`navbar-toggle-collapse${flight.id}`" is-nav>
                  <b-navbar-nav class="mr-auto">
                    <p style="color: #000" class="mt-3">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Provident, quia?
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
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import { mapActions, mapGetters } from 'vuex'
const { url } = require('../helper/env')

export default {
  components: {
    Navbar,
    Footer
  },
  data () {
    return {
      luggage: true,
      meals: true,
      wifi: true,
      url: url,
      dataflight: [],
      origin: this.$route.query.origin,
      destination: this.$route.query.destination,
      date: this.$route.query.destination,
      passenger: this.$route.query.destination,
      classFlight: this.dataForBook.classFlight
    }
  },
  methods: {
    ...mapActions({
      getFlight: 'flight/getDataFlight'
    })
  },
  computed: {
    ...mapGetters({
      dataFlight: 'flight/getallFlight'
    })
  },
  mounted () {
    this.getFlight()
    //     .then((response) => {
    //       // this.setProduct(this.allproducts.products)
    //       // console.log(response)
    //       // console.log(this.dataUser)
    //     })
    console.log(this.dataflight)
  }
}
</script>

<style scoped>
.col-12,
.col-sm-8,
.col-5,
.col-7,
.col-6,
.col-3,
.col-9 {
  padding: 0;
}
label {
  color: black;
  padding: 10px;
}
.container-fluid {
  padding: 0;
  margin: 0;
  background: #f5f6fa;
}
.row {
  margin: 0;
}
.top {
  background: #2395ff;
  border-radius: 0px 0px 30px 30px;
  font-family: Poppins;
  font-weight: 600;
  font-size: 16px;
  color: white;
  height: 176px;
}
.lato {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
}
.mid {
  font-family: Poppins;
  font-weight: 600;
  padding: 30px;
  background: #f5f6fa;
}
.card-ticket {
  background-color: white;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 20px;
}
.card-filter {
  background-color: white;
  border-radius: 15px;
  padding: 20px;
}
.btnselect {
  background: #2395ff;
  box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
  border-radius: 10px;
  width: 150px;
  max-height: 45px;
}
@media (max-width: 540px) {
  .top {
    padding: 20px;
  }
}
</style>
