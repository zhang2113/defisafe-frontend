
const util = {
  isLogin() {
    if (typeof window.ethereum !== "undefined" && window.ethereum.selectedAddress) {
      return true;
    } else {
      return false
    }
  }
}

export default util;