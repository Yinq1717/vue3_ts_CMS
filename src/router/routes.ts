const routes: any[] = [
  {
    path: "/",
    redirect: "/main",
  },
  {
    path: "/login",
    component: () => import("../views/login/Login.vue"),
  },
  {
    path: "/main",
    component: () => import("../views/main/Main.vue"),
  },
  {
    path: "/:pathMatch(.*)",
    component: () => import("../views/notfound/NotFond.vue"),
  },
];

export default routes;
