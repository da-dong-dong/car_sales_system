// miniprogram/pages/index/index.js
import Api from "../../utils/api.js";
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //轮播图
    banners: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 动态设置页面标题
    wx.setNavigationBarTitle({ title: app.globalData.APP_NAME });
    //获取首页数据
    this.getIndexDatas()
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

  },
   /* 
   * 获取首页数据 
   */
  async getIndexDatas(){
    const res = await Api.getIndexDatas();  
    if(res.code === 1){
       const resData = res.data 
       console.log(resData);
       this.setData({
        banners: resData.banners,
        // adBanner,
        // myCar: resData.myCar,
        // hotActs: resData.hotActs,
        // hotCars: resData.hotCars,
        // saleConsultant: resData.saleAdviser,
        // serviceConsultant: resData.serviceAdviser,
      }); 
    }
    // 关闭下拉刷新的窗口 如果没有调用下拉刷新的窗口 直接关闭也不会报错  
    wx.stopPullDownRefresh();
 },
})