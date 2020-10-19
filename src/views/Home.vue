<template>
  <div
    class="container-fluid pl-0 pr-0"
    style="overflow: hidden !important;
    overflow-x: hidden !important;"
  >
    <Navbar />
    <!-- background-header -->
    <div class="row marginBody bgHeader">
      <div class="col col-lg-7 col-xl pl-0 ">
        <img
          class="img-fluid pictHeader1"
          src="..\..\src\assets\home\Pict1.jpg"
        />
      </div>
      <div class="col pr-0">
        <img
          class="mt-5 mt-lg img-fluid pictHeader2"
          src="..\..\src\assets\home\Pict2.jpg"
        />
        <img
          class="img-fluid  pictHeader3 "
          src="..\..\src\assets\home\vector 6.png"
        />
      </div>
    </div>
    <!-- teksHeader -->
    <div class="container  ">
      <div class="row">
        <div class="mt-2 mt-sm-3 mt-lg-n4  ml-md-4 ml-lg-0 col-12 col-lg-6 col-xl-5 pl-lg-0 ">
          <p class="textHeader ml-xl-n4">
            Find your <span class="textHeader2 pb-4">Flight</span>
          </p>
          <p class="mt-n3 mt-lg-n4 ml-xl-n4 smallTextHeader">and explore the world with us</p>
        </div>
        <div class="mx-lg-1 col-12 col-sm-10 col-lg-5 col-xl-4 boxBuy mx-auto ">
          <form action="" @submit.prevent="book">
          <div class="mx-3 my-1">
            <div class="row">
              <div class="col mt-3">
                <p class="hey">Hey,</p>
                <p class="where">
                  Where you want to go?
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <a href="#" class=" text-decoration-none recentLy">
                  <span>
                    Recently Searched<img
                      class="my-1 ml-5"
                      src="..\..\src\assets\home\btn\btnback.png"
                  /></span>
                </a>
              </div>
            </div>
            <div class="row mt-3 ">
              <div class="container boxOrder mx-3 py-3 mb-1">
                <div class="row from">
                  <div class="col ">From</div>
                  <div class="col  text-right">To</div>
                </div>
                <div class="row routeTeks">
                  <div class="col">
                    <select class="custom-select" v-model="dataForBook.origin">
                      <option :value="city.city_name" v-for="city in getDataCity"  :key="city.id">{{city.city_name}}</option>
                    </select>
                  </div>
                  <div class="col-100  text-center">
                    <div href="#"
                      ><img src="..\..\src\assets\home\btn\Vector (2).png"
                    /></div>
                  </div>
                  <div class="col">
                    <select class="custom-select" v-model="dataForBook.destination " >
                      <option :value="city.city_name" v-for="city in getDataCity"  :key="city.city_name">{{city.city_name}}</option>
                    </select>
                  </div>
                </div>
                <div class="row teksCountry mt-1">
                  <div class="col ">{{getDataCity.country_name}}</div>
                  <div class="col text-right">Japan</div>
                </div>
              </div>
            </div>
            <div class="row mt-3  d-flex justify-content-between">
              <div class="col btnTeks">
                <button
                  type="button"
                  class="btn btn-primary btn-sm px-3 rounded-lg py-2"
                >
                  <img
                    class="mr-2"
                    src="..\..\src\assets\home\btn\Vector (3).png"
                  />One way
                </button>
              </div>
              <div class="col pl-0 pl-lg text-right">
                <button
                  type="button"
                  class="btn btn-sm btnTeks2  px-3 rounded-lg py-2"
                >
                  <img src="..\..\src\assets\home\btn\Vector (4).png" /> Round Trip
                </button>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-12 teksMenu ">Departure</div>
            </div>
            <div class="row mt-1 ">
              <div class="container choseDeparture mx-3">
                <div class="row mx-1 tekChoseDeparture d-flex flex-row align-items-center py-3 ">
                    <label for="example-date-input" class="col">Date</label>
                    <div class="col p-0 ">
                      <input class="form-control mr-auto" type="date" v-model="dataForBook.date" id="example-date-input">
                    </div>
                </div>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-12 teksMenu ">How many person?</div>
            </div>
            <div class="row mt-1 mb-4">
              <div class="col choseDeparture mx-3 py-3 d-flex">
                  <input class="form-control" type="number" placeholder="Adult" v-model="dataForBook.adultPerson" style="width: 50%">
                  <input class="form-control" type="number" placeholder="Child" v-model="dataForBook.childPerson" style="width: 50%; margin-right: 10px">
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-12 teksMenu ">Which class do you want??</div>
            </div>
            <div class="row mt-2 justify-content-between  tekChoseDeparture">
              <div class="col-3 col-lg-4 ">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    v-model="dataForBook.classFlight"
                    value="0"
                  />
                  <label class="form-check-label" for="inlineRadio1"
                    >Economy</label
                  >
                </div>
              </div>
              <div class="col-3 col-lg-4 text-center">
                <div class="  form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    v-model="dataForBook.classFlight"
                    value="1"
                  />
                  <label class="form-check-label" for="inlineRadio2"
                    >Business</label
                  >
                </div>
              </div>
              <div class="col-3 col-4 pl-0  pr-0">
                <div class=" form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio3"
                    v-model="dataForBook.classFlight"
                    value="2"
                  />
                  <label class="form-check-label" for="inlineRadio3"
                    >First Class</label
                  >
                </div>
              </div>
            </div>
            <div class="row mt-4 mb-4">
              <div class="col">
                <button
                  type="Submit"
                  class="teksSubmit btn btn-primary btn-lg btn-block"
                >
                  SEARCH FLIGHT
                  <img
                    class="ml-5"
                    src="..\..\src\assets\home\btn\Vector (5).png"
                  />
                </button>
              </div>
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>
    <!-- sectionTrending -->
    <section class="trending">
      <div class="container-fluid pl-0 pr-0 ml-0   ">
        <div class="row mx-1 mt-n4 mt-lg-0 mx-md-0 mx-lg-4">
          <div class="col-7 pr-lg-0">
            <p class="trendingHeader ">TRENDING</p>
          </div>
          <div class="col text-right">
            <a href="#" class="text-decoration-none viewTrending">View all</a>
          </div>
        </div>
        <div class="row mx-1 mt-n2 mt-lg-0 mx-md-0 mb-lg-4 mx-lg-4">
          <div class="col ">
            <p class="trendingHeader2 ">Trending destinations</p>
          </div>
        </div>
        <div class="row justify-content-lg-center mt-n3 mt-lg-0 mx-lg-4">
          <div
            class="col-lg pl-5 py-5 py-md-5 py-lg-0 px-lg-3 ovaler mr-md-n5 mr-lg-0 d-flex justify-content-md-between"
          >
            <div
              class="col-6 col-sm-4 mx-2 col-lg-2  mx-lg-0 trendingChose text-center"
            >
              <div class="hpLayer d-block- d-lg-none"></div>
              <div class="hpLayer1 d-block- d-lg-none"></div>
              <figure class="figure mt-3 text-left">
                <div class="figure-img ">
                  <img
                    class="figure-img img-fluid"
                    src="..\..\src\assets\home\trending\image 3.png"
                  />
                  <a href="#"
                    ><div class="row mt-3">
                      <div class="col">
                        <span
                          class="ml-2 mb-4 px-2 py-1 text-white trendingChoseTittle"
                          ><b>15 </b>Airlines
                        </span>
                      </div>
                    </div></a
                  >
                </div>
                <figcaption class="figure-caption text-dark">
                  <p class="teksChoseTrending mb-0">Tokyo,</p>
                  <div class="row">
                    <div class="col-6 teksChoseTrending2">
                      Japan
                    </div>
                    <div class="col-6 my-auto text-right">
                      <a href="#" class="dots">
                        <img
                          class="mr-2"
                          src="..\..\src\assets\home\btn\iconright.png"
                      /></a>
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>

            <div
              class="col-6 col-sm-4 mx-2 col-lg-2 mx-lg-0 text-center trendingChose"
            >
              <figure class="figure mt-3 text-left">
                <div class="figure-img">
                  <img
                    class="figure-img img-fluid"
                    src="..\..\src\assets\home\trending\lvXeO04CxwQ.png"
                  />
                  <a href="#"
                    ><div class="row mt-3">
                      <div class="col">
                        <span
                          class="ml-2 mb-4 px-2 py-1 text-white trendingChoseTittle"
                          ><b>22 </b>Airlines
                        </span>
                      </div>
                    </div></a
                  >
                </div>
                <figcaption class="figure-caption text-dark">
                  <p class="teksChoseTrending mb-0">Barcelona,</p>
                  <div class="row">
                    <div class="col-6 teksChoseTrending2">
                      Spain
                    </div>
                    <div class="col-6 my-auto text-right">
                      <a href="#" class="dots">
                        <img
                          class="mr-2"
                          src="..\..\src\assets\home\btn\iconright.png"
                      /></a>
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div
              class="col-6 col-sm-4 text-center mx-2 col-lg-2 mx-lg-0 trendingChose"
            >
              <figure class="figure mt-3 text-left">
                <div class="figure-img">
                  <img
                    class="figure-img img-fluid"
                    src="..\..\src\assets\home\trending\image 3.png"
                  />
                  <a href="#"
                    ><div class="row mt-3">
                      <div class="col">
                        <span
                          class="ml-2 mb-4 px-2 py-1 text-white trendingChoseTittle"
                          ><b>15 </b>Airlines
                        </span>
                      </div>
                    </div></a
                  >
                </div>
                <figcaption class="figure-caption text-dark">
                  <p class="teksChoseTrending mb-0">Tokyo,</p>
                  <div class="row">
                    <div class="col-6 teksChoseTrending2">
                      Japan
                    </div>
                    <div class="col-6 my-auto text-right">
                      <a href="#" class="dots">
                        <img
                          class="mr-2"
                          src="..\..\src\assets\home\btn\iconright.png"
                      /></a>
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div
              class="col-6 col-sm-4 text-center mx-2 col-lg-2 mx-lg-0 trendingChose"
            >
              <figure class="figure mt-3 text-left">
                <div class="figure-img">
                  <img
                    class="figure-img img-fluid"
                    src="..\..\src\assets\home\trending\lvXeO04CxwQ.png"
                  />
                  <a href="#"
                    ><div class="row mt-3">
                      <div class="col">
                        <span
                          class="ml-2 mb-4 px-2 py-1 text-white trendingChoseTittle"
                          ><b>15 </b>Airlines
                        </span>
                      </div>
                    </div></a
                  >
                </div>
                <figcaption class="figure-caption text-dark">
                  <p class="teksChoseTrending mb-0">Barcelona,</p>
                  <div class="row">
                    <div class="col-6 teksChoseTrending2">
                      Spain
                    </div>
                    <div class="col-6 my-auto text-right">
                      <a href="#" class="dots">
                        <img
                          class="mr-2"
                          src="..\..\src\assets\home\btn\iconright.png"
                      /></a>
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div
              class="col-6 text-center col-sm-4 mx-2 col-lg-2 mx-lg-0 trendingChose"
            >
              <figure class="figure mt-3 text-left">
                <div class="figure-img">
                  <img
                    class="figure-img img-fluid"
                    src="..\..\src\assets\home\trending\image 3.png"
                  />
                  <a href="#"
                    ><div class="row mt-3">
                      <div class="col">
                        <span
                          class="ml-2 mb-4 px-2 py-1 text-white trendingChoseTittle"
                          ><b>15 </b>Airlines
                        </span>
                      </div>
                    </div></a
                  >
                </div>
                <figcaption class="figure-caption text-dark">
                  <p class="teksChoseTrending mb-0">Tokyo,</p>
                  <div class="row">
                    <div class="col-6 teksChoseTrending2">
                      Japan
                    </div>
                    <div class="col-6 my-auto text-right">
                      <a href="#" class="dots">
                        <img
                          class="mr-2"
                          src="..\..\src\assets\home\btn\iconright.png"
                      /></a>
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- hero -->
    <div class=" row bgDesti bgHeader ">
      <div class="col d-flex justify-content-center mx-2 mx-md-0 ">
        <img
          class="img-fluid"
          src="..\..\src\assets\home\destinations\bgDestination.png"
        />
      </div>
    </div>
    <div class="row top10 pb-3 mt-4 pb-sm-4 pb-lg-0 mt-lg-5  ">
      <div class="col-12 text-center">TOP 10</div>
      <div class="col-12 text-center top10Dest mt-lg-3">
        Top 10 destinations
      </div>
    </div>
    <div class="row mt-4 mt-sm-5 mt-lg-0">
      <div class="col  text-center d-flex justify-content-center">
        <div class="slidershow middle">
          <div class="slides">
            <input type="radio" name="r" id="r1" checked />
            <input type="radio" name="r" id="r2" />
            <div class="slide s1">
              <div
                class="row d-flex  justify-content-center mt-lg-5 text-uppercase"
              >
                <div
                  class="col-2 mx-1 d-flex justify-content-center col-lg-2 mx-lg-2 destPict2 "
                >
                  <figure class="figure">
                    <a href="#"
                      ><img
                        class="img-fluid roundedPicture"
                        src="..\..\src\assets\home\destinations\1.png"
                    /></a>
                    <figcaption class="mt-lg-4 text-center cityDestination">
                      bali
                    </figcaption>
                  </figure>
                </div>
                <div
                  class="col-2 mx-1 d-flex justify-content-center col-lg-2 mx-lg-2 destPict2 "
                >
                  <figure class="figure">
                    <a href="#"
                      ><img
                        class="img-fluid roundedPicture"
                        src="..\..\src\assets\home\destinations\2.png"
                    /></a>
                    <figcaption class="mt-lg-4 text-center cityDestination">
                      sydney
                    </figcaption>
                  </figure>
                </div>
                <div
                  class="col-2 mx-1 d-flex justify-content-center col-lg-2 mx-lg-2 destPict2 "
                >
                  <figure class="figure">
                    <a href="#"
                      ><img
                        class="img-fluid roundedPicture"
                        src="..\..\src\assets\home\destinations\3.png"
                    /></a>
                    <figcaption class="mt-lg-4 text-center cityDestination">
                      hongkong
                    </figcaption>
                  </figure>
                </div>
                <div
                  class="col-2 mx-1 d-flex justify-content-center col-lg-2 mx-lg-2 destPict2 "
                >
                  <figure class="figure">
                    <a href="#"
                      ><img
                        class="img-fluid roundedPicture"
                        src="..\..\src\assets\home\destinations\5.png"
                    /></a>
                    <figcaption class="mt-lg-4 text-center cityDestination">
                      agra
                    </figcaption>
                  </figure>
                </div>
                <div
                  class="col-2 mx-1 d-flex justify-content-center col-lg-2 mx-lg-2 destPict2 "
                >
                  <figure class="figure">
                    <a href="#"
                      ><img
                        class="img-fluid roundedPicture"
                        src="..\..\src\assets\home\destinations\4.png"
                    /></a>
                    <figcaption class="mt-lg-4 text-center cityDestination">
                      PARIS
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div class="slide">
              <div
                class="row d-flex justify-content-center mt-lg-5 text-uppercase"
              >
                <div
                  class="col-2 mx-1 d-flex justify-content-center col-lg-2 mx-lg-2 destPict2 "
                >
                  <figure class="figure">
                    <a href="#"
                      ><img
                        class="img-fluid roundedPicture"
                        src="..\..\src\assets\home\destinationPicture\3.jpg"
                    /></a>
                    <figcaption class="mt-lg-4 text-center cityDestination">
                      New York
                    </figcaption>
                  </figure>
                </div>
                <div
                  class="col-2 mx-1 d-flex justify-content-center col-lg-2 mx-lg-2 destPict2 "
                >
                  <figure class="figure">
                    <a href="#"
                      ><img
                        class="img-fluid roundedPicture"
                        src="..\..\src\assets\home\destinationPicture\1.jpg"
                    /></a>
                    <figcaption class="mt-lg-4 text-center cityDestination">
                      Lombok
                    </figcaption>
                  </figure>
                </div>
                <div
                  class="col-2 mx-1 d-flex justify-content-center col-lg-2 mx-lg-2 destPict2 "
                >
                  <figure class="figure">
                    <a href="#"
                      ><img
                        class="img-fluid roundedPicture"
                        src="..\..\src\assets\home\destinationPicture\2.jpg"
                    /></a>
                    <figcaption class="mt-lg-4 text-center cityDestination">
                      dubai
                    </figcaption>
                  </figure>
                </div>
                <div
                  class="col-2 mx-1 d-flex justify-content-center col-lg-2 mx-lg-2 destPict2 "
                >
                  <figure class="figure">
                    <a href="#"
                      ><img
                        class="img-fluid roundedPicture"
                        src="..\..\src\assets\home\destinationPicture\4.jpg"
                    /></a>
                    <figcaption class="mt-lg-4 text-center cityDestination">
                      japan
                    </figcaption>
                  </figure>
                </div>
                <div
                  class="col-2 mx-1 d-flex justify-content-center col-lg-2 mx-lg-2 destPict2 "
                >
                  <figure class="figure">
                    <a href="#"
                      ><img
                        class="img-fluid roundedPicture"
                        src="..\..\src\assets\home\destinationPicture\5.jpg"
                    /></a>
                    <figcaption class="mt-lg-4 text-center cityDestination">
                      singapore
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row  mt-1 mt-md-3 mt-lg-5 mb-n4 pb-lg-5">
      <div class="col d-flex justify-content-center">
        <label for="r1" class="mr-4  buttonDest d-flex justify-content-center"
          ><img
            class="align-self-center"
            src="../../src\assets\home\btn\btnback (1).png"
            alt=""
        /></label>
        <label for="r2" class="ml-4 d-flex buttonDest justify-content-center "
          ><img
            class="align-self-center"
            style="transform:scaleX(-1);"
            src="../../src\assets\home\btn\btnback (1).png"
        /></label>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    Navbar,
    Footer
  },
  data () {
    return {
      dataForBook: {
        origin: '',
        destination: '',
        date: '',
        childPerson: null,
        adultPerson: null,
        classFlight: 0
      }
    }
  },
  methods: {
    book () {
      // console.log(this.dataForBook)
      parseInt(this.dataForBook.classFlight)
      this.getFlight(this.dataForBook)
        .then((response) => {
          const adultPerson = !this.dataForBook.adultPerson ? 0 : this.dataForBook.adultPerson
          const childPerson = !this.dataForBook.childPerson ? 0 : this.dataForBook.childPerson
          // const person = (parseInt(adultPerson) + parseInt(childPerson))
          this.$router.push({ path: '/search', query: { origin: this.dataForBook.origin, destination: this.dataForBook.destination, date: this.dataForBook.date, adultPerson: adultPerson, childPerson: childPerson } })
        })
    },
    ...mapActions({
      getCity: 'city/getDataCity',
      getFlight: 'flight/getDataFlight'
    })
  },
  computed: {
    ...mapGetters({
      getDataCity: 'city/getallCity'
    })
  },
  mounted () {
    this.getCity()
  }
}
</script>

