<template>
  <div class="ml-0 mr-0 container-fluid">
    <Navbar />
    <!-- background-header -->
    <div class="row marginBody bgHeader">
      <div class="col pl-0 ">
        <img
          class="img-fluid pictHeader1"
          src="..\..\src\assets\home\Pict1.jpg"
        />
      </div>
      <div class="col pl-0">
        <img
          class="mt-5 mt-lg img-fluid pictHeader2"
          src="..\..\src\assets\home\Pict2.jpg"
        />
        <img
          class="img-fluid pictHeader3"
          src="..\..\src\assets\home\vector 6.png"
        />
      </div>
    </div>
    <!-- teksHeader -->
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-5 pl-lg-0">
          <p class="textHeader">
            Find your <span class="textHeader2">Flight</span>
          </p>
          <p class="mt-n3 smallTextHeader">and explore the world with us</p>
        </div>
        <div class="mx-lg-1 col-12 col-lg-4 boxBuy mx-auto">
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
              <div class="container boxOrder mx-3 py-3">
                <div class="row from">
                  <div class="col ">From</div>
                  <div class="col  text-right">To</div>
                </div>
                <div class="row routeTeks">
                  <div class="col ">Medan</div>
                  <div class="col  text-center">
                    <a href="#"
                      ><img src="..\..\src\assets\home\btn\Vector (2).png"
                    /></a>
                  </div>
                  <div class="col text-right">Japan</div>
                </div>
                <div class="row teksCountry">
                  <div class="col ">Indonesia</div>
                  <div class="col text-right">Japan</div>
                </div>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col btnTeks">
                <button
                  type="submit"
                  class="btn btn-primary btn-sm px-3 rounded-lg py-2"
                >
                  <img
                    class="mr-2"
                    src="..\..\src\assets\home\btn\Vector (3).png"
                  />One way
                </button>
              </div>
              <div class="col text-right">
                <button
                  type="submit"
                  class="btn btn-sm btnTeks2  px-4 rounded-lg py-2"
                >
                  <img
                    class="mr-2"
                    src="..\..\src\assets\home\btn\Vector (4).png"
                  />One way
                </button>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-12 teksMenu ">Departure</div>
            </div>
            <div class="row mt-1 ">
              <div class="container choseDeparture mx-3 py-3">
                <div class="row mx-1 tekChoseDeparture">
                  Monday, 20 July 2020
                  <a href="#" class="ml-auto"
                    ><img src="..\..\src\assets\home\btn\iconright.png"
                  /></a>
                </div>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-12 teksMenu ">How many person?</div>
            </div>
            <div class="row mt-1 mb-4">
              <div class="col choseDeparture mx-3 py-3">
                <div class="row mx-1 tekChoseDeparture">
                  2 Child
                  <a href="#" class="ml-auto"
                    ><img src="..\..\src\assets\home\btn\iconright.png"
                  /></a>
                </div>
              </div>
              <div class="col choseDeparture mx-3 py-3">
                <div class="row mx-1 tekChoseDeparture">
                  4 Adult
                  <a href="#" class="ml-auto"
                    ><img src="..\..\src\assets\home\btn\iconright.png"
                  /></a>
                </div>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-12 teksMenu ">Which class do you want??</div>
            </div>
            <div class="row mt-2">
              <div class="col tekChoseDeparture">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineRadio1"
                    >Economy</label
                  >
                </div>
                <div class=" ml-3 form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineRadio2"
                    >Business</label
                  >
                </div>
                <div class="ml-3 form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio3"
                    value="option3"
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
                  type="button"
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
        </div>
      </div>
    </div>
    <!-- sectionTrending -->
    <section class="trending ">
      <div class="container ">
        <div class="row">
          <div class="col ">
            <p class="trendingHeader">TRENDING</p>

            <p class="trendingHeader2">Trending destinations</p>
          </div>
          <div class="col text-right">
            <a href="#" class="text-decoration-none viewTrending">View all</a>
          </div>
        </div>
        <div class="ovaler d-flex justify-content-md-center">
          <div class="col-7 mx-2 col-lg-2  mx-lg-auto trendingChose item">
            <figure class="figure mt-3">
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
          <div class="col-7 mx-2 col-lg-2 mx-lg-auto trendingChose">
            <figure class="figure mt-3">
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
          <div class="col-7 mx-2 col-lg-2 mx-lg-auto trendingChose">
            <figure class="figure mt-3">
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
          <div class="col-7 mx-2 col-lg-2 mx-lg-auto trendingChose">
            <figure class="figure mt-3">
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
          <div class="col-7 mx-2 col-lg-2 mx-lg-auto trendingChose">
            <figure class="figure mt-3">
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
    </section>
    <!-- hero -->
    <div class="row marginBody bgHeader">
      <div class="col destination pl-0 d-flex justify-content-center">
        <img
          class="img-fluid"
          src="..\..\src\assets\home\destinations\bgDestination.png"
        />
      </div>
    </div>
    <div class="container">
      <div class="row top10 mt-5">
        <div class="col-12 text-center">TOP 10</div>
        <div class="col-12 text-center top10Dest mt-3">Top 10 destinations</div>
      </div>
      <div class="row d-flex justify-content-center mt-5 mbDest">
        <div class=" col-2 mx-2">
          <figure class="figure">
            <a href="#"
              ><img
                class="img-fluid roundedPicture rounded-circle"
                src="..\..\src\assets\home\destinations\1.png"
            /></a>
            <figcaption class="mt-4 figure-caption text-center cityDestination">
              PARIS
            </figcaption>
          </figure>
        </div>
        <div class="col-2 mx-2">
          <figure class="figure">
            <a href="#"
              ><img
                class="img-fluid roundedPicture rounded-circle"
                src="..\..\src\assets\home\destinations\2.png"
            /></a>
            <figcaption class="mt-4 figure-caption text-center cityDestination">
              PARIS
            </figcaption>
          </figure>
        </div>
        <div class="col-2 mx-2">
          <figure class="figure">
            <a href="#"
              ><img
                class="img-fluid roundedPicture rounded-circle"
                src="..\..\src\assets\home\destinations\3.png"
            /></a>
            <figcaption class="mt-4 figure-caption text-center cityDestination">
              PARIS
            </figcaption>
          </figure>
        </div>
        <div class="col-2 mx-2">
          <figure class="figure">
            <a href="#"
              ><img
                class="img-fluid roundedPicture rounded-circle"
                src="..\..\src\assets\home\destinations\4.png"
            /></a>
            <figcaption class="mt-4 figure-caption text-center cityDestination">
              PARIS
            </figcaption>
          </figure>
        </div>
        <div class="col-2 mx-2">
          <figure class="figure">
            <a href="#"
              ><img
                class="img-fluid roundedPicture rounded-circle"
                src="..\..\src\assets\home\destinations\5.png"
            /></a>
            <figcaption class="mt-4 figure-caption text-center cityDestination">
              PARIS
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style>
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
  top: -50px;
  right: 0px;
  border-radius: 60px 0px 0px 60px;
}
.pictHeader3 {
  top: 500px;
  right: 190px;
  border-radius: 60px 0px 0px 60px;
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

.cityDestination {
  font-family: Poppins;
  font-size: 18px;
  text-transform: uppercase;
  color: #ffffff !important;
}
.mbDest {
  margin-bottom: 290px;
}
.roundedPicture {
  border: 4px solid rgb(255, 255, 255);
  padding: 10px;
  border-radius: 25px;
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
@media screen and (max-width: 450px) {
  .pictHeader1 {
    top: 100px;
    height: 180px !important;
    right: 55px;
  }
  .pictHeader3 {
    top: 570px;
    right: -70px;
  }
  .textHeader2 {
    font-size: 36px;
  }
  .textHeader {
    font-size: 36px;
    margin-top: -100px;
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
    display: flex;
    overflow-x: auto;
  }
  .smallTextHeader {
    word-spacing: 0px;
    font-size: 15px;
    font-weight: 200 !important;
    color: #979797;
  }
}
</style>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>
