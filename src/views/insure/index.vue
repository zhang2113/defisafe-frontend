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
          <div class="net-type">{{netType}}</div>
          <div class="account">
            <img src="" alt="">
            <span>{{account.slice(0, 6) + '...' + account.slice(-1, -4)}}</span>
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
                <el-button @click="getMoney">提取资产</el-button>
                <el-button type="primary" @click="addMoney">我要投保</el-button>
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

              <el-row class="a-item">
                <el-col class="left-name" :span="20">
                  <img src="../../imgs/BTC.png" alt="">
                  <span>Bitcoin</span>
                  <span class="w">(BTC)</span>
                </el-col>
                <el-col :span="4">
                  <div class="amount">12345</div>
                </el-col>
              </el-row>
              <el-row class="a-item">
                <el-col class="left-name" :span="20">
                  <img src="../../imgs/BTC.png" alt="">
                  <span>Bitcoin</span>
                  <span class="w">(BTC)</span>
                </el-col>
                <el-col :span="4">
                  <div class="amount">12345</div>
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
          <el-select style="width: 220px" v-model="mtype" placeholder="请选择">
            <el-option v-for="(value, name) in mtypes" :key="name" :label="name" :value="value">
            </el-option>
          </el-select>
        </div>
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
          <button @click="cofirmAdd">confirm</button>
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
          <button @click="cofirmGet">confirm</button>
        </div>
      </div>
    </el-dialog>

  </div>
</template>

<script>
  import Web3 from "web3";
  import contract from "@/util/contract";
  import { moneyType, netIds } from "@/util/type";
  export default {
    data() {
      return {
        netType: '',
        insureRatio: 5,
        tbData: [
          {
            name: "BTC",
            number: 20
          },
          {
            name: "eth",
            number: 20
          }
        ],
        isLoad: false,
        loadText: "",
        web3: null,
        mtypes: null,
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
      };
    },
    created() {
      this.initApp();
    },
    mounted() {
      this.mtypes = moneyType;
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
      initApp() {
        // init web3 onject
        this.web3 = this.initWeb3();
        this.account = window.ethereum.selectedAddress;
        let netType = window.ethereum.networkVersion;
        this.netType = netIds[netType];

        if (netType != 1 && netType != 3) {
          this.$router.push('/login');
        }

        //网络切换事件
        // window.ethereum.on('networkChanged', netId => {
        //   this.netType = netIds[netId];
        // });
      },
      async cofirmAdd() {
        let abi = '';
        let addr = '';
        for (let key in this.mtypes) {
          if (this.mtypes[key] === this.mtype) {
            abi = contract[key].abi;
            addr = contract[key].addr;
          }
        }

        let ct = new this.web3.eth.Contract(
          abi,
          addr
        );
        console.log('aaaa',addr);
        let balance = await ct.methods.balanceOf(this.account).call();
        console.log('balance', balance);
        console.log('balance2', this.insure);
        if (+balance < +this.insure) {
          this.$alert('余额不足', '提示', {
            confirmButtonText: '确定'
          });
          return;
        }
        console.log(111111)
  console.log(contract.addr)
  console.log(this.insure)
        ct.methods
          .approve(contract.addr, this.insure)
          .send({ from: this.account })
          .on("transactionHash", hash => {
            this.showAdd = false;
            this.isLoad = true;
            this.loadText = "交易正在钱包中进行，可能需要一些时间，请耐心等待";
          })
          .on('receipt', async receipt => {
            setTimeout(async () => {
              try {
                await this.myContract.methods.deposit(this.mtype, this.insure, addr, this.insureRatio).send({ from: this.account });
                this.isLoad = false;
                this.getData();
              } catch (error) {
                this.isLoad = false;
              }
            }, 300);
          })
          .on('error', console.error);
      },
      addMoney() {
        this.showAdd = true;
      },
      getMoney() {
        this.showGet = true;
      },
      cofirmGet() {
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
      async getData() {
        //Web3 Contract Object
        this.myContract = new this.web3.eth.Contract(
          contract.abi,
          contract.addr
        );

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
      getMyInsureDetail() {
        this.myContract.methods.getTokenPoolUserBalanceOf().call().then(function (result) {
          console.log(result);
        }).catch(err => {
          console.err(err);
        })
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>