<style>
/* Destination */
.cityDestination {
  font-family: Poppins;
  font-size: 15px;
  text-transform: uppercase;
  color: #ffffff !important;
}
.top10Dest {
  font-family: Poppins;
  font-weight: 600;
  font-size: 24px;
  color: #ffffff;
}
.top10 {
  font-family: Poppins;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.3em;
  color: #ffffff;
}

.roundedPicture {
  border: 4px solid rgb(255, 255, 255);
  padding: 10px;
  border-radius: 25px;
}

.destPict2 img {
  border-radius: 50%;
}
.slidershow {
  width: 1106px;
  overflow: hidden;
}

.buttonDest {
  width: 60px;
  height: 42px;
  border: 1.6px solid #ffffff;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
  /* margin-bottom: 200px; */
}
.buttonDest:hover {
  background-color: white;
}

.buttonDest:hover img {
  filter: invert(48%) sepia(64%) saturate(3507%) hue-rotate(192deg)
    brightness(104%) contrast(101%);
}

input[name="r"] {
  position: absolute;
  visibility: hidden;
}

.slides {
  width: 500%;
  height: 100%;
  display: flex;
}

.slide {
  width: 20%;
  transition: 0.9s;
}

#r1:checked ~ .s1 {
  margin-left: 0;
}
#r2:checked ~ .s1 {
  margin-left: -20%;
}
/* end Destinations */
/* @media screen and (min-width: 768px) { */
/* background header */
.bgHeader img {
  position: absolute;
}
.marginBody {
  margin-top: 70px !important;
}
.pictHeader1 {
  top: 250px;
  right: 0px;
  border-radius: 0px 60px 60px 0px;
}
.pictHeader2 {
  top: -80px;
  right: 0px;
  border-radius: 60px 0px 0px 60px;
}
.pictHeader3 {
  top: 480px;
  right: 210px;
}

