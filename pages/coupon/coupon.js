// pages/coupon/coupon.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    couponList:[],
    colorOne: 1,
    colorTwo: 2,
    colorThree: 3,
    drawColor: true,
    couponList: [
      {
        'name': '折扣优惠',
        'title': '限定全场通用使用',
        'text': '9折优惠券',
        'time': '2017-11-01至2017-11-30',
        'id' : 1,
        'draw':'立即领取',
        'selected': false,
      },
      {
        'name': '现金优惠',
        'title': '限定全场通用使用',
        'text': '5元现金抵扣劵5元现金抵扣劵5元现金抵扣劵',
        'time': '2017-11-01至2017-11-30',
        'id': 2,
        'draw': '立即领取',
        'selected': false,
      },
      {
        'name': '满减优惠',
        'title': '限定全场通用使用',
        'text': '满100减10',
        'time': '2017-11-01至2017-11-30',
        'id': 3,
        'draw': '立即领取',
        'selected': false,
      },
    ]
  },
  couponGet: function(e) {
    const index = e.currentTarget.dataset.index;    // 获取data- 传进来的index
    let couponList = this.data.couponList;                    
    const draw = couponList[index].draw;
    const selected = couponList[index].selected;        
    couponList[index].draw = '已领取'; 
    couponList[index].selected = true;             
    this.setData({
      couponList: couponList
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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