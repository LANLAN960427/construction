<template>
  <div class="home">
    <van-nav-bar :title="title" :left-arrow="isBack" @click-left="onBack">
    </van-nav-bar>
    <router-view class="content"></router-view>
  </div>
</template>
<script>
import computed from "./../../assets/js/computed.js";

export default {
  data() {
    return {
      title: "建工门户",
      isBack: false,
      isTabbar: true,
      active: 0
    };
  },
  watch: {
    $route(to) {
      this.title = to.meta.title;
      if (
        to.name !== "index" &&
        to.name !== "classify" &&
        to.name !== "cart" &&
        to.name !== "users"
      ) {
        this.isBack = true;
        this.isTabbar = false;
      } else {
        this.isBack = false;
        this.isTabbar = true;
        switch (to.name) {
          case "index":
            this.active = 0;
            break;
          case "classify":
            this.active = 1;
            break;
          case "cart":
            this.active = 2;
            break;
          case "users":
            this.active = 3;
            break;
          default:
            this.active = this.tabActive;
        }
      }
    }
  },
  methods: {
    onBack() {
      this.$router.go(-1);
    },
  },
  computed,
  created() {
    const current = this.$router.history.current;
    this.title = current.meta.title;
    if (
      current.name !== "index" &&
      current.name !== "classify" &&
      current.name !== "cart" &&
      current.name !== "users"
    ) {
      this.isBack = true;
      this.isTabbar = false;
    } else {
      this.isBack = false;
      this.isTabbar = true;
      switch (current.name) {
        case "index":
          this.active = 0;
          break;
        case "classify":
          this.active = 1;
          break;
        case "cart":
          this.active = 2;
          break;
        case "users":
          this.active = 3;
          break;
        default:
          this.active = this.tabActive;
      }
    }
  },
  mounted() {
    // this.active = this.tabActive;

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
  .van-nav-bar {
    color: #fff;
    background-color: #00a0e9;
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
  }
}
</style>
