<template>
  <div class="proquery">
    <van-cell-group>
      <van-field v-model="data" label="项目编号" :disabled="edit" placeholder="请输入项目编号" />
      <van-field v-model="data" label="项目名称" :disabled="edit" placeholder="请输入项目名称" />
      <van-field v-model="data" label="建设单位名称" :disabled="edit" placeholder="请输入建设单位名称" />
      <van-cell-group class="info-pro">
        <span class="pro-label">登记日期</span>
        <span class="pro-select" @click="checkShow=true">{{new Date(checkDate).Format("yyyy-MM-dd")}}</span>
      </van-cell-group>
      <van-datetime-picker v-show="checkShow" v-model="checkDate" type="date" class="pro-date" @cancel="checkShow=false" @confirm="checkfirm" />
      <van-cell-group class="info-pro">
        <span class="pro-label">合同情况</span>
        <span class="pro-select" @click="pactShow=true">{{pactValue}}</span>
        <van-popup v-model="pactShow" position="bottom">
          <van-picker show-toolbar title="请选择" :columns="contact" @cancel="pactShow=false" @confirm="pactConfirm" />
        </van-popup>
      </van-cell-group>
      <van-cell-group class="info-pro">
        <span class="pro-label">缴费情况</span>
        <span class="pro-select" @click="paymentShow=true">{{paymentValue}}</span>
        <van-popup v-model="paymentShow" position="bottom">
          <van-picker show-toolbar title="请选择" :columns="payment" @cancel="paymentShow=false" @confirm="paymentConfirm" />
        </van-popup>
      </van-cell-group>
      <van-cell title="审查情况" is-link value="详情" @click="jumpPage('profession')" />
      <!-- <van-field v-model="data" label="审查情况" :disabled="edit" is-link @click="jumpPage('profession')" /> -->
      <van-cell-group class="info-pro">
        <span class="pro-label">合格证时间</span>
        <span class="pro-select" @click="hgdataShow=true">{{new Date(hgcurrentDate).Format("yyyy-MM-dd")}}</span>
      </van-cell-group>
      <van-datetime-picker v-show="hgdataShow" v-model="hgcurrentDate" type="date" class="pro-date" @cancel="hgdataShow=false" @confirm="hgfirm" />
      <van-field v-model="data" label="合格证编号" :disabled="edit" placeholder="请输入合格证编号" />
       <van-cell title="设计院人员备案信息" is-link value="详情" @click="jumpPage('promptly')" />
      <!-- <van-field v-model="data" label="设计院人员备案信息" :disabled="edit" placeholder="请输入设计院人员备案信息" /> -->
      <van-field v-model="data" label="工程规划许可证" :disabled="edit" placeholder="请输入工程规划许可证" />
    </van-cell-group>
  </div>
</template>
<script>
import computed from "./../../assets/js/computed.js";

export default {
  data() {
    return {
      edit: false,
      data: "",
      checkShow: false,
      paymentShow: false,
      pactShow: false,
      hgdataShow: false,
      pactValue: "请选择合同情况",
      paymentValue: "请选择缴费情况",
      contact: ["已签", "未签"],
      payment: ["已缴费", "未缴费"],
      checkDate: new Date().Format("yyyy-MM-dd"),
      hgcurrentDate: new Date()
    };
  },
  methods: {
    checkfirm(res) {
      this.checkDate = res;
      this.checkShow = false;
    },
    Confirm(res) {
      this.proValue = res;
      this.proShow = false;
    },
    pactConfirm(res) {
      this.pactValue = res;
      this.pactShow = false;
    },
    hgfirm(res) {
      this.hgcurrentDate = res;
      this.hgdataShow = false;
    },
    paymentConfirm(res) {
      this.paymentValue = res;
      this.paymentShow = false;
    },
    jumpPage(name) {
      this.$router.push({
        name
      });
    }
  },
  computed,
  mounted() {}
};
</script>
<style lang="less" scoped>
.proquery {
  width: 100%;
  .info-pro {
    display: flex;
    padding: 10px 15px;
    box-sizing: border-box;
    line-height: 24px;
    position: relative;
    background-color: #fff;
    color: #333;
    font-size: 14px;
    overflow: hidden;
    .pro-label {
      min-width: 120px;
      flex: 1;
    }
    .pro-select {
      flex: 5;
    }
  }
  .pro-date {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
  }
}
</style>

