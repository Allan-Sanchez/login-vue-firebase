<template>
<div>
  <Navbar></Navbar>
  <b-container class="main">
    <b-row>
      <b-col>
        <router-view />

      </b-col>
    </b-row>
    <!-- <router-link to="/">Home</router-link> | -->
    <!-- <router-link to="/about">About</router-link> -->

  </b-container>
</div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components:{
    Navbar
  }
}
</script>

<style>
  body{
    background: #E2E8F0 !important;
  }
</style>