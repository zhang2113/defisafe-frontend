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
        <div class="title">抵押总金额(DAI)</div>
        <div class="amount">{{cashMoneyFromRule}}</div>
      </div>
      <!-- nav end -->

      <div class="content clear">
        <!-- left-account -->
        <div class="side-info fl">
          <div class="cash-insure">
            <div class="title">我的资料</div>
            <div class="cash-list">
              <div class="cash-item clear">
                <img class="icon" src="../../imgs/icon02.png" alt="">
                <div class="label">我的投保金额</div>
                <div class="number">{{moneyFromRule}}</div>
              </div>
              <div class="cash-item clear">
                <img class="icon" src="../../imgs/icon01.png" alt="">
                <div class="label">投保池金额</div>
                <div class="number">{{totalMoneyFromRule}}</div>
              </div>
              <div class="cash-btn-group">
                <el-button @click="showClearModal">提取资产</el-button>
                <el-button type="primary" @click="showInsureModal">我要投保</el-button>
              </div>
            </div>
          </div>
          <div class="account-type">
            <div class="title">我的资产</div>
            <div class="account-list">
              <el-row class="a-item a-head">
                <el-col :span="20">
                  <div>我的投保资产</div>
                </el-col>
                <el-col :span="4">
                  <div class="amount">金额</div>
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
            <div class="title">产品介绍</div>
            <div class="desc">对于持有加密资产的用户，想享受价格上涨带来的资产增值，又能够减轻加密资产价格下跌带来的风险，DEFISAFE就是在解决这个问题。让用户享有加密资产价格上涨带来的增值同时，又能够使他们减轻资产价格下跌时资产缩水带来的风险。
            </div>
          </div>
          <div class="ri-item">
            <div class="title">产品介绍</div>
            <div class="desc">对于持有加密资产的用户，想享受价格上涨带来的资产增值，又能够减轻加密资产价格下跌带来的风险，DEFISAFE就是在解决这个问题。让用户享有加密资产价格上涨带来的增值同时，又能够使他们减轻资产价格下跌时资产缩水带来的风险。
            </div>
          </div>
          <div class="ri-item">
            <div class="title">产品介绍</div>
            <div class="desc">对于持有加密资产的用户，想享受价格上涨带来的资产增值，又能够减轻加密资产价格下跌带来的风险，DEFISAFE就是在解决这个问题。让用户享有加密资产价格上涨带来的增值同时，又能够使他们减轻资产价格下跌时资产缩水带来的风险。
            </div>
          </div>
        </div>
        <!-- end -->

      </div>
    </div>

    <!-- modal -->
    <el-dialog title="投保" :visible.sync="showAdd" width="30%">
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
    <el-dialog title="提取" :visible.sync="showGet" width="30%">
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
        showAdd: false,
        showGet: false,
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
      initApp() {
        let netType = window.ethereum.networkVersion;
        if (netType != 1 && netType != 3) {
          this.$router.push('/login');
          return;
        }
        this.web3 = this.initWeb3();

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
        this.showAdd = true;
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
          try {
            await this.myContract.methods.deposit(this.mtype, insureAmount, addr, this.insureRatio).send({ from: this.account, value: insureAmount });
            this.isLoad = false;
            this.getData();
          } catch (error) {
            this.isLoad = false;
          }
        } else {

          ct.methods.allowance(this.account, contract.addr).call({ from: this.account }).then(res => {
            console.log('3333', res);
            if (res != 0) {
              ct.methods
                .approve(contract.addr, 0)
                .send({ from: this.account })
                .on("transactionHash", hash => {
                  this.showAdd = false;
                  this.isLoad = true;
                  this.loadText = "交易正在钱包中进行，可能需要一些时间，请耐心等待";
                })
                .on('receipt', async receipt => {
                  ct.methods
                    .approve(contract.addr, insureAmount)
                    .send({ from: this.account })
                    .on("transactionHash", hash => {
                      this.showAdd = false;
                      this.isLoad = true;
                      this.loadText = "交易正在钱包中进行，可能需要一些时间，请耐心等待";
                    })
                    .on('receipt', async receipt => {
                      setTimeout(async () => {
                        try {
                          await this.myContract.methods.deposit(this.mtype, insureAmount, addr, this.insureRatio).send({ from: this.account, value: insureAmount });
                          this.isLoad = false;
                          this.getData();
                        } catch (error) {
                          this.isLoad = false;
                        }
                      }, 300);
                    })
                    .on('error', console.error);
                })
                .on('error', console.error);
            } else {
              ct.methods
                    .approve(contract.addr, insureAmount)
                    .send({ from: this.account })
                    .on("transactionHash", hash => {
                      this.showAdd = false;
                      this.isLoad = true;
                      this.loadText = "交易正在钱包中进行，可能需要一些时间，请耐心等待";
                    })
                    .on('receipt', async receipt => {
                      setTimeout(async () => {
                        try {
                          await this.myContract.methods.deposit(this.mtype, insureAmount, addr, this.insureRatio).send({ from: this.account, value: insureAmount });
                          this.isLoad = false;
                          this.getData();
                        } catch (error) {
                          this.isLoad = false;
                        }
                      }, 300);
                    })
                    .on('error', console.error);
            }
          });

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
        this.showGet = true;
      },
      clearModalSave() {
        this.myContract.methods.withdrawAssets(this.account, this.mtype).send({ from: this.account })
          .on("transactionHash", hash => {
            this.showGet = false;
            this.isLoad = true;
            this.loadText = "交易正在钱包中进行，可能需要一些时间，请耐心等待";
          })
          .on('receipt', async receipt => {
            this.isLoad = false;
            this.$alert('提取成功', '提示', {
              confirmButtonText: '确定'
            });
            this.getData();
          })
          .on('error', console.error);
      },
      //get page data
      async getData() {
        this.netType = netIds[window.ethereum.networkVersion];
        this.account = window.ethereum.selectedAddress;
        this.useInsureDesc = [];
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
            // console.log(typeArr[index], result);
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