import { createRouter, createWebHashHistory } from "vue-router";

import { LOGIN_TOKEN } from "@/global/contansts";
import { localCache } from "@/utils/cache";
import { ElStep } from "element-plus";

const routes: any[] = [
  {
    path: "/",
    redirect: "/main",
  },
  {
    path: "/login",
    component: () => import("@/views/login/Login.vue"),
  },
  {
    path: "/main",
    component: () => import("@/views/main/main.vue"),
  },
  {
    path: "/:pathMatch(.*)",
    component: () => import("@/views/notfound/NotFond.vue"),
  },
];

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
