<template>
  <div>
    <!-- nav -->
    <div class="nav clear">
      <div class="fl">
        <div class="title red">{{$tc('insure.business.insureTitle', 0)}}</div>
        <div class="amount">{{contractInfo.insureAmount}}</div>
      </div>
      <div class="fl">
        <div class="title red">{{$tc('insure.business.insureTitle', 1)}}</div>
        <div class="amount">{{contractInfo.insureAmountEver}}</div>
      </div>
      <div class="fl">
        <div class="title">{{$tc('insure.business.insureTitle2', 1)}}</div>
        <div class="amount">{{contractInfo.rescueAmountEver}}</div>
      </div>
      <div class="fl">
        <div class="title">{{$tc('insure.business.insureTitle2', 2)}}</div>
        <div class="amount">{{displayDES}}</div>
      </div>
      <!-- <div class="fl">
        <div class="title">{{$tc('insure.business.insureTitle', 2)}}</div>
        <div class="amount">{{contractInfo.insureTimeEver}}</div>
      </div> -->
    </div>
    <!-- <div class="nav clear"> -->
      <!-- <div class="fl">
        <div class="title">{{$tc('insure.business.insureTitle2', 1)}}</div>
        <div class="amount">{{contractInfo.rescueAmountEver}}</div>
      </div>
      <div class="fl">
        <div class="title">{{$tc('insure.business.insureTitle2', 2)}}</div>
        <div class="amount">{{displayDES}}</div>
      </div> -->
      <!-- <div class="fl">
          <div class="title">{{$tc('insure.business.insureTitle', 2)}}</div>
          <div class="amount">{{totalInsureAmount}}</div>
        </div> -->
    <!-- </div> -->
    <!-- nav end -->
  </div>
</template>

<script>
import { DEFISAFE_CONSTRACT, MINE_CONTRACT } from '../constants';

const METHOD_LIST = {
  getAssetsTotalForPlatform: {
    name: 'insureAmount'
  },
  getAssetsTotalForPlatform_ever: {
    name: 'insureAmountEver'
  },
  getInsuranceCountForPlatform_ever: {
    name: 'insureTimeEver'
  },
  getTotalCompensation_ever: {
    name: 'rescueAmountEver'
  }
}
export default {
  data () {
    return {
      contractInfo: {
        insureAmount: 0,
        insureAmountEver: 0,
        insureTimeEver: 0,
        rescueAmountEver: 0
      },
      displayDES: 0
    }
  },
  inject: ['web3Obj'],
  created () {
    this.getData();
  },
  methods: {
    getData() {
      let contract = this.$util.getContract(this.web3Obj, DEFISAFE_CONSTRACT.v1.addr, DEFISAFE_CONSTRACT.v1.abi);
      let mineContract = this.$util.getContract(this.web3Obj, MINE_CONTRACT.addr, MINE_CONTRACT.abi);
      let methodsArr = Object.keys(METHOD_LIST);
      let accountInfo = {};
      mineContract.methods.getTotalTokensOfMine().call().then(res => {
        this.displayDES = parseFloat(this.web3Obj.utils.fromWei(res)).toFixed(4);
      });
      
      this.getContractDataCall(contract, methodsArr, accountInfo);
    },
    getContractDataCall(contract, methodsArr, accountInfo, index = 0) {
      if(index > (methodsArr.length - 1)) {
        this.contractInfo = accountInfo;
        return;
      }

      let option = METHOD_LIST[methodsArr[index]];
      contract.methods[methodsArr[index]]().call().then(res => {
        if(option.name == 'insureTimeEver') {
          accountInfo[option.name] = res;
        } else {
          accountInfo[option.name] = parseFloat(this.web3Obj.utils.fromWei(res)).toFixed(4);
        }
        this.getContractDataCall(contract, methodsArr, accountInfo, ++index);
      });
    }
  }
};
</script>

<style lang='scss' scoped>
.nav {
    margin-top: 40px;
    >div {
      width: 25%;
      text-align: center;
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
