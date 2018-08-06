<template>
  <div class="profession">
    <div class="pro-data">
      <div class="pro-card">
        <div class="pro-item">
          <div class="item-title">
            <span class="title">专业：{{title}}</span>
          </div>
          <div class="item-content">
            <div class="content-row">
              <span class="row-left">审查师签名：{{scname}}</span>
              <span class="row-right">审查师电话：{{scphone}}</span>
            </div>
            <div class="content-row">
              <span class="row-left">初审时间：{{csdate}}</span>
              <span class="row-right">设计院回复时间：{{onehfdate}}</span>
            </div>
            <div class="content-row">
              <span class="row-left">复审时间：{{fsdate}}</span>
              <span class="row-right">设计院回复时间：{{twohfdate}}</span>
            </div>
            <div class="content-row">
              <span class="row-left">姓名：{{name}}</span>
              <span class="row-right">电话：{{telphone}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import computed from "./../../assets/js/computed.js";
export default {
  data() {
    return {
      title: "勘察",
      scname: "张三",
      scphone: "151515151515",
      csdate: "2018-8-18",
      onehfdate: "2018-8-19",
      fsdate: "2018-8-20",
      twohfdate: "2018-8-21",
      name: "李四",
      telphone: "18956458566"
    };
  },
  computed,
  methods: {}
};
</script>
<style lang="less" scoped>
.profession {
  width: 100%;
  .pro-data {
    margin-bottom: 40px;
    .pro-card {
      width: 100%;
      .pro-item {
        background-color: #fff;
        padding: 10px 15px;
        border-bottom: 1px solid #eee;
        border-radius: 5px;
        margin-bottom: 10px;
        .item-title {
          padding: 10px 0;
          border-bottom: 1px solid #f6f6f6;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .title {
            font-weight: 600;
            font-size: 16px;
          }
          .icon {
            font-size: 14px;
          }
        }
        .item-content {
          padding: 5px 0;
          font-size: 13px;
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
}
</style>


