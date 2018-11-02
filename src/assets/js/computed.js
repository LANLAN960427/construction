'use strict'
/**
 * @file DATA映射
 * @author DJ
 */
import {
  mapState
} from 'vuex';

export default mapState({
  loaclData: state => {
    return state.loaclData;
  },
  queryDatas: state => {
    return state.queryDatas;
  }
})