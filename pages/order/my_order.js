Page({

  /**
   * 页面的初始数据
   */
  data: {
    winWidth: 0,
    minHeight:0,
    winHeight: 0,//窗口高度
    // tab切换
    currentTab: 0,

    // 全部
    all_order:[
       {
         time:'2017/10/12',
         state:'待发货',
         src:'../images/download-2.jpg',
         title:'山水画山水画山水画山水画山水画山水画山水画山水画山水画山水画山水画山水画山水画山水画山水画山水画',
         sku:'珍藏版',
         money:'￥1000',
         num:'1',
         order_num:'2017101227203',
         state_one:'提醒发货',
         state_two:'申请退款',
         apply_for:'申请售后',

       },
       {
         time: '2017/10/12',
         state: '已完成',
         src: '../images/download-3.jpg',
         title: '茶杯🍵',
         sku: '一只',
         money: '￥100',
         num: '1',
         order_num: '2017101227203',
         state_one: '删除订单',
         state_two: '再次购买',
         apply_for: '',

       },
       {
         time: '2017/10/12',
         state: '已完成',
         src: '../images/download-3.jpg',
         title: '茶杯🍵',
         sku: '一只',
         money: '￥100',
         num: '1',
         order_num: '2017101227203',
         state_one: '删除订单',
         state_two: '再次购买',
         apply_for: '',

       },
       {
         time: '2017/10/12',
         state: '已完成',
         src: '../images/download-3.jpg',
         title: '茶杯🍵',
         sku: '一只',
         money: '￥100',
         num: '1',
         order_num: '2017101227203',
         state_one: '删除订单',
         state_two: '再次购买',
         apply_for: '',

       },
       
    ],
    
    // 待付款
    pay_order: [
      {
        time: '2017/10/12',
        state: '待付款',
        src: '../images/download-4.jpg',
        title: '电饭煲',
        sku: '实用',
        money: '￥150',
        num: '1',
        order_num: '2017101227203',
        state_one: '取消订单',
        state_two: '去付款',
        apply_for: '',
      },
    ],
    // 待发货
    send_order: [
      {
        time: '2017/10/12',
        state: '待发货',
        src: '../images/download-2.jpg',
        title: '山水画山水画山水画山水画山水画山水画山水画山水画山水画山水画山水画山水画山水画山水画山水画山水画',
        sku: '珍藏版',
        money: '￥1000',
        num: '1',
        order_num: '2017101227203',
        state_one: '提醒发货',
        state_two: '申请退款',
        apply_for: '申请售后',
      },
      {
        time: '2017/10/12',
        state: '待发货',
        src: '../images/download-2.jpg',
        title: '山水画山水画山水画山水画山水画山水画山水画山水画山水画山水画山水画山水画山水画山水画山水画山水画',
        sku: '珍藏版',
        money: '￥1000',
        num: '1',
        order_num: '2017101227203',
        state_one: '提醒发货',
        state_two: '申请退款',
        apply_for: '申请售后',
      },
    ],
    // 待签收
    sign_order: [
      {
        time: '2017/10/12',
        state: '待签收',
        src: '../images/download.jpg',
        title: '购物卡',
        sku: '珍藏版',
        money: '￥100',
        num: '1',
        order_num: '2017101227203',
        state_one: '删除订单',
        state_two: '去签收',
        apply_for: '',
      },
    ],
    // 已完成
    over_order: [
      {
        time: '2017/10/12',
        state: '已完成',
        src: '../images/download-3.jpg',
        title: '茶杯🍵',
        sku: '一只',
        money: '￥100',
        num: '1',
        order_num: '2017101227203',
        state_one: '删除订单',
        state_two: '再次购买',
        apply_for: '',

      },
      {
        time: '2017/10/12',
        state: '已完成',
        src: '../images/download-3.jpg',
        title: '茶杯🍵',
        sku: '一只',
        money: '￥100',
        num: '1',
        order_num: '2017101227203',
        state_one: '删除订单',
        state_two: '再次购买',
        apply_for: '',

      },
    ],
    
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this;
    
    let all_order = this.data.all_order;
    var length = all_order.length;
    var winHeight = 460 * length;
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
    let all_order = this.data.all_order;
    var length01 = all_order.length;
    let pay_order = this.data.pay_order;
    var length02 = pay_order.length;
    let send_order = this.data.send_order;
    var length03 = send_order.length;
    let sign_order = this.data.sign_order;
    var length04 = sign_order.length;
    let over_order = this.data.over_order;
    var length05 = over_order.length;
    
    if (e.detail.current === 0){
      var winHeight = 460 * length01
    }
    if (e.detail.current === 1) {
      var winHeight = 460 * length02
    }
    if (e.detail.current === 2) {
      var winHeight = 460 * length03
    }
    if (e.detail.current === 3) {
      var winHeight = 460 * length04
    }
    if (e.detail.current === 4) {
      var winHeight = 460 * length05
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