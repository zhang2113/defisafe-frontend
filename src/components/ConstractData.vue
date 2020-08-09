<template>
  <div>
    <!-- nav -->
    <div class="nav clear">
      <div class="fl">
        <div class="title red">{{$tc('insure.business.insureTitle', 0)}}</div>
        <div class="amount">{{cashMoneyFromRule}}</div>
      </div>
      <div class="fl">
        <div class="title red">{{$tc('insure.business.insureTitle', 1)}}</div>
        <div class="amount">{{totalInsureMoney}}</div>
      </div>
      <div class="fl">
        <div class="title">{{$tc('insure.business.insureTitle', 2)}}</div>
        <div class="amount">{{totalInsureAmount}}</div>
      </div>
    </div>
    <div class="nav clear">
      <div class="fl">
        <div class="title">{{$tc('insure.business.insureTitle2', 1)}}</div>
        <div class="amount">{{offsetMoney}}</div>
      </div>
      <div class="fl">
        <div class="title">{{$tc('insure.business.insureTitle2', 2)}}</div>
        <div class="amount">{{displayDES}}</div>
      </div>
      <!-- <div class="fl">
          <div class="title">{{$tc('insure.business.insureTitle', 2)}}</div>
          <div class="amount">{{totalInsureAmount}}</div>
        </div> -->
    </div>
    <!-- nav end -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  created () {
    this.getData();
  },
  methods: {
    getData() {
      
    }
  }
};
</script>

<style lang='scss' scoped>
.nav {
    margin-top: 40px;
    >div {
      width: 33.333%;
    }
    .title {
      font-size: 15px;
      font-weight: bold;
      color: #333;
      margin-bottom: 10px;
    }
    .amount {
      font-size: 32px;
      font-weight: bold;
      color: #1AA2E5;
    }
  }
</style>
