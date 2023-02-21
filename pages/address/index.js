// pages/address/index.js
const chooseLocation = requirePlugin('chooseLocation');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        choiceaddr:'',
        addrlist:[],
        address: "",
        locationName: ""

    },
    //单击选用地址
    onTapMe(e){
        this.setData({
            choiceaddr:e.currentTarget.dataset.value
        })
        console.log(this.data.choiceaddr)
        wx.setStorageSync('choiceaddr', this.data.choiceaddr)
    },
    //显示地图
    showMap() {
        const key = 'LRMBZ-AMZ64-I4WUM-DD3XC-75ZMZ-XWFG2'; //使用在腾讯位置服务申请的key
        const referer = '水立坊送水小程序'; //调用插件的app的名称
        wx.navigateTo({
            url: 'plugin://chooseLocation/index?key=' + key + '&referer=' + referer
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
        // 从地图选点插件返回后，在页面的onShow生命周期函数中能够调用插件接口，取得选点结果对象
        // 如果点击确认选点按钮，则返回选点结果对象，否则返回null
        const location = chooseLocation.getLocation();
        if(location){
            this.setData({
                address: location.address?location.address : "",
                locationName: location.name?location.name : ""
            });
        };
        console.log(this.data.address,this.data.locationName);
        var value = wx.getStorageSync('addrlist');
        if(value){
            this.setData({
                addrlist:value
            })
        };   
        
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