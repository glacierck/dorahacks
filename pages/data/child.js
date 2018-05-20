// pages/data/child.js
Page({

  data: {},
  onLoad: function (options) {},
  tap_next(e){
    //保留当前页面，跳转
    wx.redirectTo({
      url: '../data/pet',
    })

    //这是关闭当前页面，然后跳转
    // wx.redirectTo({
    //   url: '../data/pet',
    // })
  }

  
})