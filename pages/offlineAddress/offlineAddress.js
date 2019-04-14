// pages/offlineAddress/offlineAddress.js
//线下VIP
const http = require('../../utils/netUtil.js');
const wxPay=require('../../utils/pay.js');
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    viplist:[],
    totalMoney:0,//需要支付的总钱数
    courseIds:[],//支付是所需要的id
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    http.postRequest('course/getVipOffline', {}, function (data) {
      console.log(data);
      that.setData({
        viplist: data.body
      })
    })
  },
  checkboxHandler(res){
    console.log(res)
    var checkeds=res.detail.value
    var totalMoney=0
    var courseIdArr=[]
    for(var i=0;i<checkeds.length;i++){
      totalMoney+=this.data.viplist[checkeds[i]].orderNum
      courseIdArr[checkeds[i]] = this.data.viplist[checkeds[i]].id
    }
    this.setData({
      totalMoney: totalMoney,
      courseIds: courseIdArr
    })
  },
  /**
   * 支付
   */
  gpPage(event) {
    // wx.navigateTo({
    //   url: event.currentTarget.dataset.page
    // })
    var id = this.data.courseIds[0]
    var price="0.1"
    wxPay.wxPay(id,price);
  }    
})