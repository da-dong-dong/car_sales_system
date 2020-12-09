
const AppConfig = require('../utils/common_config.js')

// 同时发送异步代码的次数
let ajaxTimes=0;
export const request=(params)=>{
 
  let header={...params.header}; 

  // 设置全局的请求头 
  header["CompanyId"]= AppConfig.COMPANY_ID; // 单位id
  // 从微信缓存中获取自定义登录态Token
  const token = wx.getStorageSync("token");
  header["Token"] = token;
  header["content-type"] = "application/json";

  ajaxTimes++;
  // 显示加载中 效果
  if(!({...params}.hideLoading)){
    wx.showLoading({
      title: "加载中",
      mask: true
    });
  }
    
  // 定义公共的url
  const baseUrl = AppConfig.BASE_URL;
   
  return new Promise((resolve,reject)=>{
    wx.request({
     ...params,
     header: header,
     method: params.method ? params.method : "POST",
     url: baseUrl + params.url,
     success:(result)=>{
       resolve(result.data);
     },
     fail:(err)=>{
       reject(err);
     },
     complete:()=>{
      ajaxTimes--;
      if(ajaxTimes===0){
        //  关闭正在等待的图标
        wx.hideLoading();
      }
     }
    });
  })
}