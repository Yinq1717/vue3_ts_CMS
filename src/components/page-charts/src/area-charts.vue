<template>
  <div class="area-charts">
    <base-charts :options="options"> </base-charts>
  </div>
</template>

<script setup lang="ts">
import type { EChartsOption } from "echarts";
import { computed } from "vue";
import * as echarts from "echarts";
interface IProps {
  xLabel: string[];
  data: number[];
  title: string;
}
const props = defineProps<IProps>();
const options = computed<EChartsOption>(() => {
  return {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: props.xLabel,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: props.title,
        data: props.data,
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(0, 221, 255)",
            },
            {
              offset: 1,
              color: "rgb(77, 119, 255)",
            },
          ]),
        },
      },
    ],
  };
});
</script>

<style lang="scss" scoped></style>
