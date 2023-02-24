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
          <template v-for="item in searchConfig.formItem" :key="item.prop">
            <el-col :span="8">
              <el-form-item :label="item.label" :prop="item.prop">
                <template v-if="item.type === 'input'">
                  <el-input
                    type="text"
                    :placeholder="item.placeholder"
                    v-model.lazy="searchForm[item.prop]"
                  />
                </template>
                <template v-if="item.type === 'date-picker'">
                  <el-date-picker
                    type="daterange"
                    start-placeholder="开始时间"
                    end-placeholder="结束时间"
                    v-model="searchForm[item.prop]"
                  ></el-date-picker>
                </template>
                <template v-if="item.type === 'select'">
                  <el-select
                    v-model="searchForm[item.prop]"
                    style="width: 100%"
                    :placeholder="item.placeholder"
                  >
                    <el-option
                      v-for="(option, index) in item.options"
                      :key="index"
                      :value="option.value"
                      :label="option.label"
                    ></el-option>
                  </el-select>
                </template>
              </el-form-item>
            </el-col>
          </template>
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
interface IProps {
  searchConfig: {
    formItem: any[];
  };
}

const props = defineProps<IProps>();

const emits = defineEmits(["queryEvent", "resetFormEvent"]);
const formRef = ref<InstanceType<typeof ElForm>>();

// 获取到父组件传入的初始化值
const initForm: any = {};

props.searchConfig.formItem.forEach((item) => {
  initForm[item.prop] = item.initValue ?? "";
});
const searchForm = reactive(initForm);

// 查询用户
function queryClick() {
  emits("queryEvent", searchForm);
}

// 重置表单
function resetClick() {
  formRef.value?.resetFields();
  emits("resetFormEvent");
}
</script>

<style lang="scss" scoped>
.user-search {
  .el-card {
    padding: 10px 50px;
  }
}
</style>
