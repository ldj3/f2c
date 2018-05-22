// pages/integral_shop/integral_order/integral_order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winWidth: 0,
    minHeight: 0,
    winHeight: 0,//窗口高度
    // tab切换
    currentTab: 0,
    list_all:[
      {
        order_num:'2017071866857',
        status:'待发货',
        src:'../../images/download-1.jpg',
        title:'洗面奶',
        jifen:'5',
        num:'1',
      },
      {
        order_num: '2017071866857',
        status: '待发货',
        src: '../../images/download-1.jpg',
        title: '洗面奶',
        jifen: '5',
        num: '1',
      },
      {
        order_num:'2017071866857',
        status:'待发货',
        src:'../../images/download-2.jpg',
        title:'洗面奶',
        jifen:'5',
        num:'1',
      },
      {
        order_num: '2017071866857',
        status: '待发货',
        src: '../../images/download-1.jpg',
        title: '洗面奶',
        jifen: '5',
        num: '1',
      },
      {
        order_num: '2017071866857',
        status: '待发货',
        src: '../../images/download-2.jpg',
        title: '洗面奶',
        jifen: '5',
        num: '1',
      },
      {
        order_num: '2017071866857',
        status: '待发货',
        src: '../../images/download-2.jpg',
        title: '洗面奶',
        jifen: '5',
        num: '1',
      },
    ],
    list_no: [
      {
        order_num: '2017071866857',
        status: '待发货',
        src: '../../images/download-1.jpg',
        title: '洗面奶',
        jifen: '5',
        num: '1',

      },
      {
        order_num: '2017071866857',
        status: '待发货',
        src: '../../images/download-2.jpg',
        title: '洗面奶',
        jifen: '5',
        num: '1',

      },
      {
        order_num: '2017071866857',
        status: '待发货',
        src: '../../images/download-2.jpg',
        title: '洗面奶',
        jifen: '5',
        num: '1',

      },
      {
        order_num: '2017071866857',
        status: '待发货',
        src: '../../images/download-2.jpg',
        title: '洗面奶',
        jifen: '5',
        num: '1',

      },
    ],
    list_over: [
      {
        order_num: '2017071866857',
        status: '待发货',
        src: '../../images/download-1.jpg',
        title: '洗面奶',
        jifen: '5',
        num: '1',

      },
      {
        order_num: '2017071866857',
        status: '待发货',
        src: '../../images/download-2.jpg',
        title: '洗面奶',
        jifen: '5',
        num: '1',

      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this;

    let list_all = this.data.list_all;
    var length = list_all.length;
    var winHeight = 285 * length;
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
    let list_all = this.data.list_all;
    var length01 = list_all.length;
    let list_no = this.data.list_no;
    var length02 = list_no.length;
    let list_over = this.data.list_over;
    var length03 = list_over.length;
    

    if (e.detail.current === 0) {
      var winHeight = 285 * length01
    }
    if (e.detail.current === 1) {
      var winHeight = 285 * length02
    }
    if (e.detail.current === 2) {
      var winHeight = 285 * length03
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