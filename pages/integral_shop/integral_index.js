// pages/integral_shop/integral_index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winWidth: 0,
    winHeight: 0,
    minHeight: 0,
    jifen_num: 84,
    // tab切换
    currentTab: 0,
    // 首页广告图
    imgSwiper: [
      {
        'url': '/pages/integral_shop/goods_detail',
        'images': '../images/banner01.png',
      },
      {
        'url': '/pages/integral_shop/goods_detail',
        'images': '../images/banner02.png',
      },
      {
        'url': '/pages/integral_shop/goods_detail',
        'images': '../images/banner03.png',
      },
      {
        'url': '/pages/integral_shop/goods_detail',
        'images': '../images/banner04.png',
      },
    ],
    // 全部商品
    all_goods: [
      {
        'src': '../images/download.jpg',
        'url': '/pages/integral_shop/goods_detail',
        'title': '衣服',
        'money': '100'
      },
      {
        'src': '../images/download-1.jpg',
        'url': '/pages/integral_shop/goods_detail',
        'title': '玫瑰花',
        'money': '99'
      },
      {
        'src': '../images/download-2.jpg',
        'url': '/pages/integral_shop/goods_detail',
        'title': '山水画',
        'money': '1000'
      },
      {
        'src': '../images/download-3.jpg',
        'url': '/pages/integral_shop/goods_detail',
        'title': '保温杯',
        'money': '55'
      },
      {
        'src': '../images/download-4.jpg',
        'url': '/pages/integral_shop/goods_detail',
        'title': '电饭锅',
        'money': '125'
      },
      {
        'src': '../images/download-4.jpg',
        'url': '/pages/integral_shop/goods_detail',
        'title': '电饭锅',
        'money': '125'
      },
      {
        'src': '../images/download-4.jpg',
        'url': '/pages/integral_shop/goods_detail',
        'title': '电饭锅',
        'money': '125'
      },
      {
        'src': '../images/download-4.jpg',
        'url': '/pages/integral_shop/goods_detail',
        'title': '电饭锅',
        'money': '125'
      },
    ],
    // 我可兑换
    exchange_ok: [
      {
        'src': '../images/download.jpg',
        'url': '/pages/integral_shop/goods_detail',
        'title': '衣服',
        'money': '100'
      },
      {
        'src': '../images/download-1.jpg',
        'url': '/pages/integral_shop/goods_detail',
        'title': '玫瑰花',
        'money': '99'
      },
      {
        'src': '../images/download-2.jpg',
        'url': '/pages/integral_shop/goods_detail',
        'title': '山水画',
        'money': '1000'
      },
    ],
    // 兑换排行
    exchange_seniority: [
      {
        'src': '../images/download.jpg',
        'url': '/pages/integral_shop/goods_detail',
        'title': '衣服',
        'money': '100'
      },
      {
        'src': '../images/download-1.jpg',
        'url': '/pages/integral_shop/goods_detail',
        'title': '玫瑰花',
        'money': '99'
      },
    ],
    // 积分值
    integral_num: [
      {
        'src': '../images/download.jpg',
        'url': '/pages/integral_shop/goods_detail',
        'title': '衣服',
        'money': '100'
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this;

    let all_goods = this.data.all_goods;
    var length = all_goods.length;
    var winHeight = 460 * (length/2 + 0.5);
    /** 
     * 获取系统信息 
     */
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winHeight: winHeight,
          minHeight: 480
        });
      }
    });
  },
  /** 
     * 滑动切换tab 
     */
  bindChange: function (e) {

    var that = this;
    let all_goods = this.data.all_goods;
    var length01 = all_goods.length;
    let exchange_ok = this.data.exchange_ok;
    var length02 = exchange_ok.length;
    let exchange_seniority = this.data.exchange_seniority;
    var length03 = exchange_seniority.length;
    let integral_num = this.data.integral_num;
    var length04 = integral_num.length;

    if (e.detail.current === 0) {
      var winHeight = 460 * (length01 / 2 + 0.5)
    }
    if (e.detail.current === 1) {
      var winHeight = 460 * (length02 / 2 + 0.5)
    }
    if (e.detail.current === 2) {
      var winHeight = 460 * (length03 / 2 + 0.5)
    }
    if (e.detail.current === 3) {
      var winHeight = 460 * (length04 / 2 + 0.5)
    }
    that.setData({
      currentTab: e.detail.current,
      winHeight: winHeight
    });

  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})