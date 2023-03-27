export const LOGIN_UTILS = {
  header_img:
    "https://projectwren.imgix.net/mascot/wren-bird.png?auto=format%2Ccompress&q=35&w=600",
  header_title: {
    email: "欢迎回到 Wren！",
    password: "欢迎回来，   ",
  },
  header_sub_title: {
    email: "输入您的电子邮件地址进行登录。",
    password: "输入您的密码以完成登录。",
  },
  input_text: {
    email: {
      validation: ["邮箱为必填项", "电子邮件无效"],
      label: "电子邮件地址",
      type: "email",
      btnText: "继续",
      help_text: "还没有账户？",
      link_uri: "/calculator",
      link_text: "开始吧",
    },
    password: {
      validation: ["密码必须至少8个字符", "错误的邮箱帐号或密码"],
      label: "密码",
      type: "password",
      btnText: "继续",
      help_text: "忘记密码了吗？",
      link_uri: "/reset",
      link_text: "请求恢复电子邮件",
      forgot_text: "忘记密码",
      tmp_password: "123123123",
    },
  },
}
