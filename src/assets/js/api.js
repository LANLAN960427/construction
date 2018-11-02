import axios from "./request";

const index = {
  // 获取项目数据
  getData(no = "", psw = "") {
    return axios({
      url: "http://121.201.117.16:8002/Expand/prjInfo.ashx",
      method: "get",
      params: {
        extype: "get_prjInfo",
        prjNo: no,
        psw: psw
      }
    });
  }
};

export {
  index
};