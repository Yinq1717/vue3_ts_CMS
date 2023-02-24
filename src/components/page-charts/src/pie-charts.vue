<template>
  <div class="pie-charts">
    <base-charts :option="option"></base-charts>
  </div>
</template>

<script setup lang="ts">
import { watch, computed } from "vue";
import type { EChartsOption } from "echarts";
import baseCharts from "./base-charts.vue";
import type { IEchartsValueType } from "../types";

interface IProps {
  data: IEchartsValueType[];
}
const props = defineProps<IProps>();
const option = computed<EChartsOption>(() => {
  return {
    tooltip: {
      trigger: "item",
    },
    legend: {
      left: "center",
    },
    series: [
      {
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
