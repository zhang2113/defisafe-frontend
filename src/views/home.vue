<template>
  <div class="home">
    <div class="nav">
      <img class="logo" src="../imgs/logo.png" alt />
      <div class="nav-outer">
        <div class="desc">
          <h3>defend.money</h3>
          <p>Protect your crypto assets</p>
        </div>
        <div class="menu">
          <button @click="login">Start</button>
        </div>
      </div>
    </div>

    <div class="content">
      <!-- 优势 -->
      <div class="advantage clear">
        <div class="feature-center">
          <i class="iconfont iconjiandan"></i>

          <h3>simple</h3>
          <p>This is a template for Cloud Sandbox Lab</p>
        </div>

        <div class="feature-center">
          <i class="iconfont iconmima"></i>

          <h3>safe</h3>
          <p>This is a template for Cloud Sandbox Lab</p>
        </div>

        <div class="feature-center">
          <i class="iconfont iconliudongshuai"></i>

          <h3>flow</h3>
          <p>This is a template for Cloud Sandbox Lab</p>
        </div>
      </div>

      <!-- 介绍 -->
      <div class="introduce bg">
        <div class="i_outer">
          <div class="i_item i_desc">
            <div class="title">Defend.Money是完全去中心化的协议，通过智能合约为人们提供便捷的资产风险对冲工具</div>
            <div class="desc">Ddfend.money通过智能合约成立风险资金池，让使用者享有价格上涨带来的增值，分担价格下跌时资产缩水带来的风险。</div>
            <div class="desc">Ddfend.money为数字资产投资者提供一个便捷开放的无门槛的金融市场，使人们可以通过智能合约可信代码高效地进行交互，而不必依赖第三方担保实体。
              </div>
          </div>
          <div class="i_item">
            <img width="100%" src="../imgs/home-intor.png" alt="">
          </div>
        </div>
      </div>
      <div class="introduce">
        <div class="i_outer">
          <div class="i_item">
            <img width="100%" src="../imgs/home-intro2.png" alt="">
          </div>
          <div class="i_item i_desc1">
            <div class="title">Defend.Money通过智能合约建立资产存托，放入到抵押借贷平台获取收益</div>
            <div class="desc">智能合约会将部分资金（目前是总资产的5%），放入到例如Uniswap，AAVE，Compound等流动性借贷平台中赚取收益，这部分资金作为风险资金池，利用资金池的流动性来帮用户抵御资产下跌的风险。</div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="title">联系我们：</div>
      <div class="email">邮箱：shuishangmusheng107@gmail.com</div>
    </div>
  </div>
</template>

<script>
  import Web3 from "web3";
  export default {
    name: "Home",
    components: {},
    data() {
      return {};
    },
    mounted() { },
    methods: {
      login() {
        if(this.$util.isLogin()) {
          this.$router.push("/user");
        } else {
          this.$router.push("/login");
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .home {
    .nav {
      height: 600px;
      width: 100%;
      position: relative;
      background: url("../imgs/nav-bg.png") no-repeat;
      background-size: cover;
      background-position: center center;
      display: table;
      .nav-outer {
        display: table-cell;
        vertical-align: middle;
      }
      .logo {
        width: 100px;
        position: absolute;
        top: 15px;
        left: 15px;
      }
      .desc {
        padding: 0 100px;
        text-align: left;
        color: #fff;
        font-size: 22px;
        h3 {
          font-size: 68px;
          font-weight: bold;
        }
      }
      .menu {
        padding: 0 100px;
        text-align: left;
        margin-top: 50px;
        button {
          padding: 15px 30px;
          background: #fff;
          color: #52d3aa;
          font-size: 18px;
          text-transform: uppercase;
          border-radius: 30px;
          transition: box-shadow 0.25s ease-in-out;
          &:hover {
            box-shadow: 0px 14px 30px -15px rgba(0, 0, 0, 0.75);
          }
        }
      }
    }
    .content {
      .advantage {
        width: 1000px;
        margin: 0 auto;
        padding: 100px 0;
        .feature-center {
          float: left;
          width: 33.333%;
          padding: 0 20px;
          text-align: center;
          color: #828282;
          .iconfont {
            font-size: 40px;
            margin-bottom: 40px;
            display: inline-block;
            color: #666;
          }
          h3 {
            font-size: 24px;
            margin-bottom: 20px;
            font-weight: 400;
            color: #333;
          }
          p {
            font-size: 18px;
          }
        }
      }
      .introduce {
        margin-bottom: 50px;
        &.bg {
          background: #f3f3f3;
        }
        .i_outer {
          width: 1000px;
          margin: 0 auto;
          padding: 50px 0;
          .i_item {
            display: inline-block;
            width: 50%;
            vertical-align: top;
            .title {
              font-size: 22px;
              color: #333;
              margin-bottom: 30px;
            }
            .desc {
              text-indent: 26px;
              font-size: 14px;
              color: #666;
              line-height: 2;
            }
            img {
              width: 100%;
            }
          }
          .i_desc {
            padding-right: 30px;
          }
          .i_desc1 {
            padding-left: 30px;
          }
        }
      }
    }
    .footer {
      border-top: 1px solid rgb(237, 238, 242);
      padding: 30px;
      color: #333;
      .title {
        font-size: 24px;
      }
      .email {
        font-size: 16px;
        margin-top: 20px;
      }
    }
  }
</style>