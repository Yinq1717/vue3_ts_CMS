<template>
  <div class="login-panel">
    <h2 class="title">后台管理系统</h2>
    <el-tabs stretch type="border-card" v-model="loginMode" class="demo-tabs">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><UserFilled /></el-icon>
            <span>账号登陆</span>
          </span>
        </template>
        <el-form :model="accountForm" size="large">
          <el-form-item label="账号">
            <el-input v-model="accountForm.username" />
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="accountForm.password" type="password" />
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <el-form :model="phoneForm" size="large">
          <el-form-item label="手机号">
            <el-input v-model="phoneForm.phone" />
          </el-form-item>
          <el-form-item label="验证码" class="code">
            <el-input v-model="phoneForm.code" class="code-input" />
            <el-button class="code-btn" type="primary">获取验证码</el-button>
          </el-form-item>
        </el-form>
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
import { reactive, ref } from "vue";

// 收集当前处于什么登陆模式
let loginMode = ref("account");

// 账号登录表单
const accountForm = reactive({
  username: "coderwhy",
  password: 123456,
});

// 手机登录表单
const phoneForm = reactive({
  phone: 19173130947,
  code: 186359,
});

// 是否记住密码
let isRmbPwd = ref(true);

// 登录按钮的点击回调
function handlerLogin() {
  if (loginMode.value === "account") {
    console.log(loginMode.value);
  } else {
    console.log(loginMode.value);
  }
}
</script>

<style lang="scss" scoped>
.login-panel {
  //  border: 1px solid red;
  width: 320px;
  height: 300px;
  padding: 40px;
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
    .code {
      // border: 1px solid red;

      .code-input {
        width: 50%;
        margin-right: 7px;
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
