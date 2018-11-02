import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home/Home";
import Index from "./views/Index/Index.vue";
import InfoItem from "./views/Conproject/InfoItem.vue";
Vue.use(Router);

export default new Router({
  // mode: "history",
  routes: [{
    path: "/",
    component: Home,
    children: [{
        path: "/index/:id",
        name: "index",
        component: Index,
        meta: {
          title: "建工施工图审查进度信息查询" //页面标题
        }
      },
      {
        path: "/project/info",
        name: "infoItem",
        component: InfoItem,
        meta: {
          title: "项目信息查询" //页面标题
        }
      },
    ]
  }]
});