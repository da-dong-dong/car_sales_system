import {request} from "../request/index";


module.exports = {
    // 获取首页信息
    getIndexDatas(){
        return request({ url: "/home/index" });
    },
}