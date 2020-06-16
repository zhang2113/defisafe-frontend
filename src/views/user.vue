<template>
  <div class="user" v-loading="isLoad" :element-loading-text="loadText" element-loading-background="rgba(0, 0, 0, 0.8)">
    <div class="head">
      <img class="logo" src="../imgs/logo.png" alt="">
    </div>
    <div class="content clear">
      <div class="fl aside left">
        <div style="margin: 0" class="l-title">储备状态和配置</div>
        <div id="l_chart"></div>
        <div class="l-title">实时数据</div>
        <div class="l-data">
          <div class="l-d-item">
            <div class="w20">aave抵押</div>
            <div class="w60">
              <Progress :value="65"></Progress>
            </div>
            <div class="w20 tc">65%</div>
          </div>
          <div class="l-d-item">
            <div class="w20">Uniswap抵押</div>
            <div class="w60">
              <Progress :value="35"></Progress>
            </div>
            <div class="w20 tc">35%</div>
          </div>
        </div>
      </div>
      <div class="fl middle">
        <div class="middle_outer">
          <div class="tc m-title">抵押总金额（DAI）</div>
          <div class="tc m-account">
            <span>{{cashMoneyFromRule}}</span>
            <span class="r">DAI</span>
          </div>
        </div>
      </div>
      <div class="fl aside right">
        <!-- <div class="r-box-1">
          <div class="r-title">收益率</div>
          <div id="r_chart"></div>
        </div> -->
        <div class="r-box-2">
          <div class="r-title">我的资料</div>
          <div class="r-data">
            <div class="r-d-item">
              <span>我的投保金额：</span>
              <span class="s">{{moneyFromRule}}</span>
              <span>DAI</span>
            </div>
            <div class="r-d-item">
              <span>投保池总金额：</span>
              <span class="s">{{totalMoneyFromRule}}</span>
              <span>DAI</span>
            </div>
          </div>
          <div class="rb2-btn tc">
            <button @click="getMoney">提取资产</button>
            <button @click="addMoney">我要投保</button>
          </div>
        </div>
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
  import contract from "@/util/contract";
  import Progress from "@/components/Progress";
  import echarts from "echarts";
  import mtype from "@/util/moneyType";
  export default {
    components: {
      Progress
    },
    data() {
      return {
        isLoad: false,
        loadText: "",
        web3: null,
        mtypes: null,
        mtype: 100, //通证
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
    mounted() {
      this.mtypes = mtype;
      this.initData();
      this.initChart();
    },
    methods: {
      async cofirmAdd() {
        let abi = '';
        let addr = '';
        for(let key in this.mtypes) {
          if(this.mtypes[key] === this.mtype) {
            abi = contract[key].abi;
            addr = contract[key].addr;
          }
        }

        let ct = new this.$web3.eth.Contract(
          abi,
          addr
        );

        let balance = await ct.methods.balanceOf(this.account).call();

        if (balance < this.insure) {
          this.$alert('余额不足', '提示', {
            confirmButtonText: '确定'
          });
          return;
        }

        ct.methods
          .approve(addr, this.insure)
          .send({ from: this.account })
          .on("transactionHash", hash => {
            this.showAdd = false;
            this.isLoad = true;
            this.loadText = "交易正在钱包中进行，可能需要一些时间，请耐心等待";
          })
          .on('receipt', async receipt => {
            setTimeout(async () => {
              try {
                await this.myContract.methods.deposit(this.mtype, this.insure).send({ from: this.account });
                this.isLoad = false;
                this.initData();
              } catch (error) {
                this.isLoad = false;
              }
            }, 300);
          })
          .on('error', console.error);
      },
      initChart() {
        this.leftChart = echarts.init(document.getElementById("l_chart"));
        // this.rightChart = echarts.init(document.getElementById("r_chart"));

        this.leftChart.setOption({
          series: [
            {
              name: "访问来源",
              type: "pie",
              radius: ["50%", "70%"],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: "center"
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: "30",
                  fontWeight: "bold"
                }
              },
              labelLine: {
                show: false
              },
              data: [
                { value: 65, name: "aave抵押" },
                { value: 35, name: "Link抵押" }
              ]
            }
          ]
        });
      },
      addMoney() {
        this.showAdd = true;
      },
      getMoney() {
        this.showGet = true;
      },
      cofirmGet() {
        console.log(contract.addr)
        console.log(this.account)
        console.log(this.mtype)
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
          this.initData();
        })
          .on('error', console.error);
      },
      async initData() {
        this.account = window.ethereum.selectedAddress;
        this.mtype = sessionStorage.mtype;

        //初始化合约对象
        this.myContract = new this.$web3.eth.Contract(
          contract.abi,
          contract.addr
        );

        //投保金额
        this.moneyFromRule = await this.myContract.methods
          .getInsuranceTotalMoneyForuser(this.account)
          .call();
        console.log(this.moneyFromRule)
        this.moneyFromRule = (this.moneyFromRule / 1e18).toFixed(4);

        //资金池
        this.totalMoneyFromRule = await this.myContract.methods
          .getInsurancePoolBalanceOf()
          .call();
          console.log(this.totalMoneyFromRule)
        this.totalMoneyFromRule = (this.totalMoneyFromRule / 1e18).toFixed(4);

        //抵押总金额（DAI）
        this.cashMoneyFromRule = await this.myContract.methods
          .getAssetsTotalForPlatform()
          .call();
        this.cashMoneyFromRule = (this.cashMoneyFromRule / 1e18).toFixed(4);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .user {
    height: 100%;
    overflow: auto;
    background: url("../imgs/use-bg.png") no-repeat;
    background-size: cover;
    background-position: center center;
    padding: 0 30px;
    .head {
      padding: 20px 0;
      img {
        width: 100px;
      }
    }
    .content {
      color: #fff;

      .aside {
        width: 25%;
      }
      .middle {
        width: 50%;
        padding: 0 80px;
        .middle_outer {
          background: url("../imgs/user-bg-top.png") no-repeat;
          background-size: 100% 100%;
          .m-account {
            padding: 15px 0;
            font-size: 44px;
            color: #89f7fe;
            .r {
              font-size: 22px;
            }
          }
          .m-title {
            line-height: 50px;
          }
        }
      }
      .left {
        padding: 40px 30px;
        background: url("../imgs/user-bg1.png") no-repeat;
        background-size: 100% 100%;
        .l-title {
          margin-bottom: 20px;
          font-size: 15px;
          border-left: 5px solid #62f9ff;
          line-height: 1;
          padding-left: 15px;
        }
        #l_chart {
          width: 100%;
          height: 250px;
        }
        .l-data {
          padding-left: 20px;
          .l-d-item {
            height: 40px;
            font-size: 13px;
            >div {
              display: inline-block;
              vertical-align: middle;
            }
          }
          .w20 {
            width: 30%;
          }
          .w60 {
            width: 40%;
          }
        }
      }
      .right {
        padding: 30px 15px;
        .r-title {
          margin-bottom: 20px;
          font-size: 15px;
          border-left: 5px solid #62f9ff;
          line-height: 1;
          padding-left: 15px;
        }
        .r-box-1 {
          padding: 40px 30px;
          background: url("../imgs/user-bg2.png") no-repeat;
          background-size: 100% 100%;
          margin-bottom: 30px;
        }
        .r-box-2 {
          padding: 40px 30px;
          background: url("../imgs/user-bg3.png") no-repeat;
          background-size: 100% 100%;
          .rb2-btn {
            margin-top: 10px;
            button {
              color: #fff;
              border: solid 1px #62f9ff;
              line-height: 28px;
              padding: 0 12px;
              &:last-child {
                margin-left: 20px;
                background-color: #1aa2e5;
                border-color: #1aa2e5;
              }
            }
          }
        }
        .r-data {
          padding-left: 20px;
          font-size: 13px;
          line-height: 40px;
          .r-d-item {
            .s {
              font-size: 28px;
              color: #52ffec;
              margin-right: 5px;
            }
          }
        }
        #r_chart {
          width: 100%;
          height: 200px;
        }
      }
    }
    .dai_modal {
      >div {
        margin-bottom: 15px;
      }
      button {
        text-align: center;
        width: 100%;
        background: #1aa2e5;
        color: #FFF;
        font-size: 18px;
        padding: 12px 0;
      }
    }
  }
</style>