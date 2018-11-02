<template>
  <div class="infoitem">
    <van-tabs>
      <van-tab title='项目信息'>
        <proquery />
      </van-tab>
      <van-tab title='未完成事项'>
        <unfinished />
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import computed from "./../../assets/js/computed.js";
import proquery from "./../../components/Infomation/ProQuery";
import unfinished from "./../../components/Infomation/UnFinished";
export default {
  data() {
    return {};
  },
  components: {
    proquery,
    unfinished
  },
  computed,
  methods: {},
  mounted() {}
};
</script>
<style lang="less" scoped>
.infoitem {
  width: 100%;
}
</style>
