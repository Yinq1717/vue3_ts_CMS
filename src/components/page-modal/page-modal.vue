<template>
  <div class="user-modal">
    <!-- 添加/修改用户窗口 -->
    <el-dialog
      :title="isUpdate ? '修改' : '新建' + modalConfig.title"
      center
      width="30%"
      v-model="dialogFormVisible"
    >
      <el-form :model="formData" label-width="80" size="large" ref="addFormRef">
        <template v-for="item in modalConfig.formItem" :key="item.prop">
          <el-form-item
            :label="item.label"
            :prop="item.prop"
            v-if="!isUpdate || (isUpdate && !item.onlyAdd)"
          >
            <template v-if="item.type === 'custom'">
              <slot :name="item.prop" :item="item" :formData="formData"></slot>
            </template>
            <template v-else-if="item.type === 'input'">
              <el-input
                v-model.lazy="formData[item.prop]"
                :placeholder="item.placeholder"
              />
            </template>
            <template v-else-if="item.type === 'select'">
              <el-select
                v-model="formData[item.prop]"
                style="width: 100%"
                :placeholder="item.placeholder"
              >
                <el-option
                  v-for="option in item.options"
                  :label="option.name"
                  :value="option.id"
                />
              </el-select>
            </template>
          </el-form-item>
        </template>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" size="large" @click="enterAddUser">
            确定
          </el-button>
          <el-button size="large" @click="dialogFormVisible = false"
            >取消</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import type { FormInstance } from "element-plus";
import useSystemStore from "@/store/main/system";
import clearObject from "@/utils/clear-object";
import useMainStore from "@/store/main/main";

//   if (token) {
//   }
interface IProps {
  modalConfig: {
    title: string;
    pageName: string;
    formItem: any[];
  };
}

const prop = defineProps<IProps>();
const pageName = prop.modalConfig.pageName;
const formData = reactive<any>({});
prop.modalConfig.formItem.forEach((item) => {
  formData[item.prop] = item.initValue ?? "";
});

let dialogFormVisible = ref(false);
const systemStore = useSystemStore();

// 标识当前是否是修改数据
let isUpdate = ref(false);
const mainStore = useMainStore();
// 打开对话框
function openDialog(updateInfo: any) {
  clearObject(formData);
  if (updateInfo) {
    console.log("修改模式");
    isUpdate.value = true;
    formData.id = updateInfo.id;
    for (let key in formData) {
      formData[key] = updateInfo[key];
    }
    //  找到空属性
    const emptyAttrObj = prop.modalConfig.formItem.find((item) => item.onlyAdd);
    if (emptyAttrObj) {
      // 删除空属性
      delete formData[emptyAttrObj.prop];
    }
  } else {
    if ("id" in formData) delete formData.id;
    isUpdate.value = false;
  }
  dialogFormVisible.value = true;
}
// 获取表单
const addFormRef = ref<FormInstance>();

// 重置表单
function resetForm() {
  console.log("重置表单");
  addFormRef.value?.resetFields();
}

// 确定添加/修改
function enterAddUser() {
  // 判断是否输入完整
  if (
    Object.values(formData).some((item) => {
      return (
        (typeof item === "object" &&
          Object.keys(item as object).length === 0) ||
        !item
      );
    })
  ) {
    return ElMessage.warning("请补全信息后在保存!");
  }
  if (isUpdate.value) {
    systemStore.updatePageAction(pageName, formData.id, formData);
  } else {
    systemStore.addPageAction(pageName, formData);
  }
  dialogFormVisible.value = false;
}

defineExpose({
  openDialog,
});
</script>

<style lang="scss" scoped>
:deep(.el-dialog__body) {
  //   border: 1px solid red;
  padding: 10px 40px 0;
  //   background-color: #baf;
}
</style>
