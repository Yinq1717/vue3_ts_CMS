<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside width="200px"><main-menu></main-menu></el-aside>
      <el-container>
        <el-header height="50px"
          ><main-header></main-header
          ><button @click="logout">退出登录</button></el-header
        >
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import useLoginStore from "@/store/login/login";
import router from "@/router";
import { localCache } from "@/utils/cache";
import { LOGIN_TOKEN } from "@/global/contansts";

const loginStore = useLoginStore();

// 退出登录
function logout() {
  router.push("/login");
  ElMessage.success("成功退出登录");
  localCache.removeCache(LOGIN_TOKEN);
  loginStore.token = "";
}
</script>

<style lang="scss" scoped>
.main {
  .main-content {
    height: 100vh;
    .el-aside {
      // border: 1px solid red;
      background-color: #3f5468;
      overflow-x: hidden;
      scrollbar-width: 0; /* firefox */
      -ms-overflow-style: none;
      &::-webkit-scrollbar {
        display: none;
      }
    }
    .el-header {
      // border: 1px solid red;
      background-color: #fff;
      display: flex;
      align-items: center;
    }
    .el-main {
      background-color: #ddd;
      padding: 50px;
    }
  }
}
</style>
