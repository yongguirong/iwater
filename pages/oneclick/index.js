// pages/oneclick/index.js
Page({
    data: {
        showtime: false,
        showdate:false,
        
        CDate: '',
        CTime: ''


    },
    
    showPopupDate(){
        this.setData({ showdate: true });
    },
    showPopupTime(){
        this.setData({ showtime: true });
    },  
    onClose() {
        this.setData({ showdate: false, showtime:false });
    },
    formatDate(date) {
        date = new Date(date);
        return `${date.getMonth() + 1}/${date.getDate()}`;
      },
      onInputdate(event) {
        this.setData({
          showdate: false,
          CDate: this.formatDate(event.detail),
        });
      },
    onInputtime(event) {
        this.setData({
          showtime:false,
          CTime: event.detail,
        });
    },
    /**

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