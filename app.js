// app.js
App({
    onLaunch() {
        // 展示本地存储能力
        const logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)

        // 登录
        wx.login({
            success: res => {
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
            }
        })

        //建立ws连接
        wx.connectSocket({
            url: 'ws://10.122.234.77:8080',
            success: (result) => {
                console.log(result);

            }
        })

        wx.onSocketOpen(function (res) {
            wx.sendSocketMessage({
                data: '[C]You are connected with Wechat mini app',
            })
        })

    },
    globalData: {
        userInfo: null
    }
})
