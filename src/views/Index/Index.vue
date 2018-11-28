<template>
  <div class="login">
    <div class="login-logo">
      <i class="iconfont icon-chaxun"></i>
    </div>
    <div class="login-title">广东建工施工图审查进度信息查询</div>
    <!-- http://173cbh.com/jg/#/ -->
    <!-- JG2018-0689-HY         10010 -->
    <div class="login-form">
      <form @submit.prevent="searchProject">
        <div class="login-form-input">
          <span class="input">
            项目编号：
          </span>
          <input v-model.trim="projectNo" type="text" name="userName" placeholder="请输入项目编号" autocomplete="off">
        </div>
        <div class="login-form-input">
          <span class="input">
            口令：
          </span>
          <input v-model.trim="projectContacts" type="password" name="password" placeholder="请输入口令" autocomplete="off">
        </div>
        <div class="login-form-input login-form-button">
          <div class="button-option">
            <van-button type="primary" native-type="submit">查询</van-button>
          </div>
        </div>
      </form>

    </div>
    <div class="footer">
      <a href="http://www.yilongchina.com/">技术支持：易隆软件</a>
    </div>
  </div>
</template>

<script>
import computed from "./../../assets/js/computed.js";
import { index } from "./../../assets/js/api.js";
export default {
  name: "login",
  data() {
    return {
      banner: "",
      projectNo: "",
      projectContacts: ""
    };
  },
  computed,
  methods: {
    searchProject() {
      if (this.projectNo && this.projectContacts) {
        index.getData(this.projectNo, this.projectContacts).then(res => {
          if (res.type) {
            this.$store.commit("queryDatas", res);
            const loaclData = {
              no: this.projectNo,
              psw: this.projectContacts
            };
            this.$store.commit("loaclData", loaclData);
            this.$router.push({
              name: "infoItem"
            });
          } else {
            this.$toast.fail("没有查到相关信息");
          }
        });
      } else {
        this.$toast.fail("项目编号和口令不能为空");
      }
    }
  },
  mounted() {
    if (this.$route.params.id) {
      this.projectNo = this.$route.params.id;
    } else if (this.loaclData.no && this.loaclData.psw) {
      this.projectNo = this.loaclData.no;
      this.projectContacts = this.loaclData.psw;
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  padding-top: 10%;
  .login-logo {
    width: 75px;
    height: 75px;
    border-radius: 75px;
    margin: 0 auto;
    background-color: #00a0e9;
    display: flex;
    align-items: center;
    justify-content: center;
    .iconfont {
      color: #fff;
      font-size: 50px;
    }
  }
  .login-title {
    text-align: center;
    font-size: 18px;
    margin-top: 20px;
    letter-spacing: 1px;
    font-weight: 600;
  }
  .login-form {
    width: 100%;
    margin-top: 20px;
    .login-form-input {
      width: 85%;
      margin: 10px auto;
      border-bottom: 1px solid #d2d2d2;
      display: flex;
      align-items: center;
      position: relative;
      > .input {
        flex: 5;
        font-size: 14px;
        text-align: center;
        color: #666;
        .iconfont {
          font-size: 20px;
        }
      }
      > input {
        flex: 12;
        height: 35px;
        border: 0;
        padding-left: 10px;
        font-size: 16px;
        display: inline-block;
        -webkit-appearance: none;
      }
      .iconfont {
        font-size: 20px;
      }
    }
    .login-form-button {
      border: 0;
      flex-direction: column;
      .login-form-check {
        margin: 10px 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        .check-option {
          display: flex;
          align-items: center;
          font-size: 14px;
        }
      }
      .button-option {
        width: 100%;
        > button {
          width: 100%;
          height: 45px;
          font-size: 18px;
          border: 0;
          border-radius: 130px;
          margin-top: 70px;
          color: #fff;
          background-color: #3d95d5;
        }
      }
    }
  }
  .footer {
    // padding-top: 30px;
    padding-left: 33%;
    margin-top: 100px;
    a {
      color: darkgray;
    }
  }
}
</style>


