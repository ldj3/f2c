/** 下拉刷新获取数据 */
var p = 0;
var getalldata = function (that) {
  
  // console.log(that.data.section)
  switch (that.data.curNav) {
    case 1:
      var p_name = '';
      var price_sort = '';
      var sales = '';
      var cat_id = '';
      var section = that.data.section;
      break;
    case 2:
      var p_name = '';
      var price_sort = '';
      var cat_id = '';
      var section = that.data.section;
      switch (that.data.navList[1].click) {
        case 0:
          var sales = 'DESC';
          break;
        case 1:
          var sales = 'ASC';
          break
      }
      break;
    case 3:
      var p_name = '';
      var price_sort = '';
      var cat_id = '';
      var sales = '';
      var section = that.data.section;
      switch (that.data.navList[2].click) {
        case 0:
          var price_sort = 'DESC';
          break;
        case 1:
          var price_sort = 'ASC';
          break
      }
      break;
  }

  var offset = p * 20;
  var limit = 20;
  var url = 'http://mall.yzidea.net/index.php/xcxapi/product/ajax_get_product_data?p_name=' + p_name + '&price_sort=' + price_sort + '&sales=' + sales + '&cat_id=' + cat_id + '&max_price=0&min_price=0&section=' + section +'&offset=' + offset + '&limit=' + limit;
  console.log(url);
  wx.request({
    url: url,
    header: {
      "Content-Type": "applciation/json"
    },
    method: "GET",
    success: function (res) {
      if (res.data.title) {
        that.setData({
          hidden: false
        })
      }else{
        //获取data里的值
        var products = that.data.products;
        for (var i = 0; i < res.data.length; i++) {
          products.push(res.data[i])
        }
        that.setData({
          products: products
        });
        p++;
        if (res.data.length <20) {
          that.setData({
            hidden: false
          })
        }else{
          that.setData({
            hidden: true
          })
        }
      }
      
    },
    fail: function (err) { },
    complete: function () { }
  })
} 

/** 返回上一页，重置变量p的值 */
var cancelp = function (that) {
  p = 0;
}

var pp = function (that,click) {
  
  console.log(click)
}

// pages/goods/goods_search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    section:'',
    hidden: true,
    products:[],
    searchValue: '',
    curNav: 1,
    navList:[
      {
        name: '全部',
        id: 1,
        icon : '',
        click : '',
      },
      {
        name: '销量',
        id: 2,
        icon: 'icon-arrowdown',
        click: 0,
      },
      {
        name: '价格',
        id: 3,
        icon: 'icon-arrowdown',
        click: 0,
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
    var click = event.target.dataset.click;
    var click_data = 'navList['+index+'].click';
    var icon_data = 'navList['+index+'].icon';
    var section = this.data.section;
    //重置p为0
    p = 0;
    switch (id) {
      case 1:
        this.getdata('', '', '', '', '', '', '', section);
        break;
      case 2:
        switch (click) {
          case 0:
            this.setData({
              [click_data]: 1,
              [icon_data]: 'icon-arrowup',
              'navList[2].icon': 'icon-arrowdown'
            })
            this.getdata('', '', 'ASC', '', '', '', '', section);
            break;
          case 1:
            this.setData({
              [click_data]: 0,
              [icon_data]: 'icon-arrowdown',
              'navList[2].icon': 'icon-arrowdown'
            })
            this.getdata('', '', 'DESC', '', '', '', '', section);
            break;
        }
        break;
      case 3:
        switch (click) {
          case 0:
            this.setData({
              [click_data]: 1,
              [icon_data]: 'icon-arrowup',
              'navList[1].icon': 'icon-arrowdown'

            })
            this.getdata('', 'ASC', '', '', '', '', '', section);
            break;
          case 1:
            this.setData({
              [click_data]: 0,
              [icon_data]: 'icon-arrowdown',
              'navList[1].icon': 'icon-arrowdown'
            })
            this.getdata('', 'DESC', '', '', '', '', '', section);
            break;
        }
        break;
    }
    this.setData({
      curNav: id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.section)
    this.setData({
      section:options.section
    })

    this.getdata('','','','','','','',options.section);
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
    cancelp(that);
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
    var p = 0;
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
    var that = this;
    getalldata(that);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  /**
   * 获取分类
   */
  getdata: function (p_name, price_sort, sales, cat_id, max_price, min_price, is_screen, section) {//定义函数名称
    var that = this;   // 这个地方非常重要，重置data{}里数据时候setData方法的this应为以及函数的this, 如果在下方的sucess直接写this就变成了wx.request()的this了
    wx.request({
      url: 'http://mall.yzidea.net/index.php/xcxapi/product/all_product?p_name='+p_name+'&price_sort='+price_sort+'&sales='+sales+'&cat_id='+cat_id+'&max_price='+max_price+'&min_price='+min_price+'&is_screen='+is_screen+'&section='+section,//请求地址
      header: {//请求头
        "Content-Type": "applciation/json"
      },
      method: "GET",//get为默认方法/POST
      success: function (res) {
        if (res.data.length < 6) {
          that.setData({
            hidden: false
          })
        }else {
          that.setData({
            hidden: true
          })
        }

        that.setData({
          products: res.data
        })
      },
      fail: function (err) { },//请求失败
      complete: function () { }//请求完成后执行的函数
    })
  },

  
  
  


})