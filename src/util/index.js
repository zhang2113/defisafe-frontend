import Web3 from "web3";

const util = {
  initWeb3() {
    if (window.web3) {
      return new Web3(window.web3.currentProvider);
    } else {
      return new Web3(
        new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/0xdbc877878b6653307c98c6e9006aef29ae8cac06")
      )
    }
  },
  isLogin() {
    if (typeof window.ethereum !== "undefined" && window.ethereum.selectedAddress) {
      return true;
    } else {
      return false
    }
  }
}

export default util;