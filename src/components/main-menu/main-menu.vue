<template>
  <div class="main-menu">
    <div class="logo">
      <img src="@/assets/image/logo.png" /><span>Bulu-CMS</span>
    </div>
    <div class="menu" router>
      <el-menu
        background-color="#3f5468"
        text-color="#ececec"
        active-text-color="#fff"
        :default-active="menuList[0].children[0].url"
      >
        <el-sub-menu
          :index="item.id + ''"
          v-for="item in menuList"
          :key="item.id"
          :show-timeout="100"
          :hide-timeout="100"
        >
          <template #title>
            <el-icon
              ><component :is="item.icon.split('-icon-')[1]"></component
            ></el-icon>
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

const loginStore = useLoginStore();
const menuList = loginStore.menuList;
console.log(menuList);
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
    justify-content: center;

    img {
      height: 70%;
      margin-right: 10px;
    }
    span {
      // color: #fff;
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
