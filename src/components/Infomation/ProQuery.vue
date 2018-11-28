<template>
  <div class="proquery">
    <van-collapse v-model="activeNames">
      <!-- 项目概况 -->
      <van-collapse-item class="itemData" name="项目概况" title="项目概况">
        <van-cell-group v-for="(item,index) in queryData.prj_info" :key="index">
          <van-field :value="item.prj_no" label="项目编号：" disabled />
          <van-field :value="item.prj_name" label="项目名称：" disabled />
          <van-field :value="item.prj_js_dw" label="建设单位：" disabled />
          <van-field :value="item.prj_lx" label="联系人：" disabled />
          <van-field :value="item.prj_yw" label="业务员：" disabled />
          <van-field :value="item.prj_tel" label="联系电话：" disabled />
          <van-field :value="item.prj_reg_d" label="登记日期：" disabled />
          <van-field :value="item.prj_ht" label="合同情况：" disabled />
          <van-field :value="item.prj_jf" label="缴费情况：" disabled />
          <van-field :value="item.prj_xkz" label="项目许可证：" disabled v-if="type === 'st' || type === 'sj'" />
          <van-field :value="item.prj_xk_d" label="取得时间：" disabled v-if="type === 'st' || type === 'sj'" />
          <van-field :value="item.prj_hgz_d" label="合格证时间：" disabled />
          <van-field :value="item.prj_hgz_no" label="合格证编号：" disabled />
          <van-field :value="item.prj_xkz_gh" label="规划许可证：" disabled />
        </van-cell-group>
      </van-collapse-item>
      <!-- 审查情况 -->
      <div class="pro-data">
        <div class="pro-item">
          <van-collapse-item class="vanData" name="审查情况" title="审查情况">
            <div class="item-null" v-if="queryData.prj_shencha.length === 0">
              <span>暂无数据</span>
            </div>
            <div v-else class="item-data" v-for="(item,index) in queryData.prj_shencha" :key="index">
              <div class="item-title">
                <span class="title">{{item.sc_zy}}</span>
              </div>
              <div class="item-content">
                <div class="content-row">
                  <span class="row-left">审查师签名：
                    <img :src="'data:image/jpeg;base64,'+item.sc_qm" style="width:200px;vertical-align: middle;" data-bd-imgshare-binded="1">
                  </span>
                </div>
                <div class="content-row" v-if="type === 'st'">
                  <span class="row-left">审查师：{{item.sc_scs}}</span>
                </div>
                <div class="content-row">
                  <span class="row-right">审查师电话：{{item.sc_scs_tel}}</span>
                </div>
                <div class="content-row">
                  <span class="row-left">初审时间：{{item.sc_cs_d}}</span>
                </div>
                <div class="content-row">
                  <span class="row-right">设计院初审回复时间：{{item.sc_cs_hf_d}}</span>
                </div>
                <div class="content-row">
                  <span class="row-left">复审时间：{{item.sc_fs_d}}</span>
                </div>
                <div class="content-row">
                  <span class="row-right">设计院复审回复时间：{{item.sc_fs_hf_d}}</span>
                </div>
              </div>
            </div>
          </van-collapse-item>
        </div>

        <!-- 强条 -->
        <div class="pro-item">
          <van-collapse-item class="vanData" name="强条" title="强条" v-if="type === 'st' || type === 'sj'">
            <div class="item-null" v-if="queryData.prj_qt.length === 0">
              <span>暂无数据</span>
            </div>
            <div v-else class="item-data" v-for="(item,index) in queryData.prj_qt" :key="index">
              <div class="item-title">
                <span class="title">{{item.qt_zy}}</span>
                <span class="text-underline"></span>
              </div>
              <div class="item-content">
                <div class="content-row">
                  <div v-html="item.qt_info" style="line-height: normal;"></div>
                </div>
              </div>
            </div>
          </van-collapse-item>
        </div>

        <!-- 勘察设计人员备案信息 -->
        <div class="pro-item">
          <van-collapse-item class="vanData" name="勘察设计人员备案信息" title="勘察设计人员备案信息">
            <div class="item-null" v-if="queryData.prj_sjr.length === 0">
              <span>暂无数据</span>
            </div>
            <div v-else class="item-data" v-for="(item,index) in queryData.prj_sjr" :key="index">
              <div class="item-title">
                <span class="title">{{item.sj_zy}}</span>
                <span class="text-underline"></span>
              </div>
              <div class="item-content">
                <div class="content-row">
                  <span class="title">设计人员姓名：{{item.sj_man}}</span>
                </div>
                <div class="content-row">
                  <span class="title">设计人员电话：{{item.sj_tel}}</span>
                </div>
              </div>
            </div>
          </van-collapse-item>
        </div>
      </div>
    </van-collapse>
  </div>
</template>
<script>
import computed from "./../../assets/js/computed.js";

export default {
  data() {
    return {
      type: "",
      queryData: {
        prj_shencha: [],
        prj_qt: [],
        prj_sjr: []
      },
      activeNames: ["项目概况", "审查情况", "强条", "勘察设计人员备案信息"]
    };
  },
  computed,
  methods: {},
  mounted() {
    this.queryData = this.queryDatas.data;
    this.type = this.queryDatas.type;
  }
};
</script>
<style lang="less" scoped>
.proquery {
  width: 100%;
  .pro-data {
    margin-bottom: 10px;
    width: 100%;
    .pro-item {
      margin-bottom: 5px;
      .item-null {
        padding: 30px;
      }
      .item-data {
        border: 1px double #eee;
        margin: 10px;
      }
      .item-title {
        padding: 10px 0;
        border-bottom: 1px solid #eee;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .title {
          font-weight: 600;
          font-size: 16px;
          margin-left: 10px;
        }
        .icon {
          font-size: 14px;
        }
      }
      .item-content {
        padding: 5px 10px;
        font-size: 14px;
        color: #666;
        .content-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 5px 0;
        }
      }
    }
  }
  .van-cell {
    font-size: 14px;
    color: darkgray;
    line-height: 20px;
  }
  .van-cell:not(:last-child)::after {
    border-bottom-width: 0px;
  }
  [class*="van-hairline"]::after {
    border: 0 solid white;
  }
}
</style>
<style lang="less">
.proquery {
  .vanData {
    .van-cell {
      color: #fff;
      background-color: #4d7a8b;
      border: 1px solid #eee;
      padding: 7px 15px;
    }

    .van-cell__value--alone,
    .van-icon {
      color: #fff;
    }
    .van-collapse-item__content {
      padding: 0px;
    }
  }
  .itemData {
    padding: 5px 0px;
    .van-field__control {
      color: #333;
    }
    .van-collapse-item__title {
      color: #fff;
      background-color: #4d7a8b;
      border: 1px solid #eee;
      padding: 7px 15px;
    }

    .van-cell__value--alone,
    .van-icon {
      color: #fff;
    }
    .van-collapse-item__content {
      padding: 0px;
    }
  }
}
</style>