/* teksBody */
.smallTextHeader {
  word-spacing: 5px;
  font-family: Poppins;
  font-size: 18px;
  line-height: 221.43%;
  color: #6b6b6b;
}

.textHeader2 {
  font-family: Poppins;
  font-weight: 600;
  font-size: 54px;
  color: #2395ff;
}
.textHeader {
  font-family: Poppins;
  font-weight: 600;
  font-size: 54px;
  margin-top: 60px;
}
.hey {
  font-family: Poppins;
  font-weight: 500;
  font-size: 16px;
}
.where {
  font-family: Poppins;
  font-weight: 500;
  font-size: 20px;
}
.boxBuy {
  background: #ffffff;
  box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.19);
  border-radius: 12px;
  padding-right: 10px !important;
  padding-left: 10px !important;
  margin-right: 220px !important;
  margin-left: 50px !important;
}
.recentLy :hover {
  opacity: 0.5;
}
.recentLy {
  transition: opacity 0.5s !important;
  font-family: Poppins;
  font-weight: 600;
  font-size: 16px;
  color: #2395ff;
}
.boxOrder {
  box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.19);
  border-radius: 12px;
}
.from {
  font-family: Lato;
  font-size: 12px;
  color: #979797;
}
.routeTeks {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;

  color: #000000;
}
.teksCountry {
  font-family: Lato;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;

  color: #000000;
}
/* section trending */
.teksChoseTrending {
  font-family: Poppins;
  font-weight: 600;
  font-size: 14px;
  margin-top: -12px !important;
  color: #000000;
}
.teksChoseTrending2 {
  font-family: Poppins;
  font-weight: 600;
  font-size: 24px;
  color: #000000;
}
.trendingChose img {
  border-radius: 20px;
}
.trendingChose {
  background: #ffffff;
  box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.15);
  border-radius: 20px;
}
.viewTrending {
  font-family: Poppins;
  font-weight: 600;
  font-size: 16px;
  color: #2395ff;
}
.trendingHeader2 {
  font-family: Poppins;
  font-weight: 600;
  font-size: 24px;
  color: #000000;
}
.trendingHeader {
  font-family: Poppins;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.3em;
  color: #2395ff;
}
.trending {
  margin-top: 175px;
}
.trendingChoseTittle {
  font-family: Poppins;
  font-size: 12px;
  line-height: 18px;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.41);
  border-radius: 33px;
}

