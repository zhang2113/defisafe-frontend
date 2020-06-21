<template>
    <div class="login">
      <div class="head">
        <img class="il_middle" src="../../imgs/logo.png" alt="">
        <span class="il_middle">DefiSafe</span>
      </div>
      <div class="box">
        <div class="title tc">请链接钱包</div>
        <div class="sub-title tc">目前平台只支持metamask钱包，请先安装后使用</div>
        <div class="b-foot">
          <button class="tc" @click="login">{{hasInstallWallet ? 'Connect Wallet' : 'Install MetaMask'}}</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        hasInstallWallet: false
      };
    },
    created () {
      this.initData();
    },
    methods: {
      initData() {
        this.hasInstallWallet = typeof window.ethereum === "undefined" ? false : true;
      },
      login() {
        if (!this.hasInstallWallet) {
          window.location.href = 'https://metamask.io/download.html';
          return;
        }
  
        if (!window.ethereum.selectedAddress) {
          window.ethereum
            .enable()
            .then(accounts => {
              this.$router.replace("/insure");
            })
            .catch(reason => {
              alert("login fail");
            });
        }
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
    @import './index.scss';
  </style>
  