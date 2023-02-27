<template>
   <div class="page-content">
      <el-card>
         <template #header>
            <div class="card-header">
               <h1>{{ contentConfig.title }}列表</h1>
               <el-button size="large" type="primary" @click="handleAddClick" v-if="hasCreateAuth"
                  >添加{{ contentConfig.title }}
               </el-button>
            </div>
         </template>
         <el-table :data="pageList" style="width: 100%" row-key="id" border size="large">
            <template v-for="item in contentConfig.tableProps">
               <template v-if="item.type === 'custom'">
                  <el-table-column v-bind="item" align="center">
                     <template #default="scope">
                        <slot :name="item.slotName || item.prop" v-bind="scope"> </slot>
                     </template>
                  </el-table-column>
               </template>
               <template v-else-if="item.type === 'handle'">
                  <el-table-column prop="" label="操作" width="180" align="center">
                     <template #default="{ row }">
                        <el-button
                           class="btn-action"
                           type="success"
                           text
                           icon="edit"
                           @click="handleUpdateClick(row)"
                           v-if="hasUpdateAuth"
                           >编辑</el-button
                        >
                        <el-button
                           class="btn-action"
                           type="danger"
                           text
                           icon="delete"
                           @click="handleDeleteClick(row)"
                           v-if="hasDeleteAuth"
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
               :page-sizes="[5, 10, 20]"
               v-model:page-size="pageSize"
               v-model:current-page="currPage"
            />
         </div>
      </el-card>
   </div>
</template>

<script setup lang="ts">
import { formatUTC } from "@/utils/time-format";
import { ref, watch, onMounted } from "vue";
import { storeToRefs } from "pinia";
import useSystemStore from "@/store/main/system";
import { usePermissions } from "@/hooks/usePermissions";

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

// 获取当前页面的名称
const pageName = props.contentConfig.pageName;
// 获取按钮权限
const hasCreateAuth = usePermissions(pageName, "create");
const hasDeleteAuth = usePermissions(pageName, "delete");
const hasUpdateAuth = usePermissions(pageName, "update");
const hasQueryAuth = usePermissions(pageName, "query");
// console.log(hasQueryAuth);
// 获取列表数据
function getPageList(queryInfo: any = {}) {
   // 没有查询权限直接return
   if (!hasQueryAuth && pageName !== "story") return;
   const size = pageSize.value;
   const offset = (currPage.value - 1) * size;
   systemStore.getPageListAction(pageName, {
      size,
      offset,
      ...queryInfo,
   });
}

const systemStore = useSystemStore();
// 监听调用actions事件
systemStore.$onAction(({ name, after }) => {
   after(() => {
      //   添加数据时回到第一页
      if (name === "addPageAction") {
         currPage.value = 1;
      }
   });
});
onMounted(() => {
   getPageList();
});
// 结构出store中的数据(响应式的)
const { pageList, pageCount } = storeToRefs(systemStore);
// 删除按钮的回调
function handleDeleteClick(row: any) {
   systemStore.deletePageAction(pageName, row.id);
}

// 监听pageSize与currPage的改变,重新获取数据
watch([pageSize, currPage], () => {
   getPageList();
});

const emits = defineEmits(["addPageEvent", "updatePageEvent"]);
// 添加按钮的回调
function handleAddClick() {
   emits("addPageEvent");
}
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
