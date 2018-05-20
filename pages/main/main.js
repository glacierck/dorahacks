// pages/main/main.js
Page({
  data: {
    state_pet:0,  //宠物状态值
    state_max:100, //最大值一百
  },
  onLoad: function (options) {
  },
  log_task(e){
    wx.navigateTo({
      url: '../log_task/log_task',
    })
  },
  log_game(){
    wx.navigateTo({
      url: '../log_game/log_game',
    })
  },
  make_task(){
    wx.navigateTo({
      url: '../make_task/make_task',
    })
  }
  
})