<template>
  <div class="user-modal">
    <!-- 添加/修改用户窗口 -->
    <el-dialog
      :title="isUpdate ? '修改用户' : '新建用户'"
      center
      width="30%"
      v-model="dialogFormVisible"
      @closed="handleClose"
    >
      <el-form
        :model="userInfo"
        label-width="80"
        size="large"
        ref="addUSerFormRef"
      >
        <el-form-item label="用户名" prop="name">
          <el-input v-model="userInfo.name" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label="真实姓名" prop="realname">
          <el-input v-model="userInfo.realname" placeholder="请输入真实姓名" />
        </el-form-item>
        <el-form-item label="密码" prop="password" v-if="!isUpdate">
          <el-input v-model="userInfo.password" placeholder="请输入密码" />
        </el-form-item>
        <el-form-item label="电话号码" prop="cellphone">
          <el-input v-model="userInfo.cellphone" placeholder="请输入电话号码" />
        </el-form-item>
        <el-form-item label="选择角色" prop="roleId">
          <el-select
            v-model="userInfo.roleId"
            style="width: 100%"
            placeholder="请选择角色"
          >
            <el-option
              v-for="item in roleList"
              :label="item.name"
              :value="item.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="选择部门" prop="departmentId">
          <el-select
            v-model="userInfo.departmentId"
            style="width: 100%"
            placeholder="请选择部门"
          >
            <el-option
              v-for="item in departmentList"
              :label="item.name"
              :value="item.id"
            />
          </el-select>
        </el-form-item>
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
import { defineProps, ref, reactive, defineEmits } from "vue";
import useSystemStore from "@/store/main/system";
import { storeToRefs } from "pinia";
import type { FormInstance, FormRules } from "element-plus";
const userInfo = reactive<any>({
  name: "",
  realname: "",
  password: "",
  cellphone: "",
  roleId: "",
  departmentId: "",
  id: "",
});

let dialogFormVisible = ref(false);
const systemStore = useSystemStore();
// 获取角色列表
systemStore.getRoleList();
// 获取部门列表
systemStore.getDepartmentList();
// 结构出部门列表与角色列表
const { roleList, departmentList } = storeToRefs(systemStore);
// 标识当前是否是修改数据
let isUpdate = ref(false);
// 打开对话框
function openDialog(updateInfo) {
  if (updateInfo) {
    isUpdate.value = true;
    for (let key in userInfo) {
      userInfo[key] = updateInfo[key];
    }
  } else {
    isUpdate.value = false;
  }
  dialogFormVisible.value = true;
}
// 获取表单
const addUSerFormRef = ref<FormInstance>();

// 重置表单
function resetForm() {
  addUSerFormRef.value?.resetFields();
}

// 对话框关闭的回调
function handleClose() {
  resetForm();
}

// 确定添加/修改
function enterAddUser() {
  if (
    userInfo.name &&
    userInfo.realname &&
    userInfo.roleId &&
    userInfo.departmentId
  ) {
    if (isUpdate) {
      systemStore.updateUser(userInfo.id, userInfo).then((res) => {
        ElMessage.success("修改成功!");
        dialogFormVisible.value = false;
        systemStore.getUserList();
      });
    } else if (userInfo.password) {
      systemStore.addUser(userInfo).then((res) => {
        ElMessage.success("添加成功！");
        dialogFormVisible.value = false;
        systemStore.getUserList();
      });
    } else {
      return ElMessage.warning("请填写完整信息后再修改");
    }
  } else {
    return ElMessage.warning("请填写完整信息后再修改");
  }
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
