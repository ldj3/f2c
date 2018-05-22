// pages/coupon/my_coupon.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winWidth: 0,
    winHeight: 0,
    // tab切换
    currentTab: 0,

    // 营销奖品
    marketing: [
      { 
        time: '2017/09/12 14:38',
        active_name:'9-7',
        url:'../images/prize.png',
        title: '一等奖',
        prize:'纸巾',
        status:'已领取',
        logistics:'物流查询'
      },
      {
        time: '2017/09/01 10:18',
        active_name: '9-1',
        url: '../images/point.png',
        title: '二等奖',
        prize: '电脑',
        status: '过期未领取',
        logistics: ''
      },
      {
        time: '2017/09/01 10:18',
        active_name: '9-1',
        url: '../images/point.png',
        title: '二等奖',
        prize: '电脑',
        status: '过期未领取',
        logistics: ''
      },
      {
        time: '2017/09/01 10:18',
        active_name: '9-1',
        url: '../images/point.png',
        title: '二等奖',
        prize: '电脑',
        status: '过期未领取',
        logistics: ''
      },
      {
        time: '2017/09/01 10:18',
        active_name: '9-1',
        url: '../images/point.png',
        title: '二等奖',
        prize: '电脑',
        status: '过期未领取',
        logistics: ''
      },
      {
        time: '2017/09/01 10:18',
        active_name: '9-1',
        url: '../images/point.png',
        title: '二等奖',
        prize: '电脑',
        status: '过期未领取',
        logistics: ''
      },
      {
        time: '2017/09/01 10:18',
        active_name: '9-1',
        url: '../images/point.png',
        title: '二等奖',
        prize: '电脑',
        status: '过期未领取',
        logistics: ''
      },

    ],
    // 扫码奖品
    scan_code: [
      {
        time: '2017/09/12 14:38',
        active_name: '9-7',
        url: '../images/prize.png',
        title: '一等奖',
        prize: '纸巾',
        status: '已领取',
        logistics: '物流查询'
      },
      {
        time: '2017/09/01 10:18',
        active_name: '9-1',
        url: '../images/point.png',
        title: '二等奖',
        prize: '电脑',
        status: '过期未领取',
        logistics: ''
      },

    ],
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this;

    let marketing = this.data.marketing;
    var length = marketing.length;
    var winHeight = 255 * length;
    /** 
     * 获取系统信息 
     */
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winHeight: winHeight,
          minHeight: res.windowHeight
        });
      }
    });
  }, 
  /** 
     * 滑动切换tab 
     */
  bindChange: function (e) {

    var that = this;
    let marketing = this.data.marketing;
    var length01 = marketing.length;
    let scan_code = this.data.scan_code;
    var length02 = scan_code.length;

    if (e.detail.current === 0) {
      var winHeight = 255 * length01
    }
    if (e.detail.current === 1) {
      var winHeight = 255 * length02
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