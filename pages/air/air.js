// pages/air/air.js
Page({

    data: {},

    onReady() {

    },
    onLoad() {
        wx.onSocketMessage(function (evt) {
            console.log(evt);
            if (evt.data.slice(1, 2) === "T") {
                let temp = evt.data.slice(3, 7);
                // document.getElementById("temp").innerHTML = temp;
                let hum = evt.data.slice(8, 10);
                // document.getElementById("hum").innerHTML = hum;
            } else if (evt.data.slice(1, 2) === "L" || evt.data.slice(1, 2) === "W") {
                if (evt.data.slice(3, 7) === "5678") {
                    // document.getElementById("btnon").style.backgroundColor = "#a9e089";
                    // document.getElementById("btnoff").style.backgroundColor = "#f9f9f9";
                } else if (evt.data.slice(3, 7) === "1234") {
                    // document.getElementById("btnoff").style.backgroundColor = "#ff9d42";
                    // document.getElementById("btnon").style.backgroundColor = "#f9f9f9";
                }
            }
        })
    },
    onShow() {
    },
    acON() {
        wx.sendSocketMessage({
            data: "5678"
        })
    },
    acOFF() {
        wx.sendSocketMessage({
            data: "1234"
        })
    },
})