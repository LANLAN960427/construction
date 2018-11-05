<template>
  <div class="infoitem">
    <van-tabs sticky swipeable>
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
import proquery from "./../../components/Infomation/ProQuery";
import unfinished from "./../../components/Infomation/UnFinished";
export default {
  data() {
    return {};
  },
  components: {
    proquery,
    unfinished
  }
};
</script>
<style lang="less" scoped>
.infoitem {
  width: 100%;
}
</style>
