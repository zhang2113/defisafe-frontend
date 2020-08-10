<template>
    <div class="account-list">
        <el-row class="a-item a-head">
            <el-col :span="14">
                <div>{{$tc('insure.business.insureDescTb', 1)}}</div>
            </el-col>
            <el-col :span="10">
                <div class="amount">{{$tc('insure.business.insureDescTb', 2)}}</div>
            </el-col>
        </el-row>

        <el-row v-for='item in useInsureDesc' :key='item.type' class="a-item">
            <el-col class="left-name" :span="14">
                <img :src="tokenIcon[item.type]" alt="">
                <span>{{item.type}}</span>
            </el-col>
            <el-col :span="10">
                <div class="amount">{{item.amount}}</div>
            </el-col>
        </el-row>

    </div>
</template>

<script>
    import { DEFISAFE_CONSTRACT, SUPPORT_TOKEN_TYPE } from '../constants';
    import tokenIcon from '@/imgs/token';
    export default {
        data() {
            return {
                useInsureDesc: [],
                account: '',
                tokenIcon: tokenIcon
            }
        },
        inject: ['web3Obj'],
        created() {
            this.account = window.ethereum.selectedAddress;
            this.getData();
        },
        methods: {
            getData() {
                let contract = this.$util.getContract(this.web3Obj, DEFISAFE_CONSTRACT.v1.addr, DEFISAFE_CONSTRACT.v1.abi);
                let methodsArr = Object.keys(SUPPORT_TOKEN_TYPE);
                this.useInsureDesc = methodsArr.map(e => {return {type: e, amount: 0}});

                this.getContractDataCall(contract, methodsArr);
            },
            getContractDataCall(contract, methodsArr, index = 0) {
                if (index > (methodsArr.length - 1)) {
                    return;
                }

                let tokenId = SUPPORT_TOKEN_TYPE[methodsArr[index]];

                contract.methods.getTokenPoolUserBalanceOf(this.account, tokenId).call().then(res => {
                    let result = parseFloat(this.web3Obj.utils.fromWei(res)).toFixed(4);
                    if(result > 0) {
                        this.useInsureDesc[index].amount = result;  
                    }
                    this.getContractDataCall(contract, methodsArr, ++index);
                });
            }
        }
    };
</script>

<style lang='scss' scoped>
    .account-type {
        margin-top: 30px;
       .account-list {
         background: #fff;
         padding: 15px;
         border-radius: 6px;
         box-shadow:0px 1px 24px 0px rgba(176,192,237,0.42);
         .a-head {
           font-size: 14px;
           line-height: 50px;
         }
         .a-item {
           border-bottom: 1px solid #D6D9E0;
           height: 50px;
           &:last-child {
             border-color: transparent;
           }
           .left-name {
             padding: 9px 0;
             >* {
               vertical-align: middle;
             }
             img {
               width: 32px;
               height: 32px;
               margin-right: 15px;
             }
             .w {
               color: #ADB5C7;
             }
           }
           .amount {
             line-height: 50px;
             text-align: right;
           }
         }
       }
      }
</style>