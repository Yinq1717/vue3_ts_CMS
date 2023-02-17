import { Request } from "./request";
import { BASE_URL, TIMEOUT } from "./config";

// 新建一个axios实例
const request = new Request({
   baseURL: BASE_URL,
   timeout: TIMEOUT,
});

export { request };
