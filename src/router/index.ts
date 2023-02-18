import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";
import { LOGIN_TOKEN } from "@/global/contansts";
import { localCache } from "@/utils/cache";
import { ElStep } from "element-plus";
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localCache.getCache(LOGIN_TOKEN);
  if (to.path === "/main") {
    if (!token) {
      //  没有token
      ElMessage.warning("您还未登录，请先登录");
      next("/login");
    } else {
      next();
    }
  } else {
    //   不是去main
    next();
  }
});

export default router;
