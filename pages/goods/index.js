// pages/goods/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        goods:[
            {id:'0',title:'商品1',price:5.0,num:0,imageURL:'https://img01.yzcdn.cn/vant/ipad.jpeg'},
            {id:'1',title:'商品2',price:15.0,num:0,imageURL:'https://img01.yzcdn.cn/vant/ipad.jpeg'}
        ]
        
    },
    //数量改变
    numCut(e){
        console.log(e.detail.value)
    },
    numAdd(e){
        console.log(e.detail.value)
    },
    //确定 商品
    onSubmit(){
        try {
            wx.setStorageSync('goods', 'one for 12.00')
          } catch (e) { };
        wx.navigateBack()
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