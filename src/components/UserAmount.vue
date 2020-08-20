<template>
    <div>
        <div class="cash-item clear">
            <img class="icon" src="../imgs/icon02.png" alt />
            <div class="label">{{ $tc('insure.business.useInsureDesc', 0)}}</div>
            <div class="number">{{ moneyFromRule }} DAI</div>
        </div>
        <div class="cash-item clear">
            <img class="icon" src="../imgs/icon01.png" alt />
            <div class="label">{{ $tc('insure.business.useInsureDesc', 1)}}</div>
            <div class="number">{{ totalMoneyFromRule }} DAI</div>
        </div>
        <div class="cash-item clear">
            <img class="icon" src="../imgs/logo.png" alt />
            <div class="label">{{ $tc('insure.business.useInsureDesc', 2)}}</div>
            <div class="number">{{ userDSE }}</div>
        </div>
        <!-- <div class="cash-item clear">
                <img class="icon" src="../../imgs/dst-icon.png" alt="">
                <div class="label">DST</div>
                <div class="number">{{userDST}}</div>
              </div> -->
    </div>
</template>

<script>
    import { DEFISAFE_CONSTRACT, ERC_ABI, CURRENT_NET } from "../constants";
    import { TOKEN_CONTRACT } from "../constants/token";
    import tokenIcon from "@/imgs/token";
    export default {
        data() {
            return {
                userDSE: 0,
                totalMoneyFromRule: 0,
                moneyFromRule: 0,
                account: "",
                currentVersion: ''
            };
        },
        inject: ["web3Obj"],
        async created() {
            let constractKeys = Object.keys(DEFISAFE_CONSTRACT);
            if (sessionStorage.version) {
                this.currentVersion = sessionStorage.version;
            } else {
                this.currentVersion = constractKeys[0];
            }
            this.account = await window.ethereum.request({ method: 'eth_accounts' });
            this.getData();
        },
        methods: {
            getData() {
                let contract = this.$util.getContract(
                    this.web3Obj,
                    DEFISAFE_CONSTRACT[this.currentVersion][CURRENT_NET],
                    DEFISAFE_CONSTRACT[this.currentVersion].abi
                );

                let dseContract = this.$util.getContract(
                    this.web3Obj,
                    TOKEN_CONTRACT[CURRENT_NET].dse.addr,
                    ERC_ABI
                );
                dseContract.methods
                    .balanceOf(this.account[0])
                    .call()
                    .then((res) => {
                        if (res > 0) {
                            this.userDSE = parseFloat(this.web3Obj.utils.fromWei(res)).toFixed(4);
                        }
                    });

                contract.methods
                    .getInsurancePoolBalanceOf()
                    .call()
                    .then((res) => {
                        this.totalMoneyFromRule = parseFloat(this.web3Obj.utils.fromWei(res)).toFixed(4);
                    });

                contract.methods.getInsuranceTotalMoneyForuser(this.account[0]).call().then(res => {
                    this.moneyFromRule = parseFloat(this.web3Obj.utils.fromWei(res)).toFixed(4);
                });
            }
        }
    };
</script>

<style lang='scss' scoped>
    .cash-item {
        padding: 10px 0;
        font-size: 16px;

        >* {
            float: left;
            height: 36px;
            line-height: 36px;
        }

        .number {
            float: right;
            color: #1aa2e5;
            font-size: 16px;
            font-weight: bold;
        }

        .icon {
            width: 36px;
            height: 36px;
            margin-right: 15px;
        }
    }
</style>