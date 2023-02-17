import { request } from "@/service";
import type { IAccount } from "@/types";
export function reqAccountLogin(account: IAccount) {
  return request.post({
    url: "/login",
    data: account,
  });
}
