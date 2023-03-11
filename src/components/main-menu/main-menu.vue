<template>
   <div class="main-menu">
      <div class="logo">
         <img src="@/assets/image/logo.png" />
         <span class="title" v-show="!isCollapse">Blue-CMS</span>
      </div>
      <div class="menu" router>
         <el-menu
            background-color="#3f5468"
            :collapse="isCollapse"
            text-color="#ececec"
            active-text-color="#fff"
            :default-active="currPath"
            class="el-menu"
            :router="true"
         >
            <el-sub-menu :index="item.id + ''" v-for="item in menuList" :key="item.id">
               <template #title>
                  <el-icon><component :is="item.icon.split('-icon-')[1]"></component></el-icon>
                  <span>{{ item.name }} </span>
               </template>
               <el-menu-item
                  v-for="children in item.children"
                  :key="children.id"
                  :index="children.url"
                  >{{ children.name }}
               </el-menu-item>
            </el-sub-menu>
         </el-menu>
      </div>
   </div>
</template>

<script setup lang="ts">
import useLoginStore from "@/store/login/login";
import { ref, watch } from "vue";
import router from "@/router";
defineProps(["isCollapse"]);
const loginStore = useLoginStore();
const menuList = loginStore.menuList;
// 记录当前的path
const currPath = ref(menuList[0].children[0].url);

// 监听路由变化，将新的path赋值给当前的path
watch(
   () => router.currentRoute.value.fullPath,
   (newValue: any) => {
      if (newValue === "/main") {
         //  main重定向到第一个子路由
         router.push(menuList[0].children[0].url);
      } else {
         //保存当前路由信息
         currPath.value = newValue;
      }
   },
   { immediate: true },
);
</script>

<style lang="scss" scoped>
.main-menu {
   height: 100%;
   color: #fff;
   //   border: 1px solid red;
   cursor: pointer;
   .logo {
      display: flex;
      align-items: center;
      height: 50px;
      //  justify-content: center;
      img {
         height: 70%;
         margin: 0 16px;
      }
      .title {
         // color: #fff;
         white-space: nowrap;
         font-size: 20px;
         font-weight: bold;
      }
   }
   .menu {
      border: 1px solid #3f5468;
      //  background-color: #3f5468;

      width: 100%;
      .el-menu {
         // border: 1px solid red;
         &:not(.el-menu--collapse) {
            width: 200px;
            //   background-color: red;
            min-height: 400px;
         }
         .el-sub-menu {
            //   border: 1px solid red;

            .el-menu-item {
               background-color: #1d3246;
               padding-left: 48px;
               //  border: 1px solid red;
               //  border: 1px solid red;
            }
            .el-menu-item.is-active {
               background-color: #0078d4;
            }
         }
      }
   }
}
</style>
