export const MINE_CONTRACT = {
  addr: '0xaafd58269df7292a9bc25d79e40fd513ce7b34c8',
  abi: [
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
          "internalType": "address",
          "name": "miner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "user",
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
          "internalType": "address",
          "name": "_addr",
          "type": "address"
        }
      ],
      "name": "removeDefiSafeMineAddress",
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
      "name": "setDefiSafeMineAddress",
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
      "name": "setDefiSafeTokenProjectAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "userTotalAssets",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "receiveAddress",
          "type": "address"
        }
      ],
      "name": "startMine",
      "outputs": [],
      "stateMutability": "nonpayable",
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
      "name": "defiSafeTokenProjectAddress",
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
      "name": "getTotalTokensOfFree",
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
      "name": "getTotalTokensOfMine",
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
    }
  ]
}

export const PRICE_PREDICT = {
  addr: '0x524ba5b155219d215358e3a0f07d60f9d9894f0d',
  abi: [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "feedAddress",
          "type": "address"
        }
      ],
      "name": "setFeedAddressManager",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_slip",
          "type": "uint256"
        }
      ],
      "name": "setPriceSlip",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "routeAddress",
          "type": "address"
        }
      ],
      "name": "setSwapRouter02Address",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract ERC20",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "destAddress",
          "type": "address"
        }
      ],
      "name": "swapEthToToken",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "ethAmount",
          "type": "uint256"
        },
        {
          "internalType": "contract ERC20",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "destAddress",
          "type": "address"
        }
      ],
      "name": "swapEthToToken_Amount",
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
          "internalType": "contract ERC20",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenQty",
          "type": "uint256"
        },
        {
          "internalType": "address payable",
          "name": "destAddress",
          "type": "address"
        }
      ],
      "name": "swapTokenToEth",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract ERC20",
          "name": "srcToken",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "srcQty",
          "type": "uint256"
        },
        {
          "internalType": "contract ERC20",
          "name": "destToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "destAddress",
          "type": "address"
        }
      ],
      "name": "swapTokenToToken",
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
      "stateMutability": "nonpayable",
      "type": "constructor"
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
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "getPriceEthToDai",
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
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract ERC20",
          "name": "destToken",
          "type": "address"
        }
      ],
      "name": "getPriceEthToToken",
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
          "internalType": "contract ERC20",
          "name": "srcToken",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "getPriceOfDAI",
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
          "internalType": "contract ERC20",
          "name": "srcToken",
          "type": "address"
        }
      ],
      "name": "getPriceTokenToEth",
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
          "internalType": "contract ERC20",
          "name": "srcToken",
          "type": "address"
        },
        {
          "internalType": "contract ERC20",
          "name": "destToken",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "getPriceTokenToToken",
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
      "inputs": [],
      "name": "slipValue",
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