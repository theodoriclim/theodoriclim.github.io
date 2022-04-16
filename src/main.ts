import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Aos from "aos";

import "aos/dist/aos.css"; // You can also use <link> for styles
import "@/assets/css/main.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
  created() {
    Aos.init();
  },
}).$mount("#app");
