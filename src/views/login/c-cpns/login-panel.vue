<template>
  <div class="login-panel">
    <h2 class="title">后台管理系统</h2>
    <el-tabs
      stretch
      type="border-card"
      v-model="loginMode"
      class="demo-tabs"
      @tab-change="handlerTabChange"
    >
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><UserFilled /></el-icon>
            <span>帐号登陆</span>
          </span>
        </template>
        <panel-account ref="refAccount"></panel-account>
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <panel-phone ref="refPhone"></panel-phone>
      </el-tab-pane>
    </el-tabs>
    <div class="controls">
      <el-checkbox
        v-model="isRmbPwd"
        label="记住密码"
        color="red"
        size="small"
      ></el-checkbox>

      <el-link type="primary" :underline="false" style="font-size: 12px"
        >忘记密码</el-link
      >
    </div>
    <div class="login-btn">
      <el-button type="primary" size="large" @click="handlerLogin"
        >立即登录</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { localCache } from "@/utils/cache";
import { reactive, ref } from "vue";
import panelAccount from "./panel-account.vue";
import panelPhone from "./panel-phone.vue";

// 收集当前处于什么登陆模式
let loginMode = ref("account");

let isRmbPwd = ref(true); // 是否记住密码

const refAccount = ref<InstanceType<typeof panelAccount>>(); // 获取到帐号组件
const refPhone = ref<InstanceType<typeof panelPhone>>(); // 获取到手机组件

// 登录按钮的点击回调
function handlerLogin() {
  if (loginMode.value === "account") {
    //   通知子组件进行登录
    refAccount.value?.loginAction();
    //  保存密码
    if (isRmbPwd.value) {
      refAccount.value?.savePassword();
    } else {
      //  清除密码
      localCache.removeCache("password");
    }
  } else {
    refPhone.value?.loginAction();
  }
}

// tabs切换的回调
function handlerTabChange() {
  refAccount.value?.clearValidate();
  refPhone.value?.clearValidate();
}
</script>

<style lang="scss" scoped>
.login-panel {
  //  border: 1px solid red;
  width: 320px;
  height: 300px;
  padding: 20px 40px 40px;
  //   border: 1px solid red;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 0 20px #000;
  .title {
    text-align: center;
    margin-bottom: 20px;
  }
  .demo-tabs {
    .custom-tabs-label {
      .el-icon {
        vertical-align: middle;
      }
      span {
        vertical-align: middle;
        margin-left: 4px;
      }
    }
  }
  .controls {
    //  border: 1px solid red;
    //  padding: 0 10px;
    margin: 6px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .login-btn {
    //  margin-top: 10px;
    width: 100%;
    margin: 0 auto;
    .el-button {
      width: 100%;
    }
  }
}
</style>
