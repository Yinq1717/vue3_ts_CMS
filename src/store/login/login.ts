import { defineStore } from "pinia";
import {
  reqAccountLogin,
  reqGetMenuByRoleId,
  reqGetUserInfoById,
} from "@/service/modules/login/login";
import type { IAccount } from "@/types";
import { localCache } from "@/utils/cache";
import { LOGIN_TOKEN } from "@/global/contansts";
import router from "@/router";
import { mapMenusToRoutes } from "@/utils/map-menu";

interface ILoginState {
  token: string;
  userInfo: any;
  menuList: any[];
}

const useLoginStore = defineStore("login", {
  state: (): ILoginState => ({
    token: "",
    userInfo: {},
    menuList: [],
  }),
  actions: {
    async accountLoginAction(account: IAccount) {
      // 发起网络请求登录
      try {
        const loginResult = await reqAccountLogin(account);

        const id = loginResult.data.id;
        this.token = loginResult.data.token;

        // 本地存储
        localCache.setCache(LOGIN_TOKEN, this.token);

        // 获取用户的详细信息并持久化存储
        const userInfoResult = await reqGetUserInfoById(id);
        this.userInfo = userInfoResult.data;
        localCache.setCache("userInfo", userInfoResult.data);

        // 获取角色对应的菜单列表并持久化存储
        const menuResult = await reqGetMenuByRoleId(this.userInfo.role.id);
        this.menuList = menuResult.data;
        localCache.setCache("menuList", menuResult.data);

        // 调用方法获取到用户实际的路由
        const routes = mapMenusToRoutes(this.menuList);
        //   将异步路由注册到main下
        routes.forEach((item) => router.addRoute("main", item));

        // 跳转main
        router.push("/main");
        ElMessage.success("登陆成功!");
      } catch (error) {
        console.log(error);
      }
    },
    //  手动获取浏览器缓存中的数据
    async loadLocalCacheACtion() {
      const token = localCache.getCache(LOGIN_TOKEN);
      const userInfo = localCache.getCache("userInfo");
      const menuList = localCache.getCache("menuList");
      if (token && userInfo && menuList) {
        this.token = token;
        this.userInfo = userInfo;
        this.menuList = menuList;

        // 调用方法获取到用户实际的路由
        const routes = mapMenusToRoutes(this.menuList);
        //   将异步路由注册到main下
        routes.forEach((item) => router.addRoute("main", item));
      }
    },
  },
});

export default useLoginStore;
