import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { fetch, post } from "../src/api/axios";
import qs from "qs";
import "@/assets/styles/index.scss";

Vue.prototype.$post = post;
Vue.prototype.$fetch = fetch;
Vue.prototype.$qs = qs;
Vue.config.productionTip = false;

// vant 引用
import { Tabbar, Field } from "vant";
Vue.use(Tabbar).use(Field);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
