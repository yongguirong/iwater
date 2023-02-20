// pages/goods/index.js
Page({

    /**
     * 页面的初始数据
     */
    
    data: {
        items:[{number:0,sale_price:5.0},{number:0,sale_price:15.0}],
        activeKey: 0,
        totalPrice:0,
        goods:[
            {id:'0',title:'商品1',price:5.0,imageURL:'https://img01.yzcdn.cn/vant/ipad.jpeg'},
            {id:'1',title:'商品2',price:15.0,imageURL:'https://img01.yzcdn.cn/vant/ipad.jpeg'}
        ]
        
    },
    //标签点击，到后台获取相应分类商品列表，并设置GOODS
    onChange(event) {
        console.log(event.detail);
        if(event.detail==0){
            this.setData({
                goods:[
                    {id:'0',title:'商品1',price:5.0,imageURL:'https://img01.yzcdn.cn/vant/ipad.jpeg'},
                    {id:'1',title:'商品2',price:15.0,imageURL:'https://img01.yzcdn.cn/vant/ipad.jpeg'}
                ]
            })
        };
        if(event.detail==1){
            this.setData({
                goods:[
                    {id:'0',title:'商品3',price:5.0,imageURL:'https://img01.yzcdn.cn/vant/ipad.jpeg'},
                    {id:'1',title:'商品4',price:15.0,imageURL:'https://img01.yzcdn.cn/vant/ipad.jpeg'}
                ]
            })
        }
      },
    //数量改变
    // 减去商品
    minus(event){
        var items = this.data.items;  //获取购物车列表
        console.log(items);
        var index = event.currentTarget.dataset.index;//获取当前点击事件的下标索引
        console.log(index);
        var number = items[index].number; //获取购物车里面的value值
        console.log(number);
        number--;
        items[index].number=number;
        console.log("number",number);
        this.setData({
            items: items
        });
        this.getTotalPrice();                               // 重新获取总价
    },
         // 加
        plus(e){
            var items = this.data.items;  //获取购物车列表
            var index = e.currentTarget.dataset.index;//获取当前点击事件的下标索引
            var number = items[index].number;  //获取购物车里面的value值
            number++;
            items[index].number = number;
            this.setData({
                items: items
            });
            this.getTotalPrice();                               // 重新获取总价
        },
    // 总价
    getTotalPrice() {
        let items = this.data.items;                  // 获取购物车列表
        let total = 0;
        for (let i = 0; i < items.length; i++) {         // 循环列表得到每个数据
            if (items[i].selected) {                   // 判断选中才会计算价格
                total+= items[i].number * items[i].sale_price;     // 所有价格加起来
                total=total
            }
        }

        this.setData({                                // 最后赋值到data中渲染到页面
            items: items,
            totalPrice: total
        });
        console.log(this.data.totalPrice)
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