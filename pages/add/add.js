// pages/add/add.js
Page({
  data: {
    deviceType: ["电视", "空调", "台灯", "制冰机"],
    selectedType: 0,
    ipAddress: "",
  },
  bindPickerChange: function (e) {
    this.setData({
      selectedType: e.detail.value,
    });
  },
  bindIPChange: function (e) {
    this.setData({
      ipAddress: e.detail.value,
    });
  },
  navigateBack: function () {
    wx.switchTab({
      url: '/pages/home/home' 
    });
  }
});