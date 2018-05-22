//index.js
Page({
  data: {
    // 标题
    title: '微商城',
    // 活动导航
    activity_nav: [
      {
        'src': '../images/attendance.png',
        'url':  '/pages/clear/clear',
        'title': '签到'
      },
      {
        'src': '../images/scrape.png',
        'url': '/pages/clear/clear',
        'title': '刮刮卡'
      },
      {
        'src': '../images/turnplate.png',
        'url': '/pages/coupon/coupon',
        'title': '领券'
      },
      {
        'src': '../images/attendance.png',
        'url': '/pages/integral_shop/integral_index',
        'title': '积分商城'
      },
    ],
    // 首页广告图
    imgSwiper: [
       {
        'url': '/pages/goods/goods_detail',
         'images':'../images/banner01.png',
       },
       {
         'url': '/pages/goods/goods_detail',
         'images': '../images/banner02.png',
       },
       {
         'url': '/pages/goods/goods_detail',
         'images': '../images/banner03.png',
       },
       {
         'url': '/pages/goods/goods_detail',
         'images': '../images/banner04.png',
       },
    ],
    // 最新公告
    notice_new: '欢迎您进入微商城小程序！',
    // 商品列表
    goods_list: [
      {
        'src': '../images/download.jpg',
        'url': '/pages/goods/goods_detail',
        'title': '衣服',
        'money': '￥100.00'
      },
      {
        'src': '../images/download-1.jpg',
        'url': '/pages/goods/goods_detail',
        'title': '玫瑰花',
        'money': '￥99.00'
      },
      {
        'src': '../images/download-2.jpg',
        'url': '/pages/goods/goods_detail',
        'title': '山水画',
        'money': '￥1000.00'
      },
      {
        'src': '../images/download-3.jpg',
        'url': '/pages/goods/goods_detail',
        'title': '保温杯',
        'money': '￥55.00'
      },
      {
        'src': '../images/download-4.jpg',
        'url': '/pages/goods/goods_detail',
        'title': '电饭锅',
        'money': '￥125.00'
      },
    ],

    

  },
  
})
