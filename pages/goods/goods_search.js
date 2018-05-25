// pages/goods/goods_search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    products:[],
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
    tabList: [
      {
        name: '微商城',
        id: 1,
        image_url: '/pages/images/home.jpg',
        taburl:'/pages/index/index'
      },
      {
        name: '分类',
        id: 2,
        image_url: '/pages/images/icon_component.png',
        taburl: '/pages/classify/classify'
      },
      {
        name: '购物车',
        id: 3,
        image_url: '/pages/images/tribe_icon03.png',
        taburl: '/pages/carts/carts'
      },
      {
        name: '个人中心',
        id: 4,
        image_url: '/pages/images/tribe_icon05.png',
        taburl: '/pages/personal/personal'
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
    console.log("下拉");  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.getalldata();
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
      url: 'http://mall.yzidea.net/index.php/xcxapi/product/all_product',//请求地址
      header: {//请求头
        "Content-Type": "applciation/json"
      },
      method: "GET",//get为默认方法/POST
      success: function (res) {
        that.setData({
          products: res.data
        })
      },
      fail: function (err) { },//请求失败
      complete: function () { }//请求完成后执行的函数
    })
  },
  
  /**
   * 获取分类
   */
  getalldata: function () {
    var p = 0;
    var that = this;
    var offset = p * 20;
    var limit = (p+1) * 20;
    var url = 'http://mall.yzidea.net/index.php/xcxapi/product/ajax_get_product_data?p_name=&price_sort=&sales=&cat_id=&max_price=0&min_price=0&section=0&offset='+offset+'&limit='+limit;
    console.log(url);
    wx.request({
      url: url,
      header: {
        "Content-Type": "applciation/json"
      },
      method: "GET",
      success: function (res) {
        //获取data里的值
        var products = that.data.products;
        for (var i = 0; i < res.data.length; i++) {
          products.push(res.data[i])
        }
        that.setData({
          products: products
        });
        p = p+1;
      },
      fail: function (err) { },
      complete: function () { }
    })
  }


})