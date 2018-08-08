<template>
  <div class="index">
    <van-cell-group>
      <van-cell title="项目信息查询" is-link value="甲方" @click="jumpPage('proQuery')" />
      <van-cell title="项目信息查询" is-link value="设计院" @click="jumpPage('proPlan')" />
      <van-cell title="项目信息查询" is-link value="审图公司" @click="jumpPage('proFirm')" />
      <van-cell title="未完成事项" is-link value="" @click="jumpPage('unFinished')" />
    </van-cell-group>
  </div>
</template>
<script>
import computed from "./../../assets/js/computed.js";
export default {
  data() {
    return {};
  },
  computed,
  methods: {
    jumpPage(name) {
      this.$router.push({
        name
      });
    }
  }
};
</script>
<style lang="less" scoped>
.index {
  width: 100%;
}
</style>
