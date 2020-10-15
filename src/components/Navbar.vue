<template>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand to="/">Name Proyect</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="mt-1">
         
        <b-nav-item to="/" >Home</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-button v-if="!isLoggedIn" to="/login" size="sm" class="my-2 my-sm-0" variant="success" type="button">login</b-button>
        <b-button v-if="!isLoggedIn" to="/signin" size="sm" class="my-2 my-sm-0 ml-2"  variant="warning" type="button">sign-In</b-button>

        <b-button v-if="isLoggedIn" @click="logout()" size="sm" class="my-2 my-sm-0 ml-2"  variant="danger" type="button">Logout</b-button>

        
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Navbar",
  data() {
    return {
      isLoggedIn:false,
      userEmail:''
    }
  },
   created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.userEmail = firebase.auth().currentUser.email;
    }
  },
  methods: {
    logout(){
      firebase
        .auth()
        .signOut()
        .then(() => {
            this.$router.go({ path: this.$router.path });
            // this.$router.push("login");
            this.isLoggedIn = false;
            console.log("session cerrada");
        });
    }
  },
};
</script>