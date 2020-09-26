<template>
    <div>
  <b-navbar toggleable="md" type="light"  class="bg-lighto h-158 mt-10">
    <b-navbar-brand href="" class="d-flex">
        <img src="../assets/icons/ankasa-smallicon.png" alt="" class="ml-sm-5 mr-2 ml-1">
        <h3>Ankasa</h3>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"><img src="../assets/icons/align-right.png"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav class="ml-sm-auto mt-sm-3">
      <b-navbar-nav class="ml-auto">
        <b-nav-form class="divsearch">
            <b-icon icon="search" class="ml-2 d-none d-md-flex" ></b-icon>
          <b-form-input size="sm" class="mr-sm-12" placeholder="Search"></b-form-input>
        </b-nav-form>
        <b-nav-item class="navigation" @click="$event.target.classList.toggle('active')" ref="active1">Find Ticket</b-nav-item>
        <b-nav-item class="navigation" @click="$event.target.classList.toggle('active')" ref="active2">My Booking</b-nav-item>
            <b-dropdown-divider></b-dropdown-divider>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto" v-if="logged">
          <b-navbar-nav class="mr-auto notif-chat">
            <b-nav-item href="#" class="d-block d-md-none">Chats</b-nav-item>
            <b-nav-item href="#" class="d-block d-md-none">Notifications</b-nav-item>
            <b-nav-item href="#" class="d-none d-md-flex"><img src="../assets/icons/mail.png"></b-nav-item>
            <b-nav-item href="#" class="d-none d-md-flex"><img src="../assets/icons/bell.png"></b-nav-item>
          </b-navbar-nav>
          <b-nav-item-dropdown toggle-class="text-decoration-none mr-5" no-caret right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <div class="borderprofile rounded-circle">
                <img class="rounded-circle" src="../assets/img/anonymous.jpg" alt="">
            </div>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto" v-else>
        <router-link to="/register" type="button" class="btn btn-primary" >Sign Up</router-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  data () {
    return {
      logged: true
    }
  },
  methods: {
    active () {
      const active = this.$refs.active.classList
      active.contains('active') ? active.remove('active') : active.add('active')
    }
  }
}
</script>

<style scoped>
.bg-lighto {
    background: #fff;
}
.navbar-light .navbar-toggler {
    color: rgba(0, 0, 0, 0.5);
    border: none;
}
.navbar {
    padding: 0.5rem 1rem;
    margin: 10px 0px;
}
.divsearch{
    background: #F5F5F5;
    color: #6B6B6B;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    border-radius: 10px;
    display: flex;
    align-items: center;
}
.divsearch input{
    background: rgba(0,0,0,0);
    border: none;
}
.notif-chat {
    width: 80px;
}
.notif-chat img{
    width: 100%;
}
.notif-chat li.nav-item {
    display: flex;
    align-items: center;
}
.borderprofile {
    border: 2px #00B7DF solid;
    width: 50px;
    height: 50px;
    padding: 2px;
}
.borderprofile img{
    width: 100%;
}
.navlink.dropdown-toggle::after {
    display: none;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: "";
    border-top: 0.3em solid;
    border-right: 0.3em solid transparent;
    border-bottom: 0;
    border-left: 0.3em solid transparent;
}
.navigation{
    color: #000;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    margin: 0px 10px;
}
.active {
    position: relative;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
}
.active::after {
    content: "";
    width: 100%;
    height: 100%;
    border-bottom: 4px #00B7DF solid;
    position: absolute;
    left: 0;
    top: 0;
    justify-self: center;
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
@media (max-width: 767px) {
.active::after {
    display: none;
}
#nav-collapse{
    background-color: #00B7DF;
    padding: 30px ;
    border-radius: 0px 0px 10px 10px;
}
.borderprofile {
    border: 2px #fff solid;

}
.btn-primary {
    background: #fff;
    box-shadow: 0px 8px 10px rgba(239, 240, 241, 0.3);
    border-radius: 10px;
    border: 2px #2395FF solid;
    color: #2395FF;
}
 }
</style>
