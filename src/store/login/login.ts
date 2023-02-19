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

interface ILoginState {
  token: string;
  userInfo: any;
  menuList: any[];
}

const useLoginStore = defineStore("login", {
  state: (): ILoginState => ({
    token: localCache.getCache(LOGIN_TOKEN) ?? "",
    userInfo: localCache.getCache("userInfo") ?? {},
    menuList: localCache.getCache("menuList") ?? [],
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

        this.menuList.forEach((item) => {
          item.children.forEach((i) => {
            console.log(i.url);
          });
        });

        // 跳转main
        router.push("/main");
        ElMessage.success("登陆成功!");
      } catch (error) {
        console.log(error);
      }
    },
  },
});

export default useLoginStore;
