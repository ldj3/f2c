// pages/carts/carts.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts: [], // 购物车列表
    hasList: false,  // 列表是否有数据
    addList: false, //提示添加商品
    totalPrice: '0.00', // 总价，初始为0
    selectAllSratus: true, // 全选状态，默认全选
    hiddenLoading:true,
    carts: [
      {
        url: '/pages/goods/goods_detail',
        src: '../images/banner01.png',
        title: '自行车',
        nature: '黑／银',
        price: '100.00',
        selected: false,
        num: 1
      },
      {
        url: '/pages/goods/goods_detail',
        src: '../images/download-2.jpg',
        title: '名画山水画名画山水画名画山水画',
        nature: '山水画',
        price: '1000.00',
        selected: false,
        num: 1
      },
      {
        url: '/pages/goods/goods_detail',
        src: '../images/download-3.jpg',
        title: '水杯',
        nature: '迷你',
        price: '30.00',
        selected: false,
        num: 1
      },
      {
        url: '/pages/goods/goods_detail',
        src: '../images/download-4.jpg',
        title: '新款电饭煲',
        nature: '3/4个 迷你',
        price: '125.00',
        selected: false,
        num: 1
      },
      {
        url: '/pages/goods/goods_detail',
        src: '../images/banner01.png',
        title: '自行车',
        nature: '黑/银',
        price: '100.00',
        selected: false,
        num: 1
      },
      {
        url: '/pages/goods/goods_detail',
        src: '../images/download-2.jpg',
        title: '名画山水画名画山水画名画山水画',
        nature: '山水画',
        price: '1000.00',
        selected: false,
        num: 1
      },
    ]
  
  },
// 购物车列表数据我们一般是通过请求服务器拿到的数据，所以我们放在生命周期函数里给 carts 赋值。想到每次进到购物车都要获取购物车的最新状态，而onLoad和onReady只在初始化的时候执行一次，所以我需要把请求放在 onShow 函数里
  /**
     * 生命周期函数--监听页面显示
     */
  onShow: function () {
    this.setData({
      hasList: true, // 既然有数据了，那设为true吧
      // carts: [
      //   {
      //     url: '/pages/goods/goods_detail',
      //     src: '../images/banner01.png',
      //     title: '自行车',
      //     nature: '黑／银',
      //     price: '100.00',
      //     selected: false,
      //     num: 1
      //   },
      //   {
      //     url: '/pages/goods/goods_detail',
      //     src: '../images/download-2.jpg',
      //     title: '名画山水画名画山水画名画山水画',
      //     nature: '山水画',
      //     price: '1000.00',
      //     selected: false,
      //     num: 1
      //   },
      //   {
      //     url: '/pages/goods/goods_detail',
      //     src: '../images/download-3.jpg',
      //     title: '水杯',
      //     nature: '迷你',
      //     price: '30.00',
      //     selected: false,
      //     num: 1
      //   },
      //   {
      //     url: '/pages/goods/goods_detail',
      //     src: '../images/download-4.jpg',
      //     title: '新款电饭煲',
      //     nature: '3/4个 迷你',
      //     price: '125.00',
      //     selected: false,
      //     num: 1
      //   },
      //   {
      //     url: '/pages/goods/goods_detail',
      //     src: '../images/banner01.png',
      //     title: '自行车',
      //     nature: '黑/银',
      //     price: '100.00',
      //     selected: false,
      //     num: 1
      //   },
      //   {
      //     url: '/pages/goods/goods_detail',
      //     src: '../images/download-2.jpg',
      //     title: '名画山水画名画山水画名画山水画',
      //     nature: '山水画',
      //     price: '1000.00',
      //     selected: false,
      //     num: 1
      //   },
      // ]
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    showView: (options.showView == "true" ? true : false)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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

  //  计算总价:总价 = 选中的商品1的 价格 数量 + 选中的商品2的 价格 数量 + ... 根据公式，可以得到
  getTotalPrice: function () {
   let carts = this.data.carts; //获取购物车列表
   let total = 0;
   for (let i = 0; i < carts.length; i++) { // 循环列表得到每个数据
     if (carts[i].selected) {  // 判断选中才会计算价格
       total += carts[i].num * carts[i].price; // 所有价格加起来
     }
   }
   this.setData({
     carts:carts,
     totalPrice:total.toFixed(2) //四舍五入保留二位小数
   });
  },
 
  // 选中商品
  selectList: function (e) {
    const index = e.currentTarget.dataset.index;    // 获取data- 传进来的index
    let carts = this.data.carts;                    // 获取购物车列表
    const selected = carts[index].selected;         // 获取当前商品的选中状态
    carts[index].selected = !selected;              // 改变状态
    this.setData({
      carts: carts
    });
    this.getTotalPrice();                           // 重新获取总价
  },

//  全选:全选就是根据全选状态 selectAllStatus 去改变每个商品的 selected
selectAll: function (e) {
  let selectAllStatus = this.data.selectAllStatus; // 是否全选状态
  selectAllStatus = !selectAllStatus;
  let carts = this.data.carts;

  for(let i = 0; i < carts.length; i++) {
    carts[i].selected = selectAllStatus;
  }
  this.setData ({
    selectAllStatus: selectAllStatus,
    carts: carts
  });
  this.getTotalPrice();
},

// 点击+号，num加1，点击-号，如果num > 1，则减1
// 增加数量
addCount: function(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    num = num + 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
},
// 减少数量
minusCount: function(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    if(num <= 1){
      return false;
    }
    num = num - 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
},
// 删除商品: 点击删除按钮则从购物车列表中删除当前元素，删除之后如果购物车为空，改变购物车为空标识hasList为false
delectList: function (e) {
  const index = e.currentTarget.dataset.index;
  let carts = this.data.carts;
  carts.splice(index,1);  // 删除购物车列表里这个商品
  this.setData({
    carts: carts
  });
  if(!carts.length) {     // 如果购物车为空
    this.setData({
      hasList: false,      // 修改标识为false，显示购物车为空页面
      selectAllStatus: false,
      totalPrice: '0.00',

    });
  } else {                // 如果不为空
    this.getTotalPrice(); // 重新计算总价格
  }
},

// 去结算
carts_get_clearing: function(e) {
  let carts = this.data.carts;
  if (!carts.length) {     // 如果购物车为空
    this.setData({
      addList: true,    
    });
    setTimeout(() => {
      this.setData({
        addList: false
      })
    }, 2000)
  }


  },








})