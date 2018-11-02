"use strict";
/**
 * @file Vuex 状态封装
 * @author DJ
 */
import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  //数据源申明
  state: {
    queryDatas: ""
  },
  //写入缓存并同步state
  mutations: {
    queryDatas: (state, val) => {
      state.queryDatas = val;
    },
  }
});