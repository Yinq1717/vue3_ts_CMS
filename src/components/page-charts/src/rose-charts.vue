<template>
  <div class="rose-charts">
    <base-charts :options="options"></base-charts>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { EChartsOption } from "echarts";
import type { IEchartsValueType } from "../types";
interface IProps {
  data: IEchartsValueType[];
}
const props = defineProps<IProps>();
const options = computed((): EChartsOption => {
  return {
    //  legend: {
    //    top: "bottom",
    //  },

    tooltip: {
      trigger: "item",
      formatter: "{b}  :  {c} ({d}%)",
      // position: ["20%", "20%"],
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
        name: "销售数量",
        type: "pie",
        radius: [30, 150],
        center: ["50%", "50%"],
        roseType: "area",
        itemStyle: {
          borderRadius: 8,
        },
        label: {
          show: false,
          position: "center",
        },
        data: props.data,
      },
    ],
  };
});
</script>

<style lang="scss" scoped></style>
