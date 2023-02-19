<template>
  <div class="crumbs">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="(item, index) in crumbs"
        :to="{ path: item.path }"
        >{{ item.name }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { mapPathToMenus } from "@/utils/map-menu";
import { useRoute } from "vue-router";
import useLoginStore from "@/store/login/login";
import { computed } from "vue";

const loginStore = useLoginStore();
const route = useRoute();
const menuList = useLoginStore().menuList;

let crumbs = computed(() => {
  return mapPathToMenus(route.path, menuList);
});
</script>

<style lang="scss" scoped>
.crumbs {
}
</style>
