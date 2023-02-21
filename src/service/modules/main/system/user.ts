import { request } from "@/service";

// 获取用户列表
export function reqGetUserList(data) {
  return request.post({
    url: "/users/list",
    data,
  });
}

// 删除一个用户
export function reqDeleteUser(id: number) {
  return request.delete({
    url: "/users/" + id,
  });
}

// 修改用户
export function reqUpdateUser(id: number, data: any) {
  return request.patch({
    url: "/users/" + id,
    data,
  });
}

// 添加用户
export function reqAddUSer(data: any) {
  return request.post({
    url: "/users",
    data,
  });
}
