<template>
  <div class="count-card">
    <el-card>
      <div class="header">
        <span class="hader-text">{{ info.title }} </span>
        <el-tooltip :content="info.tips" placement="top">
          <el-icon size="14" color="#8c8c8c"><Warning /> </el-icon
        ></el-tooltip>
      </div>
      <div class="content" ref="numbe1Ref">{{ info.number1 }}</div>
      <div class="footer">
        <span>{{ info.subtitle }}</span>
        <span ref="numbe2Ref">{{ info.number2 }}</span>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { CountUp } from "countup.js";

const props = defineProps(["info"]);

// 获取到dom
const numbe1Ref = ref<HTMLElement>();
const numbe2Ref = ref<HTMLElement>();

// countup的配置对象
const countupConfig = {
  prefix: props.info.amount === "saleroom" ? "￥" : "",
};
onMounted(() => {
  const countup1 = new CountUp(
    numbe1Ref.value!,
    props.info.number1,
    countupConfig
  );
  const countup2 = new CountUp(
    numbe2Ref.value!,
    props.info.number2,
    countupConfig
  );
  //   开始执行动画
  countup1.start();
  countup2.start();
});
</script>

<style lang="scss" scoped>
.count-card {
  font-size: 14px;
  white-space: nowrap;

  .header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
    color: #888;
    //  white-space: nowrap;
  }
  .content {
    font-size: 26px;
    padding: 10px 0;
    //  border: 1px solid red;
    border-bottom: 1px solid #f0f0f0;
  }
  .footer {
    padding-top: 16px;
    //  white-space: nowrap;
    letter-spacing: 1px;
  }
}
</style>
