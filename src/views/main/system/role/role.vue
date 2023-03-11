<template>
   <div class="role">
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
      </page-content>
      <page-modal ref="modalRef" :modal-config="modalConfig">
         <template #menuList="{ formData }">
            <el-tree
               :data="menuList"
               ref="treeRef"
               :props="{ label: 'name' }"
               node-key="id"
               show-checkbox
               :default-checked-keys="defaultCheckIdList"
               @check="(...event) => handleTreeCheck(event, formData)"
            /> </template
      ></page-modal>
   </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { ref, nextTick } from "vue";
import type { ElTree } from "element-plus";

import useMainStore from "@/store/main/main";
import { mapMenuToCheckIds } from "@/utils/map-menu";

import PageSearch from "@/components/page-search/page-search.vue";
import PageContent from "@/components/page-content/page-content.vue";
import PageModal from "@/components/page-modal/page-modal.vue";

import searchConfig from "./config/search.config";
import contentConfig from "./config/content.config";
import modalConfig from "./config/modal.config";

import usePageModalHook from "@/hooks/usePageModalHook";
import usePageContentHook from "@/hooks/usePageContentHook";
const { modalRef, handleAddEvent, handleUpdateEvent } = usePageModalHook(Cb);
const { contentRef, handleQuery, handleResetForm } = usePageContentHook();

// 获得菜单列表数据
const mainStore = useMainStore();
const { menuList } = storeToRefs(mainStore);

// 更新事件hook的回调,设置默认选中的tree
const treeRef = ref<InstanceType<typeof ElTree>>(); //获取到tree组件
let defaultCheckIdList: number[] = [];
function Cb(formData?: any) {
   defaultCheckIdList = []; //清除上次选择的节点记录
   if (formData) {
      //   遍历菜单列表,将id添加到默认选中的id数组中
      defaultCheckIdList = mapMenuToCheckIds(formData.menuList);
   }
   // 设置默认选择的tree节点
   nextTick(() => {
      treeRef.value?.setCheckedKeys(defaultCheckIdList);
   });
}

// 处理树节点点击事件
function handleTreeCheck(events, formData) {
   const { checkedKeys, halfCheckedKeys } = events[1];
   formData.menuList = [...checkedKeys, ...halfCheckedKeys];
   //   formData.menuList = [...checkedKeys];
}
</script>

<style lang="scss" scoped></style>
