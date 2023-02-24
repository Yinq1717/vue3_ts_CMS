<template>
  <div class="home">
    <div class="charts-container" ref="chartsRef"></div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";
import type { EChartsOption } from "echarts";
import { ref, onMounted, watch, reactive } from "vue";

interface IProps {
  option: EChartsOption;
}
const props = defineProps<IProps>();

const chartsRef = ref<HTMLElement>();
onMounted(() => {
  // 初始化Echarts
  const charts = echarts.init(chartsRef.value!);
  //  配置
  watch(
    () => props.option,
    (newValue) => {
      charts.setOption(newValue);
    }
  );
});
</script>

<style lang="scss" scoped>
.home {
  .charts-container {
    height: 300px;
  }
}
</style>
