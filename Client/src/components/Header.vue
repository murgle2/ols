<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info" fixed="top">
      <b-navbar-brand href="#">
        <router-link to="/">
          <img
            src="../assets/olslogo.png"
            width="40"
            height="30"
            class="d-inline-block align-top"
            alt="OLS"
          />
        </router-link>
      </b-navbar-brand>
      <b-navbar-brand href="#">
        Streams
      </b-navbar-brand>
      <b-navbar-brand href="#">Clips</b-navbar-brand>

      <b-navbar-nav class="ml-auto">
        <b-dropdown right no-caret>
          <template v-slot:button-content>
            <b-icon icon="gear-fill"></b-icon>
          </template>
          <router-link to="/about" tag="b-dropdown-item">About</router-link>
          <b-dropdown-item>Logout</b-dropdown-item>
        </b-dropdown>
      </b-navbar-nav>
    </b-navbar>
    <router-view class="add-padding"></router-view>
  </div>
</template>

<script>
export default {
  name: 'Header.vue'
};
</script>

<style scoped>
.center {
  position: absolute; /*will cause error on phone screen*/
  justify-content: center;
  left: 50%;
  transform: translateX(-50%);
  top: 15%;
}
.add-padding {
  padding-top: 55px;
}
h4 {
  color: blueviolet;
}
</style>
