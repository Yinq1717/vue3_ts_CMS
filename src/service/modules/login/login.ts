import { request } from "@/service";
import type { IAccount } from "@/types";

// 登录
export function reqAccountLogin(account: IAccount) {
  return request.post({
    url: "/login",
    data: account,
  });
}

// 获取用户详细信息
export function reqGetUserInfoById(id: number) {
  return request.get({
    url: "/users/" + id,
  });
}

// 根据角色id获取菜单信息
export function reqGetMenuByRoleId(id: number) {
  return request.get({
    url: `/role/${id}/menu`,
  });
}
