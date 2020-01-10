import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { fetch, post } from "../src/api/axios";
import qs from "qs";

Vue.prototype.$post = post;
Vue.prototype.$fetch = fetch;
Vue.prototype.$qs = qs;
Vue.config.productionTip = false;

// vant 引用
import { Tabbar } from "vant";
Vue.use(Tabbar);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
