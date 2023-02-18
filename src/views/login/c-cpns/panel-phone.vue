<template>
  <div class="">
    <el-form
      :model="phoneForm"
      size="large"
      :rules="rules"
      label-width="70px"
      label-position="left"
      ref="ruleFormRef"
    >
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="phoneForm.phone" placeholder="请输入手机号" />
      </el-form-item>
      <el-form-item label="验证码" class="code">
        <div class="code-containner">
          <el-input v-model="phoneForm.code" class="code-input" />
          <el-button
            class="code-btn"
            type="primary"
            :disabled="!phoneForm.phone"
            @click="getCode"
            >获取验证码</el-button
          >
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";

// 手机登录表单
const phoneForm = reactive({
  phone: "",
  code: "",
});

// 自定义表单验证
function validatePhone(rule: any, value: any, callback: any) {
  let re = /^1[3456789]{1}\d{9}$/;
  if (re.test(value)) {
    callback();
  } else {
    callback(new Error("请输入正确的手机号"));
  }
}

// 表单验证规则
const rules: FormRules = {
  phone: [{ validator: validatePhone, trigger: "blur" }],
};

// 获取表单组件
const ruleFormRef = ref<FormInstance>();

// 获取验证码
function getCode() {
  if (!ruleFormRef.value) return;
  ruleFormRef.value.validate((valid) => {
    if (valid) {
      // ElMessage.success("该功能正在开发中喔");
      phoneForm.code = "666666";
    } else {
      return false;
    }
  });
}

// 登录行为
function loginAction() {
  if (!ruleFormRef.value) return;
  ruleFormRef.value.validate((valid) => {
    if (valid) {
      ElMessage.success("该功能正在开发中喔");
    } else {
      ElMessage.error("请规范输入后重新登陆!");
      return false;
    }
  });
}

// 清除表单验证
function clearValidate() {
  ruleFormRef.value?.clearValidate();
}

defineExpose({
  clearValidate,
  loginAction,
});
</script>

<style lang="scss" scoped>
.code {
  // border: 1px solid red;

  .code-containner {
    display: flex;
    .code-btn {
      margin-left: 6px;
    }
  }
}
</style>
