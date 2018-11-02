'use strict'
/**
 * @file DATA映射
 * @author DJ
 */
import {
  mapState
} from 'vuex';

export default mapState({
  queryDatas: state => {
    return state.queryDatas;
  },
})