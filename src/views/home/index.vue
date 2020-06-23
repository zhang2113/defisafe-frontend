<template>
  <div class="home">
    <div class="head clear">
      <div class="fl logo">
          <img src="../../imgs/logo.png" alt />
      </div>
      <div class="fr">

      </div>
    </div>
    <div class="nav">
      <div class="nav-outer">
        <div class="desc">
          <h3>Defisafe</h3>
          <p>Protect your crypto assets</p>
        </div>
        <div class="menu">
          <button @click="login">Start</button>
        </div>
      </div>
    </div>

    <div class="content">
      <!-- advantage -->
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

      <!-- introduce -->
      <div class="introduce bg">
        <div class="i_outer">
          <div class="i_item i_desc">
            <div class="title">Defend.Money是完全去中心化的协议，通过智能合约为人们提供便捷的资产风险对冲工具</div>
            <div class="desc">Ddfend.money通过智能合约成立风险资金池，让使用者享有价格上涨带来的增值，分担价格下跌时资产缩水带来的风险。</div>
            <div class="desc">Ddfend.money为数字资产投资者提供一个便捷开放的无门槛的金融市场，使人们可以通过智能合约可信代码高效地进行交互，而不必依赖第三方担保实体。
            </div>
          </div>
          <div class="i_item">
            <img width="100%" src="../../imgs/home-intor.png" alt="">
          </div>
        </div>
      </div>
      <div class="introduce">
        <div class="i_outer">
          <div class="i_item">
            <img width="100%" src="../../imgs/home-intro2.png" alt="">
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
  export default {
    name: "Home",
    methods: {
      login() {
        if (this.$util.isLogin()) {
          this.$router.push('/insure');
        } else {
          this.$router.push('/login');
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>