.dots {
  height: 25px;
  width: 25px;
  background-color: #e9f4ff;
  border-radius: 50%;
  display: inline-block;
}
/* hero */

.mbDest {
  margin-bottom: 290px;
}
.roundedPicture {
  border: 4px solid rgb(255, 255, 255);
  padding: 10px;
  border-radius: 25px;
}

.figure-img {
  position: relative;
}
.figure-img a:hover {
  margin-bottom: 5px;
  background-color: rgba(245, 250, 255, 0.3);
}
.figure-img a {
  position: absolute;
  top: 0;
  bottom: 3.2px;
  left: 0;
  right: 0;
  border-radius: 20px;
  text-decoration: none !important;
}

.colOr {
  width: 50px !important;
}
.teksSubmit {
  font-family: Poppins;
  font-weight: bold;
  font-size: 18px;
  color: #ffffff;
}
.tekChoseDeparture {
  font-family: Lato;
  font-weight: bold;
  font-size: 14px;
  color: #000000;
}
.choseDeparture {
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 6px;
}
.teksMenu {
  font-family: Poppins;
  font-weight: 500;
  font-size: 14px;
  color: #6b6b6b;
}
.btnTeks2:hover {
  background-color: #e9e9e9 !important;
}
.btnTeks2 {
  font-family: Poppins;
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
  background-color: #f0f0f0 !important;
  border-radius: 6px;
}
.btnTeks {
  font-family: Poppins;
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
}
.bgDesti {
  margin-top: 120px;
}

