import Vue from "vue";
import Router from "vue-router";
import ProQuery from "./views/Conproject/ProQuery.vue";
import Home from "./components/Home/Home";
Vue.use(Router);

export default new Router({
  // mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/conproject/proQuery",
      component: Home,
      children: [
        {
          path: "/conproject/proQuery",
          name: "proQuery",
          component: ProQuery,
          meta: {
            title: "项目信息查询(甲方)" //页面标题
          }
        }
      ]
    }
  ]
});
