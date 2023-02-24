<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="6" v-for="(item, index) in amountList" :key="index">
        <count-card :info="item"></count-card>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="8"
        ><el-card
          ><template #header> <div>分类商品数量</div> </template>
          <pie-charts :data="state.categoryCounData"></pie-charts> </el-card
      ></el-col>
      <el-col :span="8"
        ><el-card
          ><template #header> <div>不同城市商品数量</div> </template></el-card
        ></el-col
      >
      <el-col :span="8"
        ><el-card
          ><template #header> <div>分类商品数量</div> </template></el-card
        ></el-col
      >
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { reactive, watch } from "vue";
import { storeToRefs } from "pinia";
import type { IEchartsValueType } from "@/components/page-charts/types";
import countCard from "./c-cpns/count-card.vue";
import useAnalysisStore from "@/store/main/analysis";

// 导入仓库并且获取全部数据,结构出数据
const analysisStore = useAnalysisStore();
analysisStore.getEntireData();
const {
  categoryCount,
  categorySale,
  categoryFavor,
  saleTop10,
  addressSale,
  amountList,
} = storeToRefs(analysisStore);

const state = reactive<{ categoryCounData: any[] }>({
  categoryCounData: [],
});

watch(categoryCount, (newValue) => {
  state.categoryCounData = newValue.map((item) => {
    return {
      name: item.name,
      value: item.goodsCount,
    };
  });
});
</script>

<style lang="scss" scoped>
.dashboard {
  .el-row {
    margin-bottom: 10px;
  }
}
</style>
