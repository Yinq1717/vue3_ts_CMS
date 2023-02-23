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

// 获取数据列表
export function reqGetPageList(pageName: string, data: any) {
  return request.post({
    url: `/${pageName}/list`,
    data,
  });
}

// 删除一条数据
export function reqDeletePage(pageName: string, id: number) {
  return request.delete({
    url: `/${pageName}/` + id,
  });
}

// 修改数据
export function reqUpdatePage(pageName: string, id: number, data: any) {
  return request.patch({
    url: `/${pageName}/` + id,
    data,
  });
}

// 添加数据
export function reqAddPage(pageName: string, data: any) {
  return request.post({
    url: `/${pageName}`,
    data,
  });
}
