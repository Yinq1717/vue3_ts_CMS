<template>
  <div class="main">
    <h1>main</h1>
  </div>
</template>

<script setup lang="ts">
import useCounterStore from "@/store/counter";

const countStore = useCounterStore();
const num = 2;
const changeCount = () => {
  countStore.changeCount(num * countStore.count);
};
</script>

<style lang="scss" scoped>
.main {
}
</style>
