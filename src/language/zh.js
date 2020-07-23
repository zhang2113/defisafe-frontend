module.exports = {
  home: {
    head: {
      list:{
        doc: "白皮书"
      }
    },
    nav: {
      desc: "保护你的加密资产",
      button: "开始投保"
    },
    features: {
      title: "操作简单 | 系统安全 | 结算快捷",
      desc: '功能模块清晰具体，步骤指引流畅快捷投保，交易方便流畅 | 涉及用户资产的操作，均需授权验证，确保账户资产的安全 | 不经过三方平台，钱包直接参与协议'
    },
    advantage: {
      title: 'Defisafe是完全去中心化的协议，通过智能合约为人们提供便捷的资产风险对冲工具 | Defisafe通过智能合约建立资产存托，放入到抵押借贷平台获取收益',
      desc_1: 'Defisafe通过智能合约成立风险资金池，让使用者享有价格上涨带来的增值，分担价格下跌时资产缩水带来的风险。 | 智能合约会将部分资金（目前是总资产的5%），放入到例如Uniswap，AAVE，Compound等流动性借贷平台中赚取收益，这部分资金作为风险资金池，利用资金池的流动性来帮用户抵御资产下跌的风险。',
      desc_2: 'Defisafe为数字资产投资者提供一个便捷开放的无门槛的金融市场，人们可以通过智能合约可信代码高效地进行交互，而不必依赖第三方担保实体'
    },
    foot: {
      contact: '联系我们',
      email: '邮箱'
    }
  },
  login: {
    title: '请链接钱包',
    desc: '目前平台只支持metamask钱包，请先安装后使用',
    connectBtn: '授权钱包',
    installBtn: '安装metamask钱包'
  },
  insure: {
    business: {
      insureTitle: '投保资产(DAI) | 投保总资产(DAI) | 总投保次数',
      insureTitle2: '补偿总金额(DAI) | 已被释放DST',
      useInsureTitle: "我的资料",
      useInsureDesc: '我的投保金额 | 投保池金额 | 我的DSE',
      insureBtn: '我要投保',
      clearBtn: '提取资产',
      insureDescTitle: '我的资产',
      insureDescTb: '我的投保资产 | 金额'
    },
    display: {
      title: '产品介绍 | 几种场景的说明',
      desc_1: '对于持有加密资产的用户，想享受价格上涨带来的资产增值，又能够减轻加密资产价格下跌带来的风险，DEFISAFE就是在解决这个问题。让用户享有加密资产价格上涨带来的增值同时，又能够使他们减轻资产价格下跌时资产缩水带来的风险。 | 1. 暴涨的场景：如果我有1000个knc，当前价值为1000Dai，拿出5%（50Dai）进行投保，暴涨的场景下，享受到的是950个knc资产的增值，50Dai为保险金。',
      desc_2: '2. 横盘的场景：如果我有1000个knc，当前价值为1000Dai，拿出5%（50Dai）进行投保，横盘场景下进行结算，此时取回的资产大约为：950个knc+50Dai，总价值大约为1000Dai。',
      desc_3: '3. 暴跌的场景：如果我有1000个knc，当前价值为1000Dai，拿出5%（50个knc = 50Dai）进行投保，价格暴跌50%，如果此时投保池资金为1000Dai，当前环境只有一个人正在投保，此时结算的资产为：950个knc + 525Dai，总价值大约为1000Dai（2025个knc）。'
    },
    load: {
      text: '交易正在钱包中进行，请耐心等待...'
    },
    net: '测试网'
  },
  modal: {
    login: {
      title: '提示',
      btn: "确定",
      desc: '请确认安装metamask钱包并使用Ropsten网络'
    },
    insure: {
      start: {
        title: '投保',
        token: '选择通证',
        amount: '投保金额',
        ratio: '投保比例',
        btn: '确定'
      },
      end: {
        title: '提取',
        token: '选择通证',
        btn: '确定'
      },
      tip: {
        title: '提示 | 提示 | 提示',
        desc: '余额不足 | 提取成功 | 投保成功',
        btn: '确定'
      }
    }
  }
}