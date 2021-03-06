import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './assets/js/store'
import util from './assets/js/util'
import './registerServiceWorker'
import "normalize.css";
import Vant from 'vant';
import 'vant/lib/index.css';
import './assets/css/iconfont.css';
import "./assets/css/theme.less";
import axios from './assets/js/request';
// import QRCode from 'qrcode';

Vue.use(Vant);
Vue.prototype.$util = util;
// Vue.prototype.$QRCode = QRCode;
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

// 路由守卫
// router.beforeEach((to, from, next) => {
//   //如果未匹配到路由
//   if (to.name == null) {
//     //如果上级也未匹配到路由则跳转首页，如果上级能匹配到则转上级路由
//     from.name == null ? next({
//       name: from.name
//     }) : next({
//       name: "index"
//     })
//   } else {
//     next();
//   }
// });

window.vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')