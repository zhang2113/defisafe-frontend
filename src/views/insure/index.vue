<template>
  <div
    v-loading="isLoad"
    :element-loading-text="$t('insure.load.text')"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    class="insure"
  >
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
                <el-button
                  type="primary"
                  @click="showInsureModal"
                >{{$t('insure.business.insureBtn')}}</el-button>
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
    <el-dialog
      class="i-modal"
      :title="$t('modal.insure.start.title')"
      :visible.sync="showInsure"
      width="420px"
    >
      <div class="im-head tc" slot="title">投保</div>
      <div>
        <div class="im-item">
          <div class="tr im-top-amount">Balance：{{currentToken}}</div>
          <div class='flex-m'>
            <span class="im-label flex-1">保险资产：</span>
            <div class="pr">
              <img class="token-icon" :src="tokenIcon[tokenTypeName]" alt="">
              <el-select class="im-select" @change="changeToken" v-model="mtype" placeholder>
                <el-option v-for="(value, name) in mtypes" :key="name" :label="name" :value="value">
                  <div class="im_select-option">
                    <img class="token-icon" :src="tokenIcon[name]" alt />
                    <span class="token-name">{{name}}</span>
                  </div>
                </el-option>
              </el-select>
            </div>
            
          </div>
        </div>
        <div class="im-item flex-m">
          <span class="im-label flex-1">抵押资产：</span>
          <span class="im-deposit-amount">{{depositTotal}}</span>
          <span class="im-dai-label">dai</span>
        </div>
        <div class="im-item">
          <div class="tr im-top-amount">Balance：{{daiAmount}}</div>
          <div class="flex-m">
            <span class="im-label">{{$t('modal.insure.start.amount')}}：</span>
            <input class="im-insure-input flex-1" @change="changeInsure" v-model="insure" type="text" placeholder='0.0'>
            <span class="im-dai-label">dai</span>
          </div>
        </div>
        <div>
          <el-button
            class="save-btn"
            :loading="btnLoad"
            @click="insureModalSave"
            type="primary"
          >{{$t('modal.insure.start.btn')}}</el-button>
        </div>
      </div>
    </el-dialog>

    <!-- get model -->
    <el-dialog :title="$t('modal.insure.end.title')" :visible.sync="showClear" width="30%">
      <div class="dai_modal">
        <div>
          <span>{{$t('modal.insure.end.token')}}：</span>
          <el-select style="width: 220px" v-model="mtype">
            <el-option v-for="(value, name) in mtypes" :key="name" :label="name" :value="value"></el-option>
          </el-select>
        </div>
        <div>
          <el-button
            :loading="btnLoad"
            @click="clearModalSave"
            type="primary"
          >{{$t('modal.insure.end.btn')}}</el-button>
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
import ROPSTEN_TOKEN_ADDR from "../../constants/token";
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
      btnLoad: false,
      currentToken: 0,
      isLoad: false,
      mtypes: SUPPORT_TOKEN_TYPE,
      currentVersion: "", //当前合约版本
      mtype: 1, //通证,默认eth
      tokenTypeName: 'eth',
      account: "",
      depositTotal: 0,
      versionArr: [],
      myContract: null,
      showInsure: true,
      showClear: false,
      insure: "", //投保金额
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
    let constractKeys = Object.keys(contract);
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
  methods: {
    transferToBn(val) {
      let value = this.web3Obj.utils.toWei(String(val));
      return new this.web3Obj.utils.BN(value);
    },
    //calc price
    async changeInsure(val) {
      let contractKey = this.findKeyByValue(this.mtypes, this.mtype);
      let ct = this.$util.getContract(
        this.web3Obj,
        PRICE_PREDICT.addr,
        PRICE_PREDICT.abi
      );
      let insureAmount = this.transferToBn(this.insure);
      let deposit = 0;
      let ratio = await this.myContract.methods.getMortgageRatio().call();
      console.log("ratio", ratio);
      if (ratio > 0) {
        deposit = this.insure * ratio;
      }

      if (this.mtype == 1) {
        ct.methods
          .getPriceTokenToEth(DAI_CONTRACT.addr)
          .call()
          .then((res) => {
            this.depositTotal = deposit * this.transferFromWei(res);
          });
      } else {
        ct.methods
          .getPriceTokenToToken(
            DAI_CONTRACT.addr,
            ROPSTEN_TOKEN_ADDR[contractKey].addr,
            insureAmount
          )
          .call()
          .then((res) => {
            this.depositTotal = deposit * this.transferFromWei(res["0"]);
          });
      }
    },
    //init necessary data
    async initApp() {
      let hasInstallWallet =
        typeof window.ethereum === "undefined" ? false : true;

      let netType = window.ethereum.networkVersion;
      if (
        netType != 3 ||
        !hasInstallWallet ||
        !window.ethereum.selectedAddress
      ) {
        this.$router.push("/login");
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
          this.getData && this.getData();
        }
      });
    },
    showInsureModal() {
      this.daiContract.methods
        .balanceOf(this.account)
        .call()
        .then((res) => {
          this.daiAmount = this.transferFromWei(res);
        });
      this.getUserToken();
      this.showInsure = true;
    },
    async insureModalSave() {
      let contractKey = this.findKeyByValue(this.mtypes, this.mtype);
      let ct = this.$util.getContract(
        this.web3Obj,
        ROPSTEN_TOKEN_ADDR[contractKey].addr,
        ERC_ABI
      );

      if (this.insure <= 10) {
        this.$alert("投保金额不能低于10DAI", "提示", {
          confirmButtonText: "确定",
        });
        return;
      }

      if (this.currentToken < parseFloat(this.depositTotal)) {
        this.$alert("没有足够的抵押金", "提示", {
          confirmButtonText: "确定",
        });
        return;
      }

      if (!isFinite(parseFloat(this.insure))) {
        this.$alert("请输入正确的投保金额", "提示", {
          confirmButtonText: "确定",
        });
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
        ROPSTEN_TOKEN_ADDR[contractKey]["addr"],
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
          this.getData();
        })
        .on("error", this.txErrorCallback);
    },
    //get page data
    async getData() {
      window._czc.push(["_trackEvent", "加载", "投保页面打开次数"]);
    },
    changeToken(val) {
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
.im_select-option {
  line-height: 34px;
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