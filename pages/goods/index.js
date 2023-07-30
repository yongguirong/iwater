// pages/goods/index.js
//购物车功能 参考 https://www.lsjlt.com/news/70382.html
//获得APP实例

const app = getApp();
var goodslist=app.globalData.goodslist;

Page({
    /**
     * 页面的初始数据
     */
    data: {
        goodslist:goodslist,
        currentCate:1

    },
    //标签点击，到后台获取相应分类商品列表
    onChange(event) {
        this.setData({
            currentCate:event.detail
        })
      },
    //添加到购物车
    addtocart(e){
        console.log(e.currentTarget.dataset.id)
    },
    //查看购物车
    onShowCart(){
        wx.navigateTo({
          url: '/pages/cart/cart',
        })
    },
    // 总价
    getTotalPrice() {
        let cart = this.data.cart;                  // 获取购物车列表
        let total = 0;
        for (let i = 0; i < cart.length; i++) {         // 循环列表得到每个数据
            //if (cart[i].selected) {                   // 判断选中才会计算价格
                total+= cart[i].number * cart[i].price;     // 所有价格加起来
                total=total
            //}
        }

        this.setData({                                // 最后赋值到data中渲染到页面
            totalPrice: total
        });
        console.log(this.data.totalPrice)
    },
    //确定 商品
    onSubmit(){
        try {
            wx.setStorageSync('cart', this.data.cart)
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
        console.log(this.data.goodslist)
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