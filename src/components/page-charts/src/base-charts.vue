<template>
  <div class="home">
    <div class="charts-container" ref="chartsRef"></div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";
import type { EChartsOption } from "echarts";
import { ref, onMounted, watchEffect } from "vue";

interface IProps {
  options: EChartsOption;
}
const props = defineProps<IProps>();

const chartsRef = ref<HTMLElement>();

onMounted(() => {
  // 初始化Echarts
  const echartsInstance = echarts.init(chartsRef.value!);
  //  配置
  watchEffect(() => {
    echartsInstance.setOption(props.options);
  });

  window.addEventListener("resize", () => {
    echartsInstance.resize();
  });
});
</script>

<style lang="scss" scoped>
.home {
  .charts-container {
    height: 360px;
  }
}
</style>
