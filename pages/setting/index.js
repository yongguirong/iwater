// pages/setting/index.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        userinfo:{nickname:'yong',phone:'13083389118'},
        popupbox:[
            {title:'上传头像',show:false},
            {title:'修改昵称',show:false},
            {title:'设置密码',show:false},
            {title:'绑定/解绑',show:false}
        ],
        fileList: []
    },
    showPopup(e) {
        console.log('popup:',e.target.dataset.index);
        this.data.popupbox[e.target.dataset.index].show = true;
        this.setData({popupbox:this.data.popupbox})
      },
    onClose(e) {
        console.log('close:',e.target.dataset.index);
        this.data.popupbox[e.target.dataset.index].show =false;
        this.setData({ popupbox:this.data.popupbox});
    },
    //上传图片（头像）
    afterRead(event) {
        const { file } = event.detail;
        // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
        wx.uploadFile({
          url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
          filePath: file.url,
          name: 'file',
          formData: { user: 'test' },
          success(res) {
            // 上传完成需要更新 fileList
            const { fileList = [] } = this.data;
            fileList.push({ ...file, url: res.data });
            this.setData({ fileList });
          },
        });
    },
    onChange(e){
        this.data.userinfo.nickname = e.detail;
    },
    onConfirm(e){
        this.setData({userinfo:this.data.userinfo});
        console.log('enter nickname:',this.data.userinfo.nickname);
        //close popupbox
        this.data.popupbox[e.target.dataset.index].show =false;
        this.setData({popupbox:this.data.popupbox});
        
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