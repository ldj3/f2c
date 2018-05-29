// pages/classify/classify_1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden: true,
    items:[]
  },

  // 返回上个页面
  back_page: function () {
    // wx.navigateBack();
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getdata();
   
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

  /**
   * 获取分类
   */
  getdata: function () {//定义函数名称
    var that = this;   // 这个地方非常重要，重置data{}里数据时候setData方法的this应为以及函数的this, 如果在下方的sucess直接写this就变成了wx.request()的this了
    wx.request({
      url: 'http://mall.yzidea.net/index.php/xcxapi/product/category',//请求地址
      header: {//请求头
        "Content-Type": "applciation/json"
      },
      method: "GET",//get为默认方法/POST
      success: function (res) {
        that.setData({
          items:res.data
        });
        that.setData({
          hidden: false
        })
      },
      fail: function (err) { },//请求失败
      complete: function () { }//请求完成后执行的函数
    })
  },
  


})