// pages/my/index.js
//获得APP实例
var app = getApp();
// var userinfo = app.globalData.userinfo;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userinfo:app.globalData.userinfo
    },
    //打电话
    makePhoneCall(){
        wx.makePhoneCall({
            phoneNumber: userinfo.phone//仅为示例，并非真实的电话号码
          })
    },
    onTapSetting(){
        wx.navigateTo({
          url: '/pages/setting/index',
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})