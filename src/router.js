import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home/Home";
import Index from "./views/Index/Index.vue";
import Profession from "./views/Censor/Profession.vue";
import Promptly from "./views/Censor/Promptly.vue";
import Probodel from "./views/Censor/Probodel.vue";
import InfoItem from "./views/Conproject/InfoItem.vue";
import ProDetails from "./views/Censor/ProDetails.vue";
import ProReview from "./views/Censor/ProReview.vue";
Vue.use(Router);

export default new Router({
  // mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/index/index",
      component: Home,
      children: [
        {
          path: "/index/index",
          name: "index",
          component: Index,
          meta: {
            title: "建工施工图审查进度信息查询" //页面标题
          }
        },
        {
          path: "/censor/profession",
          name: "profession",
          component: Profession,
          meta: {
            title: "审查情况" //页面标题
          }
        },
        {
          path: "/censor/proDetails",
          name: "proDetails",
          component: ProDetails,
          meta: {
            title: "勘察设计单位回复" //页面标题
          }
        },
        {
          path: "/censor/proreview",
          name: "proreview",
          component: ProReview,
          meta: {
            title: "审查师复审" //页面标题
          }
        },
        {
          path: "/censor/promptly",
          name: "promptly",
          component: Promptly,
          meta: {
            title: "设计人员备案信息" //页面标题
          }
        },
        {
          path: "/censor/probodel",
          name: "probodel",
          component: Probodel,
          meta: {
            title: "设计人员备案信息" //页面标题
          }
        },
        {
          path: "/conproject/infoitem",
          name: "infoitem",
          component: InfoItem,
          meta: {
            title: "项目信息查询" //页面标题
          }
        },
      ]
    }
  ]
});
