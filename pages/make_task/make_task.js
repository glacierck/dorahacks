// pages/make_task/make_task.js
Page({
  data: {
    multiArray: [['每天', '每周'], ['周一', '周二','周三','周四','周五','周六','周天']],
    multiIndex: [1, 0],
    time:"18:00"
  },
  /**
   * 监听时间picker选择器
   */
  listenerTimePickerSelected: function (e) {
    //调用setData()重新绘制
    this.setData({
      time: e.detail.value,
    });
  },

  //多列选择器
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  //多列选择器，某一列的值改变时触发事件
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    if(e.detail.column==0){
      switch(e.detail.value){
        case 0:
          data.multiArray[1] = [""];
          break;
        case 1:
          data.multiArray[1] = ['周一', '周二', '周三', '周四', '周五', '周六', '周天'];
          break;
      }
    }
    this.setData(data);
  },
  task_done(){
    wx.navigateBack({
    })
  },
  onLoad: function (options) {
  },
})