<template>
  <div class="head clear">
    <div @click='$router.push("/")' class="fl head-left">
      <img class="logo" src="../imgs/logo.png" alt="">
      <span class="text">DefiSafe</span>
    </div>
    <div class="fr head-right">
      <div class="version" @click='goLowVersion(item)' :class='{active: item == currentVersion}' v-for='item in version' :key='item'>{{item}}</div>
      <div class="net-type" v-if='netType == "Ropsten"'>
        {{netType + ' ' + $t('insure.net')}}
      </div>
      <div class="account">
        <div>
          {{viewAccount}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { NET_IDS } from '../constants'
  export default {
    data () {
      return {
        currentVersion: ''
      }
    },
    props: {
      version: {
        type: Array,
        default: []
      }
    },
    created () {
      if (sessionStorage.version) {
        this.currentVersion = sessionStorage.version;
      } else {
        this.currentVersion = this.version[0];
      }
    },
    computed: {
      netType() {
        return NET_IDS[window.ethereum.networkVersion]
      },
      viewAccount() {
        let account = window.ethereum.selectedAddress;
        if (account) {
          account = account.slice(0, 6) + "..." + account.slice(-5, -1);
          return account;
        } else {
          return '';
        }
      }
    },
    methods: {
      goLowVersion() {

      }
    }
  }
</script>

<style lang='scss' scoped>
  .head {
    padding: 20px 0;
    img {
      width: 30px;
      vertical-align: bottom;
    }
    .text {
      color: #2E9EFF;
      margin-left: 10px;
      vertical-align: bottom;
    }
    .head-left {
      cursor: pointer;
    }
    .head-right {
      color: #fff;
      .account,
      .net-type,
      .version {
        display: inline-block;
        vertical-align: top;
        height: 36px;
        line-height: 36px;
        font-size: 16px; // cursor: pointer;
        // &:hover {
        //   background: #7869C3;
        //   transition: background .15s linear;
        // }
      }
      .net-type,
      .version {
        margin-right: 15px;
        background: #C7E7FF;
        color: #2587FF;
        border-radius: 8px;
        padding: 0 12px;
      }
      .version {
        background: #eee;
        color: #333;
        cursor: pointer;
        &.active {
          color: #2587FF;
          background: #C7E7FF;
          cursor: default;
        }
      }
      .account {
        color: #333333;
        padding: 4px;
        border-radius: 18px;
        background: #E3ECF5;
        >div {
          display: inline-block;
          vertical-align: top;
          line-height: 28px;
          box-shadow: 0px 2px 4px 0px rgba(10, 0, 109, 0.4);
          background: #fff;
          border-radius: 14px;
          padding: 0 12px;
        }
      }
    }
  }
</style>