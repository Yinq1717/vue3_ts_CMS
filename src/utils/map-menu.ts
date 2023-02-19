import type { RouteRecordRaw } from "vue-router";

// 加载本地路由
function loadLocalRoutes() {
  const localRoutes: RouteRecordRaw[] = [];

  const files: Record<string, any> = import.meta.glob("@/router/main/**/*.ts", {
    eager: true,
  });
  for (let key in files) {
    localRoutes.push(files[key].default);
  }
  return localRoutes;
}

// 本地路由对用户菜单的路由进行过滤，筛选出对应的异步路由并返回
export function mapMenusToRoutes(menuList: any[]) {
  const routes: RouteRecordRaw[] = [];
  const localRoutes = loadLocalRoutes();
  for (let menu of menuList) {
    for (let subMenu of menu.children) {
      //  查找到对应的路由对象
      const route = localRoutes.find((item) => item.path === subMenu.url);
      if (route) {
        routes.push(route);
      }
    }
  }
  return routes;
}
