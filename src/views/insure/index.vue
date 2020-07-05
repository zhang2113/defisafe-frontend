<template>
  <div class="insure" v-loading="isLoad" :element-loading-text="loadText" element-loading-background="rgba(0, 0, 0, 0.8)">
    <img width="100%" class="bg-img" src="../../imgs/bg.png" alt="bg">
    <div class="container">
      <!-- head -->
      <div class="head clear">
        <div class="fl">
          <img class="logo" src="../../imgs/logo.png" alt="">
          <span class="text">DefiSafe</span>
        </div>
        <div class="fr head-right">
          <div class="net-type">
            {{netType}}
          </div>
          <div class="account">
            <div>
              {{account.slice(0, 6) + '...' + account.slice(-1, -4)}}
            </div>
          </div>
        </div>
      </div>
      <!-- head end -->

      <!-- nav -->
      <div class="nav">
        <div class="title">{{$t('insure.business.insureTitle')}}</div>
        <div class="amount">{{cashMoneyFromRule}}</div>
      </div>
      <!-- nav end -->

      <div class="content clear">
        <!-- left-account -->
        <div class="side-info fl">
          <div class="cash-insure">
            <div class="title">{{$t('insure.business.useInsureTitle')}}</div>
            <div class="cash-list">
              <div class="cash-item clear">
                <img class="icon" src="../../imgs/icon02.png" alt="">
                <div class="label">{{$tc('insure.business.useInsureDesc', 1)}}</div>
                <div class="number">{{moneyFromRule}} DAI</div>
              </div>
              <div class="cash-item clear">
                <img class="icon" src="../../imgs/icon01.png" alt="">
                <div class="label">{{$tc('insure.business.useInsureDesc', 2)}}</div>
                <div class="number">{{totalMoneyFromRule}} DAI</div>
              </div>
              <div class="cash-btn-group">
                <el-button @click="showClearModal">{{$t('insure.business.clearBtn')}}</el-button>
                <el-button type="primary" @click="showInsureModal">{{$t('insure.business.insureBtn')}}</el-button>
              </div>
            </div>
          </div>
          <div class="account-type">
            <div class="title">{{$t('insure.business.insureDescTitle')}}</div>
            <div class="account-list">
              <el-row class="a-item a-head">
                <el-col :span="20">
                  <div>{{$tc('insure.business.insureDescTb', 1)}}</div>
                </el-col>
                <el-col :span="4">
                  <div class="amount">{{$tc('insure.business.insureDescTb', 2)}}</div>
                </el-col>
              </el-row>

              <el-row v-for='item in useInsureDesc' :key='item.type' class="a-item">
                <el-col class="left-name" :span="20">
                  <img :src="tokenIcon[item.type]" alt="">
                  <span>{{item.type}}</span>
                  <!-- <span class="w">(BTC)</span> -->
                </el-col>
                <el-col :span="4">
                  <div class="amount">{{item.amount}}</div>
                </el-col>
              </el-row>

            </div>
          </div>
        </div>
        <!-- end -->

        <!-- right -->
        <div class="right-introduce fl">
          <div class="ri-item">
            <div class="title">{{$tc('insure.display.title', 1)}}</div>
            <div class="desc">{{$tc('insure.display.desc_1', 1)}}</div>
          </div>
          <!-- <div class="ri-item">
            <div class="title">产品使用方法及规则</div>
            <div class="desc">用户将加密资产投入defend.me协议平台，协议对资产的处理： 投保金（用户用来担保的资产，补偿金与其相关）转换成Dai，充当投保金。投保金存入借贷平台，提供流动性，收取利息。 被保险资产（原用户资产减去投保金）流入uniswap平台提供流动性。
            </div>
          </div> -->
          <!-- <div class="ri-item">
            <div class="title">投保资金池的介绍</div>
            <div class="desc">投保资金池会有两部分组成，投保金和盈余资金。投保金和盈余资金的最大区别是：盈余资金是用户投保后，进行结算后，剩余的投保金，被转换为盈余资金。用户投保，当前还未结算，此时的投保资金为投保金。</div>
          </div> -->
          <div>
            <img width="100%" src="../../imgs/common/flow.png" alt="">
          </div>
          <div class="ri-item">
            <div class="title">{{$tc('insure.display.title', 2)}}</div>
            <div class="desc">{{$tc('insure.display.desc_1', 2)}}</div>
            <div class="desc">{{$t('insure.display.desc_2')}}</div>
            <div class="desc">{{$t('insure.display.desc_3')}}</div>
          </div>
        </div>
        <!-- end -->

      </div>
    </div>

    <!-- modal -->
    <el-dialog title="投保" :visible.sync="showInsure" width="30%">
      <div class="dai_modal">
        <div>
          <span>选择通证：</span>
          <el-select @change='changeToken' style="width: 220px" v-model="mtype" placeholder="请选择">
            <el-option v-for="(value, name) in mtypes" :key="name" :label="name" :value="value">
            </el-option>
          </el-select>
        </div>
        <div>{{currentToken}}</div>
        <div>
          <span>投保金额：</span>
          <el-input style="width: 220px" v-model="insure" placeholder="请输入投保金额"></el-input>
        </div>
        <div>
          <span>投保比例：</span>
          <el-input style="width: 220px; margin-right: 10px;" type='number' v-model="insureRatio" placeholder="请输入投保比例"></el-input>
          <span>%</span>
        </div>
        <div>
          <button @click="insureModalSave">confirm</button>
        </div>
      </div>
    </el-dialog>

    <!-- get model -->
    <el-dialog title="提取" :visible.sync="showClear" width="30%">
      <div class="dai_modal">
        <div>
          <span>选择通证：</span>
          <el-select style="width: 220px" v-model="mtype" placeholder="请选择">
            <el-option v-for="(value, name) in mtypes" :key="name" :label="name" :value="value">
            </el-option>
          </el-select>
        </div>
        <div>
          <button @click="clearModalSave">confirm</button>
        </div>
      </div>
    </el-dialog>

  </div>
