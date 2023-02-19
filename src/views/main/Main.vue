<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isFold ? '66px' : '200px'"
        ><main-menu :is-collapse="isFold"></main-menu
      ></el-aside>
      <el-container>
        <el-header height="50px"
          ><main-header @switch-menu="handleSwitchMenu"></main-header
        ></el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import useLoginStore from "@/store/login/login";
import router from "@/router";
import { localCache } from "@/utils/cache";
import { LOGIN_TOKEN } from "@/global/contansts";
import { ref } from "vue";
const loginStore = useLoginStore();

// 退出登录
function logout() {
  router.push("/login");
  ElMessage.success("成功退出登录");
  localCache.removeCache(LOGIN_TOKEN);
  loginStore.token = "";
}

const isFold = ref<boolean>(false);

function handleSwitchMenu(flag: boolean) {
  isFold.value = flag;
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
      transition: width 0.3s;
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
      padding: 20px;
    }
  }
}
</style>
