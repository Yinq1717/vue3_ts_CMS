<template>
  <div class="pie-charts">
    <base-charts :options="options"></base-charts>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { EChartsOption } from "echarts";
import baseCharts from "./base-charts.vue";
import type { IEchartsValueType } from "../types";

interface IProps {
  data: IEchartsValueType[];
}
const props = defineProps<IProps>();
const options = computed<EChartsOption>(() => {
  return {
    tooltip: {
      trigger: "item",
    },
    legend: {
      left: "center",
    },
    color: [
      "#e7bcf3",
      "#fb7293",
      "#ff9f7f",
      "#ffdb5c",
      "#9fe6b8",
      "#32c5e9",
      "#37a2da",
    ],
    series: [
      {
        name: "类别数量",
        type: "pie",
        radius: "50%",
        data: props.data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };
});
</script>

<style lang="scss" scoped>
.pie-charts {
}
</style>