@media screen and (max-width: 1098px) {
  .pictHeader3 {
  top: 500px;
  right: 0px !important;
    height: 240px !important;
  }
  .pictHeader1{
  top: 290px;
  }
}

@media screen and (max-width: 768px) {
  .bgDesti {
    margin-top: 100px;
  }
  .hpLayer {
    position: absolute;
    width: 166px;
    height: 85%;
    top: 25px;
    left: -40px;
    background: #ffffff;
    box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.25);
    border-radius: 20px;
    z-index: -1;
    opacity: 0.3;
  }
  .hpLayer1 {
    position: absolute;
    width: 166px;
    height: 95%;
    top: 10px;
    left: -20px;
    background: #ffffff;
    box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.35);
    border-radius: 20px;
    z-index: -1;
    opacity: 0.4;
  }
  .ovaler {
    overflow-x: auto;
  }
  .ovaler::-webkit-scrollbar{
    width:0;
  }
  .pictHeader3 {
    top: 600px;
    height: 230px !important;
    right: 0px;
  }
  .pictHeader2 {
    top: 90px;
    left: 0px;
  }
  .pictHeader1 {
    top: 300px;
    left: -50px;
    right: 0px;
    border-radius: 0px 60px 60px 0px;
    height: 350px !important;
  }
  .textHeader {
    font-size: 46px;
    margin-top: -50px;
  }
  .textHeader2 {
    font-size: 46px;
  }
  .smallTextHeader {
    word-spacing: 0px;
    font-size: 20px;
    font-weight: 200 !important;
    color: #979797;
    margin-bottom: 30px;
  }
}
@media screen and (max-width: 550px) {
  /* destinations */
  .cityDestination {
    margin-top: 5px;
    font-family: Poppins;
    font-size: 12px;
    text-transform: uppercase;
    color: #ffffff !important;
  }
  .destPict2 img {
    border-radius: 50%;
    max-width: 63px;
  }
  .bgHeader img {
    height: 258px;
    width: 600px !important;
  }
  .top10Dest {
    font-size: 16px;
  }
  .top10 {
    font-size: 12px;
  }
  .roundedPicture {
    border: 2px solid rgb(255, 255, 255);
    padding: 5px;
  }
  .slidershow {
    width: 350px;
    overflow: hidden;
  }
  .bgDesti {
    margin-top: 40px;
  }
  .buttonDest {
    width: 54px;
    height: 30px;
    border: 1.6px solid #ffffff;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;
    margin-bottom:40px;
  }
  .buttonDest img {
    height: 15px;
  }

  /* end Destinations */

  .bgHeader {
    position: relative;
  }
  .trendingHeader2 {
    font-weight: 500;
    font-size: 20px;
    color: #000000;
  }
  .trending {
    margin-top: 105px !important;
  }
  .pictHeader1 {
    top: 130px;
    height: 200px !important;
    right: 0px;
  }
  .pictHeader2 {
    top: -70px;
    left: 0px;
  }
  .pictHeader3 {
    top: 570px;
    right: -0px;
    left: 40px;
    height: 150px !important;
  }
  .hpLayer {
    position: absolute;
    width: 166px;
    height: 85%;
    top: 25px;
    left: -40px;
    background: #ffffff;
    box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.25);
    border-radius: 20px;
    z-index: -1;
    opacity: 0.3;
  }
  .hpLayer1 {
    position: absolute;
    width: 145px;
    height: 95%;
    top: 10px;
    left: -20px;
    background: #ffffff;
    box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.35);
    border-radius: 20px;
    z-index: -1;
    opacity: 0.4;
  }
  .textHeader2 {
    font-size: 36px;
  }
  .textHeader {
    font-size: 36px;
    margin-top: -130px;
    margin-left: 0px;
  }
  .marginBody {
    margin-top: 180px !important;
  }
  .boxBuy {
    padding-right: 0px !important;
    padding-left: 0px !important;
    margin-right: 0px !important;
    margin-left: 0px !important;
    max-width: 330px !important;
  }
  .teksSubmit {
    font-size: 15px;
  }
  .ovaler {
    overflow-x: auto;
  }
  .smallTextHeader {
    word-spacing: 0px;
    font-size: 15px;
    font-weight: 200 !important;
    color: #979797;
    margin-left: 0px;
  }

}
</style>
