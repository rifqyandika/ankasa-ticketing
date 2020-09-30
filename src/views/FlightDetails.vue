<template>
  <div
    class="container-fluid"
    style="
background: #F5F6FA;"
  >
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
              <form @submit.prevent="onLogin">
                <div class="row ">
                  <div class="col-12 ">
                    <label class="mt-4">Full Name</label>
                    <input
                      type="text"
                      class="ml-n2 form-control border-0"
                      placeholder="Name"
                      required
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
                    />
                    <hr style="border: 1px solid #F5F6FA;margin-top:2px;" />
                  </div>
                  <div class="col-12 ">
                    <label class="mt-3">Phone Number</label>
                    <input
                      type="number"
                      class="ml-n2 form-control border-0"
                      placeholder="Number"
                      required
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
                        <h7>
                          Make sure the customer data is correct.
                        </h7>
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
              <img class="logoAirlines" src="" />
            </div>
            <div class="col textPlanes my-auto ">
              Garuda Indonesia
            </div>
          </div>
          <div class="row mt-3 routeTeks  ">
            <div class="col-4  routeFlights ml-2">Medan (IDN)</div>
            <div class="col-1  ">
              <a href="#" class="mx-auto"
                ><img src="..\assets\icons\Vector (8).png"
              /></a>
            </div>
            <div class="col-5 ml-1 routeFlights">Tokyo (JPN)</div>
          </div>
          <div class="row mt-2">
            <div class="ml-2 col-5  daysFlight">
              Sunday, 15 August 2020
            </div>
            <div><p class="mt-n1">•</p></div>
            <div class="ml-2 col-5  daysFlight">
              12:33 - 15:21
            </div>
          </div>
          <div class="row mt-3">
            <div class="col ml-2  ">
              <a href="#" class="text-decoration-none"
                ><img src="..\assets\icons\Group 1059.png" alt="" />
                <h7 class="ml-2 refundable">Refundable</h7>
              </a>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col ml-2  ">
              <a href="#" class="text-decoration-none"
                ><img src="..\assets\icons\Group 1059.png" alt="" />
                <h7 class="ml-2 refundable">Can reschedule</h7>
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
                <h7 href="#" class="totalRp">$ 145,00</h7>

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
              <b-nav-item>Gorengan 2000</b-nav-item>
              <b-nav-item>Kopi 3000</b-nav-item>
              <b-nav-item>Tai cicek 2000</b-nav-item>
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
              <form @submit.prevent="onLogin">
                <div class="row boxPassenger mt-3">
                  <div class="col-6 mt-3 pasengerDetails my-3">
                    Passenger : 1 Adult
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
                    <label class="mt-4">Tittle</label>
                    <input
                      type="text"
                      class="ml-n2 form-control border-0"
                      placeholder="Name"
                      required
                    />
                    <hr style="border: 1px solid #F5F6FA;margin-top:2px;" />
                  </div>
                  <div class="col-12 ">
                    <label class="mt-3">Full Name</label>
                    <input
                      type="text"
                      class="ml-n2 form-control border-0"
                      placeholder="Email"
                      required
                    />
                    <hr style="border: 1px solid #F5F6FA;margin-top:2px;" />
                  </div>
                  <div class="col-12 ">
                    <label class="mt-3 ml-0">Nationallity</label>
                  </div>
                  <b-dropdown size="md" variant="p">
                    <template v-slot:button-content
                      >Indonesia<span class="sr-only">Search</span>
                    </template>
                    <b-dropdown-item href="#">Jamaica</b-dropdown-item>
                    <b-dropdown-item href="#">Afrika</b-dropdown-item>
                    <b-dropdown-item href="#">Simalakama</b-dropdown-item>
                  </b-dropdown>
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
                      :indeterminate.sync="indeterminate"
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
          <button type="submit" class="btn">Proceed to Payment</button>
        </div>
      </div>
    </div>
  </div>
</template>

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
