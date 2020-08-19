<template>
  <div v-loading="isLoad" :element-loading-text="$t('insure.load.text')" element-loading-background="rgba(0, 0, 0, 0.8)" class="insure">
    <img width="100%" class="bg-img" src="../../imgs/bg.png" alt="bg" />
    <div class="container">
      <Header :version="versionArr"></Header>

      <ConstractData ref="nav"></ConstractData>

      <div class="content clear">
        <!-- left-account -->
        <div class="side-info fl">
          <div class="cash-insure">
            <div class="title">{{$t('insure.business.useInsureTitle')}}</div>
            <div class="cash-list">
              <UserAmount ref="user"></UserAmount>
              <div class="cash-btn-group">
                <el-button @click="showClearModal">{{$t('insure.business.clearBtn')}}</el-button>
                <el-button type="primary" @click="showInsureModal">{{$t('insure.business.insureBtn')}}</el-button>
              </div>
            </div>
          </div>
          <div class="account-type">
            <div class="title">{{$t('insure.business.insureDescTitle')}}</div>
            <TokenList ref="token"></TokenList>
          </div>
        </div>
        <!-- end -->

        <!-- right -->
        <div class="right-introduce fl">
          <div class="ri-item">
            <div class="title">{{$tc('insure.display.title', 1)}}</div>
            <div class="desc">{{$tc('insure.display.desc_1', 1)}}</div>
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
    <el-dialog :close-on-click-modal='false' class="i-modal" :title="$t('modal.insure.start.title')" :visible.sync="showInsure" width="420px">
      <div class="im-head" slot="title">投保</div>
      <div>
        <div class="im-item">
          <div class="im-top-amount flex-m">
            <span class="flex-1">{{$t('modal.insure.start.amount')}}：</span>
            <span>Balance：{{daiAmount}}</span>
          </div>
          <div class="flex-m">
            <span class="im-label"></span>
            <input class="im-insure-input flex-1" @keyup.enter='changeInsure' @blur="changeInsure" v-model="insure" type="text" placeholder='投保金额>10.00'>
            <span class="im-dai-label">dai</span>
          </div>
        </div>
        <div class="im-item">
          <div class="im-top-amount flex-m">
            <span class="flex-1">抵押资产：</span>
            <span>Balance：{{currentToken}}</span>
          </div>
          <div class='flex-m'>
            <div class="pr">
              <span class="token-icon token-icon-block" v-if='!tokenTypeName'></span>
              <img v-else class="token-icon" :src="tokenIcon[tokenTypeName]" alt="">
              <el-select class="im-select" @change="changeToken" v-model="mtype" placeholder='选择通证'>
                <el-option v-for="(value, name) in mtypes" :key="name" :label="name" :value="value">
                  <div class="im_select-option">
                    <img class="token-icon" :src="tokenIcon[name]" alt />
                    <span class="token-name">{{name}}</span>
                  </div>
                </el-option>
              </el-select>
            </div>
            <div class="flex-1 tr im-dai-label">
              {{viewDepositTotal}}
            </div>
          </div>
        </div>
        <div class="flex-m im-ratio">
          <div class="flex-1 im-ratio-item">抵押比例：{{mortgageRatio}}</div>
          <div class="flex-1 im-ratio-item">投保比例：{{mapAssetRatio}}</div>
        </div>
        
        <div>
          <el-button class="save-btn" :disabled='btnDisable' :loading="btnLoad" @click="insureModalSave" type="primary">{{insureModalBtnText}}</el-button>
        </div>
      </div>
    </el-dialog>

    <!-- get model -->
    <el-dialog :close-on-click-modal='false' class="i-modal" :title="$t('modal.insure.end.title')" :visible.sync="showClear" width="30%">
      <div>
        <div>
          <span>{{$t('modal.insure.end.token')}}：</span>
          <el-select style="width: 220px" v-model="mtype">
            <el-option v-for="(value, name) in mtypes" :key="name" :label="name" :value="value"></el-option>
          </el-select>
        </div>
        <div>
          <el-button class="save-btn" :loading="btnLoad" @click="clearModalSave" type="primary">{{$t('modal.insure.end.btn')}}</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import Header from "../../components/Header";
  import ConstractData from "../../components/ConstractData";
  import TokenList from "../../components/TokenList.vue";
  import UserAmount from "../../components/UserAmount.vue";
  import contract from "@/util/contract";
  import { TOKEN_ADDR } from "../../constants/token";
  import { moneyType } from "@/util/type";
  import tokenIcon from "@/imgs/token";
  import {
    MINE_CONTRACT,
    PRICE_PREDICT,
    ERC_ABI,
    DAI_CONTRACT,
    DEFISAFE_CONSTRACT,
    SUPPORT_TOKEN_TYPE
  } from "../../constants";
  export default {
    data() {
      return {
        tokenIcon: tokenIcon,
        daiContract: null,
        daiAmount: 0,
        mortgageRatio: 0,
        btnLoad: false,
        currentToken: 0,
        isLoad: false,
        mapAssetRatio: 0,
        mtypes: SUPPORT_TOKEN_TYPE,
        currentVersion: "", //当前合约版本
        mtype: '', //通证,默认eth
        tokenTypeName: '',
        isCalc: false,
        account: "",
        depositTotal: 0,
        versionArr: [],
        myContract: null,
        showInsure: false,
        showClear: false,
        insure: "", //投保金额
        insureModalBtnText: ''
      };
    },
    inject: ["web3Obj"],
    components: {
      Header,
      ConstractData,
      TokenList,
      UserAmount,
    },
    created() {
      let constractKeys = Object.keys(DEFISAFE_CONSTRACT);
      this.versionArr = constractKeys;
      if (sessionStorage.version) {
        this.currentVersion = sessionStorage.version;
      } else {
        this.currentVersion = constractKeys[0];
      }

      this.initApp();
    },
    mounted() {
      this.getData();
    },
    computed: {
      viewDepositTotal() {
        if(String(this.depositTotal).includes('e')) {
          return parseFloat(String(this.depositTotal).split('e')[0]).toFixed(4);
        } else {
          return parseFloat(this.depositTotal).toFixed(4);
        }
      },
      btnDisable() {
        if (this.depositTotal && !this.isCalc) {
          return false;
        } else {
          return true;
        }
      }
    },
    methods: {
      transferToBn(val) {
        let value = this.web3Obj.utils.toWei(String(val));
        return new this.web3Obj.utils.BN(value);
      },
      calcPrice() {
        if(this.mtype === '' || !this.insure) return;
        this.isCalc = true;
        this.btnLoad = true;
        this.insureModalBtnText = '计算抵押金额';
        let contractKey = this.findKeyByValue(this.mtypes, this.mtype);
        let ct = this.$util.getContract(
          this.web3Obj,
          PRICE_PREDICT.addr,
          PRICE_PREDICT.abi
        );
        let insureAmount = this.transferToBn(this.insure);
        let deposit = 0;
        if (this.mortgageRatio > 0) {
          deposit = this.insure * this.mortgageRatio;
        }
        
        if (this.mtype == 1) {
          ct.methods
            .getPriceTokenToEth(DAI_CONTRACT.addr)
            .call()
            .then((res) => {
              this.depositTotal = deposit * this.transferFromWei(res);
              this.btnLoad = false;
              this.insureModalBtnText = '确定';
              this.isCalc = false;
            });
        } else {
          ct.methods
            .getPriceTokenToToken(
              DAI_CONTRACT.addr,
              TOKEN_ADDR[contractKey].addr,
              insureAmount
            )
            .call()
            .then((res) => {
              this.depositTotal = deposit * this.transferFromWei(res["0"]);
              this.btnLoad = false;
              this.insureModalBtnText = '确定';
              this.isCalc = false;
            });
        }
      },
      //calc price
      async changeInsure(val) {
        this.calcPrice();
      },
      //init necessary data
      async initApp() {
        let hasInstallWallet =
          typeof window.ethereum === "undefined" ? false : true;
        let useAccount = await window.ethereum.request({ method: 'eth_accounts' });
        this.account = useAccount[0];
        let netType = window.ethereum.networkVersion;
        if ((netType != 1) || !hasInstallWallet || !this.account) {
          this.$router.push('/login');
          return;
        }

        this.account = window.ethereum.selectedAddress;
        this.daiContract = this.$util.getContract(
          this.web3Obj,
          DAI_CONTRACT.addr,
          ERC_ABI
        );
        this.myContract = this.$util.getContract(
          this.web3Obj,
          DEFISAFE_CONSTRACT.v1.addr,
          DEFISAFE_CONSTRACT.v1.abi
        );

        window.ethereum.on("accountsChanged", (accounts) => {
          if (!accounts.length) {
            this.$router.push("/login");
          } else {
            this.updateData && this.updateData();
          }
        });
      },
      showInsureModal() {
        if (this.btnDisable) {
          this.insureModalBtnText = '请输入投保资产';
        } else {
          this.insureModalBtnText = '确定';
        }
        this.btnLoad = false;
        this.depositTotal = 0;
        this.currentToken = 0;
        this.insure = '';
        this.showInsure = true;
        this.isCalc = false;
        this.mtype = '';
        this.tokenTypeName = '';

        this.daiContract.methods
          .balanceOf(this.account)
          .call()
          .then((res) => {
            this.daiAmount = this.transferFromWei(res);
          });
        this.myContract.methods.getMortgageRatio().call().then(res => {
          this.mortgageRatio = res;
        });

        this.myContract.methods.getMapAssetRatio().call().then(res => {
          this.mapAssetRatio = res;
        });
        // this.getUserToken();
      },
      checkForm() {
        if (this.insure <= 10) {
          this.$alert('投保金额不能低于10DAI', '提示', {
            confirmButtonText: '确定'
          });
          return false;
        }

        if (this.currentToken < parseFloat(this.depositTotal)) {
          this.$alert('没有足够的抵押金', '提示', {
            confirmButtonText: '确定'
          });
          return false;
        }

        if (!isFinite(parseFloat(this.insure))) {
          this.$alert('请输入正确的投保金额', '提示', {
            confirmButtonText: '确定'
          });
          return false;
        }

        if (Number(this.insure) > Number(this.daiAmount)) {
          this.$alert('DAI余额不足，请前往uniswap兑换', '提示', {
            confirmButtonText: '确定'
          });
          return false;
        }

        return true;
      },
      async insureModalSave() {
        let contractKey = this.findKeyByValue(this.mtypes, this.mtype);
        let ct = this.$util.getContract(
          this.web3Obj,
          TOKEN_ADDR[contractKey].addr,
          ERC_ABI
        );

        if (!this.checkForm()) {
          return;
        }
        this.btnLoad = true;
        let insureAmount = this.transferToBn(this.insure);
        let approveBigNum = this.transferToBn(this.depositTotal);
        let daiAllow = await this.daiContract.methods
          .allowance(this.account, DEFISAFE_CONSTRACT[this.currentVersion].addr)
          .call({ from: this.account });
        if (this.mtype == 1) {
          //eth
          this.insureEth(daiAllow, insureAmount, approveBigNum);
        } else {
          //erc20 token
          if (daiAllow != 0) {
            this.insureERCWithApprove(ct, insureAmount, approveBigNum);
          } else {
            this.insureERC(ct, insureAmount, approveBigNum);
          }
        }
      },
      insureEth(daiAllow, insureAmount, approveBigNum) {
        if (daiAllow != 0) {
          this.daiContract.methods
            .approve(DEFISAFE_CONSTRACT[this.currentVersion].addr, 0)
            .send({ from: this.account })
            .on("transactionHash", this.txCallback)
            .on("receipt", async (receipt) => {
              this.daiContract.methods
                .approve(
                  DEFISAFE_CONSTRACT[this.currentVersion].addr,
                  insureAmount
                )
                .send({ from: this.account })
                .on("receipt", async (receipt) => {
                  try {
                    let res = await this.myContract.methods
                      .deposit(this.mtype, insureAmount)
                      .send({ from: this.account, value: approveBigNum });
                    window._czc.push([
                      "_trackEvent",
                      "点击事件",
                      "用户投保",
                      this.account,
                    ]);
                    this.isLoad = false;
                    this.$alert(
                      this.$tc("modal.insure.tip.desc", 2),
                      this.$tc("modal.insure.tip.title", 2),
                      {
                        confirmButtonText: "ok",
                      }
                    );
                    this.updateData();
                  } catch (error) {
                    console.log(error);
                    this.isLoad = false;
                  }
                })
                .on("error", (error) => {
                  this.isLoad = false;
                  sessionStorage.removeItem("txHash");
                  console.error(error);
                });
            })
            .on("error", this.txErrorCallback);
        } else {
          this.daiContract.methods
            .approve(DEFISAFE_CONSTRACT[this.currentVersion].addr, insureAmount)
            .send({ from: this.account })
            .on("transactionHash", this.txCallback)
            .on("receipt", async (receipt) => {
              try {
                let res = await this.myContract.methods
                  .deposit(this.mtype, insureAmount)
                  .send({ from: this.account, value: approveBigNum });
                window._czc.push([
                  "_trackEvent",
                  "点击事件",
                  "用户投保",
                  this.account,
                ]);
                this.isLoad = false;
                this.$alert(
                  this.$tc("modal.insure.tip.desc", 2),
                  this.$tc("modal.insure.tip.title", 2),
                  {
                    confirmButtonText: "ok",
                  }
                );
                this.updateData();
              } catch (error) {
                console.log(error);
                this.isLoad = false;
              }
            })
            .on("error", this.txErrorCallback);
        }
      },
      async insureERCWithApprove(ct, insureAmount, approveBigNum) {
        this.daiContract.methods
          .approve(DEFISAFE_CONSTRACT[this.currentVersion].addr, 0)
          .send({ from: this.account })
          .on("transactionHash", this.txCallback)
          .on("receipt", async (receipt) => {
            this.daiContract.methods
              .approve(DEFISAFE_CONSTRACT[this.currentVersion].addr, insureAmount)
              .send({ from: this.account })
              .on("receipt", async (receipt) => {
                let checkRes = await ct.methods
                  .allowance(
                    this.account,
                    DEFISAFE_CONSTRACT[this.currentVersion].addr
                  )
                  .call({ from: this.account });
                if (checkRes != 0) {
                  //approve
                  ct.methods
                    .approve(DEFISAFE_CONSTRACT[this.currentVersion].addr, 0)
                    .send({ from: this.account })
                    .on("receipt", async (receipt) => {
                      ct.methods
                        .approve(
                          DEFISAFE_CONSTRACT[this.currentVersion].addr,
                          approveBigNum
                        )
                        .send({ from: this.account })
                        .on("receipt", async (receipt) => {
                          try {
                            let res = await this.myContract.methods
                              .deposit(this.mtype, insureAmount)
                              .send({ from: this.account });
                            window._czc.push([
                              "_trackEvent",
                              "点击事件",
                              "用户投保",
                              this.account,
                            ]);
                            this.isLoad = false;
                            this.$alert(
                              this.$tc("modal.insure.tip.desc", 2),
                              this.$tc("modal.insure.tip.title", 2),
                              {
                                confirmButtonText: "ok",
                              }
                            );
                            this.updateData();
                          } catch (error) {
                            console.log(error);
                            this.isLoad = false;
                          }
                        })
                        .on("error", this.txErrorCallback);
                    })
                    .on("error", this.txErrorCallback);
                } else {
                  ct.methods
                    .approve(
                      DEFISAFE_CONSTRACT[this.currentVersion].addr,
                      approveBigNum
                    )
                    .send({ from: this.account })
                    .on("receipt", async (receipt) => {
                      try {
                        await this.myContract.methods
                          .deposit(this.mtype, insureAmount)
                          .send({ from: this.account });
                        this.isLoad = false;
                        window._czc.push([
                          "_trackEvent",
                          "点击事件",
                          "用户投保",
                          this.account,
                        ]);
                        this.$alert(
                          this.$tc("modal.insure.tip.desc", 2),
                          this.$tc("modal.insure.tip.title", 2),
                          {
                            confirmButtonText: "ok",
                          }
                        );
                        this.updateData();
                      } catch (error) {
                        this.isLoad = false;
                        console.log(error);
                      }
                    })
                    .on("error", this.txErrorCallback);
                }
              })
              .on("error", this.txErrorCallback);
          })
          .on("error", this.txErrorCallback);
      },
      async insureERC(ct, insureAmount, approveBigNum) {
        this.daiContract.methods
          .approve(DEFISAFE_CONSTRACT[this.currentVersion].addr, insureAmount)
          .send({ from: this.account })
          .on("transactionHash", this.txCallback)
          .on("receipt", async (receipt) => {
            let checkRes = await ct.methods
              .allowance(
                this.account,
                DEFISAFE_CONSTRACT[this.currentVersion].addr
              )
              .call({ from: this.account });
            if (checkRes != 0) {
              //approve
              ct.methods
                .approve(DEFISAFE_CONSTRACT[this.currentVersion].addr, 0)
                .send({ from: this.account })
                .on("receipt", async (receipt) => {
                  ct.methods
                    .approve(
                      DEFISAFE_CONSTRACT[this.currentVersion].addr,
                      approveBigNum
                    )
                    .send({ from: this.account })
                    .on("receipt", async (receipt) => {
                      try {
                        let res = await this.myContract.methods
                          .deposit(this.mtype, insureAmount)
                          .send({ from: this.account });
                        window._czc.push([
                          "_trackEvent",
                          "点击事件",
                          "用户投保",
                          this.account,
                        ]);
                        this.isLoad = false;
                        this.$alert(
                          this.$tc("modal.insure.tip.desc", 2),
                          this.$tc("modal.insure.tip.title", 2),
                          {
                            confirmButtonText: "ok",
                          }
                        );
                        this.updateData();
                      } catch (error) {
                        console.log(error);
                        this.isLoad = false;
                      }
                    })
                    .on("error", this.txErrorCallback);
                })
                .on("error", this.txErrorCallback);
            } else {
              ct.methods
                .approve(
                  DEFISAFE_CONSTRACT[this.currentVersion].addr,
                  approveBigNum
                )
                .send({ from: this.account })
                .on("receipt", async (receipt) => {
                  try {
                    await this.myContract.methods
                      .deposit(this.mtype, insureAmount)
                      .send({ from: this.account });
                    this.isLoad = false;
                    window._czc.push([
                      "_trackEvent",
                      "点击事件",
                      "用户投保",
                      this.account,
                    ]);
                    this.$alert(
                      this.$tc("modal.insure.tip.desc", 2),
                      this.$tc("modal.insure.tip.title", 2),
                      {
                        confirmButtonText: "ok",
                      }
                    );
                    this.updateData();
                  } catch (error) {
                    this.isLoad = false;
                    console.log(error);
                  }
                })
                .on("error", this.txErrorCallback);
            }
          })
          .on("error", this.txErrorCallback);
      },
      updateData() {
        this.$refs.nav.getData();
        this.$refs.user.getData();
        this.$refs.token.getData();
      },
      findKeyByValue(obj, val) {
        for (let key in obj) {
          if (obj[key] == val) {
            return key;
          }
        }
      },
      transferFromWei(wei) {
        return parseFloat(this.web3Obj.utils.fromWei(wei)).toFixed(4);
      },
      getUserToken() {
        if (this.mtype == 1) {
          //eth
          this.web3Obj.eth.getBalance(this.account).then((res) => {
            this.currentToken = this.transferFromWei(res);
          });
          return;
        }
        let contractKey = this.findKeyByValue(this.mtypes, this.mtype);
        let ct = this.$util.getContract(
          this.web3Obj,
          TOKEN_ADDR[contractKey]["addr"],
          ERC_ABI
        );

        ct.methods
          .balanceOf(this.account)
          .call()
          .then((res) => {
            this.currentToken = this.transferFromWei(res);
          });
      },

      showClearModal() {
        this.showClear = true;
      },
      txCallback(hash) {
        this.btnLoad = false;
        this.showClear = false;
        this.insure = 0;
        this.showInsure = false;
        this.isLoad = true;
      },
      txErrorCallback(error) {
        console.log(error);
        this.btnLoad = false;
        this.isLoad = false;
        this.insure = 0;
        this.showInsure = false;
      },
      clearModalSave() {
        this.btnLoad = true;
        this.myContract.methods
          .withdrawAssets(this.account, this.mtype)
          .send({ from: this.account })
          .on("transactionHash", this.txCallback)
          .on("receipt", async (receipt) => {
            window._czc.push([
              "_trackEvent",
              "点击事件",
              "用户结算",
              this.account,
            ]);
            this.isLoad = false;
            this.$alert(
              this.$tc("modal.insure.tip.desc", 1),
              this.$tc("modal.insure.tip.title", 1),
              {
                confirmButtonText: this.$t("modal.insure.tip.btn"),
              }
            );
            this.updateData();
          })
          .on("error", this.txErrorCallback);
      },
      //get page data
      async getData() {
        window._czc.push(["_trackEvent", "加载", "投保页面打开次数"]);
      },
      changeToken(val) {
        this.calcPrice();
        this.tokenTypeName = this.findKeyByValue(this.mtypes, val);
        this.getUserToken();
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import "./index.scss";
</style>

<style lang='scss'>
  .el-select-dropdown__item {
    height: 40px;
    line-height: 40px;
  }
  .im_select-option {
    line-height: 40px;
    .token-icon {
      width: 24px;
      height: 24px;
      vertical-align: middle;
      margin-right: 10px;
    }
    .token-name {
      vertical-align: middle;
      font-size: 20px;
    }
  }
</style>