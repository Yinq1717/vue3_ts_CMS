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
   // console.log(localRoutes);
   return localRoutes;
}

// 本地路由对用户菜单的路由进行过滤，筛选出对应的异步路由并返回
export function mapMenusToRoutes(menuList: any[]) {
   const routes: RouteRecordRaw[] = [];
   const localRoutes = loadLocalRoutes();
   for (let menu of menuList) {
      for (let subMenu of menu.children) {
         //  查找到对应的路由对象
         const route = localRoutes.find(item => item.path === subMenu.url);
         if (route) {
            // 添加给一级路由添加重定向,重定向到用户已注册的第一个子路由
            if (!routes.find(item => item.path == menu.url)) {
               routes.push({ path: menu.url, redirect: subMenu.url });
            }
            // 添加路由
            routes.push(route);
         }
      }
   }
   //   console.log(routes);
   return routes;
}

// 根据当前路径过滤出菜单名
export function mapPathToMenus(path: string, menuList: any[]) {
   for (let menu of menuList) {
      for (let subMenu of menu.children) {
         if (path === subMenu.url) {
            return [
               { name: menu.name, path: menu.url },
               { name: subMenu.name, path: subMenu.url },
            ];
         }
      }
   }
}

// 过滤出选中的tree子节点的id
export function mapMenuToCheckIds(menuList: any[]): number[] {
   const resultList: number[] = [];
   recurrence(menuList);
   function recurrence(menuList: any[]) {
      for (let item of menuList) {
         if (item.children) {
            recurrence(item.children);
         } else {
            resultList.push(item.id);
         }
      }
   }
   return resultList;
}

// 过滤出按钮的权限列表
export function mapMenusToPermission(menuList: any[]): string[] {
   const resultList: string[] = [];
   function recurrence(menuList: any[]) {
      for (let item of menuList) {
         if (item.children) {
            recurrence(item.children);
         } else if (item.type === 3) {
            resultList.push(item.permission);
         }
      }
   }
   recurrence(menuList);
   return resultList;
}
