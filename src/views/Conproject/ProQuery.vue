<template>
  <div class="proquery">
    <van-cell-group>
      <van-field v-model="data" label="项目编号" :disabled="edit" />
      <van-field v-model="data" label="项目名称" :disabled="edit" />
      <van-field v-model="data" label="建设单位名称" :disabled="edit" />
      <van-field v-model="data" label="登记日期" :disabled="edit" />
      <van-field v-model="data" label="合同情况" :disabled="edit" />
      <van-field v-model="data" label="缴费情况" :disabled="edit" />
      <van-cell-group class="info-pro">
        <span class="pro-label">专业</span>
        <span class="pro-select" @click="proShow=true">请选择</span>
        <van-popup v-model="proShow" position="bottom">
          <van-picker show-toolbar title="请选择" :columns="profession" @cancel="proShow=false" @confirm="Confirm" />
        </van-popup>
      </van-cell-group>
      <van-field v-model="data" label="审查师签名" :disabled="edit" />
      <van-field v-model="data" label="审查师电话" :disabled="edit" />
      <van-cell-group class="info-pro">
        <span class="pro-label">初审时间</span>
        <span class="pro-select" @click="currentDate=true"></span>
        <van-datetime-picker v-model="currentDate" type="date" :min-date="minDate" @cancel="cstimeShow=false" />
      </van-cell-group>
      <van-field v-model="data" label="设计院回复时间" :disabled="edit" />
      <van-field v-model="data" label="复审时间" :disabled="edit" />
      <van-field v-model="data" label="设计院回复时间" :disabled="edit" />
      <van-field v-model="data" label="合格证时间" :disabled="edit" />
      <van-field v-model="data" label="合格证编号" :disabled="edit" />
      <van-field v-model="data" label="姓名" :disabled="edit" />
      <van-field v-model="data" label="电话" :disabled="edit" />
      <van-field v-model="data" label="工程规划许可证" :disabled="edit" />
      <van-field v-model="data" label="初审时间" :disabled="edit" />
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
      proShow: false,
      profession: ["勘察", "建筑", "结构"],
      cstimeShow:false,
      currentDate: new Date()

    };
  },
  methods: {
    Confirm(res) {
      const pro = this.ProQuery;
      proquery.pro = res;
      this.$store.commit("ProQuery", pro);
      this.proShow = false;
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
      min-width: 90px;
      flex: 1;
    }
    .pro-select {
      flex: 5;
    }
  }
}
</style>

