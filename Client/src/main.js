import Vue from "vue";
import Router from 'vue-router';
import App from "./App.vue";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Stream from "./components/Stream";
import About from "./components/About";

Vue.use(Router);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;


const routes = [
  { path: '/', component: Stream },
  { path: '/about', component: About}
];

const router = new Router({
  routes
});



new Vue({
  router,
  render: h => h(App)
}).$mount("#app", );
