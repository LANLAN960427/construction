<template>
  <div class="home">
    <van-nav-bar :title="title" :left-arrow="isBack" @click-left="onBack"></van-nav-bar>
    <router-view class="content"></router-view>
  </div>
</template>
<script>
import computed from "./../../assets/js/computed.js";

export default {
  data() {
    return {
      title: "广东建工施工图审查进度信息查询",
      isBack: false,
      active: 0
    };
  },
  watch: {
    $route(to) {
      if (to.name !== "index") {
        this.isBack = true;
      } else {
        this.isBack = false;
      }
    }
  },
  methods: {
    onBack() {
      this.$router.replace({
        name: "index"
      });
    }
  },
  computed,
  created() {
    const current = this.$router.history.current;
    if (current.name !== "index") {
      this.isBack = true;
    } else {
      this.isBack = false;
    }
  }
};
</script>
<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  .van-nav-bar {
    color: #fff;
    background-color: #0f67ab;
    .home-icon {
      font-size: 18px;
      color: #fff;
    }
  }
  .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 46px;
    bottom: 0;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
}
</style>
