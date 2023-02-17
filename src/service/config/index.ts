// 根据环境动态设置baseUrl
let BASE_URL = "";
if (import.meta.env.DEV) {
  // 开发环境
  BASE_URL = "http://152.136.185.210:5000";
} else {
  //   生产环境
  BASE_URL = "test";
}
const TIMEOUT = 5000;

export { BASE_URL, TIMEOUT };
