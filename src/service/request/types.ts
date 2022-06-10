import type { AxiosRequestConfig, AxiosResponse } from "axios";

export interface QLRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (res: T) => T;
  responseInterceptorCatch?: (error: any) => any;
}

export interface QLRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: QLRequestInterceptors<T>;
  showLoading?: boolean;
}
