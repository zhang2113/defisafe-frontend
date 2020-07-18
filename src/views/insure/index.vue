<template>
  <div v-loading="isLoad" :element-loading-text="$t('insure.load.text')" element-loading-background="rgba(0, 0, 0, 0.8)" class="insure">
    <img width="100%" class="bg-img" src="../../imgs/bg.png" alt="bg">
    <div class="container">
      <!-- head -->
      <div class="head clear">
        <div @click='$router.push("/")' class="fl head-left">
          <img class="logo" src="../../imgs/logo.png" alt="">
          <span class="text">DefiSafe</span>
        </div>
        <div class="fr head-right">
            <div @click='goLowVersion' class="version">v2.0版本</div>
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
      <!-- head end -->

      <!-- nav -->
      <div class="nav clear">
        <div class="fl">
          <div class="title">{{$tc('insure.business.insureTitle', 0)}}</div>
          <div class="amount">{{cashMoneyFromRule}}</div>
        </div>
        <div class="fl">
          <div class="title">{{$tc('insure.business.insureTitle', 1)}}</div>
          <div class="amount">{{totalInsureMoney}}</div>
        </div>
        <div class="fl">
          <div class="title">{{$tc('insure.business.insureTitle', 2)}}</div>
          <div class="amount">{{totalInsureAmount}}</div>
        </div>
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
                <div class="label">{{$tc('insure.business.useInsureDesc', 0)}}</div>
                <div class="number">{{moneyFromRule}} DAI</div>
              </div>
              <div class="cash-item clear">
                <img class="icon" src="../../imgs/icon01.png" alt="">
                <div class="label">{{$tc('insure.business.useInsureDesc', 1)}}</div>
                <div class="number">{{totalMoneyFromRule}} DAI</div>
              </div>
              <div class="cash-item clear">
                <img class="icon" src="../../imgs/logo.png" alt="">
                <div class="label">{{$tc('insure.business.useInsureDesc', 2)}}</div>
                <div class="number">{{userDSE}}</div>
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
                  <!-- <span class="w">(BTC)</span> -->
                </el-col>
                <el-col :span="10">
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
          <!-- <div>
            <img width="100%" src="../../imgs/common/flow.png" alt="">
          </div> -->
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
    <el-dialog :title="$t('modal.insure.start.title')" :visible.sync="showInsure" width="30%">
      <div class="dai_modal">
        <div>
          <span>{{$t('modal.insure.start.token')}}：</span>
          <el-select @change='changeToken' style="width: 220px" v-model="mtype" placeholder="">
            <el-option v-for="(value, name) in mtypes" :key="name" :label="name" :value="value">
            </el-option>
          </el-select>
        </div>
        <div>{{currentToken}}</div>
        <div>
          <span>{{$t('modal.insure.start.amount')}}：</span>
          <el-input style="width: 220px" v-model="insure" placeholder=""></el-input>
        </div>
        <div>
          <span>{{$t('modal.insure.start.ratio')}}：</span>
          <el-input max='90' class="ratio-input" min='5' style="width: 220px; margin-right: 10px;" type='number' v-model="insureRatio"
            placeholder="">
          </el-input>
          <span>%</span>
        </div>
        <div>
          <el-button :loading="btnLoad" @click="insureModalSave" type="primary">{{$t('modal.insure.start.btn')}}</el-button>
        </div>
      </div>
    </el-dialog>

    <!-- get model -->
    <el-dialog :title="$t('modal.insure.end.title')" :visible.sync="showClear" width="30%">
      <div class="dai_modal">
        <div>
          <span>{{$t('modal.insure.end.token')}}：</span>
          <el-select style="width: 220px" v-model="mtype" placeholder="">
            <el-option v-for="(value, name) in mtypes" :key="name" :label="name" :value="value">
            </el-option>
          </el-select>
        </div>
        <div>
          <el-button :loading="btnLoad" @click="clearModalSave" type="primary">{{$t('modal.insure.end.btn')}}</el-button>
        </div>
      </div>
    </el-dialog>

  </div>
</template>

