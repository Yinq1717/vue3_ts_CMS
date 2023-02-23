<template>
  <div class="user">
    <div class="search-container">
      <page-search
        @queryEvent="handleQuery"
        @resetFormEvent="handleResetForm"
        :search-config="searchConfig"
      ></page-search>
    </div>
    <div class="list-container">
      <page-content
        ref="contentRef"
        @addPageEvent="handleAddEvent"
        @updatePageEvent="handleUpdateEvent"
        :content-config="contentConfig"
      >
        <template #enable="{ row }">
          <el-button :type="row.enable === 1 ? 'success' : 'danger'" plain
            >{{ row.enable === 1 ? "启用" : "禁用" }}
          </el-button>
        </template>
      </page-content>
    </div>
    <!-- dialog -->
    <!-- <user-modal ref="dialogRef"></user-modal> -->
    <page-modal :modal-config="modalConfig" ref="modalRef">
      <template #cellphone="{ item, formData }">
        <el-input
          v-model.number="formData[item.prop]"
          :placeholder="item.placeholder"
          type="number"
        ></el-input>
      </template>
    </page-modal>
  </div>
</template>

<script setup lang="ts">
import { formatUTC } from "@/utils/time-format";

import PageSearch from "@/components/page-search/page-search.vue";
import PageContent from "@/components/page-content/page-content.vue";
import pageModal from "@/components/page-modal/page-modal.vue";

import searchConfig from "./config/search.config";
import contentConfig from "./config/content.config";
import modalConfig from "./config/modal.config";

import usePageModalHook from "@/hooks/usePageModalHook";
import usePageContentHook from "@/hooks/usePageContentHook";
const { modalRef, handleAddEvent, handleUpdateEvent } = usePageModalHook();
const { contentRef, handleQuery, handleResetForm } = usePageContentHook();
</script>

<style lang="scss" scoped></style>
