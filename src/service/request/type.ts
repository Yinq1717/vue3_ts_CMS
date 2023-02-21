import type {
  AxiosResponse,
  InternalAxiosRequestConfig,
  AxiosRequestConfig,
} from "axios";

// 特定的拦截器,接受四个函数
interface InterCeptions<T = AxiosResponse> {
  // 请求成功的拦截
  requestSuccessFn?: (config: any) => InternalAxiosRequestConfig;

  // 请求失败的拦截
  requestfailureFn?: (err: any) => any;

  // 响应成功的拦截
  responseSuccessFn?: (response: any) => T;

  // 响应失败的拦截
  responseFailureFn?: (err: any) => any;
}

// 新建一个接口继承axios,用于拓展配置选项,实现特定的请求拦截器
export interface ExpandAxiosRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptiors?: InterCeptions<T>;
}
