<template>
  <el-form
    ref="ruleFormRef"
    :model="accountForm"
    size="large"
    :rules="rules"
    label-width="50px"
  >
    <el-form-item label="帐号" prop="name">
      <el-input v-model="accountForm.name" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="accountForm.password" type="password" show-password />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import useLoginStore from "@/store/login/login";
import type { IAccount } from "@/types";
import { localCache } from "@/utils/cache";

const ruleFormRef = ref<FormInstance>();
// 账号登录表单
const accountForm = reactive<IAccount>({
  name: "coderwhy",
  password: localCache.getCache("password"),
});

// 表单验证规则
const rules = reactive<FormRules>({
  name: [
    { required: true, message: "请输入帐号！", trigger: "blur" },
    {
      pattern: /^[a-z0-9]{6,10}$/,
      message: "必须是6~10位数字或者字母组成",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码！",
      trigger: "blur",
    },
    {
      pattern: /^[a-z0-9]{4,10}$/,
      message: "密码应在4~10位之间",
      trigger: "change",
    },
  ],
});

const loginStore = useLoginStore();

// 登录行为
function loginAction() {
  if (!ruleFormRef.value) return;
  ruleFormRef.value.validate((valid) => {
    if (valid) {
      //  获取到用户帐号与密码
      const name = accountForm.name;
      const password = accountForm.password;
      // 调用store的方法发请求登录
      loginStore.accountLoginAction({ name, password });
    } else {
      ElMessage.error("请规范输入后重新登陆!");
    }
  });
}

// 清除表单验证
function clearValidate() {
  ruleFormRef.value?.clearValidate();
}

// 记住密码
function savePassword() {
  //   console.log("test");
  if (accountForm.password) {
    //   已保存密码
    localCache.setCache("password", accountForm.password);
  }
}

defineExpose({
  loginAction,
  clearValidate,
  savePassword,
});
</script>

<style lang="scss" scoped></style>
