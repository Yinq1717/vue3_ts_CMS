import { Request } from "./request";
import { BASE_URL, TIMEOUT } from "./config";
import { localCache } from "@/utils/cache";
import { LOGIN_TOKEN } from "@/global/contansts";

// 新建一个axios实例
const request = new Request({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  interceptiors: {
    requestSuccessFn: (config) => {
      config.headers.Authorization =
        "Bearer " + localCache.getCache(LOGIN_TOKEN);
      return config;
    },
  },
});

export { request };
