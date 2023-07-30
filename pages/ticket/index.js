// pages/ticket/index.js
//获得APP实例
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        topTips:{tips:'shuipiao 0 yuan',navToPage:'/pages/setting/index',navText:"去哪"},
        item:[{title:'标签1',content:'内容1'},{title:'标签2',content:'内容2'},{title:'标签3',content:'内容3'}
        ,{title:'标签4',content:'内容4'},{title:'标签5',content:'内容5'},{title:'标签6',content:'内容6'}]
    },
    onChange(event) {
        wx.showToast({
          title: `切换到标签 ${event.detail.name}`,
          icon: 'none',
        });
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