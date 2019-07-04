// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   banner:[],
    list:[
      
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  toDetail:function(){
    wx.navigateTo({
      url: '/pages/detail/index'
    })
  },
  toCart:function(){
    wx.navigateTo({
      url: '/pages/cart/index'
    })
  },
 
  getMain(){
    let that=this;
    wx.request({
      url: 'http://yapi.demo.qunar.com/mock/67112/grops/gd',
      success(res) {
        console.log(res);
       that.setData({
        list:res.data.data.list,
        banner: res.data.data.banner,
       })
      }
    })
  },
  
  onLoad: function (options) {
    this.getMain();
  },
})