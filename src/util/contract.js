export default {
  v5: {
    addr: '0x885313d4F6baBEEfAe68A264eccafb220db819B0',
    abi: [
      {
              "inputs": [
                      {
                              "internalType": "uint256",
                              "name": "_tokenID",
                              "type": "uint256"
                      },
                      {
                              "internalType": "address",
                              "name": "_tokenAddress",
                              "type": "address"
                      }
              ],
              "name": "addGuaranteeToken",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
      },
      {
              "inputs": [
                      {
                              "internalType": "uint256",
                              "name": "_tokenType",
                              "type": "uint256"
                      },
                      {
                              "internalType": "uint256",
                              "name": "_amount",
                              "type": "uint256"
                      },
                      {
                              "internalType": "address",
                              "name": "_tokenAddress",
                              "type": "address"
                      },
                      {
                              "internalType": "uint256",
                              "name": "_insuranceRatio",
                              "type": "uint256"
                      }
              ],
              "name": "deposit",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
      },
      {
              "inputs": [],
              "name": "getAssetsTotalForPlatform",
              "outputs": [
                      {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                      }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
      },
      {
              "inputs": [
                      {
                              "internalType": "uint256",
                              "name": "_amount",
                              "type": "uint256"
                      }
              ],
              "name": "rechargeInsurancePool",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
      },
      {
              "inputs": [],
              "stateMutability": "nonpayable",
              "type": "constructor"
      },
      {
              "anonymous": false,
              "inputs": [
                      {
                              "indexed": false,
                              "internalType": "uint256",
                              "name": "tokenID",
                              "type": "uint256"
                      },
                      {
                              "indexed": false,
                              "internalType": "uint256",
                              "name": "amount",
                              "type": "uint256"
                      },
                      {
                              "indexed": false,
                              "internalType": "address",
                              "name": "tokenAddress",
                              "type": "address"
                      },
                      {
                              "indexed": false,
                              "internalType": "uint256",
                              "name": "insuranceRatio",
                              "type": "uint256"
                      }
              ],
              "name": "Deposit",
              "type": "event"
      },
      {
              "inputs": [
                      {
                              "internalType": "uint256",
                              "name": "_tokenID",
                              "type": "uint256"
                      }
              ],
              "name": "getTokenAddressForTokenID",
              "outputs": [
                      {
                              "internalType": "address",
                              "name": "",
                              "type": "address"
                      }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
      },
      {
              "anonymous": false,
              "inputs": [
                      {
                              "indexed": false,
                              "internalType": "uint256",
                              "name": "amount",
                              "type": "uint256"
                      }
              ],
              "name": "RechargeInsurancePool",
              "type": "event"
      },
      {
              "inputs": [
                      {
                              "internalType": "address",
                              "name": "_daiAddr",
                              "type": "address"
                      }
              ],
              "name": "setDaiAddress",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
      },
      {
              "anonymous": false,
              "inputs": [
                      {
                              "indexed": false,
                              "internalType": "uint256",
                              "name": "tokenID",
                              "type": "uint256"
                      },
                      {
                              "indexed": false,
                              "internalType": "address",
                              "name": "tokenAddress",
                              "type": "address"
                      }
              ],
              "name": "SetGuaranteeToken",
              "type": "event"
      },
      {
              "inputs": [
                      {
                              "internalType": "uint256",
                              "name": "_openType",
                              "type": "uint256"
                      }
              ],
              "name": "setIsAbnormalEnvironment",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
      },
      {
              "inputs": [
                      {
                              "internalType": "uint256",
                              "name": "_openType",
                              "type": "uint256"
                      }
              ],
              "name": "setIsOpenAssetValidation",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
      },
      {
              "inputs": [
                      {
                              "internalType": "uint256",
                              "name": "_fees",
                              "type": "uint256"
                      }
              ],
              "name": "setLicenseFeesValue",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
      },
      {
              "inputs": [
                      {
                              "internalType": "address",
                              "name": "_addr",
                              "type": "address"
                      }
              ],
              "name": "setMineManager",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
      },
      {
              "inputs": [
                      {
                              "internalType": "address",
                              "name": "_addr",
                              "type": "address"
                      }
              ],
              "name": "setOnlinePricesPredictedMachine",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
      },
      {
              "anonymous": false,
              "inputs": [
                      {
                              "indexed": false,
                              "internalType": "address",
                              "name": "usAddr",
                              "type": "address"
                      }
              ],
              "name": "SetUSAddress",
              "type": "event"
      },
      {
              "inputs": [],
              "name": "startCollectionOfLicenseFees",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
      },
      {
              "inputs": [],
              "name": "startCollectionOfSharingFees",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
      },
      {
              "inputs": [
                      {
                              "internalType": "address payable",
                              "name": "newOwner",
                              "type": "address"
                      }
              ],
              "name": "transferOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
      },
      {
              "inputs": [
                      {
                              "internalType": "address",
                              "name": "_name",
                              "type": "address"
                      },
                      {
                              "internalType": "uint256",
                              "name": "_tokenType",
                              "type": "uint256"
                      }
              ],
              "name": "withdrawAssets",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
      },
      {
              "anonymous": false,
              "inputs": [
                      {
                              "indexed": false,
                              "internalType": "address",
                              "name": "name",
                              "type": "address"
                      },
                      {
                              "indexed": false,
                              "internalType": "uint256",
                              "name": "tokenID",
                              "type": "uint256"
                      }
              ],
              "name": "WithdrawAssets",
              "type": "event"
      },
      {
              "stateMutability": "payable",
              "type": "fallback"
      },
      {
              "stateMutability": "payable",
              "type": "receive"
      },
      {
              "inputs": [],
              "name": "daiAddress",
              "outputs": [
                      {
                              "internalType": "address",
                              "name": "",
                              "type": "address"
                      }
              ],
              "stateMutability": "view",
              "type": "function"
      },
      {
              "inputs": [],
              "name": "getAssetsTotalForPlatform_ever",
              "outputs": [
                      {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                      }
              ],
              "stateMutability": "view",
              "type": "function"
      },
      {
              "inputs": [],
              "name": "getEnvAbnormalTokenID",
              "outputs": [
                      {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                      }
              ],
              "stateMutability": "view",
              "type": "function"
      },
      {
              "inputs": [],
              "name": "getEnvCheckState",
              "outputs": [
                      {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                      }
              ],
              "stateMutability": "view",
              "type": "function"
      },
      {
              "inputs": [],
              "name": "getEnvSafeMode",
              "outputs": [
                      {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                      }
              ],
              "stateMutability": "view",
              "type": "function"
      },
      {
              "inputs": [],
              "name": "getGainIncomeBalanceOf",
              "outputs": [
                      {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                      }
              ],
              "stateMutability": "view",
              "type": "function"
      },
      {
              "inputs": [],
              "name": "getInsuranceCountForPlatform",
              "outputs": [
                      {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                      }
              ],
              "stateMutability": "view",
              "type": "function"
      },
      {
              "inputs": [],
              "name": "getInsuranceCountForPlatform_ever",
              "outputs": [
                      {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                      }
              ],
              "stateMutability": "view",
              "type": "function"
      },
      {
              "inputs": [],
              "name": "getInsurancePoolBalanceOf",
              "outputs": [
                      {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                      }
              ],
              "stateMutability": "view",
              "type": "function"
      },
      {
              "inputs": [
                      {
                              "internalType": "address",
                              "name": "_name",
                              "type": "address"
                      }
              ],
              "name": "getInsuranceTotalMoneyForuser",
              "outputs": [
                      {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                      }
              ],
              "stateMutability": "view",
              "type": "function"
      },
      {
              "inputs": [],
              "name": "getPlatformCost",
              "outputs": [
                      {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                      },
                      {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                      },
                      {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                      },
                      {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                      }
              ],
              "stateMutability": "view",
              "type": "function"
      },
      {
              "inputs": [
                      {
                              "internalType": "uint256",
                              "name": "_tokenType",
                              "type": "uint256"
                      }
              ],
              "name": "getTokenPoolBalanceOf",
              "outputs": [
                      {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                      }
              ],
              "stateMutability": "view",
              "type": "function"
      },
      {
              "inputs": [
                      {
                              "internalType": "address",
                              "name": "_name",
                              "type": "address"
                      },
                      {
                              "internalType": "uint256",
                              "name": "_tokenType",
                              "type": "uint256"
                      }
              ],
              "name": "getTokenPoolUserBalanceOf",
              "outputs": [
                      {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                      }
              ],
              "stateMutability": "view",
              "type": "function"
      },
      {
              "inputs": [],
              "name": "getTotalCompensation_ever",
              "outputs": [
                      {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                      }
              ],
              "stateMutability": "view",
              "type": "function"
      },
      {
              "inputs": [],
              "name": "getTotalFreeTokens",
              "outputs": [
                      {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                      }
              ],
              "stateMutability": "view",
              "type": "function"
      },
      {
              "inputs": [],
              "name": "getUsersTotalForPlatform",
              "outputs": [
                      {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                      }
              ],
              "stateMutability": "view",
              "type": "function"
      },
      {
              "inputs": [
                      {
                              "internalType": "uint256",
                              "name": "_x",
                              "type": "uint256"
                      },
                      {
                              "internalType": "uint256",
                              "name": "_y",
                              "type": "uint256"
                      },
                      {
                              "internalType": "uint256",
                              "name": "_z",
                              "type": "uint256"
                      }
              ],
              "name": "mulDiv",
              "outputs": [
                      {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                      }
              ],
              "stateMutability": "pure",
              "type": "function"
      },
      {
              "inputs": [
                      {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                      }
              ],
              "name": "tokenIDProtocol",
              "outputs": [
                      {
                              "internalType": "address",
                              "name": "",
                              "type": "address"
                      }
              ],
              "stateMutability": "view",
              "type": "function"
      }
]
  },
  v4: {
    addr: '0x885313d4f6babeefae68a264eccafb220db819b0',
    abi:[
      {
              "inputs": [
                      {
                              "internalType": "uint256",
                              "name": "_tokenID",
                              "type": "uint256"
                      },
                      {
                              "internalType": "address",
                              "name": "_tokenAddress",
                              "type": "address"
                      }
              ],
              "name": "addGuaranteeToken",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
      },
      {
              "inputs": [
                      {
                              "internalType": "uint256",
                              "name": "_tokenType",
                              "type": "uint256"
                      },
                      {
                              "internalType": "uint256",
                              "name": "_amount",
                              "type": "uint256"
                      },
                      {
                              "internalType": "address",
                              "name": "_tokenAddress",
                              "type": "address"
                      },
                      {
                              "internalType": "uint256",
                              "name": "_insuranceRatio",
                              "type": "uint256"
                      }
              ],
              "name": "deposit",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
      },
      {
              "inputs": [],
              "name": "getAssetsTotalForPlatform",
              "outputs": [
                      {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                      }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
      },
      {
              "inputs": [
                      {
                              "internalType": "uint256",
                              "name": "_amount",
                              "type": "uint256"
                      }
              ],
              "name": "rechargeInsurancePool",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
      },
      {
              "inputs": [],
              "stateMutability": "nonpayable",
              "type": "constructor"
      },
      {
              "anonymous": false,
              "inputs": [
                      {
                              "indexed": false,
                              "internalType": "uint256",
                              "name": "tokenID",
                              "type": "uint256"
                      },
                      {
                              "indexed": false,
                              "internalType": "uint256",
                              "name": "amount",
                              "type": "uint256"
                      },
                      {
                              "indexed": false,
                              "internalType": "address",
                              "name": "tokenAddress",
                              "type": "address"
                      },
                      {
                              "indexed": false,
                              "internalType": "uint256",
                              "name": "insuranceRatio",
                              "type": "uint256"
                      }
              ],
              "name": "Deposit",
              "type": "event"
      },
      {
              "inputs": [
                      {
                              "internalType": "uint256",
                              "name": "_tokenID",
                              "type": "uint256"
                      }
              ],
              "name": "getTokenAddressForTokenID",
              "outputs": [
                      {
                              "internalType": "address",
                              "name": "",
                              "type": "address"
                      }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
      },
      {
              "anonymous": false,
              "inputs": [
                      {
                              "indexed": false,
                              "internalType": "uint256",
                              "name": "amount",
                              "type": "uint256"
                      }
              ],
              "name": "RechargeInsurancePool",
              "type": "event"
      },
      {
              "inputs": [
                      {
                              "internalType": "address",
                              "name": "_daiAddr",
                              "type": "address"
                      }
              ],
              "name": "setDaiAddress",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
      },
      {
              "anonymous": false,
              "inputs": [
                      {
                              "indexed": false,
                              "internalType": "uint256",
                              "name": "tokenID",
                              "type": "uint256"
                      },
                      {
                              "indexed": false,
                              "internalType": "address",
                              "name": "tokenAddress",
                              "type": "address"
                      }
              ],
              "name": "SetGuaranteeToken",
              "type": "event"
      },
      {
              "inputs": [
                      {
                              "internalType": "uint256",
                              "name": "_openType",
                              "type": "uint256"
                      }
              ],
              "name": "setIsAbnormalEnvironment",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
      },
      {
              "inputs": [
                      {
                              "internalType": "uint256",
                              "name": "_openType",
                              "type": "uint256"
                      }
              ],
              "name": "setIsOpenAssetValidation",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
      },
      {
              "inputs": [
                      {
                              "internalType": "uint256",
                              "name": "_fees",
                              "type": "uint256"
                      }
              ],
              "name": "setLicenseFeesValue",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
      },
      {
              "inputs": [
                      {
                              "internalType": "address",
                              "name": "_addr",
                              "type": "address"
                      }
              ],
              "name": "setMineManager",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
      },
      {
              "inputs": [
                      {
                              "internalType": "address",
                              "name": "_addr",
                              "type": "address"
                      }
              ],
              "name": "setOnlinePricesPredictedMachine",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
      },
      {
              "anonymous": false,
              "inputs": [
                      {
                              "indexed": false,
                              "internalType": "address",
                              "name": "usAddr",
                              "type": "address"
                      }
              ],
              "name": "SetUSAddress",
              "type": "event"
      },
      {
              "inputs": [],
              "name": "startCollectionOfLicenseFees",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
      },
      {
              "inputs": [],
              "name": "startCollectionOfSharingFees",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
      },
      {
              "inputs": [
                      {
                              "internalType": "address payable",
                              "name": "newOwner",
                              "type": "address"
                      }
              ],
              "name": "transferOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
      },
      {
              "inputs": [
                      {
                              "internalType": "address",
                              "name": "_name",
                              "type": "address"
                      },
                      {
                              "internalType": "uint256",
                              "name": "_tokenType",
                              "type": "uint256"
                      }
              ],
              "name": "withdrawAssets",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
      },
      {
              "anonymous": false,
              "inputs": [
                      {
                              "indexed": false,
                              "internalType": "address",
                              "name": "name",
                              "type": "address"
                      },
                      {
                              "indexed": false,
                              "internalType": "uint256",
                              "name": "tokenID",
                              "type": "uint256"
                      }
              ],
              "name": "WithdrawAssets",
              "type": "event"
      },
      {
              "stateMutability": "payable",
              "type": "fallback"
      },
      {
              "stateMutability": "payable",
              "type": "receive"
      },
      {
              "inputs": [],
              "name": "daiAddress",
              "outputs": [
                      {
                              "internalType": "address",
                              "name": "",
                              "type": "address"
                      }
              ],
              "stateMutability": "view",
              "type": "function"
      },
      {
              "inputs": [],
              "name": "getAssetsTotalForPlatform_ever",
              "outputs": [
                      {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                      }
              ],
              "stateMutability": "view",
              "type": "function"
      },
      {
              "inputs": [],
              "name": "getEnvAbnormalTokenID",
              "outputs": [
                      {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                      }
              ],
              "stateMutability": "view",
              "type": "function"
      },
      {
              "inputs": [],
              "name": "getEnvCheckState",
              "outputs": [
                      {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                      }
              ],
              "stateMutability": "view",
              "type": "function"
      },
      {
              "inputs": [],
              "name": "getEnvSafeMode",
              "outputs": [
                      {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                      }
              ],
              "stateMutability": "view",
              "type": "function"
      },
      {
              "inputs": [],
              "name": "getGainIncomeBalanceOf",
              "outputs": [
                      {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                      }
              ],
              "stateMutability": "view",
              "type": "function"
      },
      {
              "inputs": [],
              "name": "getInsuranceCountForPlatform",
              "outputs": [
                      {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                      }
              ],
              "stateMutability": "view",
              "type": "function"
      },
      {
              "inputs": [],
              "name": "getInsuranceCountForPlatform_ever",
              "outputs": [
                      {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                      }
              ],
              "stateMutability": "view",
              "type": "function"
      },
      {
              "inputs": [],
              "name": "getInsurancePoolBalanceOf",
              "outputs": [
                      {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                      }
              ],
              "stateMutability": "view",
              "type": "function"
      },
      {
              "inputs": [
                      {
                              "internalType": "address",
                              "name": "_name",
                              "type": "address"
                      }
              ],
              "name": "getInsuranceTotalMoneyForuser",
              "outputs": [
                      {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                      }
              ],
              "stateMutability": "view",
              "type": "function"
      },
      {
              "inputs": [],
              "name": "getPlatformCost",
              "outputs": [
                      {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                      },
                      {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                      },
                      {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                      },
                      {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                      }
              ],
              "stateMutability": "view",
              "type": "function"
      },
      {
              "inputs": [
                      {
                              "internalType": "uint256",
                              "name": "_tokenType",
                              "type": "uint256"
                      }
              ],
              "name": "getTokenPoolBalanceOf",
              "outputs": [
                      {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                      }
              ],
              "stateMutability": "view",
              "type": "function"
      },
      {
              "inputs": [
                      {
                              "internalType": "address",
                              "name": "_name",
                              "type": "address"
                      },
                      {
                              "internalType": "uint256",
                              "name": "_tokenType",
                              "type": "uint256"
                      }
              ],
              "name": "getTokenPoolUserBalanceOf",
              "outputs": [
                      {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                      }
              ],
              "stateMutability": "view",
              "type": "function"
      },
      {
              "inputs": [],
              "name": "getTotalCompensation_ever",
              "outputs": [
                      {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                      }
              ],
              "stateMutability": "view",
              "type": "function"
      },
      {
              "inputs": [],
              "name": "getTotalFreeTokens",
              "outputs": [
                      {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                      }
              ],
              "stateMutability": "view",
              "type": "function"
      },
      {
              "inputs": [],
              "name": "getUsersTotalForPlatform",
              "outputs": [
                      {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                      }
              ],
              "stateMutability": "view",
              "type": "function"
      },
      {
              "inputs": [
                      {
                              "internalType": "uint256",
                              "name": "_x",
                              "type": "uint256"
                      },
                      {
                              "internalType": "uint256",
                              "name": "_y",
                              "type": "uint256"
                      },
                      {
                              "internalType": "uint256",
                              "name": "_z",
                              "type": "uint256"
                      }
              ],
              "name": "mulDiv",
              "outputs": [
                      {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                      }
              ],
              "stateMutability": "pure",
              "type": "function"
      },
      {
              "inputs": [
                      {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                      }
              ],
              "name": "tokenIDProtocol",
              "outputs": [
                      {
                              "internalType": "address",
                              "name": "",
                              "type": "address"
                      }
              ],
              "stateMutability": "view",
              "type": "function"
      }
]
  },
  v3: {
    addr: "0xB16f60b95CfEbC1b9C12166C4ff844b1ce4A7097",
    abi: [
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_tokenID",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "_tokenAddress",
            "type": "address"
          }
        ],
        "name": "addGuaranteeToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_tokenType",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "_tokenAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_insuranceRatio",
            "type": "uint256"
          }
        ],
        "name": "deposit",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "tokenID",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "tokenAddress",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "insuranceRatio",
            "type": "uint256"
          }
        ],
        "name": "Deposit",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "getAssetsTotalForPlatform",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_tokenID",
            "type": "uint256"
          }
        ],
        "name": "getTokenAddressForTokenID",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "name",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "mineTokens",
            "type": "uint256"
          }
        ],
        "name": "MineTokensEvent",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          }
        ],
        "name": "rechargeInsurancePool",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "RechargeInsurancePool",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_daiAddr",
            "type": "address"
          }
        ],
        "name": "setDaiAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_addr",
            "type": "address"
          }
        ],
        "name": "setDefiSafeTokenAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_addr",
            "type": "address"
          }
        ],
        "name": "setDefiSafeTokenOperateAccount",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_addr",
            "type": "address"
          }
        ],
        "name": "setDefiSafeTokenOwnerAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "tokenID",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "tokenAddress",
            "type": "address"
          }
        ],
        "name": "SetGuaranteeToken",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_openType",
            "type": "uint256"
          }
        ],
        "name": "setIsAbnormalEnvironment",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_openType",
            "type": "uint256"
          }
        ],
        "name": "setIsOpenAssetValidation",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_fees",
            "type": "uint256"
          }
        ],
        "name": "setLicenseFeesValue",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "usAddr",
            "type": "address"
          }
        ],
        "name": "SetUSAddress",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "startCollectionOfLicenseFees",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "startCollectionOfSharingFees",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address payable",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "name",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "tokenID",
            "type": "uint256"
          }
        ],
        "name": "WithdrawAssets",
        "type": "event"
      },
      {
        "stateMutability": "payable",
        "type": "fallback"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_name",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_tokenType",
            "type": "uint256"
          }
        ],
        "name": "withdrawAssets",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "stateMutability": "payable",
        "type": "receive"
      },
      {
        "inputs": [],
        "name": "daiAddress",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "defiSafeTokenAddress",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "defiSafeTokenOperateAccount",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "defiSafeTokenOwnerAddress",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getAssetsTotalForPlatform_ever",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getEnvAbnormalTokenID",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getEnvCheckState",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getEnvSafeMode",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getGainIncomeBalanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getInsuranceCountForPlatform",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getInsuranceCountForPlatform_ever",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getInsurancePoolBalanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_name",
            "type": "address"
          }
        ],
        "name": "getInsuranceTotalMoneyForuser",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getPlatformCost",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_tokenType",
            "type": "uint256"
          }
        ],
        "name": "getTokenPoolBalanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_name",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_tokenType",
            "type": "uint256"
          }
        ],
        "name": "getTokenPoolUserBalanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getTotalCompensation_ever",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getTotalFreeTokens",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getTotalMineTokens",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getUsersTotalForPlatform",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_x",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_y",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_z",
            "type": "uint256"
          }
        ],
        "name": "mulDiv",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "tokenIDProtocol",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ]
  },
  v2: {
    addr: "0x6FBa08BCB03989d849697676C2D044b13A05c6B1",
    abi: [
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_tokenID",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "_tokenAddress",
            "type": "address"
          }
        ],
        "name": "addGuaranteeToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_tokenType",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "_tokenAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_insuranceRatio",
            "type": "uint256"
          }
        ],
        "name": "deposit",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "tokenID",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "recAddr",
            "type": "address"
          }
        ],
        "name": "AllocateAssets",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "tokenID",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "tokenAddress",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "insuranceRatio",
            "type": "uint256"
          }
        ],
        "name": "Deposit",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "tokenID",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "insuranceRatio",
            "type": "uint256"
          }
        ],
        "name": "DepositInflowBookPoolEnd",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "tokenID",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "insuranceRatio",
            "type": "uint256"
          }
        ],
        "name": "DepositInflowBookPoolStart",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "DepositInsurancePoolRecord",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "tokenID",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "userAssets",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "insuredAssets",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "tokenAmount",
            "type": "uint256"
          }
        ],
        "name": "DepositLedgerDataUpdate",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "tokenID",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "aimsAmount",
            "type": "uint256"
          }
        ],
        "name": "DepositMarginConversion",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "getAssetsTotalForPlatform",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getMarginGuaranteeState",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_tokenID",
            "type": "uint256"
          }
        ],
        "name": "getTokenAddressForTokenID",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "name",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "mineTokens",
            "type": "uint256"
          }
        ],
        "name": "MineTokensEvent",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          }
        ],
        "name": "rechargeInsurancePool",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "RechargeInsurancePool",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_daiAddr",
            "type": "address"
          }
        ],
        "name": "setDaiAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_addr",
            "type": "address"
          }
        ],
        "name": "setDefiSafeTokenAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_addr",
            "type": "address"
          }
        ],
        "name": "setDefiSafeTokenOperateAccount",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_addr",
            "type": "address"
          }
        ],
        "name": "setDefiSafeTokenOwnerAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "isOpen",
            "type": "uint256"
          }
        ],
        "name": "SetGuaranteeEnv",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_isOpen",
            "type": "uint256"
          }
        ],
        "name": "setGuaranteeEnvironment",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "tokenID",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "tokenAddress",
            "type": "address"
          }
        ],
        "name": "SetGuaranteeToken",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_openType",
            "type": "uint256"
          }
        ],
        "name": "setIsAbnormalEnvironment",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_openType",
            "type": "uint256"
          }
        ],
        "name": "setIsOpenAssetValidation",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_fees",
            "type": "uint256"
          }
        ],
        "name": "setLicenseFeesValue",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "usAddr",
            "type": "address"
          }
        ],
        "name": "SetUSAddress",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "startCollectionOfSharingFees",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address payable",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "name",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "tokenID",
            "type": "uint256"
          }
        ],
        "name": "WithdrawAssets",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "tokenID",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "WithdrawBnormalSettlementProcessing",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "WithdrawCompensateUsers",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "name",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "tokenID",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "compensation",
            "type": "uint256"
          }
        ],
        "name": "WithdrawLedgerDataUpdate",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "name",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "tokenID",
            "type": "uint256"
          }
        ],
        "name": "WithdrawOutflowCapitalPool",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "WithdrawSurplusCapitalInflow",
        "type": "event"
      },
      {
        "stateMutability": "payable",
        "type": "fallback"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_type",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          }
        ],
        "name": "updateCostAccount",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_name",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_tokenType",
            "type": "uint256"
          }
        ],
        "name": "withdrawAssets",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "stateMutability": "payable",
        "type": "receive"
      },
      {
        "inputs": [],
        "name": "daiAddress",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "defiSafeTokenAddress",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "defiSafeTokenOperateAccount",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "defiSafeTokenOwnerAddress",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getAssetsTotalForPlatform_ever",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getEnvAbnormalTokenID",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getEnvCheckState",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getEnvSafeMode",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getGainIncomeBalanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getInsuranceCountForPlatform",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getInsuranceCountForPlatform_ever",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getInsurancePoolBalanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_name",
            "type": "address"
          }
        ],
        "name": "getInsuranceTotalMoneyForuser",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getPlatformContractCurrentCost",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getPlatformCost_1",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getPlatformCost_2",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_tokenType",
            "type": "uint256"
          }
        ],
        "name": "getTokenPoolBalanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_name",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_tokenType",
            "type": "uint256"
          }
        ],
        "name": "getTokenPoolUserBalanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getTotalCompensation_ever",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getTotalFreeTokens",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getTotalMineTokens",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getUsersTotalForPlatform",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "isOpenMarginGuarantee",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_x",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_y",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_z",
            "type": "uint256"
          }
        ],
        "name": "mulDiv",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "tokenIDProtocol",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "tokenTotal",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ]
  }
}
