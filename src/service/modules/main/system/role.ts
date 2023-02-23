import { request } from "@/service";

export function reqGetRoleList(data) {
  return request.post({
    url: "/role/list",
    data,
  });
}
