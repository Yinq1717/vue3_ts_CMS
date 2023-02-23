<template>
  <div class="page-content">
    <el-card>
      <template #header>
        <div class="card-header">
          <h1>{{ contentConfig.title }}列表</h1>
          <el-button size="large" type="primary" @click="handleAddClick"
            >添加{{ contentConfig.title }}
          </el-button>
        </div>
      </template>
      <el-table
        :data="pageList"
        style="width: 100%"
        row-key="id"
        border
        size="large"
      >
        <template v-for="item in contentConfig.tableProps">
          <template v-if="item.type === 'custom'">
            <el-table-column v-bind="item" align="center">
              <template #default="scope">
                <slot :name="item.slotName" v-bind="scope"> </slot>
              </template>
            </el-table-column>
          </template>
          <template v-else-if="item.type === 'handle'">
            <el-table-column prop="" label="操作" width="160" align="center">
              <template #default="{ row }">
                <el-button
                  class="btn-action"
                  type="success"
                  text
                  icon="edit"
                  @click="handleUpdateClick(row)"
                  >编辑</el-button
                >
                <el-button
                  class="btn-action"
                  type="danger"
                  text
                  icon="delete"
                  @click="handleDeleteClick(row)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </template>
          <template v-else-if="item.type === 'time'">
            <el-table-column v-bind="item" align="center">
              <template #default="{ row }">
                {{ formatUTC(row[item.prop]) }}
              </template>
            </el-table-column>
          </template>
          <template v-else>
            <el-table-column v-bind="item" align="center" />
          </template>
        </template>
      </el-table>

      <!-- 分页器 -->
      <div class="pagination" v-if="!contentConfig.noPagination">
        <el-pagination
          layout="total, sizes, prev, pager, next, jumper"
          :total="pageCount"
          :page-sizes="[3, 5, 10]"
          v-model:page-size="pageSize"
          v-model:current-page="currPage"
        />
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { formatUTC } from "@/utils/time-format";
import { ref, defineProps, watch } from "vue";
import { storeToRefs } from "pinia";
import useSystemStore from "@/store/main/system";

interface IProps {
  contentConfig: {
    title: string;
    pageName: string;
    noPagination?: boolean;
    tableProps?: any[];
  };
}

const props = defineProps<IProps>();
let currPage = ref(1);
let pageSize = ref(10);
const systemStore = useSystemStore();

// 获取当前页面的名称
const pageName = props.contentConfig.pageName;
// 获取列表数据
function getPageList(queryInfo: any = {}) {
  const size = pageSize.value;
  const offset = (currPage.value - 1) * size;

  systemStore.getPageListAction(pageName, {
    size,
    offset,
    ...queryInfo,
  });
}
getPageList();

// 结构出store中的数据(响应式的)
const { pageList, pageCount } = storeToRefs(systemStore);

// 删除按钮的回调
function handleDeleteClick(row: any) {
  systemStore.deletePageAction(pageName, row.id);
}

const emits = defineEmits(["addPageEvent", "updatePageEvent"]);

// 添加按钮的回调
function handleAddClick() {
  emits("addPageEvent");
}

// 监听pageSize与currPage的改变,重新获取数据
watch([pageSize, currPage], () => {
  getPageList();
});

// 编辑按钮的回调
function handleUpdateClick(row: any) {
  emits("updatePageEvent", row);
}

defineExpose({
  getPageList,
});
</script>

<style lang="scss" scoped>
.page-content {
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