<script>
  import Web3 from "web3";
  import tokenIcon from '@/imgs/token';
  import contract from "@/util/contract";
  import { ropsten } from "@/util/tokenContract";
  import { main } from "@/util/tokenContract";
  import { moneyType, netIds } from "@/util/type";
  export default {
    data() {
      return {
        tokenIcon: tokenIcon,
        btnLoad: false,
        netType: '',
        insureRatio: 5,
        currentToken: 0,
        isLoad: false,
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
        totalInsureAmount: 0,
        totalInsureMoney: 0,
        userDSE: 0
      };
    },
    computed: {
      viewAccount() {
        let account = this.account.slice(0, 6) + "..." + this.account.slice(-4, -1);
        return account;
      }
    },
    created() {
      this.initApp();
    },
    mounted() {
      //get page data
      this.getData();
    },
    methods: {
      goLowVersion() {
        window.location = window.location.host + 'v2';
      },
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
        if ((netType != 3) || !hasInstallWallet || !isLogin) {
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
          ropsten[contractKey].abi,
          ropsten[contractKey].addr
        );

        if (this.currentToken < parseFloat(this.insure)) {
          this.$alert(this.$tc('modal.insure.tip.desc', 0), this.$tc('modal.insure.tip.title', 0), {
            confirmButtonText: this.$t('modal.insure.tip.btn')
          });
          return;
        }
        this.btnLoad = true;
        let insureAmount = this.insure * 1e18 + '';

        if (this.mtype == 1) {
          //eth

          this.myContract.methods.deposit(this.mtype, insureAmount, ropsten[contractKey].addr, this.insureRatio).send({ from: this.account, value: insureAmount })
            .on("transactionHash", hash => {
              this.isLoad = true;
              this.btnLoad = false;
              this.insure = 0;
              this.insureRatio = 5;
              this.showInsure = false;
              sessionStorage.setItem('txHash', 1);
            })
            .on('receipt', async receipt => {
              this.isLoad = false;
              sessionStorage.removeItem('txHash');
              this.$alert(this.$tc('modal.insure.tip.desc', 2), this.$tc('modal.insure.tip.title', 2), {
                confirmButtonText: 'ok'
              });
              this.getData();
            })
            .on('error', error => {
              this.isLoad = false;
              this.btnLoad = false;
              this.insure = 0;
              this.insureRatio = 5;
              this.showInsure = false;
              sessionStorage.removeItem('txHash');
              console.error(error);
            });
        } else {
          //other
          let checkRes;

          try {
            checkRes = await ct.methods.allowance(this.account, contract.addr).call({ from: this.account });
          } catch (err) {
            console.error(err);
            return;
          }

          if (checkRes != 0) {
            //approve
            ct.methods.approve(contract.addr, 0).send({ from: this.account })
              .on("transactionHash", hash => {
                this.btnLoad = false;
                this.insureRatio = 5;
                this.insure = 0;
                this.showInsure = false;
                this.isLoad = true;
                sessionStorage.setItem('txHash', 1);
              })
              .on('receipt', async receipt => {
                ct.methods
                  .approve(contract.addr, insureAmount)
                  .send({ from: this.account })
                  .on('receipt', async receipt => {
                    try {
                      await this.myContract.methods.deposit(this.mtype, insureAmount, ropsten[contractKey].addr, this.insureRatio).send({ from: this.account });
                      this.isLoad = false;
                      this.$alert(this.$tc('modal.insure.tip.desc', 2), this.$tc('modal.insure.tip.title', 2), {
                        confirmButtonText: 'ok'
                      });
                      sessionStorage.removeItem('txHash');
                      this.getData();
                    } catch (error) {
                      sessionStorage.removeItem('txHash');
                      console.log(error);
                      this.isLoad = false;
                    }
                  })
                  .on('error', error => {
                    this.isLoad = false;
                    sessionStorage.removeItem('txHash');
                    console.error(error);
                  });
              })
              .on('error', error => {
                this.isLoad = false;
                this.btnLoad = false;
                this.insure = 0;
                this.insureRatio = 5;
                this.showInsure = false;
                sessionStorage.removeItem('txHash');
                console.log(error);
              });
          } else {
            ct.methods
              .approve(contract.addr, insureAmount)
              .send({ from: this.account })
              .on("transactionHash", hash => {
                this.showInsure = false;
                this.insureRatio = 5;
                this.insure = 0;
                this.isLoad = true;
                this.btnLoad = false;
                sessionStorage.setItem('txHash', 1);
              })
              .on('receipt', async receipt => {

                try {
                  await this.myContract.methods.deposit(this.mtype, insureAmount, ropsten[contractKey].addr, this.insureRatio).send({ from: this.account });
                  this.isLoad = false;
                  this.$alert(this.$tc('modal.insure.tip.desc', 2), this.$tc('modal.insure.tip.title', 2), {
                    confirmButtonText: 'ok'
                  });
                  sessionStorage.removeItem('txHash');
                  this.getData();
                } catch (error) {
                  this.isLoad = false;
                  sessionStorage.removeItem('txHash');
                  console.log(error);
                }
              })
              .on('error', error => {
                sessionStorage.removeItem('txHash');
                this.btnLoad = false;
                this.insure = 0;
                this.insureRatio = 5;
                this.showInsure = false;
                this.isLoad = false;
              });
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
          ropsten[contractKey]['abi'],
          ropsten[contractKey]['addr']
        );

        ct.methods.balanceOf(this.account).call().then(res => {
          this.currentToken = (res / 1e18).toFixed(4);
        });
      },

      showClearModal() {
        this.showClear = true;
      },
      clearModalSave() {
        this.btnLoad = true;
        this.myContract.methods.withdrawAssets(this.account, this.mtype).send({ from: this.account })
          .on("transactionHash", hash => {
            this.showClear = false;
            this.isLoad = true;
            this.btnLoad = false;
            this.insureRatio = 5;
            this.insure = 0;
            sessionStorage.setItem('txHash', 1);
          })
          .on('receipt', async receipt => {
            sessionStorage.removeItem('txHash');
            this.isLoad = false;
            this.$alert(this.$tc('modal.insure.tip.desc', 1), this.$tc('modal.insure.tip.title', 1), {
              confirmButtonText: this.$t('modal.insure.tip.btn')
            });
            this.getData();
          })
          .on('error', error => {
            console.log(error);
            sessionStorage.removeItem('txHash');
            this.showClear = false;
            this.btnLoad = false;
            this.insure = 0;
            this.insureRatio = 5;
            this.showClear = false;
            this.isLoad = false;
          });
      },
      //get page data
      async getData() {
        this.netType = netIds[window.ethereum.networkVersion];
        this.account = window.ethereum.selectedAddress;
        this.useInsureDesc = [];
        this.useInsureDesc = Object.keys(this.mtypes).map(e => { return { type: e, amount: 0 } });

        // if (sessionStorage.txHash) {
        //   // pending
        //   this.isLoad = true;
        // }

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

        //des

        let desContract = new this.web3.eth.Contract(
          ropsten.dse.abi,
          ropsten.dse.addr
        );

        //main net
        let mainWeb3 = new Web3(
          new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/fe4e6b50dc8944efad81cfed627f465c")
        )

        let mainConstact = new mainWeb3.eth.Contract(
          main.knc.abi,
          main.knc.addr
        );

        mainConstact.methods.balanceOf(this.account).call().then(res => {
          console.log('main', res);
        });

        desContract.methods.balanceOf(this.account).call().then(res => {
          if (res > 0) {
            this.userDSE = (res / 1e18).toFixed(4);
          }
        });

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

        this.totalInsureAmount = await this.myContract.methods
          .getInsuranceCountForPlatform_ever()
          .call();

        this.totalInsureMoney = await this.myContract.methods
          .getAssetsTotalForPlatform_ever()
          .call();
        this.totalInsureMoney = (this.totalInsureMoney / 1e18).toFixed(4);

        //Get details of my assets
        this.getMyInsureDetail();
      },
      getMyInsureDetail(index = 0) {

        let typeArr = Object.keys(this.mtypes);

        if (index < typeArr.length) {
          this.myContract.methods.getTokenPoolUserBalanceOf(this.account, this.mtypes[typeArr[index]]).call().then(result => {
            this.useInsureDesc[index].amount = result == 0 ? 0 : (result / 1e18).toFixed(4);
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