</template>

<script>
  import Web3 from "web3";
  import tokenIcon from '@/imgs/token';
  import contract from "@/util/contract";
  import { moneyType, netIds } from "@/util/type";
  export default {
    data() {
      return {
        tokenIcon: tokenIcon,
        netType: '',
        insureRatio: 5,
        currentToken: 0,
        isLoad: false,
        loadText: "",
        web3: null,
        mtypes: moneyType,
        mtype: 1, //通证
        account: "",
        money: 0,
        moneyFromRule: 0,
        totalMoneyFromRule: 0,
        cashMoneyFromRule: 0,
        myContract: null,
        leftChart: null,
        rightChart: null,
        showInsure: false,
        showClear: false,
        insure: 0, //投保金额
        useInsureDesc: [],
      };
    },
    created() {
      this.initApp();
    },
    mounted() {
      //get page data
      this.getData();
    },
    methods: {
      initWeb3() {
        if (window.web3) {
          return new Web3(window.web3.currentProvider);
        } else {
          return new Web3(
            new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/0xdbc877878b6653307c98c6e9006aef29ae8cac06")
          )
        }
      },
      //init necessary data
      async initApp() {
        let hasInstallWallet = typeof window.ethereum === "undefined" ? false : true;
        let isLogin = await window.ethereum._metamask.isUnlocked();

        let netType = window.ethereum.networkVersion;
        if ((netType != 1 && netType != 3) || !hasInstallWallet || !isLogin) {
          this.$router.push('/login');
          return;
        }

        window.ethereum.on('accountsChanged', accounts => {
          if (!accounts.length) {
            this.$router.push('/login');
          } else {
            this.getData && this.getData();
          }
        })
      },
      showInsureModal() {
        this.getUserToken();
        this.showInsure = true;
      },
      async insureModalSave() {
        let contractKey = this.findKeyByValue(this.mtypes, this.mtype);


        let ct = new this.web3.eth.Contract(
          contract[contractKey].abi,
          contract[contractKey].addr
        );

        if (this.currentToken < parseFloat(this.insure)) {
          this.$alert('余额不足', '提示', {
            confirmButtonText: '确定'
          });
          return;
        }

        let insureAmount = this.insure * 1e18 + '';

        if (this.mtype == 1) {
          //eth
          try {
            let res = await this.myContract.methods.deposit(this.mtype, insureAmount, contract[contractKey].addr, this.insureRatio).send({ from: this.account, value: insureAmount });
            console.info('res', res);
            this.showInsure = false;
            this.getData();
          } catch (error) {
            this.showInsure = false;
            console.error(error);
          }
        } else {
          //other
          let checkRes;
          try {
            checkRes = await ct.methods.allowance(this.account, contract[contractKey].addr).call({ from: this.account });
          } catch (err) {
            console.error(err);
            return;
          }

          if (checkRes != 0) {
            //approve
            ct.methods.approve(contract[contractKey].addr, 0).send({ from: this.account })
              .on("transactionHash", hash => {
                this.showInsure = false;
              })
              .on('receipt', async receipt => {
                ct.methods
                  .approve(contract[contractKey].addr, insureAmount)
                  .send({ from: this.account })
                  .on('receipt', async receipt => {
                    try {
                      console.table({
                        tokenId: this.mtype,
                        insureAmount: insureAmount,
                        addr: contract[contractKey].addr,
                        type: contractKey
                      })
                      await this.myContract.methods.deposit(this.mtype, insureAmount, contract[contractKey].addr, this.insureRatio).send({ from: this.account, value: insureAmount });
                      this.getData();
                    } catch (error) {
                      console.log(error);
                    }
                  })
                  .on('error', error => {
                    console.error(error);
                  });
              })
              .on('error', error => {
                this.showInsure = false;
                console.log(error);
              });
          } else {
            ct.methods
              .approve(contract[contractKey].addr, insureAmount)
              .send({ from: this.account })
              .on("transactionHash", hash => {
                this.showInsure = false;
              })
              .on('receipt', async receipt => {

                try {
                  console.table({
                    tokenId: this.mtype,
                    insureAmount: insureAmount,
                    addr: contract[contractKey].addr,
                    type: contractKey
                  })
                  await this.myContract.methods.deposit(this.mtype, insureAmount, contract[contractKey].addr, this.insureRatio).send({ from: this.account, value: insureAmount });
                  this.getData();
                } catch (error) {
                  console.log(error);
                }
              })
              .on('error', console.error);
          }
        }
      },
      findKeyByValue(obj, val) {
        for (let key in obj) {
          if (obj[key] == val) {
            return key;
          }
        }
      },
      getUserToken() {
        if (this.mtype == 1) {
          //eth
          this.web3.eth.getBalance(this.account).then(res => {
            this.currentToken = (res / 1e18).toFixed(4);
          });
          return;
        }


        let contractKey = this.findKeyByValue(this.mtypes, this.mtype);
        let ct = new this.web3.eth.Contract(
          contract[contractKey]['abi'],
          contract[contractKey]['addr']
        );
        ct.methods.balanceOf(this.account).call().then(res => {
          this.currentToken = (res / 1e18).toFixed(4);
        });
      },

      showClearModal() {
        this.showClear = true;
      },
      clearModalSave() {
        this.myContract.methods.withdrawAssets(this.account, this.mtype).send({ from: this.account })
          .on("transactionHash", hash => {
            this.showClear = false;
          })
          .on('receipt', async receipt => {
            // this.$alert('提取成功', '提示', {
            //   confirmButtonText: '确定'
            // });
            this.getData();
          })
          .on('error', error => {
            console.log(error);
            this.showClear = false;
          });
      },
      //get page data
      async getData() {
        this.netType = netIds[window.ethereum.networkVersion];
        this.account = window.ethereum.selectedAddress;
        this.useInsureDesc = [];
        if (!this.web3) {
          this.web3 = this.initWeb3();
        }
        //Web3 Contract Object
        if (!this.myContract) {
          this.myContract = new this.web3.eth.Contract(
            contract.abi,
            contract.addr
          );

        }

        //Insure Amount
        this.moneyFromRule = await this.myContract.methods
          .getInsuranceTotalMoneyForuser(this.account)
          .call();
        this.moneyFromRule = (this.moneyFromRule / 1e18).toFixed(4);

        //Capital Pool
        this.totalMoneyFromRule = await this.myContract.methods
          .getInsurancePoolBalanceOf()
          .call();
        this.totalMoneyFromRule = (this.totalMoneyFromRule / 1e18).toFixed(4);

        //Case Pledge
        this.cashMoneyFromRule = await this.myContract.methods
          .getAssetsTotalForPlatform()
          .call();
        this.cashMoneyFromRule = (this.cashMoneyFromRule / 1e18).toFixed(4);

        //Get details of my assets
        this.getMyInsureDetail();
      },
      getMyInsureDetail(index = 0) {
        let typeArr = Object.keys(this.mtypes);
        if (index < typeArr.length) {
          this.myContract.methods.getTokenPoolUserBalanceOf(this.account, this.mtypes[typeArr[index]]).call().then(result => {
            this.useInsureDesc.push({
              type: typeArr[index],
              amount: (result / 1e18).toFixed(4)
            });
            this.getMyInsureDetail(index + 1);
          }).catch(err => {
            console.error(err);
          })
        }
      },
      changeToken() {
        this.getUserToken();
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>