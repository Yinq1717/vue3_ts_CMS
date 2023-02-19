<template>
  <div class="main-header">
    <div class="header-icon" @click.prevent="handleFold">
      <el-icon size="28" color="#333">
        <component :is="isFold ? 'Fold' : 'Expand'"></component>
      </el-icon>
    </div>
    <div class="header-content">
      <div class="crumbs">系统总览</div>
      <div class="info-container">
        <el-icon size="20" color="#333"><Bell /></el-icon>
        <el-icon size="20" color="#333"><ChatDotRound /></el-icon>
        <el-icon size="20" color="#333"><Postcard /></el-icon>
        <div class="avatar-container">
          <img class="avatar" src="@/assets/image/avatar2.jpg" />
          <div class="name-dropdown">
            <el-dropdown>
              <span class="el-dropdown-link">
                {{ userInfo.name }}
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="logout">
                    <el-icon><SwitchButton /></el-icon>
                    <span>退出系统</span>
                  </el-dropdown-item>
                  <el-dropdown-item divided
                    ><el-icon><User /></el-icon
                    ><span>个人信息</span></el-dropdown-item
                  >
                  <el-dropdown-item
                    ><el-icon><Unlock /></el-icon
                    ><span>修改密码</span></el-dropdown-item
                  >
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LOGIN_TOKEN } from "@/global/contansts";
import router from "@/router";
import useLoginStore from "@/store/login/login";
import { localCache } from "@/utils/cache";
import { ref, defineEmits } from "vue";

const emit = defineEmits(["switchMenu"]);

let isFold = ref(false);

const loginStore = useLoginStore();
const userInfo = loginStore.userInfo;

function handleFold() {
  isFold.value = !isFold.value;
  emit("switchMenu", isFold.value);
}

function logout() {
  router.push("/login");
  localCache.removeCache("userInfo");
  localCache.removeCache(LOGIN_TOKEN);
  localCache.removeCache("menuList");
}
</script>

<style lang="scss" scoped>
.main-header {
  display: flex;
  align-items: center;
  width: 100%;
  .header-icon {
    cursor: pointer;
    //  background-color: #baf;
  }
  .header-content {
    flex-grow: 1;
    //  border: 1px solid red;
    align-items: center;
    display: flex;
    justify-content: space-between;
    .crumbs {
      font-weight: bold;
      color: #555;
      margin-left: 10px;
    }
    .info-container {
      cursor: pointer;
      :global(.el-dropdown-menu__item) {
        line-height: 30px;
        color: #333;
      }
      display: flex;
      align-items: center;
      // border: 1px solid red;
      width: 280px;
      justify-content: space-evenly;
      .avatar-container {
        display: flex;
        align-items: center;
        .avatar {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          margin-right: 10px;
        }
        .name-dropdown {
          .el-dropdown-link {
            cursor: pointer;
            color: var(--el-color-primary);
            display: flex;
            align-items: center;
            color: #666;
            font-size: 14px;
            font-family: "微软雅黑";
          }
        }
      }
    }
  }
}
</style>
