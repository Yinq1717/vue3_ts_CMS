<template>
   <div class="goods">
      <page-search
         :search-config="searchConfig"
         @queryEvent="handleQuery"
         @resetFormEvent="handleResetForm"
      ></page-search>
      <page-content
         :content-config="contentConfig"
         ref="contentRef"
         @addPageEvent="handleAddEvent"
         @updatePageEvent="handleUpdateEvent"
      >
         <!-- 插槽-商品名称 -->
         <template #name="{ row }">
            <el-tooltip :content="row.desc" placement="top">
               <div class="goods-name">
                  <span>{{ row.name }} </span>
               </div>
            </el-tooltip>
         </template>
         <template #newPrice="{ row }">
            <div>￥{{ Number(row.newPrice).toFixed(2) }}</div>
         </template>

         <!-- 插槽-商品描述 -->
         <template #desc="{ row }">
            <el-tooltip :content="row.desc" placement="top">
               <div class="goods-desc">
                  <span>{{ row.desc }}</span>
               </div>
            </el-tooltip>
         </template>

         <!-- 插槽-图片 -->
         <template #imgUrl="{ row }">
            <img :src="row.imgUrl" alt="" style="width: 50%" />
         </template>

         <!-- 插槽-状态 -->
         <template #status="{ row }">
            <el-button v-if="row.status === 1" type="success" plain>上架</el-button>
            <el-button v-else type="danger" plain>下架</el-button>
         </template>
      </page-content>
      <page-modal :modal-config="modalConfig" ref="modalRef"></page-modal>
   </div>
</template>

<script setup lang="ts">
import pageSearch from "@/components/page-search/page-search.vue";
import pageContent from "@/components/page-content/page-content.vue";
import pageModal from "@/components/page-modal/page-modal.vue";

import searchConfig from "./config/search.config";
import contentConfig from "./config/content.config";
import modalConfig from "./config/modal.config";

import usePageContentHook from "@/hooks/usePageContentHook";
import usePageModalHook from "@/hooks/usePageModalHook";
const { modalRef, handleAddEvent, handleUpdateEvent } = usePageModalHook();
const { contentRef, handleQuery, handleResetForm } = usePageContentHook();
</script>

<style lang="scss" scoped>
.goods {
   .goods-name,
   .goods-desc {
      text-overflow: ellipsis;
      overflow: hidden;
      span {
         white-space: nowrap;
      }
   }
}
</style>
