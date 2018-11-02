<template>
  <div class="unfinished">
    <!-- <el-scrollbar style="width:100%"> -->
    <van-cell-group>
      <!-- 项目概况 -->
      <van-collapse v-model="activeNames">
        <van-collapse-item class="itemData" name="项目概况" title="项目概况" v-for="(item,index) in queryData.prj_info" :key="index">
          <!-- :name="index" -->
          <van-field v-model="item.prj_no" label="项目编号" disabled />
          <van-field v-model="item.prj_name" label="项目名称" disabled />
          <van-field v-model="item.prj_js_dw" label="建设单位名称" disabled />
          <van-field v-model="item.prj_jf" label="缴费情况" disabled />
        </van-collapse-item>
      <!-- 勘察设计单位回复 -->
      <div class="pro-data">
        <div class="pro-card">
          <div class="pro-item">
              <van-collapse-item class="vanData" name="勘察设计单位回复" title="勘察设计单位回复">
                <div class="item-data" v-for="(item,index) in queryData.prj_shencha" :key="index">
                  <div class="item-content">
                    <div class="content-row">
                      <span class="title">{{item.sc_zy}}</span>
                      <span class="title" v-if="item.sc_cs_hf_d">回复状态：已回复</span>
                      <span class="title" v-else>回复状态：<span style="color:red">未回复</span></span>
                    </div>
                  </div>
                </div>
              </van-collapse-item>
          </div>
      <!-- 审查师复审 -->
          <div class="pro-item">
              <van-collapse-item class="vanData" name="审查师复审" title="审查师复审">
                <div class="item-data" v-for="(item,index) in queryData.prj_shencha" :key="index">
                  <div class="item-title">
                    <span class="title">{{item.sc_zy}}</span>
                    <span class="text-underline"></span>
                  </div>
                  <div class="item-content">
                    <div class="content-row">
                      <span class="title" v-if="item.sc_tgrq">完成状态：已完成</span>
                      <span class="title" v-else>完成状态：<span style="color:red">未完成</span></span>
                      <span class="title">签章日期：{{item.sc_qmrq}}</span>
                    </div>
                  </div>
                </div>
              </van-collapse-item>
          </div>
        </div>
      </div>
      </van-collapse>
    </van-cell-group>
    <!-- </el-scrollbar> -->
  </div>
</template>
<script>
import computed from "./../../assets/js/computed.js";
export default {
  data() {
    return {
      type: "",
      queryData: {},
      activeNames: ["项目概况", "勘察设计单位回复", "审查师复审"]
    };
  },
  computed,
  methods: {},
  mounted() {
    this.queryData = this.queryDatas.data;
    this.type = this.queryDatas.type;
    console.log(this.type);
  }
};
</script>
<style lang="less" scoped>
.unfinished {
  width: 100%;
  .pro-data {
    margin-bottom: 10px;
    .pro-card {
      width: 100%;
      .pro-item {
        background-color: #fff;
        margin-bottom: 10px;
        .item-title {
          padding: 10px 18px;
          border-bottom: 1px solid #eee;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .title {
            // font-weight: 600;
            font-size: 16px;
            //color:indianred;
            color: darkgray;
          }
          .icon {
            font-size: 14px;
          }
        }
        .item-content {
          padding: 5px 18px;
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
  }
  .title-project {
    font-size: 16px;
    padding: 10px;
    color: #00a0e9;
    background-color: #f7f7f7;
  }
}
.van-cell {
  font-size: 14px;
  color: darkgray;
  line-height: 20px;
}
</style>
<style lang="less">
.unfinished {
  .vanData {
    .van-cell {
      background-color: #4d7a8b;
      border: 1px solid #eee;
      line-height: 20px;
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
      background-color: #4d7a8b;
      border: 1px solid #eee;
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



