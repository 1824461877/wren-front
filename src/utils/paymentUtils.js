export const PAYMENT_UTILS = {
  title: "付款",
  choose: {
    title: "1. 选择付款方式",
    credit_card: {
      label: "信用卡 / 借记卡",
      img: [
        "https://www.cathaypacific.com/content/dam/cx/applications/cpp/payment-option/card-icon/color/VSA.png",
        "https://www.cathaypacific.com/content/dam/cx/applications/cpp/payment-option/card-icon/color/MSC.png",
        "https://www.cathaypacific.com/content/dam/cx/applications/cpp/payment-option/card-icon/color/AMX.png",
        "https://www.cathaypacific.com/content/dam/cx/applications/cpp/payment-option/card-icon/color/CUP.png",
        "https://www.cathaypacific.com/content/dam/cx/applications/cpp/payment-option/card-icon/color/DNC.png",
        "https://www.cathaypacific.com/content/dam/cx/applications/cpp/payment-option/card-icon/color/DCV.png",
        "https://www.cathaypacific.com/content/dam/cx/applications/cpp/payment-option/card-icon/color/JCB.png",
        "https://www.cathaypacific.com/content/dam/cx/applications/cpp/payment-option/card-icon/color/UTP.png",
      ],
    },
    others: {
      label: "其他付款方式",
      img: [
        "https://www.cathaypacific.com/content/dam/cx/applications/cpp/payment-option/card-icon/color/ALH.png",
        "https://www.cathaypacific.com/content/dam/cx/applications/cpp/payment-option/card-icon/color/ALP.png",
        "https://www.cathaypacific.com/content/dam/cx/applications/cpp/payment-option/card-icon/color/PPL.png",
        "https://www.cathaypacific.com/content/dam/cx/applications/cpp/payment-option/card-icon/color/WCT.png",
      ],
    },
  },

  selected: {
    title: "2. 输入支付详情",
    card_info: {
      label: "除非注明'如适用'，否则所有栏目均为必填项",
      number: {
        placeholder: "卡号",
        validation: "请输入您的卡号",
      },
      holder: {
        placeholder: "持卡人姓名",
        validation: "请输入持卡人姓名。",
      },
    },
    expiry_date: {
      label: "到期日",
      month: {
        placeholder: "月份",
        validation: "请输入您的卡有效期。",
        value: [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
        ],
      },
      year: {
        placeholder: "年份",
        validation: "",
        value: ["25", "26", "27", "28"],
      },
    },
    verification: {
      label: "验证码",
      placeholder: "验证码",
      validation: "请输入您信用卡的验证码",
    },
    quiz: "什么是验证码？",
    description: {
      title: "支付保障来自：",
      sub_title: "条款及细则",
      content: [
        "如果你要预订航班或航班相关服务，请参阅以下条款及细则。持卡人不需要为预订及乘搭航班的人士。如果使用 Visa 验证服务、万事达卡 SecureCode、美国运通 SafeKey®、J/Secure™ 或 ProtectBuy 成功完成交易，持卡人将不必出示该卡以作核实。然而，国泰航空保留要求出示该信用卡以作核实的权利。",
        "若持卡人或虚拟卡用户未能出示用作进行预订交易的实物卡，航空公司保留拒绝登机或收取保证付款（现金或从新信用卡扣取款项）之权利。",
        "所有票价及税项均以首个出发点的国家／地区之货币收取，在中国网站安排而首个出发点为香港的预订除外，而此类预订的票价及税项将以人民币收取。若国泰航空提供任何其他付款方式，例如让你选择以另一种货币完成交易，则国泰航空提供的价格或会包含成本、费用及／或收费，例如买卖价差及附加费用。国泰航空在决定任何价格或其组成部分时，或会考虑其在交易中承担的成本及风险，包括任何外汇风险。举例而言，买卖价差及利润可能受多种因素影响，例如所选货币组合、流动性、市场波动、信贷风险、内部成本及利润率，以及任何其他相关考虑因素。替代及原有定价货币会在付款页面上完全披露供参考比较。选择其他货币后点击“确认及付款”，即表示你同意以所选货币及金额代替原有货币付款。",
      ],
    },
  },
}
