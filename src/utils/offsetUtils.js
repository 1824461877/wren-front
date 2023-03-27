export const OFFSET_UTILS = {
  header_title: "抵消你的碳排放",
  header_img:
    "https://projectwren.imgix.net/frond-2.png?auto=format%2Ccompress&q=35",
  banner_img:
    "https://projectwren.imgix.net/before-after.png?auto=format%2Ccompress&q=35",
  description: [
    [
      "如果你希望抵销所乘航班的碳排放量，",
      "可以使用我们的网上计算器。计算器可就你的飞行距离及客舱级别，计算出你的飞行在该航班总共衍生的二氧化碳排放量中的比例，而排放量乃根据飞行旅程的总燃油用量及旅客人数计算 。如要了解更多有关计算方法的资讯，请浏览我们的「飞向更蓝天」常见问题页面。",
      "常见问题页面。",
    ],
    "此外，您亦可选择以现金或「亚洲万里通」里数进行一次性捐款。 为此，只需选择下面的“一次性捐赠”。",
  ],
  one_time: {
    img: "https://projectwren.imgix.net/sparkling-sapling.png?auto=format%2Ccompress&q=35&w=200",
    title: "作一次性捐款",
    description: [
      "现金捐款范围由港币10元至港币999,999元。请把你的捐款四舍五入到最接近的整数金额。",
      "另外，你可以捐出范围由100至999,999「亚洲万里通」里数。",
    ],
    donation: {
      title: "选择捐助方法",
      option: {
        label: "捐助选项",
        type: [
          "透过信用卡／微信／支付宝／电子支付方式支付",
          "兑换「亚洲万里通」里数",
        ],
      },
      amount: {
        label: "捐助额",
        validation_text: "必须填写首选捐助额。",
      },
    },
    check_text: "若要继续进行，请勾选复选框来表示你已同意。",
    btn_text: "现在捐助",
  },
  donate_itinerary: {
    img: "https://projectwren.imgix.net/signpost.png?auto=format%2Ccompress&q=35&w=300",
    title: "计算你的碳排放量",
    type: ["回程", "单程"],
    validation_text: "必须填写出发地。",
    placeholder: ["乘客人数", "客舱级别"],
    dropdown: [
      ["1 乘客", "2 乘客", "3 乘客", "4 乘客", "5 乘客"],
      ["头等", "公务", "特选经济"],
    ],
    btn_text: ["重新设置", "新增航班"],
    description: [],
  },
}
