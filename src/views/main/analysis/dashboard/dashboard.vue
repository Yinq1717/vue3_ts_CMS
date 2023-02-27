<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="6" v-for="(item, index) in amountList" :key="index">
        <count-card :info="item"></count-card>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="7"
        ><el-card
          ><template #header> <div>商品种类数量</div> </template>
          <pie-charts :data="categoryCounData" /> </el-card
      ></el-col>
      <el-col :span="10"
        ><el-card
          ><template #header> <div>不同城市商品数量</div> </template>
          <map-charts :data="addressSaleData"></map-charts> </el-card
      ></el-col>
      <el-col :span="7"
        ><el-card
          ><template #header> <div>商品销量top10</div> </template>

          <rose-charts :data="saleTop10Data" /> </el-card
      ></el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="12">
        <el-card>
          <template #header>
            <div>商品收藏数量</div>
          </template>
          <area-charts
            :x-label="categoryFavorData.xLabel"
            :data="categoryFavorData.value"
            title="分类销量统计"
          />
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <template #header>
            <div>商品类别销量</div>
          </template>
          <bar-charts
            :x-label="categorySaleData.xLabel"
            :data="categorySaleData.value"
          />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { storeToRefs } from "pinia";
import type { IEchartsValueType } from "@/components/page-charts/types";
import countCard from "./c-cpns/count-card.vue";
import useAnalysisStore from "@/store/main/analysis";

// 映射为对象类型的数据
function mapDataToEchartsValue(
  list: any[],
  valueKey: string = "goodsCount",
  nameKey: string = "name"
): IEchartsValueType[] {
  return list.map((item) => {
    return {
      name:
        item[nameKey].length > 8 ? item[nameKey].slice(0, 8) : item[nameKey],
      value: item[valueKey],
    };
  });
}
// 映射带有x轴标签的数据
function mapDataToEchartsLabelValue(list: any[], valueKey: string) {
  return {
    xLabel: list.map((item) => {
      return item.name;
    }),
    value: list.map((item) => {
      return item[valueKey];
    }),
  };
}

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

// 饼图数据
const categoryCounData = computed(() => {
  return mapDataToEchartsValue(categoryCount.value);
});
// 地图数据
const addressSaleData = computed(() => {
  return mapDataToEchartsValue(addressSale.value, "count", "address");
});

// 玫瑰图图数据
const saleTop10Data = computed(() => {
  return mapDataToEchartsValue(saleTop10.value, "saleCount");
});
// 面积图数据
const categoryFavorData = computed(() => {
  return mapDataToEchartsLabelValue(categoryFavor.value, "goodsFavor");
});
// 柱形图数据
const categorySaleData = computed(() => {
  return mapDataToEchartsLabelValue(categorySale.value, "goodsCount");
});
</script>

<style lang="scss" scoped>
.dashboard {
  .el-row {
    margin-bottom: 10px;
  }
}
</style>
