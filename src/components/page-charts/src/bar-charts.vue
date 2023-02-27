<template>
  <div class="bar-charts"><base-charts :options="options"></base-charts></div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";
import { computed } from "vue";

type EChartsOption = echarts.EChartsOption;

interface IProp {
  xLabel: string[];
  data: number[];
}
const props = defineProps<IProp>();
const options = computed<EChartsOption>(() => {
  return {
    xAxis: {
      data: props.xLabel,
      type: "category",
      axisLabel: {
        color: "#6e7079",
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      z: 10,
    },
    yAxis: {
      type: "value",
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: "#999",
      },
    },
    dataZoom: [
      {
        type: "inside",
      },
    ],
    color: ["#baf"],
    series: [
      {
        data: props.data,
        type: "bar",
        showBackground: true,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "orange" },
            { offset: 1, color: "tomato" },
            // { offset: 1, color: "red" },
          ]),
        },
        emphasis: {
          itemStyle: {
            color: "tomato",
          },
        },
      },
    ],
  };
});
</script>

<style lang="scss" scoped></style>
