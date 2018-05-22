// pages/coupon/my_coupon.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winWidth:0,
    winHeight:0,
    minHeight:0,
    // tab切换
    currentTab:0,

    // 未使用
    not_use: [
      {
       title: '满0.10减0.01',
       where: '全场通用',
       time: '有效期：2017-10-13至2017-10-31',
      },
      {
        title: '满100减10',
        where: '全场通用',
        time: '有效期：2017-10-13至2017-10-31',
      },
      {
        title: '满100减10',
        where: '全场通用',
        time: '有效期：2017-10-13至2017-10-31',
      },
      {
        title: '满100减10',
        where: '全场通用',
        time: '有效期：2017-10-13至2017-10-31',
      },
      {
        title: '满100减10',
        where: '全场通用',
        time: '有效期：2017-10-13至2017-10-31',
      },
      {
        title: '满100减10',
        where: '全场通用',
        time: '有效期：2017-10-13至2017-10-31',
      },
      {
        title: '满100减10',
        where: '全场通用',
        time: '有效期：2017-10-13至2017-10-31',
      },
      {
        title: '满100减10',
        where: '全场通用',
        time: '有效期：2017-10-13至2017-10-31',
      },

    ],
    // 已使用
    over_use: [
      {
        title: '满0.10减0.01',
        where: '全场通用',
        time: '有效期：2017-10-13至2017-10-31',
      },
      {
        title: '满100减10',
        where: '全场通用',
        time: '有效期：2017-10-13至2017-10-31',
      },

    ],
    // 已过期
    past_use: [
      {
        title: '满0.10减0.01',
        where: '全场通用',
        time: '有效期：2017-10-13至2017-10-31',
      },
      {
        title: '满100减10',
        where: '全场通用',
        time: '有效期：2017-10-13至2017-10-31',
      },

    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this;

    let not_use = this.data.not_use;
    var length = not_use.length;
    var winHeight = 265 * length;
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
    let not_use = this.data.not_use;
    var length01 = not_use.length;
    let over_use = this.data.over_use;
    var length02 = over_use.length;
    let past_use = this.data.past_use;
    var length03 = past_use.length;

    if (e.detail.current === 0) {
      var winHeight = 265 * length01
    }
    if (e.detail.current === 1) {
      var winHeight = 265 * length02
    }
    if (e.detail.current === 2) {
      var winHeight = 265 * length03
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