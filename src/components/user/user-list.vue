<template>
  <div class="user-list">
    <el-card>
      <template #header>
        <div class="card-header">
          <h1>用户列表</h1>
          <el-button size="large" type="primary" @click="handleAddUserClick"
            >添加用户</el-button
          >
        </div>
      </template>
      <el-table :data="userList" style="width: 100%" border size="large">
        <el-table-column type="selection" />
        <el-table-column type="index" label="序号" width="70" align="center" />
        <el-table-column
          prop="name"
          label="用户名"
          width="120"
          align="center"
        />
        <el-table-column
          prop="realname"
          label="真实姓名"
          width="120"
          align="center"
        />
        <el-table-column
          prop="cellphone"
          label="手机号码"
          width="130"
          align="center"
        />
        <el-table-column prop="enable" label="状态" width="100" align="center">
          <template #default="{ row }">
            <el-button plain :type="row.enable === 1 ? 'primary' : 'danger'"
              >{{ row.enable === 1 ? "启用" : "禁用" }}
            </el-button></template
          >
        </el-table-column>
        <el-table-column prop="createAt" label="创建时间" align="center">
          <template #default="{ row }">
            {{ formatUTC(row.createAt) }}
          </template>
        </el-table-column>
        <el-table-column prop="updateAt" label="更新时间" align="center">
          <template #default="{ row }">
            {{ formatUTC(row.updateAt) }}
          </template>
        </el-table-column>
        <el-table-column prop="" label="操作" width="160" align="center">
          <template #default="{ row }">
            <el-button
              class="btn-action"
              type="success"
              text
              icon="edit"
              @click="handleUpdateUserClick(row)"
              >编辑</el-button
            >
            <el-button
              class="btn-action"
              type="danger"
              text
              icon="delete"
              @click="handleDeleteUser(row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页器 -->
      <div class="pagination">
        <el-pagination
          layout="total, sizes, prev, pager, next, jumper"
          :total="userCount"
          :page-sizes="[3, 5, 10]"
          v-model:page-size="pageSize"
          v-model:current-page="currPage"
          @current-change="getUserList"
          @size-change="getUserList"
        />
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import { storeToRefs } from "pinia";
import useSystemStore from "@/store/main/system";
import { formatUTC } from "@/utils/time-format";
import type { ElDialog } from "element-plus";

let currPage = ref(1);
let pageSize = ref(5);
const systemStore = useSystemStore();

// 获取用户列表
function getUserList(queryInfo: any = {}) {
  const size = pageSize.value;
  const offset = (currPage.value - 1) * size;

  systemStore.getUserList({ size, offset, ...queryInfo });
}
getUserList();

// 结构出store中的数据(响应式的)
const { userList, userCount } = storeToRefs(systemStore);

// 删除按钮的回调
function handleDeleteUser(row: any) {
  systemStore.deleteUser(row.id);
}

// let dialogFormVisible = ref(true);
const emits = defineEmits(["addUserEvent", "updateUserEvent"]);

// 添加按钮的回调
function handleAddUserClick() {
  //   console.log(dialogRef);
  emits("addUserEvent");
}

// 编辑按钮的回调
function handleUpdateUserClick(row: any) {
  emits("updateUserEvent", row);
}

defineExpose({
  getUserList,
});
</script>

<style lang="scss" scoped>
.user-list {
  margin-top: 10px;
  .el-card {
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .el-table {
      // border: 1px solid red;
      .btn-action {
        padding: 0;
        margin: 0 7px;
        //   border: 1px solid red;
      }
    }
    .pagination {
      // border: 1px solid red;
      text-align: center;
      margin-top: 20px;
      .el-pagination {
        //   border: 1px solid red;
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>
