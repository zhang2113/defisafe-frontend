<template>
  <div class="login">
    <div class="head">
      <img src="../imgs/logo.png" alt="">
    </div>
    <div class="box">
      <div class="title tc">资金池</div>
      <!-- <div>
        <span>选择通证：</span>
        <el-select v-model="mtype" placeholder="请选择">
          <el-option v-for="(value, name) in mtypes" :key="name" :label="name" :value="value">
          </el-option>
        </el-select>
      </div> -->
      <div class="b-foot">
        <button class="tc" @click="login">Connect Wallet</button>
      </div>
    </div>
  </div>
</template>

<script>
import mtype from "@/util/moneyType";
export default {
  data() {
    return {
      mtypes: null,
      mtype: 103
    };
  },
  created() {
    this.mtypes = mtype;
    console.log(mtype);
  },
  methods: {
    login() {
      if (typeof window.ethereum === "undefined") {
        this.$alert("Please install Metamask wallet first", "warn", {
          confirmButtonText: "confirm"
        });
        return;
      }

      if (!this.$util.isLogin()) {
        
        window.ethereum
          .enable()
          .then(accounts => {
            this.$router.push("/user");
          })
          .catch(reason => {
            alert("login fail");
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  position: relative;
  height: 100%;
  background: #2b313d;
  color: #fff;
  .head {
    padding: 30px;
    img {
      width: 100px;
    }
  }
  .box {
    position: absolute;
    top: 30%;
    left: 50%;
    width: 420px;
    margin-left: -210px;
    background: #222429;
    padding: 15px;
    border-radius: 15px;
    .title {
      font-size: 20px;
      margin-bottom: 30px;
    }
    .b-foot {
      padding-top: 15px;
      button {
        width: 100%;
        font-size: 16px;
        color: #fff;
        line-height: 56px;
        background: #2173e6;
        border-radius: 15px;
      }
    }
  }
}
</style>
