// pages/personal/collect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsList: [
      {
        'url': '/pages/goods/goods_detail',
        'src': '../images/download-2.jpg',
        'title': '国画',
        'money': '198.00',
      },
      {
        'url': '/pages/goods/goods_detail',
        'src': '../images/download-1.jpg',
        'title': '玫瑰花',
        'money': '98.00',
      },
      {
        'url': '/pages/goods/goods_detail',
        'src': '../images/download.jpg',
        'title': '衣服',
        'money': '298.00',
      },
      {
        'url': '/pages/goods/goods_detail',
        'src': '../images/download-3.jpg',
        'title': '茶杯',
        'money': '28.00',
      },
    ]
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
  
  },
  delectList: function (e) {
    const index = e.currentTarget.dataset.index;
    let goodsList = this.data.goodsList;
    goodsList.splice(index, 1);  // 删除购物车列表里这个商品
    this.setData({
      goodsList: goodsList
    });
  },
})