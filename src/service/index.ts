// service统一出口
import type { AxiosRequestHeaders } from "axios";
import QLRequest from "./request/index";
import { BASE_URL, TIME_OUT } from "./request/config";

// import localCache from "@/utils/cache";

const qlRequest = new QLRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      // const token = localCache.getCache("token");
      // if (token) (config.headers as AxiosRequestHeaders).Authorization = `Bearer ${token}`;

      // 在这里：可以根据业务需求可以在发送请求之前做些什么:例如我这个是导出文件的接口，因为返回的是二进制流，所以需要设置请求响应类型为blob，就可以在此处设置。
      if (config?.url?.includes("pur/contract/export")) {
        (config.headers as AxiosRequestHeaders)["responseType"] = "blob";
      }
      // 我这里是文件上传，发送的是二进制流，所以需要设置请求头的'Content-Type'
      if (config?.url?.includes("pur/contract/upload")) {
        (config.headers as AxiosRequestHeaders)["Content-Type"] = "multipart/form-data";
      }

      // console.log("请求成功的拦截");
      return config;
    },
    requestInterceptorCatch: (err) => {
      // console.log("请求失败的拦截");
      return err;
    },
    responseInterceptor: (res) => {
      // console.log("响应成功的拦截");
      return res;
    },
    responseInterceptorCatch: (err) => {
      // console.log("响应失败的拦截");
      return err;
    }
  }
});

export default qlRequest;
