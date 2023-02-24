import { request } from "@/service";

export function reqGetCategoryCount() {
  return request.get({
    url: "/goods/category/count",
  });
}
export function reqGetCategorySale() {
  return request.get({
    url: "/goods/category/sale",
  });
}

export function reqGetCategoryFavor() {
  return request.get({
    url: "/goods/category/favor",
  });
}

export function reqGetSaleTop10() {
  return request.get({
    url: "/goods/sale/top10",
  });
}

export function reqGetAddressSale() {
  return request.get({
    url: "/goods/address/sale",
  });
}
export function reqGetAmountList() {
  return request.get({
    url: "/goods/amount/list",
  });
}
