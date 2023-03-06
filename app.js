// app.js
App({
    //全局数据
    globalData:{
        qiyeinfo:{title:'桂林水立坊',phone:'19965960978',notice:'春节放假，21日-28日不送水！'},
        userinfo:{
            nickname:'yongren',
            phone:'13083389118',
            pic:'https://img.yzcdn.cn/vant/cat.jpeg',
            financedata:{shuipiao:120,yajing:212,jifeng:10,hongbao:86.5,yongjing:0.10},
            addrlist:[
                {name: "天润1期", latitude: 33.876481, longitude: 115.779112, address: "安徽省亳州市谯城区半截楼街", province: "安徽省",city: "亳州市",district: "谯城区"},
                {name: "谯城区人民政府", latitude: 33.87641, longitude: 115.77914, address: "安徽省亳州市谯城区薛阁办事处半截楼3号", province: "安徽省",city: "亳州市",district: "谯城区"}
            ]
        },
        goodlist:[],
        cartinfo:{}
    },

    onLaunch(){
        console.log(this.globalData);
    }
})
