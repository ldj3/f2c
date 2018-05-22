//获取应用实例  
var app = getApp()
Page({
  data: {
    userInfo: {},
    orderList: [
      {
        url: '/pages/order/my_order',
        src: '../images/daifukuan.png',
        text: '待付款',
      },
      {
        url: '/pages/order/my_order',
        src: '../images/daifahuo.png',
        text: '待发货',
      },
      {
        url: '/pages/order/my_order',
        src: '../images/daiqianshou.png',
        text: '待签收',
      },
      {
        url: '/pages/order/my_order',
        src: '../images/daipingjia.png',
        text: '已完成',
      },
      {
        url: '/pages/personal/after_sale/after_sale',
        src: '../images/after_sale.png',
        text: '售后中心',
      },
    ],
    personalList: [
      {
        url: '',
        src: '../images/intergral.png',
        text: '积分商城',
      },
      {
        url: '/pages/personal/code',
        src: '../images/my_code.png',
        text: '我的二维码',
      },
      {
        url: '/pages/coupon/prize',
        src: '../images/my_prize.png',
        text: '我的奖品',
      },
      {
        url: '/pages/personal/help/help',
        src: '../images/help.png',
        text: '帮助中心',
      },
      {
        url: '/pages/personal/complaint_advice/complaint_advice',
        src: '../images/advice.png',
        text: '投诉建议',
      },
      // {
      //   url: '',
      //   src: '../images/daipingjia.png',
      //   text: '退出登录',
      // },
    ],
    list: [
      {
        url: '/pages/integral_shop/integral_order/integral_order',
        text: '我的订单',
      },
      {
        url: '/pages/personal/integral',
        text: '我的积分',
      },
      {
        url: '/pages/address/address',
        text: '我的地址管理',
      },
      {
        url: '/pages/personal/after_sale/after_sale',
        text: '我的售后',
      },
      {
        url: '/pages/coupon/prize',
        text: '我的奖品',
      },
      {
        url: '/pages/personal/code',
        text: '我的二维码',
      },
    ],
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据  
    app.getUserInfo(function (userInfo) {
      //更新数据  
      that.setData({
        userInfo: userInfo
      })
    })
  }
})  