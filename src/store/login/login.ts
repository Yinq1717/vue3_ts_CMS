import { defineStore } from "pinia";
import { reqAccountLogin } from "@/service/modules/login/login";
import type { IAccount } from "@/types";
import { localCache } from "@/utils/cache";
import { LOGIN_TOKEN } from "@/global/contansts";
import { router } from "@/router";
const useLoginStore = defineStore("login", {
  state: () => ({
    name: "",
    id: "",
    token: localCache.getCache(LOGIN_TOKEN) ?? "",
  }),
  actions: {
    async accountLoginAction(account: IAccount) {
      // 发起网络请求登录
      try {
        const result = await reqAccountLogin(account);
        ElMessage.success("登陆成功!");
        this.id = result.data.id;
        this.name = result.data.name;
        this.token = result.data.token;
        localCache.setCache(LOGIN_TOKEN, this.token);
        router.push("/main");
      } catch (error) {
        console.log(error);
      }
    },
  },
});

export default useLoginStore;
