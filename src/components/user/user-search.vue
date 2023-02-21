<template>
  <div class="user-search">
    <el-card>
      <el-form
        class="demo-form-inline"
        size="large"
        label-width="80"
        label-position="left"
        :model="searchForm"
        ref="formRef"
      >
        <!-- 第一行 -->
        <el-row :gutter="80">
          <el-col :span="8">
            <el-form-item label="用户名" prop="name">
              <el-input placeholder="请输入用户名" v-model="searchForm.name" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="真实姓名" prop="realname">
              <el-input
                placeholder="请输入真实姓名"
                v-model="searchForm.realname"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="手机号码" prop="cellphone">
              <el-input
                placeholder="请输入手机号码"
                v-model="searchForm.cellphone"
              />
            </el-form-item>
          </el-col>

          <!-- 第二行 -->
          <el-col :span="8">
            <el-form-item label="状态" prop="enable">
              <el-select
                placeholder="请选择状态"
                style="width: 100%"
                v-model="searchForm.enable"
              >
                <el-option label="启用" :value="1" />
                <el-option label="禁用" :value="0" />
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item label="创建时间" prop="createAt">
              <el-date-picker
                type="daterange"
                unlink-panels
                v-model="searchForm.createAt"
                range-separator="-"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
              />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row justify="end">
          <el-button type="primary" icon="search" @click="queryClick"
            >查询</el-button
          >

          <el-button icon="refresh" @click="resetClick">重置</el-button>
        </el-row>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, defineEmits } from "vue";
import type { ElForm } from "element-plus";

const emits = defineEmits(["queryUser", "resetForm"]);
const formRef = ref<InstanceType<typeof ElForm>>();
const searchForm = reactive({
  name: "",
  realname: "",
  cellphone: "",
  enable: "",
  createAt: "",
});

// 查询用户
function queryClick() {
  emits("queryUser", searchForm);
}

// 重置表单
function resetClick() {
  formRef.value?.resetFields();
  emits("resetForm");
}
</script>

<style lang="scss" scoped>
.user-search {
  .el-card {
    padding: 10px 50px;
  }
}
</style>
