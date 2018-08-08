import Vue from "vue";
import Router from "vue-router";
import ProQuery from "./views/Conproject/ProQuery.vue";
import Home from "./components/Home/Home";
import ProPlan from "./views/Conproject/ProPlan.vue";
import ProFirm from "./views/Conproject/ProFirm.vue";
import UnFinished from "./views/Conproject/UnFinished.vue";
import Index from "./views/Index/Index.vue";
import Profession from "./views/Censor/Profession.vue";
import Professions from "./views/Censor/Professions.vue";
import Promptly from "./views/Censor/Promptly.vue";
import Probodel from "./views/Censor/Probodel.vue";
import Login from "./views/Login/Login.vue";
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
            title: "项目信息查询" //页面标题
          }
        },
        {
          path: "/conproject/proQuery",
          name: "proQuery",
          component: ProQuery,
          meta: {
            title: "项目信息查询(甲方)" //页面标题
          }
        },
        {
          path: "/conproject/proPlan",
          name: "proPlan",
          component: ProPlan,
          meta: {
            title: "项目信息查询(设计院)" //页面标题
          }
        },
        {
          path: "/conproject/proFirm",
          name: "proFirm",
          component: ProFirm,
          meta: {
            title: "项目信息查询(审图公司)" //页面标题
          }
        },
        {
          path: "/conproject/unFinished",
          name: "unFinished",
          component: UnFinished,
          meta: {
            title: "未完成事项" //页面标题
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
          path: "/censor/professions",
          name: "professions",
          component: Professions,
          meta: {
            title: "审查情况" //页面标题
          }
        },
        {
          path: "/login/login",
          name: "login",
          component: Login,
          meta: {
            title: "主页" //页面标题
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
      ]
    }
  ]
});
