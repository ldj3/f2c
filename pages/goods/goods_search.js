// pages/goods/goods_search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchValue: '',
    curNav: 1,
    navList:[
      {
        name: '全部',
        id: 1,
      },
      {
        name: '销量',
        id: 2,
      },
      {
        name: '价格',
        id: 3,
      },
    ],
    goodsList:[
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
  // 点击清除搜索内容
  cancel: function() {
    this.setData({
      searchValue: ''
    })
  },
  // 点击导航
  selectNav:function(event) {
    let id = event.target.dataset.id,
    index = parseInt(event.target.dataset.index);
    this.setData({
      curNav: id,
    })
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