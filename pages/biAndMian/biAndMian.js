//快速智能练习
const http = require('../../utils/netUtil.js');
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    optionsID: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      optionsID: options.id
    })
  },
  gpPage(event) {
    var that = this;
    wx.navigateTo({
      url: event.currentTarget.dataset.page + "?id=" + that.data.optionsID
    })
  },
})