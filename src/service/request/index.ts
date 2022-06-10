import axios from "axios";
import type { AxiosInstance } from "axios";
import type { QLRequestInterceptors, QLRequestConfig } from "./types";

import { message } from "antd";

const DEAFULT_LOADING = true;

const httpCode: any = {
  400: "请求参数错误",
  401: "权限不足, 请重新登录",
  403: "服务器拒绝本次访问",
  404: "请求资源未找到",
  500: "内部服务器错误",
  501: "服务器不支持该请求中使用的方法",
  502: "网关错误",
  504: "网关超时"
};

class QLRequest {
  instance: AxiosInstance;
  interceptors?: QLRequestInterceptors;
  showLoading?: boolean;
  loading?: any;

  constructor(config: QLRequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config);

    // 保存基本信息
    this.showLoading = config.showLoading ?? DEAFULT_LOADING;
    this.interceptors = config.interceptors;

    // 使用拦截器
    // 1.从config中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );

    // 2.添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // console.log("所有的实例都有的拦截器: 请求成功拦截");

        if (this.showLoading) {
          this.loading = message.loading({ content: "拼命加载中.." });
        }
        return config;
      },
      (err) => {
        // console.log("所有的实例都有的拦截器: 请求失败拦截");
        return err;
      }
    );

    this.instance.interceptors.response.use(
      (res) => {
        // console.log("所有的实例都有的拦截器: 响应成功拦截");

        // 将loading移除
        // this.loading?.onClose();

        const data = res?.data;
        if (+res?.status === 200) {
          return data;
        } else {
          console.log("请求失败~, 错误信息");
        }
      },
      (err) => {
        // console.log("所有的实例都有的拦截器: 响应失败拦截");
        // 将loading移除
        // this.loading?.onClose();

        // 例子: 判断不同的HttpErrorCode显示不同的错误信息
        message.error({ content: httpCode[err?.status] });
        return err;
      }
    );
  }

  request<T>(config: QLRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 1.单个请求对请求config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }

      // 2.判断是否需要显示loading
      if (config.showLoading === false) {
        this.showLoading = config.showLoading;
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 1.单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }
          // 2.将showLoading设置true, 这样不会影响下一个请求
          this.showLoading = DEAFULT_LOADING;

          // 3.将结果resolve返回出去
          resolve(res);
        })
        .catch((err) => {
          // 将showLoading设置true, 这样不会影响下一个请求
          this.showLoading = DEAFULT_LOADING;
          reject(err);
          return err;
        });
    });
  }

  get<T = any>(config: QLRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "GET" });
  }

  post<T = any>(config: QLRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "POST" });
  }

  delete<T = any>(config: QLRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "DELETE" });
  }

  patch<T = any>(config: QLRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "PATCH" });
  }
}

export default QLRequest;
