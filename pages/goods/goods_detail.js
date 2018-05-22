// pages/goods/goods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartsNum: 0,
    test: "",
    scrollTop: {
      scroll_top: 0,
      goTop_show: false
    },


    price:389.00,
    totalPrice: 389.00, // 总价，初始为0
    num: 1,

    // 首页广告图
    imgSwiper: [
      {
        'url': '/pages/clear/clear',
        'images': '../images/goods01.jpg',
      },
      {
        'url': '/pages/clear/clear',
        'images': '../images/goods01.jpg',
      },
      {
        'url': '/pages/clear/clear',
        'images': '../images/goods01.jpg',
      },
    ],
    goods_box_sku: [
      {
        'title': '功效',
        'text': '补水保湿'
      },
      {
        'title': '容量',
        'text': '50ml/瓶'
      }
    ],

    scrollTop: {
      scroll_top: 0,
      goTop_show: false
    }
  
  },

  // 点击+号，num加1，点击-号，如果num > 1，则减1
  // 增加数量
  addCount: function () {
    let num = this.data.num; //获取数量
    num = num + 1;
    this.setData({
      num: num
    });
    this.getTotalPrice();
  },
  // 减少数量
  minusCount: function () {
    let num = this.data.num; //获取数量
    if (num <= 1) {
      return false;
    }
    num = num - 1;
    this.setData({
      num: num
    });
    this.getTotalPrice();
  },
  getTotalPrice: function () {
    let num = this.data.num; //获取数量
    let price = this.data.price; //获取数量
    let total = 0;
    total += num * price; // 所有价格加起来
    this.setData({
      totalPrice: total.toFixed(2) //四舍五入保留二位小数
    });
  },
  
scrollTopFun: function(e){  
    console.log(e.detail);  
    if(e.detail.scrollTop > 300){//触发gotop的显示条件  
      this.setData({  
        'scrollTop.goTop_show': true  
      });  
      console.log(this.data.scrollTop)  
    }else{  
      this.setData({  
        'scrollTop.goTop_show': false  
      });  
    }  
  },  
  goTopFun: function(e){  
    var _top=this.data.scrollTop.scroll_top;//发现设置scroll-top值不能和上一次的值一样，否则无效，所以这里加了个判断  
    if(_top==1){  
      _top=0;  
    }else{  
      _top=1;  
    }  
    this.setData({  
      'scrollTop.scroll_top': _top  
    });  
    console.log("----");  
    console.log(this.data.scrollTop)  
  } ,
  // 加入购物车
  joinCarts: function() {
    let cartsNum = this.data.cartsNum; //获取数量
    cartsNum = cartsNum + 1;
    this.setData({
      cartsNum: cartsNum
    });
    wx.showToast({
      title: '成功加入购物车!',
      icon: 'success',
      duration: 2000
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