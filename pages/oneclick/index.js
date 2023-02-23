// pages/oneclick/index.js
const chooseLocation = requirePlugin('chooseLocation');
Page({
    data: {
        //配送时间array
        multiArray:[[ new Date().getDate() + "日（今天）",new Date().getDate()+1 + "日（明天）",new Date().getDate()+2 + "日（后天）",new Date().getDate()+3 + "日",new Date().getDate()+4 + "日"],["尽快送达","8:00","8:30","9:00","9:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","10:00","20:00","21:30","22:00"]],
        //其它初始数据
        multiIndex:[],
        addrinfo:{},
        goods:'',
        bzinfo:'',
        zfinfo:'',
        hongbao:0.5

    },
    //选择配送时间 确定
    bindMultiPickerChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value);
        this.setData({
          multiIndex: e.detail.value,
        })
      },
    //显示地图
    showMap() {
        const key = 'LRMBZ-AMZ64-I4WUM-DD3XC-75ZMZ-XWFG2'; //使用在腾讯位置服务申请的key
        const referer = '水立坊送水小程序'; //调用插件的app的名称
        wx.navigateTo({
            url: 'plugin://chooseLocation/index?key=' + key + '&referer=' + referer
        });
    },
    //备注内容改变
    bzonChange(event) {
        // event.detail 为当前输入的值
        this.setData({bzinfo:event.detail});
    },
    //使用红包
    useHongbao(){
        //do some things use hongbao
        console.log('do some things use hongbao')
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
        try {
            var value = wx.getStorageSync('cart');
            if (value) {
              // Do something with return value
              this.setData({
                  goods:value,
                  zfinfo:value
              })
            };
          } catch (e) {
            // Do something when catch error
        };
        // 从地图选点插件返回后，在页面的onShow生命周期函数中能够调用插件接口，取得选点结果对象
        // 如果点击确认选点按钮，则返回选点结果对象，否则返回null
        var location = chooseLocation.getLocation();
        if(location){
            this.setData({
                addrinfo:location
            });
            console.log('地址信息：', this.data.addrinfo);
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

    },
})