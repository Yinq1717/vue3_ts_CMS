<template>
  <div class="user">
    <div class="search-container">
      <user-search
        @queryUser="handleQueryUser"
        @resetForm="handleResetForm"
      ></user-search>
    </div>
    <div class="list-container">
      <user-list
        ref="userListRef"
        @addUserEvent="handleAddUserEmit"
        @updateUserEvent="handleUpdateUserEmit"
      ></user-list>
    </div>
    <!-- dialog -->
    <user-modal ref="dialogRef"></user-modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import UserList from "@/components/user/user-list.vue";
// 处理子组件的搜索点击事件
const userListRef = ref<InstanceType<typeof UserList>>();

// 获取对话框
const dialogRef = ref();

function handleQueryUser(searchForm) {
  userListRef.value?.getUserList(searchForm);
}

function handleResetForm() {
  userListRef.value?.getUserList();
}

// 处理子组件添加用户的事件
function handleAddUserEmit() {
  dialogRef.value?.openDialog();
}

// 处理子组件修改用户的事件
function handleUpdateUserEmit(userInfo) {
  dialogRef.value?.openDialog(userInfo);
}
</script>

<style lang="scss" scoped></style>
