import { defineStore } from "pinia";
import {
  reqGetCategoryCount,
  reqGetCategorySale,
  reqGetCategoryFavor,
  reqGetSaleTop10,
  reqGetAddressSale,
  reqGetAmountList,
} from "@/service/modules/analysis/analysis";

interface IState {
  categoryCount: any[];
  categorySale: any[];
  categoryFavor: any[];
  saleTop10: any[];
  addressSale: any[];
  amountList: any[];
}

const useAnalysisStore = defineStore("analysis", {
  state: (): IState => ({
    categoryCount: [],
    categorySale: [],
    categoryFavor: [],
    saleTop10: [],
    addressSale: [],
    amountList: [],
  }),
  actions: {
    async getEntireData() {
      const countResult = await reqGetCategoryCount();
      this.categoryCount = countResult.data;

      const saleResult = await reqGetCategorySale();
      this.categorySale = saleResult.data;

      const favorResult = await reqGetCategoryFavor();
      this.categoryFavor = favorResult.data;

      const topResult = await reqGetSaleTop10();
      this.saleTop10 = topResult.data;

      const addrResult = await reqGetAddressSale();
      this.addressSale = addrResult.data;

      const amountResult = await reqGetAmountList();
      this.amountList = amountResult.data;

      return true;
    },
  },
});
export default useAnalysisStore;
