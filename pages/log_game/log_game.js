// pages/log_game/log_game.js
var wxCharts = require('../../utils/wxcharts.js');
var app = getApp();
var columnChart = null;
var chartData = {
  main: {
    title: '游戏时间',
    data: [5.45, 3.92, 5.27, 4.58],
    categories: ['2018.02', '2018.03', '2018.04', '2018.05']
  },
  sub: [{
    title: '2018.02游戏时间',
    data: [1.17, 0.67, 1.05, 1.67, 0.57, 0.3],
    categories: ['03', '05', '09', '11', '15', '21']
  }, {
      title: '2018.03游戏时间',
    data: [0.917, 0.5, 0.75, 0.6, 0.93, 0.21],
    categories: ['11', '12', '13', '14', '15', '16']
  }, {
      title: '2018.04游戏时间',
    data: [1.267, 0.75, 0.53, 1.23, 0.9, 0.58],
    categories: ['01', '07', '13', '16', '25', '26']
  }, {
      title: '2018.05游戏时间',
    data: [1.27, 0.9, 0.38, 0.2, 0.75, 1.08],
    categories: ['03', '04', '13', '14', '15', '16']
  }]
};
Page({
  data: {
    chartTitle: '游戏时间',
    isMainChartDisplay: true
  },
  backToMainChart: function () {
    this.setData({
      chartTitle: chartData.main.title,
      isMainChartDisplay: true
    });
    columnChart.updateData({
      categories: chartData.main.categories,
      series: [{
        name: '游戏时间',
        data: chartData.main.data,
        format: function (val, name) {
          return val.toFixed(2) + 'h';
        }
      }]
    });
  },
  touchHandler: function (e) {
    var index = columnChart.getCurrentDataIndex(e);
    if (index > -1 && index < chartData.sub.length && this.data.isMainChartDisplay) {
      this.setData({
        chartTitle: chartData.sub[index].title,
        isMainChartDisplay: false
      });
      columnChart.updateData({
        categories: chartData.sub[index].categories,
        series: [{
          name: '游戏时间',
          data: chartData.sub[index].data,
          format: function (val, name) {
            return val.toFixed(2) + 'h';
          }
        }]
      });

    }
  },
  onReady: function (e) {
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }

    columnChart = new wxCharts({
      canvasId: 'columnCanvas',
      type: 'column',
      animation: true,
      categories: chartData.main.categories,
      series: [{
        name: '游戏时间',
        data: chartData.main.data,
        format: function (val, name) {
          return val.toFixed(2) + 'h';
        }
      }],
      yAxis: {
        format: function (val) {
          return val + 'h';
        },
        title: '游戏时间',
        min: 0
      },
      xAxis: {
        disableGrid: false,
        type: 'calibration'
      },
      extra: {
        column: {
          width: 15
        }
      },
      width: windowWidth,
      height: 200,
    });
  }
});