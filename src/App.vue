<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
  import Web3 from "web3";
  export default {
    provide() {
      let web3Obj = null;
      if (window.web3) {
        web3Obj = new Web3(window.web3.currentProvider);
      } else {
        web3Obj = new Web3(
          new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/fe4e6b50dc8944efad81cfed627f465c")
        )
      }
      return {
        web3Obj: web3Obj
      }
    }
  }
</script>
<style lang="scss">
  @import "./style/reset.scss";
  @import "./font/iconfont.css";
</style>