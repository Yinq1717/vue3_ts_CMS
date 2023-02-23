import { request } from "@/service";
export function reqGetDepartmentList(data: any) {
  return request.post({
    url: "/department/list",
    data,
  });
}
