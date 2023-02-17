import axios from "axios";
import type { AxiosRequestConfig, AxiosInstance, AxiosResponse } from "axios";
import type { ExpandAxiosRequestConfig } from "./type";

// 创建axios类型,后面通过new关键词创建axios实例
export class Request {
  // 构造函数返回的axios实例
  instance: AxiosInstance;

  constructor(config: ExpandAxiosRequestConfig) {
    this.instance = axios.create(config);

    // 请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (err) => {
        return err;
      }
    );

    // 响应拦截器
    this.instance.interceptors.response.use(
      (response) => {
        return response.data;
      },
      (err) => {
        //   console.log(err.response.data);
        return err.response.data;
      }
    );

    //针对特定的axios实例添加请求/响应拦截器
    this.instance.interceptors.request.use(
      config.interceptiors?.requestSuccessFn,
      config.interceptiors?.requestfailureFn
    );
    this.instance.interceptors.response.use(
      config.interceptiors?.responseSuccessFn,
      config.interceptiors?.responseFailureFn
    );
  }

  // 对axios实例的request方法二次封装,便于维护
  request<T = any>(config: ExpandAxiosRequestConfig<T>): Promise<T> {
    if (config.interceptiors?.requestSuccessFn) {
      config = config.interceptiors?.requestSuccessFn(config);
    }

    // return this.instance.request(config);
    return new Promise<T>((resolve, reject) => {
      this.instance.request<any, T>(config).then(
        (res) => {
          if (config.interceptiors?.responseSuccessFn) {
            res = config.interceptiors?.responseSuccessFn(res);
          }
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  // 二次封装get方法
  get<T = any>(config?: ExpandAxiosRequestConfig<T>) {
    return this.request({ ...config, method: "GET" });
  }

  // 二次封装post方法
  post<T = any>(config?: ExpandAxiosRequestConfig<T>) {
    return this.request({ ...config, method: "POST" });
  }

  delete<T = any>(config: ExpandAxiosRequestConfig<T>) {
    return this.request({ ...config, method: "DELETE" });
  }
}

// export { Request };
