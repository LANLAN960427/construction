<template>
  <div class="unfinished">
    <van-cell-group>
    <van-field v-model="data" label="项目编号" :disabled="edit" placeholder="请输入项目编号" />
    <van-field v-model="data" label="项目名称" :disabled="edit" placeholder="请输入项目名称" />
    <van-field v-model="data" label="建设单位名称" :disabled="edit" placeholder="请输入建设单位名称" />
    <van-field v-model="data" label="缴费情况" :disabled="edit" placeholder="请输入缴费情况" />
    <van-field v-model="data" label="工程规划许可证" :disabled="edit" placeholder="请输入工程规划许可证" />
    <van-field v-model="data" label="设计院回复" :disabled="edit" placeholder="请输入设计院回复" />
    <van-field v-model="data" label="施工图蓝图" :disabled="edit" placeholder="请输入施工图蓝图" />
    </van-cell-group>
  </div>
</template>
<script>
import computed from "./../../assets/js/computed.js";
export default {
  data() {
    return {
      data:"",
      edit: false,
    };
  },
  computed,
  methods: {}
};
</script>
<style lang="less" scoped>
.unfinished {
  width: 100%;
}
</style>


